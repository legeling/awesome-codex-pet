import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

const workflow = readFileSync(
  new URL("../../.github/workflows/pet-previews.yml", import.meta.url),
  "utf8",
);

// Exercise the actual workflow blocks, not a second implementation of them.
function step(name) {
  const block = workflow
    .split(`      - name: ${name}\n`)[1]
    ?.split("      - name:")[0];
  assert.ok(block, `Missing step: ${name}`);
  assert.match(block, /^        shell: bash$/m);
  return block
    .split("        run: |\n")[1]
    .trimEnd()
    .split("\n")
    .map((line) => line.slice(10))
    .join("\n");
}

function fixture(t, { pets = true } = {}) {
  const root = mkdtempSync(join(tmpdir(), "pet-preview-base-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const remote = join(root, "remote");
  const worker = join(root, "worker");
  const git = (cwd, ...args) => {
    const result = spawnSync("git", args, { cwd, encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  git(root, "init", "--initial-branch=main", remote);
  git(remote, "config", "user.name", "Test author");
  git(remote, "config", "user.email", "test@example.invalid");
  writeFileSync(join(remote, "README.md"), "base\n");
  git(remote, "add", ".");
  git(remote, "commit", "-m", "base");
  const base = git(remote, "rev-parse", "HEAD");
  // Put base outside checkout's depth of two, as in an older PR base.
  for (let i = 0; i < 3; i++) {
    writeFileSync(join(remote, "README.md"), `revision ${i}\n`);
    git(remote, "add", ".");
    git(remote, "commit", "-m", `revision ${i}`);
  }
  if (pets) {
    mkdirSync(join(remote, "pets", "example--author"), { recursive: true });
    writeFileSync(join(remote, "pets", "example--author", "pet.json"), "{}\n");
    writeFileSync(
      join(remote, "pets", "example--author", "submission.json"),
      "{}\n",
    );
    git(remote, "add", ".");
    git(remote, "commit", "-m", "add pet");
  }
  git(root, "clone", "--depth=2", pathToFileURL(remote).href, worker);
  assert.notEqual(
    spawnSync("git", ["cat-file", "-e", `${base}^{commit}`], { cwd: worker })
      .status,
    0,
  );
  const output = join(root, "output");
  const changed = join(root, "changed-pets.txt");
  writeFileSync(output, "");
  const run = (name, sha = base) =>
    spawnSync(
      "bash",
      [
        "--noprofile",
        "--norc",
        "-e",
        "-o",
        "pipefail",
        "-c",
        step(name).replaceAll("/tmp/changed-pets.txt", changed),
      ],
      {
        cwd: worker,
        encoding: "utf8",
        env: { ...process.env, BASE_SHA: sha, GITHUB_OUTPUT: output },
      },
    );
  return { run, output, changed };
}

test("fetches an immutable base outside the shallow checkout and finds pets", (t) => {
  const f = fixture(t);
  const fetched = f.run("Fetch pull request base");
  assert.equal(fetched.status, 0, fetched.stderr);
  const detected = f.run("Find changed pets");
  assert.equal(detected.status, 0, detected.stderr);
  assert.equal(readFileSync(f.changed, "utf8"), "example--author\n");
  assert.equal(readFileSync(f.output, "utf8"), "has-pets=true\n");
});

test("a valid diff without pet changes reports false", (t) => {
  const f = fixture(t, { pets: false });
  assert.equal(f.run("Fetch pull request base").status, 0);
  assert.equal(f.run("Find changed pets").status, 0);
  assert.equal(readFileSync(f.output, "utf8"), "has-pets=false\n");
});

test("a missing base fails detection instead of silently skipping previews", (t) => {
  const f = fixture(t);
  const result = f.run("Find changed pets");
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /bad object/);
  assert.equal(readFileSync(f.output, "utf8"), "");
});

test("an unavailable immutable base fails fetching", (t) => {
  const f = fixture(t);
  const result = f.run("Fetch pull request base", "0".repeat(40));
  assert.notEqual(result.status, 0);
  assert.equal(readFileSync(f.output, "utf8"), "");
});
