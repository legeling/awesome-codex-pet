import assert from "node:assert/strict";
import test from "node:test";

import {
  ensureClosingReferences,
  hasClosingReference,
  issueNumberFromSourceUrl,
  requestCommitCompletionComment,
  requestIssueNumbersFromPullRequestBody,
  submissionChangeMayCompleteRequest,
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

test("only treats request-link metadata changes as direct completion candidates", () => {
  assert.equal(
    submissionChangeMayCompleteRequest({
      status: "modified",
      patch:
        '@@ -7 +7 @@\n-  "author": "Lingxiaotian",\n+  "author": "legeling",',
    }),
    false,
  );
  assert.equal(
    submissionChangeMayCompleteRequest({
      status: "modified",
      patch:
        '@@ -12 +12 @@\n-  "source_url": "https://example.com",\n+  "source_url": "https://github.com/legeling/awesome-codex-pet/issues/83",',
    }),
    true,
  );
  assert.equal(
    submissionChangeMayCompleteRequest({
      status: "modified",
      patch:
        '@@ -13 +13 @@\n-  "tags": ["v2"],\n+  "tags": ["v2", "community-request"],',
    }),
    true,
  );
  assert.equal(
    submissionChangeMayCompleteRequest({ status: "added", patch: "" }),
    true,
  );
  assert.equal(
    submissionChangeMayCompleteRequest({ status: "removed", patch: "" }),
    false,
  );
  assert.equal(
    submissionChangeMayCompleteRequest({ status: "modified" }),
    true,
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

test("does not interpret the Pinwheel Cat disclaimer as fulfilling requests", () => {
  const body =
    "Only this one free variant is submitted. The existing paid products, other variants, licenses, and prices are unchanged. This submission does not fulfill #239 or #249 and does not close an existing character request.";
  const numbers = requestIssueNumbersFromPullRequestBody(body, repository);

  assert.deepEqual(numbers, []);
  assert.equal(hasClosingReference(body, 239, repository), false);
  assert.equal(hasClosingReference(body, 249, repository), false);
  assert.equal(ensureClosingReferences(body, numbers, repository), body);
});

test("requires complete affirmative directives instead of scanning nearby prose", () => {
  for (const body of [
    "Do not close #83",
    "This PR does not resolve #83",
    "No related request issue: #83",
    "#83 is unrelated; this fixes the animation",
    "Closes an animation bug mentioned in #83",
    "Closes #83, not #84",
    "Related request issue: #83 is only a visual reference",
    "Closes #83example",
    "Closes #0",
    "Closes #9007199254740992",
  ]) {
    assert.deepEqual(
      requestIssueNumbersFromPullRequestBody(body, repository),
      [],
      body,
    );
    assert.equal(hasClosingReference(body, 83, repository), false, body);
  }
});

test("supports closing keyword variants and explicit Markdown list items", () => {
  for (const keyword of [
    "Close",
    "Closes",
    "Closed",
    "Fix",
    "Fixes",
    "Fixed",
    "Resolve",
    "Resolves",
    "Resolved",
  ]) {
    for (const prefix of ["", "- ", "* ", "+ ", "1. ", "2) "]) {
      const body = `${prefix}${keyword} #83`;
      assert.deepEqual(
        requestIssueNumbersFromPullRequestBody(body, repository),
        [83],
        body,
      );
      assert.equal(hasClosingReference(body, 83, repository), true, body);
    }
  }
  for (const body of ["CLOSES: #83", "Fixes: #83", "Resolves : #83"]) {
    assert.deepEqual(
      requestIssueNumbersFromPullRequestBody(body, repository),
      [83],
      body,
    );
    assert.equal(hasClosingReference(body, 83, repository), true, body);
  }
});

test("preserves multiple issues and gives each a genuine closing keyword", () => {
  const body = "Closes #84, #83 and #85; resolves #86.";
  const numbers = requestIssueNumbersFromPullRequestBody(body, repository);

  assert.deepEqual(numbers, [83, 84, 85, 86]);
  assert.equal(hasClosingReference(body, 84, repository), true);
  assert.equal(hasClosingReference(body, 86, repository), true);
  assert.equal(hasClosingReference(body, 83, repository), false);
  assert.equal(hasClosingReference(body, 85, repository), false);
  const updated = ensureClosingReferences(body, numbers, repository);
  assert.equal(updated, `${body}\n\nCloses #83\nCloses #85`);
  assert.equal(ensureClosingReferences(updated, numbers, repository), updated);
  assert.deepEqual(
    requestIssueNumbersFromPullRequestBody(
      "Fixes #83, resolves #84 & closes #85",
      repository,
    ),
    [83, 84, 85],
  );
});

test("preserves explicit related-request lists without treating them as closing keywords", () => {
  for (const field of [
    "Related request issue:",
    "Related pet request:",
    "Request issues:",
    "相关需求：",
    "关联需求:",
    "需求 issue:",
  ]) {
    const body = `${field} #84, #83`;
    assert.deepEqual(
      requestIssueNumbersFromPullRequestBody(body, repository),
      [83, 84],
      body,
    );
    assert.equal(hasClosingReference(body, 83, repository), false, body);
  }
});

test("ignores quoted, code, comment, and unfilled template references", () => {
  for (const example of [
    "> Closes #83",
    "> A quoted example\nCloses #83",
    "    Closes #83",
    "\tCloses #83",
    "`Closes #83`",
    "Closes `#83`",
    "Example: `\nCloses #83\n`",
    "Example: ``\n`\nCloses #83\n``",
    "```markdown\nCloses #83\n```",
    "~~~text\nRelated request issue: #83\n~~~",
    "````markdown\n```\nCloses #83\n````",
    "- ```markdown\nCloses #83\n  ```",
    "<!-- Closes #83 -->",
    "<!--\nRelated request issue: #83\n-->",
    "- [ ] Closes #83",
    "- [x] Example: Closes #83",
    "- Related request or submission issue (if any; use `Closes #123` for a completed request):",
    "- [ ] If this pet fulfills a request, I commented on that Issue and linked it with `Closes #<number>`",
  ]) {
    const body = `${example}\n\nResolves #84`;
    assert.deepEqual(
      requestIssueNumbersFromPullRequestBody(body, repository),
      [84],
      example,
    );
    assert.equal(hasClosingReference(body, 83, repository), false, example);
    assert.equal(hasClosingReference(body, 123, repository), false, example);
    assert.equal(hasClosingReference(body, 84, repository), true, example);
  }
});

test("does not escape unfinished code fences or HTML comments", () => {
  for (const body of ["```\nCloses #83", "<!--\nCloses #83"]) {
    assert.deepEqual(
      requestIssueNumbersFromPullRequestBody(body, repository),
      [],
    );
    assert.equal(hasClosingReference(body, 83, repository), false);
  }
});

test("requires same-repository URLs and exact issue tokens", () => {
  const body = `Closes https://github.com/${repository}/issues/84, #83`;
  assert.deepEqual(
    requestIssueNumbersFromPullRequestBody(body, repository),
    [83, 84],
  );
  assert.equal(hasClosingReference(body, 8, repository), false);
  assert.equal(hasClosingReference(body, 84, repository), true);

  for (const invalid of [
    "Closes https://github.com/other/repo/issues/83",
    "Closes other/repo#83",
    `Closes https://github.com/${repository}/issues/83example`,
    `Closes https://github.com/${repository}/issues/83#issuecomment-1`,
  ]) {
    assert.deepEqual(
      requestIssueNumbersFromPullRequestBody(invalid, repository),
      [],
      invalid,
    );
    assert.equal(hasClosingReference(invalid, 83, repository), false, invalid);
  }
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
