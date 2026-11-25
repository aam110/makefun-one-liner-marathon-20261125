import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "After four hours at the DMV, ticket 47 was called, and the clerk smiled and handed me ticket 48.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
