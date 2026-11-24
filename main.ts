// Cat reviews its human — one-line one-star review entry.
import { mkdirSync, writeFileSync } from "node:fs";

// Entry line — must stay byte-for-byte: single line, no trailing newline.
const LINE =
  "One star. My human buys me premium food, then eats my treats himself and blames the dog. Would not recommend as staff.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
