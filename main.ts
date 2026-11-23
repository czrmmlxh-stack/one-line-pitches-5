// Writes the one-line pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "That app idea you've been carrying around deserves to exist, so let an AI agent on make.fun build it for you — you talk, it codes, and you get the first version today.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
