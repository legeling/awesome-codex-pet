const ISSUE_NUMBER_PATTERN = /#(\d+)/g;

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

function collectNumbers(value, pattern, target) {
  for (const match of String(value ?? "").matchAll(pattern)) {
    const number = Number(match[1]);
    if (Number.isSafeInteger(number) && number > 0) target.add(number);
  }
}

export function issueNumberFromSourceUrl(sourceUrl, repository) {
  const match = issueUrlPattern(repository).exec(
    String(sourceUrl ?? "").trim(),
  );
  return match ? Number(match[1]) : null;
}

export function requestIssueNumbersFromPullRequestBody(body, repository) {
  const numbers = new Set();
  const closingKeyword = /\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\b/i;
  const relatedRequest =
    /(?:related\s+(?:pet\s+)?request|request\s+issue|相关需求|关联需求|需求\s*issue)/i;

  for (const line of String(body ?? "").split(/\r?\n/)) {
    if (!closingKeyword.test(line) && !relatedRequest.test(line)) continue;
    collectNumbers(line, ISSUE_NUMBER_PATTERN, numbers);
    collectNumbers(line, issueUrlPattern(repository), numbers);
  }

  return [...numbers].sort((left, right) => left - right);
}

export function hasClosingReference(body, issueNumber, repository) {
  const closingKeyword = /\b(?:close[sd]?|fix(?:e[sd])?|resolve[sd]?)\b/i;
  const issueToken = new RegExp(`(?:^|\\s)#${issueNumber}(?:\\b|$)`, "i");
  const issueUrl = new RegExp(
    `${issueUrlPattern(repository).source.replace("(\\d+)", String(issueNumber))}(?:\\b|$)`,
    "i",
  );

  return String(body ?? "")
    .split(/\r?\n/)
    .some(
      (line) =>
        closingKeyword.test(line) &&
        (issueToken.test(line) || issueUrl.test(line)),
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
