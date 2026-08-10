import assert from "node:assert/strict";
import test from "node:test";

import {
  ensureClosingReferences,
  hasClosingReference,
  issueNumberFromSourceUrl,
  requestCommitCompletionComment,
  requestIssueNumbersFromPullRequestBody,
  withRequestStatus,
} from "../request-linking.mjs";

const repository = "legeling/awesome-codex-pet";

test("reads a request issue from a same-repository source URL", () => {
  assert.equal(
    issueNumberFromSourceUrl(
      "https://github.com/legeling/awesome-codex-pet/issues/84",
      repository,
    ),
    84,
  );
  assert.equal(
    issueNumberFromSourceUrl("https://example.com/issues/84", repository),
    null,
  );
});

test("finds closing and related-request references without scanning unrelated prose", () => {
  const body = `Summary mentions #9 but does not link it.
Related request issue: #83
Closes https://github.com/legeling/awesome-codex-pet/issues/84`;

  assert.deepEqual(
    requestIssueNumbersFromPullRequestBody(body, repository),
    [83, 84],
  );
});

test("adds only missing closing references and remains idempotent", () => {
  const initial = "## Summary\n\nCloses #83";
  const updated = ensureClosingReferences(initial, [83, 84], repository);

  assert.equal(updated, "## Summary\n\nCloses #83\n\nCloses #84");
  assert.equal(ensureClosingReferences(updated, [83, 84], repository), updated);
});

test("recognizes full issue URLs after closing keywords", () => {
  assert.equal(
    hasClosingReference(
      "Resolves https://github.com/legeling/awesome-codex-pet/issues/95",
      95,
      repository,
    ),
    true,
  );
});

test("replaces the managed request status without touching other labels", () => {
  assert.deepEqual(
    withRequestStatus(
      ["type: request", "status: triage", "category: anime"],
      "in-progress",
    ),
    ["type: request", "category: anime", "status: in-progress"],
  );
});

test("creates a stable direct-commit completion marker", () => {
  const comment = requestCommitCompletionComment({
    commitSha: "1234567890abcdef",
    commitUrl:
      "https://github.com/legeling/awesome-codex-pet/commit/1234567890abcdef",
  });

  assert.match(
    comment,
    /<!-- pet-request-completed-by-commit:1234567890abcdef -->/,
  );
  assert.match(comment, /`1234567`/);
});
