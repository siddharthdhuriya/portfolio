// Scroll choreography — GSAP + ScrollTrigger
(function () {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return; // content is fully readable without motion

  // --- hero entrance ---
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from(".hero-title .line > span", { yPercent: 110, duration: 1.1, stagger: 0.12 }, 0.15)
    .from(".hero-eyebrow", { opacity: 0, y: 14, duration: 0.8 }, 0.4)
    .from(".hero-sub", { opacity: 0, y: 20, duration: 0.9 }, 0.65)
    .from(".hero-actions .btn", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, 0.85)
    .from(".scroll-hint", { opacity: 0, duration: 1 }, 1.2)
    .from(".site-header", { opacity: 0, y: -12, duration: 0.8 }, 0.5);

  // --- generic reveals ---
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 44,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 86%" },
    });
  });

  // --- experience: rail draws with scroll, bullets cascade ---
  gsap.to(".timeline-progress", {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 70%",
      end: "bottom 55%",
      scrub: 0.6,
    },
  });

  document.querySelectorAll(".job").forEach((job) => {
    gsap.from(job.querySelectorAll(".job-points li"), {
      opacity: 0,
      x: -22,
      duration: 0.6,
      stagger: 0.06,
      ease: "power2.out",
      scrollTrigger: { trigger: job, start: "top 72%" },
    });
  });

  // --- portrait: slow parallax drift inside its frame ---
  gsap.fromTo(
    ".portrait-frame img",
    { yPercent: -4 },
    {
      yPercent: 4,
      ease: "none",
      scrollTrigger: { trigger: ".about-grid", start: "top bottom", end: "bottom top", scrub: true },
    }
  );

  // --- hero text recedes upward as you leave it (depth against the 3D field) ---
  gsap.to(".hero-inner", {
    yPercent: -12,
    opacity: 0.15,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
})();
