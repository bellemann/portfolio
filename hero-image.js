let heroImage = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero_image",
    start: "clamp(top bottom)", // Start when top of item hits center of viewport
    end: "bottom top", // End when bottom of item hits center of viewport
    markers: false,
    scrub: 1,
  },
});

// Animation for entering the center
heroImage.from(".hero_image", {
  yPercent: 10,

  ease: "none",
});

let heroImageGrow = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero_image",
    start: "clamp(top bottom)", // Start when top of item hits center of viewport
    end: "center center", // End when bottom of item hits center of viewport
    markers: false,
    scrub: 1,
  },
});

// Animation for entering the center
heroImageGrow.from(".hero_image", {
  width: "70%",

  ease: "power1.out",
});
