const CLOSING_KEYWORD = "(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function repositoryParts(repository) {
  const [owner, repo, ...rest] = String(repository ?? "").split("/");
  if (!owner || !repo || rest.length > 0) {
    throw new Error(`Invalid GitHub repository: ${repository}`);
  }
  return { owner, repo };
}

function issueUrlPattern(repository) {
  const { owner, repo } = repositoryParts(repository);
  return new RegExp(
    `https://github\\.com/${escapeRegExp(owner)}/${escapeRegExp(repo)}/issues/(\\d+)`,
    "gi",
  );
}

export function issueNumberFromSourceUrl(sourceUrl, repository) {
  const match = issueUrlPattern(repository).exec(
    String(sourceUrl ?? "").trim(),
  );
  return match ? Number(match[1]) : null;
}

export function submissionChangeMayCompleteRequest(file) {
  if (!file || file.status === "removed") return false;
  if (file.status === "added") return true;

  const patch = typeof file.patch === "string" ? file.patch : "";
  if (!patch) return true;

  return patch
    .split(/\r?\n/)
    .filter(
      (line) =>
        (line.startsWith("+") || line.startsWith("-")) &&
        !line.startsWith("+++") &&
        !line.startsWith("---"),
    )
    .some(
      (line) =>
        /"(?:source_url|tags)"\s*:/.test(line) ||
        line.includes("community-request"),
    );
}

function requestDirectiveBlocks(body) {
  // Examples in comments, code, quotes, and template checklists are not claims.
  // Keep masked lines nonempty so hiding an example cannot split surrounding prose.
  const mask = (value) =>
    value
      .split(/\r?\n/)
      .map(() => "\0")
      .join("\n");
  const visibleBody = String(body ?? "")
    .replace(/<!--[\s\S]*?(?:-->|$)/g, mask)
    .replace(
      /<(pre|code|blockquote|script|style|textarea)\b[^>]*>[\s\S]*?(?:<\/\1\s*>|$)/gi,
      mask,
    );
  const blocks = [];
  let block = [];
  const finishBlock = () => {
    if (block.length) blocks.push(block);
    block = [];
  };
  let fence = null;
  let codeSpan = null;
  let quotedParagraph = false;
  for (const line of visibleBody.split(/\r?\n/)) {
    if (fence) {
      // A list marker inside a fence is literal code, never its closing delimiter.
      const marker = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
      if (
        marker &&
        marker[1][0] === fence[0] &&
        marker[1].length >= fence.length &&
        !marker[2].trim()
      ) {
        fence = null;
        finishBlock();
      }
      continue;
    }
    if (!line.trim()) {
      finishBlock();
      quotedParagraph = false;
      codeSpan = null;
      continue;
    }
    if (/^ {0,3}#{1,6}(?:[ \t]+|$)/.test(line)) {
      finishBlock();
      quotedParagraph = false;
      codeSpan = null;
      continue;
    }
    const listItem = line.match(/^ {0,3}(?:[-*+]|\d+[.)])[ \t]+/);
    if (listItem) {
      finishBlock();
      quotedParagraph = false;
    }
    const directive = listItem
      ? line.slice(listItem[0].length)
      : line.replace(/^ {0,3}/, "");
    const marker = directive.match(/^(`{3,}|~{3,})(.*)$/);
    if (marker) {
      finishBlock();
      fence = marker[1];
      quotedParagraph = false;
      codeSpan = null;
      continue;
    }
    if (directive.startsWith(">")) quotedParagraph = true;
    if (quotedParagraph || /^(?: {4}|\t)/.test(line)) {
      block.push("\0");
      continue;
    }
    const wasInCodeSpan = codeSpan !== null;
    for (const [backticks] of directive.matchAll(/`+/g)) {
      if (codeSpan === null) codeSpan = backticks;
      else if (codeSpan === backticks) codeSpan = null;
    }
    if (wasInCodeSpan || codeSpan !== null || directive.includes("`")) {
      block.push("\0");
      continue;
    }
    block.push(directive.trim());
  }
  finishBlock();
  return blocks;
}

