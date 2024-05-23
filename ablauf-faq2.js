document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq_item_wrap");

  faqItems.forEach((item) => {
    const faqTop = item.querySelector(".faq_top");
    const faqBottom = item.querySelector(".faq_bottom");
    const faqLineTop = item.querySelector(".faq_line_top");
    const faqLineBottom = item.querySelector(".faq_line_bottom");
    const faqItemWrap = item;

    faqTop.addEventListener("click", () => {
      const isOpen =
        faqBottom.style.height !== "0px" && faqBottom.style.height !== "";

      if (isOpen) {
        // Close the accordion
        gsap.to(faqBottom, { height: 0, duration: 0.3 });
        gsap.to(faqLineTop, { rotate: 0, top: "1.25rem", duration: 0.3 });
        gsap.to(faqLineBottom, { rotate: 0, bottom: "1.25rem", duration: 0.3 });
      } else {
        // Open the accordion
        const height = faqBottom.scrollHeight + "px";
        gsap.to(faqBottom, { height: height, duration: 0.3 });
        gsap.to(faqLineTop, { rotate: -45, top: "0", duration: 0.3 });
        gsap.to(faqLineBottom, { rotate: 45, bottom: "0", duration: 0.3 });
      }
    });
  });
});
