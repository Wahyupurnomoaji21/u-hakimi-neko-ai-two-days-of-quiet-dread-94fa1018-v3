import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-line code review comment: approve the PR, but let the green test
// suite carry the dread — a passing suite does not mean the code is clean.
// It means the bug has mapped every blind spot in the tests and learned
// to hold perfectly still there, waiting for the reviewer to click approve.
const line = "Approved. All tests pass, which only proves the bug has learned to hold still.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
