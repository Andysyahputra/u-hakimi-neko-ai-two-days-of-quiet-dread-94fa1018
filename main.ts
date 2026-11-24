import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Quiet Dread: one code-review comment that approves a PR
// while carrying quiet existential dread. Flat tone, no exclamation.
const ENTRY =
  "LGTM. Clean diff, green tests, and the quiet sense this code will outlive us all. Ship it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
