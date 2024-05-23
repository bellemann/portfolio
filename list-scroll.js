// Select all scroll items
const scrollItems = document.querySelectorAll(".scroll-item");

// Loop through each scroll item
scrollItems.forEach((item, index) => {
  // Create a GSAP timeline for each item
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "bottom 90%", // Start when top of item hits center of viewport
      end: "top top", // End when bottom of item hits center of viewport
      markers: false,
      scrub: 1,
    },
  });

  // Animation for entering the center
  timeline.fromTo(
    item,
    { x: "8rem", opacity: 0 },
    { x: "0rem", opacity: 1, ease: "power1.out" },
  );

  // Animation for leaving the center
  timeline.to(
    item,
    { x: "8rem", opacity: 0, ease: "power1.in" },
    "+=0.5", // Delay before starting the animation for leaving the center
  );

  // Offset start and end positions for each item to create overlap
  timeline.scrollTrigger.start += index * 0.2; // Adjust the offset as needed
  timeline.scrollTrigger.end -= index * 0.2; // Adjust the offset as needed
});
