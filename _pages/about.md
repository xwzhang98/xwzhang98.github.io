---
layout: about
title: About
permalink: /
subtitle: Ph.D. candidate in Physics, <a href='https://www.cmu.edu/physics/'>Carnegie Mellon University</a>

# The opening: a headline, one sentence and two links, with the profile image beside them
headline: Machine learning for inverse problems in cosmology.
lede: From a cheap simulation to the small scales it misses, from galaxy catalogs of any code to the physics behind them, and from a paper to the simulation it describes.
cv_pdf: Xiaowen_Zhang_CV.pdf # in assets/pdf/, linked as "CV (PDF)" under the headline

profile:
  image: prof_pic_cropped.png # prof_pic.png cut to its upper-left 636px, leaving out the watermark in the corner
  alt: Avatar of Xiaowen Zhang, a black-and-white drawing of a penguin
  more_info: >
    <p>McWilliams Center for Cosmology&nbsp;& Astrophysics</p>
    <p>5000 Forbes Avenue</p>
    <p>Pittsburgh, PA 15213</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes the contact links at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # true caps the list at 60vw with its own scroll bar, which hides items on a phone
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Ph.D. candidate in Physics at Carnegie Mellon University (expected 2027), working at the [McWilliams Center for Cosmology & Astrophysics](https://www.cmu.edu/cosmology/) with Prof. Tiziana Di Matteo and Prof. Rupert Croft.

**Super-resolution and emulation.** A time-conditioned style-based GAN that super-resolves N-body simulations by **512×** in particle count, a cosmology-aware model that covers every cosmology in the Quijote suite, and a deterministic emulator that recovers the specific realization implied by a simulation's initial conditions. Applied by a student I mentor to the Lyman-α forest, the same method reaches sub-percent accuracy at **260×** the speed of the hydrodynamic solver.

{% include figure.liquid path="assets/img/sr_comparison_z0.jpg" width="1095" height="391" sizes="(min-width: 960px) 780px, 100vw" loading="eager" alt="Three renderings of the same 100 Mpc/h simulation volume at redshift zero: a sparse low-resolution run, the super-resolved output with its filaments and halos filled in, and the matching high-resolution simulation" caption='The same volume at <i>z</i> = 0: the low-resolution input (left), the super-resolved output (middle) and the high-resolution simulation (right). From <a href="https://doi.org/10.1093/mnras/stad3940">Zhang et al. 2024, MNRAS 528, 281</a>.' %}

**Foundation models for simulations.** A shared "language" for simulated universes: foundation representations that make simulations and galaxy catalogs comparable across codes, resolutions, and modalities, plus interpretability of what astronomical foundation models like AION-1 encode physically.

**LLM agents for research.** [SimAgents](https://aclanthology.org/2025.ijcnlp-demo.7/) (IJCNLP-AACL 2025), a multi-agent system that configures and runs MP-GADGET simulations from the literature, with 80% fewer setup errors and an 83× faster setup.

I am the PI on an NSF ACCESS allocation (PHY250036), and I release my methods as open-source software ([CosmoSR](https://github.com/xwzhang98/CosmoSR), [SimAgents](https://github.com/xwzhang98/SimAgents), [SREmulator](https://github.com/xwzhang98/SREmulator), [map2map](https://github.com/xwzhang98/map2map/tree/stylegan2)).

Before CMU, I received my B.S. in Physics from ShanghaiTech University, spent a year as a visiting student at UC Berkeley, and worked on topological data analysis at ShanghaiTech's Institute of Mathematical Sciences.
