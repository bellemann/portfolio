document.querySelectorAll(".grid_list_item").forEach((item) => {
  const question = item.querySelector(".question");
  const answer = item.querySelector(".comp_details");

  item.addEventListener("mouseenter", () => {
    gsap.to(answer, { height: "auto", duration: 0.5 });

    // Reduce opacity of other items
    document.querySelectorAll(".grid_list_item").forEach((otherItem) => {
      if (otherItem !== item) {
        gsap.to(otherItem, { opacity: 0.5, duration: 0.3 });
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(answer, { height: 0, duration: 0.5 });

    // Restore opacity of other items
    document.querySelectorAll(".grid_list_item").forEach((otherItem) => {
      if (otherItem !== item) {
        gsap.to(otherItem, { opacity: 1, duration: 0.5 });
      }
    });
  });
});
