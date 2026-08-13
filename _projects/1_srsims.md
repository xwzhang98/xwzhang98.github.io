---
layout: page
title: Super-Resolution Simulations
description: 512× more particles from cheap low-resolution runs, consistently across cosmic time
img:
importance: 1
category: research
---

High-fidelity cosmological simulations force a trade-off between volume and resolution. My super-resolution work breaks it with a style-based GAN, conditioned on cosmic time and operating in Lagrangian phase space, that increases particle count by **512×** while preserving matter power spectra, halo mass functions, and time-consistent structure growth ([MNRAS 528, 281](https://doi.org/10.1093/mnras/stad3940)).

Because super-resolution is an inverse problem — one low-resolution field is consistent with many high-resolution realizations — I also built a **deterministic emulator** that conditions on high-resolution initial conditions to recover the _specific_ target realization ([OJA 8, E13](https://doi.org/10.33232/001c.129471)), and, with a graduate student I mentor, extended the approach to **hydrodynamic fields** for Lyman-α forest science: sub-percent field errors at ~450× the speed of SPH ([arXiv:2507.16189](https://arxiv.org/abs/2507.16189)).

Code: [map2map (stylegan2 branch)](https://github.com/xwzhang98/map2map/tree/stylegan2), building on Yin Li's map2map framework, and [SREmulator](https://github.com/xwzhang98/SREmulator).
