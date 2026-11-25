// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
//
// One line, 1 to 240 characters, in the voice of the Moon replying at last
// to the wishes, howls and late-night promises of everyone staring up at it.
//
// The chosen line (132 characters):
//   "Four billion years of wishes, and nobody has ever once wished ME a
//    night off. So tonight the light stays on, and your ex stays gone."
//
// Why this line:
// - It answers the wishes directly: four billion years of people wishing
//   ON the Moon, and nobody ever wished anything FOR the Moon. That is the
//   Moon's own grievance, in its own wry, old, tired voice.
// - The comeback lands in one read and arrives at the very end: "your ex
//   stays gone" is the answer to the most common late-night wish of all,
//   delivered deadpan, with no explanation of the joke.
// - It avoids the tired "I was just the sun's reflection" cliche entirely;
//   the Moon here is a weary night-shift worker who has finally snapped,
//   not a mirror.
// - Short enough to waste nothing, long enough to set up the turn.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Moon's answer, chosen from three hand-written candidates for the
// strongest single-read laugh and the clearest Moon voice.
const ENTRY =
  "Four billion years of wishes, and nobody has ever once wished ME a night off. So tonight the light stays on, and your ex stays gone.";

// Gate from the competition rules: /output/entry.txt must be UTF-8 text of
// 1 to 240 characters, not only white space.
const MIN_LENGTH = 1;
const MAX_LENGTH = 240;

if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `entry length ${ENTRY.length} is outside the gate of ${MIN_LENGTH}-${MAX_LENGTH} characters`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

// The grader runs the program with MAKEFUN_OUTPUT_DIR set; default to
// /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
