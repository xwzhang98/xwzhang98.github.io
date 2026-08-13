---
layout: page
title: SimAgents
description: A multi-agent LLM system bridging literature and cosmological simulations (IJCNLP-AACL 2025)
img:
importance: 2
category: research
---

Getting from "I read this paper" to "I am running this simulation" costs days of manual-reading and parameter-hunting, repeated for every code and project. **SimAgents** removes that cost: role-specialized LLM agents read literature and software manuals, extract simulation parameters, auto-generate MP-GADGET configurations, and produce first-look analyses.

The hard problem is that hallucination here is silent and catastrophic — one wrong parameter yields physically wrong output that still runs. SimAgents uses **multi-agent debate** and **retrieval-augmented generation** instead of single-shot generation to control it.

Published in the [IJCNLP-AACL 2025 System Demonstrations track](https://aclanthology.org/2025.ijcnlp-demo.7/) (Association for Computational Linguistics).
