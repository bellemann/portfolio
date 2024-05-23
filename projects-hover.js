document.addEventListener("DOMContentLoaded", (event) => {
  // Select all project wraps
  const projectWraps = document.querySelectorAll(".project_wrap");

  // Iterate over each project wrap and add hover event listeners
  projectWraps.forEach((wrap, index) => {
    const image = wrap.querySelector(".project_image");
    const hover = wrap.querySelector(".project_hover");

    if (image && hover) {
      // Hover in animation
      wrap.addEventListener("mouseenter", () => {
        gsap.killTweensOf([image, hover]); // Kill any existing tweens
        gsap.to(image, { scale: 1.05, duration: 0.5 });
        gsap.to(hover, { width: "100%", duration: 0.5, ease: "power1.out" });
      });

      // Hover out animation
      wrap.addEventListener("mouseleave", () => {
        gsap.killTweensOf([image, hover]); // Kill any existing tweens
        gsap.to(image, { scale: 1, duration: 0.5 });
        gsap.to(hover, { width: "auto", duration: 0.5, ease: "power1.out" });
      });
    }
  });
});
