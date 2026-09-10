---
title: "What I Actually Use AI For"
summary: "A practitioner's look at where AI tools genuinely save time — from an early, rough encounter during the airdrop farming days to transcribing years of voice messages on a MacBook Pro, and what it all means for job applications now."
date: "Jul 21 2026"
draft: false
tags:
  - AI
  - Tools
  - Reflection
  - Productivity
---

I've been using AI tools since they were genuinely bad at the things I needed them for. Back during the airdrop farming project, AI was still in its infancy, and I remember leaning on ChatGPT to help write code against the web3 package — it helped, but it was far from efficient, and getting there took a lot of back and forth. Around the same time, I was working with Google BigQuery to dig into EigenLayer smart contract data: I exported the amounts deposited and the number of transactions for every wallet that had interacted with the contract, using BigQuery's native access to the Ethereum blockchain, to look for statistical anomalies that might point to insider participation in the airdrop. Even BigQuery's own AI assistant for writing the queries wasn't much better at the time — I got there, but the "AI" part of the process did less work than the marketing implied.

That history is probably why I don't get swept up easily. I follow the space closely and test new features as they land, splitting my time across the top three — Gemini, Claude, and ChatGPT.

**Where it actually earns its place**

Two professional use cases work well for me, specifically: debugging, and data consolidation when I can give precise instructions and real context.

The clearest personal example is a pipeline I built to transcribe thousands of WhatsApp voice message files accumulated over several years of exchanges with a close friend — no cloud service, no API bill, just whisper.cpp and ffmpeg running locally on a MacBook Pro. Beyond just getting the text, I've been extracting the main ideas from the transcriptions, which turns out to be genuinely interesting: it gives me an outside-in look at the consistency of my own topics, viewpoints, and values over the years, in a way I couldn't easily get otherwise.

It's probably obvious to anyone reading this that the site itself is built largely with AI assistance — the writing style alone gives it away. Beyond drafting, it's been genuinely practical for debugging the infrastructure behind it: this site runs on Cloudflare Pages, which pulls the Astro build straight from a GitHub repo. Chasing down a build failure or a misconfigured deploy hook is exactly the kind of narrow, well-defined problem where an LLM is fast and reliable.

And then there's probably the most common use case out there right now: job hunting. Quickly reshaping a CV around a specific job title, drafting a cover letter tailored to it — it's a genuine time-saver, and it's also exactly the kind of thing that makes me want to pump the brakes for a second.

**Where I stay skeptical**

I tried, at one point, to run models locally on old hardware — a GTX 970 left over from the mining rig days. It simply wasn't viable: too slow to be usable, and the hardware you'd actually need for decent local performance costs more than it's worth for most use cases. That experience keeps me grounded about the "just run it yourself" narrative.

More broadly, I think there's real potential here, but still a lot of hype relative to what's actually being delivered right now. In a professional context, I'd want to think carefully about GDPR before feeding real data through any of these tools, I'm wary of getting locked into a single AI provider's token economy, and I don't think blind trust in agentic behavior is earned yet. I'm also generally suspicious of a lot of what circulates on social media about AI — the demo and the day-to-day are rarely the same thing.

**Where I land**

I'm optimistic about where this goes — small, well-scoped pieces of a process getting automated one at a time, rather than some single dramatic replacement of how work gets done.

But it's also obvious that everyone in tech is doing the same thing I am. If tailoring a CV and writing a cover letter now takes ten minutes instead of an hour, the number of applications per role has almost certainly gone up by a similar order of magnitude. Which raises a question I don't have a good answer to yet: how are recruiters and hiring managers actually perceiving "AI-augmented" applications at this point? I don't have a tidy conclusion here — it's one of the things I'm watching closely, from both sides of the table.

More broadly, since pretty much everyone is drawing from the same handful of consumer-grade tools, I think we're in a temporary window where productivity is exploding in certain sectors and margins are getting fatter simply because the tools are new and not everyone has caught up yet. That won't last. Once adoption evens out, the edge shifts from "using AI" to "using it well" — and that's where I'd expect intense competition to concentrate, among people who actually know how to get precise, reliable output from these tools. Everyone else will be pushed to adapt or fall behind, not because the tools disappeared, but because knowing how to use them stopped being a differentiator and became table stakes.
