---
layout: page
title: SimAgents
description: A multi-agent LLM system bridging literature and cosmological simulations (IJCNLP-AACL 2025)
img:
importance: 2
category: research
---

Getting from "I read this paper" to "I am running this simulation" costs days of manual-reading and parameter-hunting, repeated for every code and project. **SimAgents** removes that cost: role-specialized LLM agents read literature and software manuals, extract simulation parameters, auto-generate MP-GADGET configurations, and produce first-look analyses.

The hard problem is that the dangerous errors are silent — a plausible-looking value in the wrong unit convention yields a physically wrong simulation that still runs. Two **task-specialised agents** (a Physics Agent reading the literature, a Software Agent reading the manual) refine parameters over structured multi-round discussion: **98.7 Micro-F1** on parameter extraction, an **80% error-rate reduction** over a single-agent chain-of-thought baseline, and an **83× setup speedup** for first-time users. The system and its evaluation dataset are released ([code](https://github.com/xwzhang98/SimAgents)).

Published in the [IJCNLP-AACL 2025 System Demonstrations track](https://aclanthology.org/2025.ijcnlp-demo.7/) (Association for Computational Linguistics).
