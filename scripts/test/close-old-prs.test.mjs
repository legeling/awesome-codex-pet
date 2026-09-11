import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const workflow = readFileSync(
  new URL("../../.github/workflows/close-old-prs.yml", import.meta.url),
  "utf8",
);
const source = workflow
  .split("          script: |\n")[1]
  .split("\n")
  .map((line) => line.slice(12))
  .join("\n");
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

test("calendar expiry, pagination, and fresh state checks", async () => {
  const rows = [
    { number: 1, created_at: "2026-05-31T12:00:00Z", state: "open" },
    {
      number: 2,
      created_at: "2026-05-30T12:00:00Z",
      state: "open",
      draft: true,
    },
    {
      number: 3,
      created_at: "2026-04-01T00:00:00Z",
      state: "closed",
      merged: true,
    },
    { number: 4, created_at: "2026-06-01T00:00:00Z", state: "open" },
    { number: 5, created_at: "2025-11-30T12:00:00Z", state: "open" },
  ];
  async function run(now) {
    const updates = [];
    let listed = false;
    const pulls = {
      list() {},
      async get({ pull_number }) {
        return { data: rows.find((row) => row.number === pull_number) };
      },
      async update({ pull_number, state }) {
        assert.ok(listed);
        assert.equal(state, "closed");
        updates.push(pull_number);
      },
    };
    const github = {
      rest: { pulls },
      paginate: {
        async *iterator() {
          yield { data: rows.slice(0, 2) };
          yield { data: rows.slice(2) };
          listed = true;
        },
      },
    };
    const core = {
      info() {},
      summary: {
        addRaw() {
          return this;
        },
        async write() {},
      },
    };
    class Clock extends Date {
      static now() {
        return Date.parse(now);
      }
    }
    await new AsyncFunction("github", "context", "core", "Date", source)(
      github,
      { repo: { owner: "test", repo: "test" } },
      core,
      Clock,
    );
    return updates;
  }
  assert.deepEqual(await run("2026-08-31T12:00:00Z"), [2, 5]);
  assert.deepEqual(await run("2026-08-31T12:00:01Z"), [1, 2, 5]);
  assert.deepEqual(await run("2026-02-28T12:00:00Z"), []);
  assert.deepEqual(await run("2026-02-28T12:00:01Z"), [5]);
});
