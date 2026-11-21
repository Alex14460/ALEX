---
title: "What I Actually Use AI For"
summary: "How I use AI every day: a home-hosted agent that maintains my site, helps with my job search, and takes orders by voice."
date: "Jul 21 2026"
draft: false
tags:
  - AI
  - Tools
  - Reflection
  - Productivity
---

What I Actually Use AI For

How I use AI every day: a home-hosted agent that maintains my site, helps with my job search, and takes orders by voice.

I started using AI tools when they were still bad at the things I needed. During my airdrop farming project, ChatGPT could help me write code, but it took a lot of back and forth. That taught me to test tools for myself and to ignore the hype.

My setup

Today, most of my AI work does not happen in a chat window. I run Hermes Agent on a backend that I host at home. It uses two kinds of models:

A small local model. I run Qwen 3.5 on my own machine. To make it fast enough, I optimized the operating system and removed every process that is not essential. This model handles routine tasks.
Models through OpenRouter. When a task is harder, the agent calls a stronger model. I can pick the best model for each job, so I do not depend on one provider.

The agent can also use outside tools through MCP, a standard way for an AI to connect to other services. I use MCP with GitHub: the agent changes the code of my site, and Cloudflare publishes the update. And I do not need to sit at my computer to give orders. I send a voice message from my iPhone, and the agent does the work.

What it does for me
It maintains this site. The agent updates the site you are reading through GitHub and Cloudflare, and fixes deployment problems.
It helps with my job search. Every morning, it opens my browser with applications already filled in for roles that match my profile. It saves me the typing. I still read each one and click send myself.
It helped me save my old mixtapes. I had about 50 hours of collector mixtapes on an old hard drive. With AI, I turned them into videos, using each cover as the image. Then I uploaded them to YouTube, with the tracklist in each description. It is a small project, but it shows what I like most: a long, boring job that can be split into clear steps, and handed to an agent.

In all of these, I let the agent do the repetitive work, and I keep the decisions.

Where I stay careful

There is still a lot of hype around AI. A good demo is not the same as a tool you can use every day, and I do not trust much of what I see about AI on social media. At work, I would think carefully about GDPR before sending real data to any tool. And I do not trust agents blindly. Anything that leaves my machine, like a submitted form, goes through me first.

Where I am going next

I do not see a limit to what can be automated. The real limits are how clearly you can explain a process and how well you supervise the agent that runs it.

My next goal is to connect AI to physical objects, using an Arduino as the interface. The agent would send instructions, and the Arduino would turn them into real actions. I do not have one specific device in mind. The idea is the same logic I use for software: if you can describe a task as a clear set of steps and rules, an agent can do it. I want to apply that to objects in the real world, so they can be controlled automatically.

Many people now use the same AI tools, so using AI is quickly becoming normal. What will make the difference is using it well: choosing the right model for each task, giving clear instructions, connecting the right tools, and knowing when a human should stay in charge.