function requestReferencesFromPullRequestBody(body, repository) {
  const closingPrefix = new RegExp(
    `^${CLOSING_KEYWORD}(?:\\s*:\\s*|\\s+)`,
    "i",
  );
  const relatedPrefix =
    /^(?:related\s+(?:pet\s+)?request(?:\s+issues?)?|request\s+issues?|相关需求|关联需求|需求\s*issue)(?:\s*[:：]\s*|\s+)/i;
  const reference = new RegExp(
    `^(?:#(\\d+)|${issueUrlPattern(repository).source})`,
    "i",
  );
  const references = [];

  function parseDirective(line) {
    const closing = line.match(closingPrefix);
    const prefix = closing ?? line.match(relatedPrefix);
    if (!prefix) return [];
    let rest = line.slice(prefix[0].length);
    let closes = Boolean(closing);
    const parsed = [];

    // Accept only a complete directive plus a reference list, never nearby prose.
    while (true) {
      const match = rest.match(reference);
      const number = Number(match?.[1] ?? match?.[2]);
      if (!match || !Number.isSafeInteger(number) || number <= 0) break;
      parsed.push({ number, closes });
      rest = rest.slice(match[0].length);
      if (/^\s*\.?\s*$/.test(rest)) {
        return parsed;
      }
      const separator = rest.match(
        /^(?:\s*[,;]\s*(?:and\s+)?|\s+(?:and|&)\s+)/i,
      );
      if (!separator) break;
      rest = rest.slice(separator[0].length);
      const nextClosing = rest.match(closingPrefix);
      closes = Boolean(nextClosing);
      if (nextClosing) rest = rest.slice(nextClosing[0].length);
    }
    return [];
  }

  for (const block of requestDirectiveBlocks(body)) {
    const parsed = block.map(parseDirective);
    // A wrapped sentence must be a claim as a whole, not just on one of its lines.
    if (parsed.every((line) => line.length > 0))
      references.push(...parsed.flat());
  }
  return references;
}

export function requestIssueNumbersFromPullRequestBody(body, repository) {
  return [
    ...new Set(
      requestReferencesFromPullRequestBody(body, repository).map(
        ({ number }) => number,
      ),
    ),
  ].sort((left, right) => left - right);
}

export function hasClosingReference(body, issueNumber, repository) {
  return requestReferencesFromPullRequestBody(body, repository).some(
    ({ number, closes }) => number === issueNumber && closes,
  );
}

export function ensureClosingReferences(body, issueNumbers, repository) {
  const normalizedBody = String(body ?? "").trimEnd();
  const missing = [...new Set(issueNumbers)]
    .filter(
      (number) => !hasClosingReference(normalizedBody, number, repository),
    )
    .sort((left, right) => left - right);

  if (missing.length === 0) return normalizedBody;
  const closingLines = missing.map((number) => `Closes #${number}`).join("\n");
  const appended = normalizedBody
    ? `${normalizedBody}\n\n${closingLines}`
    : closingLines;
  if (
    missing.every((number) => hasClosingReference(appended, number, repository))
  ) {
    return appended;
  }
  // An unfinished fence or HTML block could hide appended directives indefinitely.
  return `${closingLines}\n\n${normalizedBody}`;
}

export function withRequestStatus(labels, status) {
  return [
    ...stringLabels(labels).filter((label) => !label.startsWith("status: ")),
    `status: ${status}`,
  ];
}

function stringLabels(labels) {
  return [
    ...new Set(
      (labels ?? []).map((label) => String(label).trim()).filter(Boolean),
    ),
  ];
}

export function requestLinkComment({ issueNumber, pullNumber, pullUrl }) {
  return `<!-- pet-request-pr:${pullNumber} -->
制作 PR 已关联：[#${pullNumber}](${pullUrl})。

PR 正文已包含 \`Closes #${issueNumber}\`。合并到默认分支后，本请求会自动标记为完成并关闭。`;
}

export function requestCompletionComment({ pullNumber, pullUrl }) {
  return `<!-- pet-request-completed-by-pr:${pullNumber} -->
已由合并的 PR [#${pullNumber}](${pullUrl}) 完成。请求状态已同步为 \`status: completed\`。`;
}

export function requestCommitCompletionComment({ commitSha, commitUrl }) {
  const shortSha = commitSha.slice(0, 7);
  return `<!-- pet-request-completed-by-commit:${commitSha} -->
已由默认分支提交 [\`${shortSha}\`](${commitUrl}) 完成。请求状态已同步为 \`status: completed\`。`;
}
