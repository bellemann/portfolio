document.addEventListener("DOMContentLoaded", function () {
  const textLoadInElements = document.querySelectorAll("[stagger='text']");

  textLoadInElements.forEach((element) => {
    const splitText = new SplitType(element, { types: "lines, words" });

    // Get the delay attribute value from the parent element
    const delay = parseFloat(element.getAttribute("delay")) || 0;

    splitText.lines.forEach((line, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "line-wrapper";
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);

      const tlTextLoadIn = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "restart resume restart reverse",
        },
        onComplete: function () {
          // Run another GSAP animation after the first timeline has finished
          const tlAnotherAnimation = gsap.timeline();
          // Define your animation here
        },
      });

      tlTextLoadIn.fromTo(
        line,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          duration: 1,
          opacity: 1,
          ease: "circ.out",
          stagger: 0.1,
          delay: delay, // Apply delay based on index and delay attribute
        },
      );
    });
  });
});
