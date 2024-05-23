let competition = gsap.timeline({
  scrollTrigger: {
    trigger: ".comparison_slide_wrap",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "restart resume restart resume",
  },
});

// Animation for entering the center
competition.to(".comparison", {
  width: "100%",
  duration: 20,
  ease: "power1.out",
});

// Animation for entering the center, starting at the same time as the first one
competition.to(
  ".comparison_you",
  {
    width: "100%",
    duration: 2,
    ease: "power1.out",
  },
  "<",
);
