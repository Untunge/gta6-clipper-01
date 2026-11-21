# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Untunge/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Untunge/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A GTA 6 chase clip cut by an AI agent from Rockstar's "Grand Theft Auto VI Trailer 2" (helicopter/airboat pursuit, jetski chase, motorcycle + seaplane, night bike slide, dusk wheelie and Lucia's getaway drive), cropped vertical for YouTube Shorts, with make.fun's pitch as a spoken + on-screen end card: make clips like this with AI and earn money on make.fun.

## The video

The clip is `gta6-clip-short.mp4` (17.9 s, 1080x1920, 30 fps): 10.9 s of chase footage, then a 7 s end card carrying the pitch and `make.fun/bounty/gta6-clipper-01`. `VIDEO.json` at this repository's root names the video's public YouTube address once it is published.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output directory, where the gate reads it. Nothing the program writes is scored — the video's views decide the places.

---

<sub>Entered on [make.fun](https://make.fun/?ref=hzgw4y0b&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
