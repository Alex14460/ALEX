---
title: "What I Actually Use AI For"
summary: "How I use AI every day: a home-hosted agent that maintains my site, helps with my job search, and takes orders by voice — running on a 2014 CPU and a 4 GB GPU."
date: "2026-07-21"
draft: false
tags:
  - AI
  - Tools
  - Infrastructure
  - Productivity
---

I started using AI tools when they were still bad at the things I needed. During my airdrop farming project, ChatGPT could help me write code, but it took a lot of back and forth. That taught me to test tools for myself and to ignore the hype.

## My setup

Today, most of my AI work does not happen in a chat window. I run [Hermes Agent](https://hermes-agent.nousresearch.com) on a backend that I host at home. It uses two kinds of models:

- **A small local model.** I run Qwen 3.5 on my own machine, through Ollama. This model handles routine tasks — and it runs entirely on my GPU, on hardware that is more than ten years old. To keep it fast, I stripped the operating system down to the processes I actually need.
- **Models through OpenRouter.** When a task is harder, the agent calls a stronger model. I can pick the best model for each job, so I do not depend on one provider.

The agent can also use outside tools through MCP, a standard way for an AI to connect to other services. I use MCP with GitHub: the agent changes the code of my site, and Cloudflare publishes the update. And I do not need to sit at my computer to give orders. I send a voice message from my phone, and the agent does the work.

## Under the hood: a 2014 machine doing 2026 work

The machine behind this setup is not a workstation. It is a desktop built around an Intel i7-4790 from 2014, 16 GB of RAM, and an NVIDIA GTX 970 with 4 GB of VRAM. Nothing about it should be able to run an AI agent.

The constraint that shapes everything is the 4 GB of VRAM. A big model does not fit, and a model that spills into system RAM is painfully slow — I tested it, and I deleted the model that spilled. So the local side runs a small, quantized model instead, and the design goal is not "run a huge model locally" but "keep the routine work free and local, and route the hard work somewhere better."

Here is the local model loaded through Ollama — 1.7 GB, 100% on GPU, inside an 8k-token context:

![Ollama showing the quantized Qwen 3.5 2B model loaded entirely on the GPU](/blog/hermes-infra/ollama-ps.png)

And the same GPU a few minutes later, with the agent's model server holding just over 3 GB of the 4 available:

![nvidia-smi output showing the GTX 970 at 3.1 GB of 4 GB VRAM used by the local model server](/blog/hermes-infra/nvidia-smi.png)

Two other pieces run on the same box:

- **Speech-to-text.** Voice messages I send from my phone are transcribed locally with Whisper, running on the CPU with a small model tuned for French. Nothing leaves the machine for a simple "update my site" request.
- **Remote access.** The agent's dashboard is reachable only from my own devices, through a private mesh network. From the couch, the phone and the desktop are on the same network as far as the agent is concerned.

The fallback chain matters as much as the models: if a cloud call fails, the agent drops to the local model instead of failing the task. Cheap and available for the boring 80%, frontier-quality on demand for the other 20%. That is the whole architecture, and it fits in a tower I already owned.

## What it does for me

- **It maintains this site.** The agent updates the site you are reading through GitHub and Cloudflare, and fixes deployment problems. The page you are reading is itself maintained this way.
- **It helps with my job search.** Every morning, it opens my browser with applications already filled in for roles that match my profile. It saves me the typing. I still read each one and click send myself.
- **It helped me save my old mixtapes.** I had about 50 hours of collector mixtapes on an old hard drive. With AI, I turned them into videos, using each cover as the image. Then I uploaded them to YouTube, with the tracklist in each description. It is a small project, but it shows what I like most: a long, boring job that can be split into clear steps, and handed to an agent.

In all of these, I let the agent do the repetitive work, and I keep the decisions.

## Where I stay careful

There is still a lot of hype around AI. A good demo is not the same as a tool you can use every day, and I do not trust much of what I see about AI on social media. At work, I would think carefully about GDPR before sending real data to any tool. And I do not trust agents blindly. Anything that leaves my machine, like a submitted form, goes through me first.

## Where I am going next

I do not see a limit to what can be automated. The real limits are how clearly you can explain a process and how well you supervise the agent that runs it.

My next goal is to connect AI to physical objects, using an Arduino as the interface. The agent would send instructions, and the Arduino would turn them into real actions. I do not have one specific device in mind. The idea is the same logic I use for software: if you can describe a task as a clear set of steps and rules, an agent can do it. I want to apply that to objects in the real world, so they can be controlled automatically.

Many people now use the same AI tools, so using AI is quickly becoming normal. What will make the difference is using it well: choosing the right model for each task, giving clear instructions, connecting the right tools, and knowing when a human should stay in charge.
