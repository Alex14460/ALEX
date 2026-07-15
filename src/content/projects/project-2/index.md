---
title: "Airdrop Farming Operation"
summary: "Founding and coordinating a multi-chain crypto airdrop farming team, from wallet strategy to dedicated node infrastructure"
date: "Jun 15 2023"
draft: false
tags:
- Crypto
- DeFi
- Airdrops
- Team Coordination
- VPS / Node Infrastructure
- On-chain Strategy
---

In June 2023 I founded and led a small crypto airdrop farming operation, coordinating a team of friends to systematically identify, farm, and claim token airdrops across the Ethereum L2, restaking, and DeFi ecosystems. What started as a side activity between three people grew into a structured, long-running operation: over two and a half years and 26,000+ messages of internal coordination, spanning dozens of protocols and two dedicated sub-teams.

**Scope**

The core activity was multi-chain "airdrop farming": using on-chain interactions (bridging, swapping, providing liquidity, staking, governance participation) across a wide range of protocols to build eligibility for future token distributions. Over the life of the project the team tracked and farmed dozens of ecosystems and protocols, including L2s and rollups (Scroll, Linea, zkSync, Starknet, Blast, Manta, Zora), restaking and data-availability protocols (EigenLayer, EigenDA, Babylon, Avail, Puffer), interoperability and bridging protocols (LayerZero, Wormhole, Orbiter, Stargate), and DeFi/liquidity protocols (Pendle, Elixir, Ethena, Solv, Ambient, Prisma, EtherFi, Aevo). I set the overall strategy and prioritization — which ecosystems to focus effort and capital on, how to size positions, and when to exit — and kept the team aligned as market conditions and airdrop criteria shifted.

**Tools and techniques**

A key part of the project was managing farming activity across many wallets while staying within the bounds of each protocol's anti-sybil detection — meaning wallets needed to look organic (varied timing, transaction patterns, and volumes) rather than mechanically identical. This meant paying close attention to IP/fingerprint hygiene (one VPS per identity), transaction diversity, and realistic capital allocation per account, and regularly discussing detection risks and best practices as protocols tightened their criteria. I also spun up and managed cloud VPS infrastructure (Contabo and others) to run isolated environments per wallet cluster and, later, to operate actual blockchain validator/testnet nodes for data-availability and restaking projects.

**Node infrastructure sub-project**

As certain protocols began rewarding infrastructure participation directly, I spun off a second, more technical initiative dedicated to running blockchain nodes: validators and testnet nodes for projects such as Dusk Network, EigenLayer/EigenDA, Avail, Babylon, and several others, deployed on Ubuntu VPS instances. This grew into its own coordination channel with a partly overlapping, partly expanded team, and ran in parallel with the main farming operation for over two years.

**Results**

Outcomes varied significantly by protocol, as is inherent to speculative airdrop farming, but the operation was net profitable overall. Some campaigns returned very high multiples relative to the capital and fees deployed (for example, one strategy turned roughly $300 of deployed capital and modest fees into around $1,600 — a ~50x return on costs), while major airdrops such as LayerZero, zkSync, and Scroll produced meaningful five-figure token allocations across the team's accounts. Other campaigns underperformed or were flagged by anti-sybil filters, which the team treated as ongoing signal to refine wallet and account practices.

Running this project taught me how to organize and motivate a small distributed team around a long-running, execution-heavy objective; how to translate fast-moving, ambiguous crypto-native information into a clear operational strategy; and how to manage lightweight infrastructure (VPS, node deployments) in support of that strategy — skills I've carried directly into crypto-native support and account management roles.
