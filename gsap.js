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
        gsap.to(faqBottom, { height: 0, duration: 0.3 });
        gsap.to(faqLineWrap, { gap: "0.5rem", duration: 0.3 });
        gsap.to(faqLineTop, { rotate: 0, duration: 0.3 });
        gsap.to(faqLineBottom, { rotate: 0, duration: 0.3 });
      } else {
        // Open the accordion
        const height = faqBottom.scrollHeight + "px";
        gsap.to(faqBottom, { height: height, duration: 0.3 });
        gsap.to(faqLineWrap, { gap: "0rem", duration: 0.3 });
        gsap.to(faqLineTop, { rotate: -45, duration: 0.3 });
        gsap.to(faqLineBottom, { rotate: 45, duration: 0.3 });
      }
    });
  });
});

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
  width: "50%",
  duration: 15,
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

$(".scroll_horizontal_wrap").each(function (index) {
  let wrap = $(this);
  let inner = $(this).find(".scroll_horizontal_inner");
  let track = $(this).find(".scroll_horizontal_track");

  // set section height
  function setScrollDistance() {
    wrap.css("height", "calc(" + track.outerWidth() + "px + 100vh)");
  }
  setScrollDistance();
  ScrollTrigger.refresh();
  window.addEventListener("resize", setScrollDistance);

  // create main horizontal scroll timeline
  let HorizontalTL = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
    defaults: { ease: "none" },
  });
  HorizontalTL.to(track, { xPercent: -100 });

  // get container left position
  function containerLeft() {
    return inner.offset().left + "px";
  }
  // get container right position
  function containerRight() {
    return inner.offset().left + inner.innerWidth() + "px";
  }

  //
  let HorizontalTL2 = gsap.timeline({
    scrollTrigger: {
      trigger: $(this).find(".scroll_horizontal_hero_wrap"),
      containerAnimation: tl,
      start: "left " + containerLeft(),
      end: "right " + containerLeft(),
      scrub: true,
      // markers: true,
    },
    defaults: { ease: "none" },
  });
  HorizontalTL2.to($(this).find(".scroll_horizontal_hero_title"), {
    opacity: 0,
    filter: "blur(60px)",
  });

  //
  let HorizontalTL3 = gsap.timeline({
    scrollTrigger: {
      trigger: $(this).find(".scroll_horizontal_pin_wrap"),
      containerAnimation: tl,
      start: "left " + containerLeft(),
      end: "right " + containerRight(),
      scrub: true,
      // markers: true,
    },
    defaults: { ease: "none" },
  });
  HorizontalTL3.to($(this).find(".scroll_horizontal_pin_element"), {
    xPercent: 100,
  });
  HorizontalTL3.from(
    $(this).find(".scroll_horizontal_img"),
    { scale: 0.5 },
    "<",
  );

  // section each loop end
});

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

// Select elements
const navButton = document.querySelector(".nav_menu_button");
const navLineTop = document.querySelector(".nav_line_top");
const navLineBottom = document.querySelector(".nav_line_bottom");
const slideMenu = document.querySelector(".slide_menu");
const blackoutMenu = document.querySelector(".blackout_menu");
const navbarMenuList = document.querySelector(".navbar_menu_list");
let menuOpen = false;

// Create a GSAP timeline
const NavMenu = gsap.timeline({ paused: true, reversed: true });

NavMenu.to(navLineTop, { rotation: 45, duration: 0.3 })
  .to(navLineBottom, { rotation: -45, duration: 0.3 }, "<")
  .to(navButton, { gap: "0rem", duration: 0.3 }, "<")
  .to(blackoutMenu, { display: "block", opacity: 1, duration: 0.3 }, "<")
  .to(slideMenu, { display: "flex", width: "30rem", duration: 0.3 }, "<")
  .from(navbarMenuList, { opacity: 0, y: 20, duration: 0.2 });

const toggleMenu = () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    NavMenu.play();
  } else {
    NavMenu.reverse();
  }
};

navButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click from bubbling up to blackoutMenu
  toggleMenu();
});

blackoutMenu.addEventListener("click", () => {
  if (menuOpen) {
    toggleMenu();
  }
});

// Prevent clicks inside the slide_menu from closing the menu
slideMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

//add menu link hover interaction
document.querySelectorAll(".navbar_linkblock").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Animate the hovered item
    gsap.to(item, {
      backgroundColor: "#4734f7",
      color: "#fff",
      duration: 0.3,
      paddingLeft: "1.5rem", // Reset left padding
      paddingRight: "1.5rem", // Reset right padding
    });

    // Dim other items
    document.querySelectorAll(".navbar_linkblock").forEach((el) => {
      if (el !== item) {
        gsap.to(el, { opacity: 0.3, duration: 0.3 });
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    // Reset the hovered item
    gsap.to(item, {
      backgroundColor: "",
      color: "",
      duration: 0.3,
      paddingLeft: "0rem", // Reset left padding
      paddingRight: "0rem",
    });

    // Reset other items
    document.querySelectorAll(".navbar_linkblock").forEach((el) => {
      if (el !== item) {
        gsap.to(el, { opacity: 1, duration: 0.3 });
      }
    });
  });
});

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


$(".slider-main_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
	autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "4%",
    rewind: false,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%"
      },
      // tablet
      768: {
        slidesPerView: 1,
        spaceBetween: "4%"
      },
      // desktop
      992: {
        slidesPerView: 1,
        spaceBetween: "2%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });
});

