import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 123 characters, about a small good thing that happened today:
// a stranger's dog stole my sandwich, then sat on my foot like rent was due.
const ENTRY =
  "This morning a stranger's dog stole my sandwich, then sat on my foot like rent was due \u2014 and I laughed all the way to work.";

// Validate the entry before writing: it must be exactly one line and
// at most 200 characters, so a stray newline or overlong edit fails loudly.
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}
if (ENTRY.length > 200) {
  throw new Error(`entry must be at most 200 characters, got ${ENTRY.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
