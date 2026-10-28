// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects in machine learning for cosmological simulations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching and research mentoring at Carnegie Mellon University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Notes on research, simulations and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-our-paper-ai-assisted-super-resolution-cosmological-simulations-iii-time-evolution-is-published-in-mnras",
          title: 'Our paper AI-assisted super-resolution cosmological simulations III: time evolution is published in MNRAS....',
          description: "",
          section: "News",},{id: "news-our-deterministic-super-resolution-emulator-paper-is-published-in-the-open-journal-of-astrophysics",
          title: 'Our deterministic super-resolution emulator paper is published in The Open Journal of Astrophysics....',
          description: "",
          section: "News",},{id: "news-awarded-an-access-hpc-allocation-as-pi-phy250036-learning-cosmological-simulations-with-graph-neural-networks",
          title: 'Awarded an ACCESS HPC allocation as PI (PHY250036): Learning Cosmological Simulations with Graph...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-cosmo-25-28th-international-conference-on-particle-physics-amp-amp-cosmology-at-cmu-on-accelerating-cosmological-simulations-with-super-resolution-and-llms",
          title: 'Gave a talk at COSMO-25 (28th International Conference on Particle Physics &amp;amp;amp; Cosmology)...',
          description: "",
          section: "News",},{id: "news-simagents-is-published-at-ijcnlp-aacl-2025-system-demonstrations-a-multi-agent-llm-system-bridging-literature-and-cosmological-simulations",
          title: 'SimAgents is published at IJCNLP-AACL 2025 System Demonstrations: a multi-agent LLM system bridging...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-at-the-2nd-annual-cosmic-horizons-conference-cosmicai-charlottesville-va-ai-accelerators-for-cosmological-simulations-super-resolution-and-emulation",
          title: 'Gave a talk at the 2nd Annual Cosmic Horizons Conference (CosmicAI, Charlottesville VA):...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-a-shared-language-for-simulated-universes-foundation-representations-for-galaxy-catalogs-and-led-the-robust-cosmological-inference-hackathon-track-toolkit-at-the-kaai-workshop-on-foundation-models-amp-amp-agentic-methods-for-astrophysical-simulation-at-cmu",
          title: 'Gave a talk, A Shared “Language” for Simulated Universes: Foundation Representations for Galaxy...',
          description: "",
          section: "News",},{id: "projects-super-resolution-simulations",
          title: 'Super-Resolution Simulations',
          description: "512× more particles from cheap low-resolution runs, consistently across cosmic time",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_srsims/";
            },},{id: "projects-simagents",
          title: 'SimAgents',
          description: "A multi-agent LLM system bridging literature and cosmological simulations (IJCNLP-AACL 2025)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_simagents/";
            },},{id: "projects-foundation-models-for-simulations",
          title: 'Foundation Models for Simulations',
          description: "A shared embedding space for astrophysical simulations, and what AION-1&#39;s embeddings encode",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_foundation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6F%77%65%6E%34@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xwzhang98", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xiaowen-zhang-123b7415a", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-0370-6021", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
