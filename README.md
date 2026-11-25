[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/aam110/makefun-one-liner-marathon-20261125/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/aam110/makefun-one-liner-marathon-20261125/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

# One-Liner Marathon — make.fun entry

One deadpan one-line comedy joke, written for the
[One-Liner Marathon](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
on make.fun. The joke is 96 characters, on an angle the field does not have:
four hours at the DMV, ticket 47 finally called — and the clerk hands over
ticket 48, sending the whole wait back to the start of the queue.

## The line

> After four hours at the DMV, ticket 47 was called, and the clerk smiled and handed me ticket 48.

## How it runs

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (one line, no
trailing newline). The output is deterministic: run it twice and the bytes are
identical. It uses only Node's `fs` and `path` modules — no network, no
randomness, no clocks.

```sh
MAKEFUN_OUTPUT_DIR=output npx tsx main.ts
cat output/entry.txt
```
