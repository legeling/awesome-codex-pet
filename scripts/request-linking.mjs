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

function requestDirectives(body) {
  // Examples in comments, code, quotes, and template checklists are not claims.
  const visibleBody = String(body ?? "").replace(
    /<!--[\s\S]*?(?:-->|$)/g,
    (comment) => comment.replace(/[^\r\n]/g, " "),
  );
  const lines = [];
  let fence = null;
  let quotedParagraph = false;
  for (const line of visibleBody.split(/\r?\n/)) {
    const directive = line.replace(/^ {0,3}(?:(?:[-*+]|\d+[.)])[ \t]+)?/, "");
    const marker = directive.match(/^(`{3,}|~{3,})(.*)$/);
    if (fence) {
      if (
        marker &&
        marker[1][0] === fence[0] &&
        marker[1].length >= fence.length &&
        !marker[2].trim()
      )
        fence = null;
      continue;
    }
    if (marker) {
      fence = marker[1];
      continue;
    }
    if (!line.trim()) quotedParagraph = false;
    if (/^ {0,3}>/.test(line)) quotedParagraph = true;
    if (quotedParagraph || /^(?: {4}|\t)/.test(line)) continue;
    lines.push(directive.trim());
  }
  return lines;
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

  for (const line of requestDirectives(body)) {
    const closing = line.match(closingPrefix);
    const prefix = closing ?? line.match(relatedPrefix);
    if (!prefix) continue;
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
        references.push(...parsed);
        break;
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
  return normalizedBody ? `${normalizedBody}\n\n${closingLines}` : closingLines;
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
