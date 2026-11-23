import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 123 characters, about a small good thing that happened today:
// a stranger's dog stole my sandwich, then sat on my foot like rent was due.
const ENTRY =
  "This morning a stranger's dog stole my sandwich, then sat on my foot like rent was due \u2014 and I laughed all the way to work.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
