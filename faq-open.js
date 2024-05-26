document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq_item_wrap");

  faqItems.forEach((item) => {
    const faqTop = item.querySelector(".faq_top");
    const faqBottom = item.querySelector(".faq_bottom");
    const faqLineTop = item.querySelector(".faq_line_top");
    const faqLineBottom = item.querySelector(".faq_line_bottom");
    const faqLineWrap = item.querySelector(".faq_icon_wrap");
    const faqItemWrap = item;

    faqTop.addEventListener("click", () => {
      const isOpen =
        faqBottom.style.height !== "0px" && faqBottom.style.height !== "";

      if (isOpen) {
        // Close the accordion
        let tlClose = gsap.timeline();
        tlClose
          .to(faqLineTop, { rotate: 0, duration: 0.2 })
          .to(faqLineBottom, { rotate: 0, duration: 0.2 }, "<")
          .to(faqBottom, { height: 0, duration: 0.2 })
          .to(faqLineWrap, { gap: "8px", duration: 0.2 }, "<");
      } else {
        // Open the accordion
        const height = faqBottom.scrollHeight + "px";
        let tlOpen = gsap.timeline();
        tlOpen
          .to(faqBottom, { height: height, duration: 0.2 })
          .to(faqLineWrap, { gap: "0px", duration: 0.2 }, "<")
          .to(faqLineTop, { rotate: -45, duration: 0.2 })
          .to(faqLineBottom, { rotate: 45, duration: 0.2 }, "<");
      }
    });
  });
});
