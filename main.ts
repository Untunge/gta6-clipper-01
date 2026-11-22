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

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${botDir}; the entry names no video.`);
  process.exit(1);
}

// The gate reads the video through the YouTube Data API, so a VIDEO.json
// that is not valid JSON, or that names no YouTube address, would fail the
// entry at intake. Refuse it here with a clear error instead of copying
// a file the gate cannot use.
let parsed;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch {
  console.error(`VIDEO.json in ${botDir} is not valid JSON; the entry names no video.`);
  process.exit(1);
}

const videoUrl = parsed?.url;
const youtubePattern = /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;
if (typeof videoUrl !== 'string' || !youtubePattern.test(videoUrl)) {
  console.error(`VIDEO.json in ${botDir} names no valid YouTube video address.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
