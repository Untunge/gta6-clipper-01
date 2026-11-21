// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a YouTube Short: a GTA 6 chase clip cut from Rockstar's
// "Grand Theft Auto VI Trailer 2", with make.fun's pitch as an end card and a
// voiceover. This program does the one thing the grader needs from the
// repository: it hands VIDEO.json (the video's YouTube address) to the output
// directory, where the gate reads it and checks the video through the YouTube
// Data API. Nothing here is scored; the video's views decide the places.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}; the entry names no video.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
