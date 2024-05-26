gsap.set(".navbar10_menu", { xPercent: 100 });
gsap.set(".navbar10_menu_background, .navbar10_menu, .navbar_linkblock", {
  visibility: "hidden",
});

const hamburger = document.querySelector(".navbar10_hamburger");
const lines = document.querySelectorAll(".hamburger_line");
const menuBackground = document.querySelector(".navbar10_menu_background");
const menu = document.querySelector(".navbar10_menu");
const menuList = document.querySelector(".navbar10_menu_list");
const menuOverlay = document.querySelector(".navbar10_overlay");
let menuOpen = false;
let openTimeline;
let closeTimeline;

function isTimelineActive() {
  return (
    (openTimeline && openTimeline.isActive()) ||
    (closeTimeline && closeTimeline.isActive())
  );
}

function openMenu() {
  if (!isTimelineActive()) {
    openTimeline = gsap.timeline({
      defaults: { ease: "power3.InOut", overwrite: "auto" },
      onComplete: () => {
        menuOpen = true;
      },
    });

    openTimeline
      .set([menuBackground, menu, ".navbar_linkblock"], {
        visibility: "visible",
      }) // Ensure visibility before animating
      .to(hamburger, { gap: "0rem", duration: 0.2 })
      .to(lines[0], { rotation: 45, duration: 0.2 }, "<")
      .to(lines[1], { rotation: -45, duration: 0.2 }, "<")
      .set(menuBackground, { display: "block" }, "<")
      .fromTo(menuOverlay, { opacity: 0 }, { opacity: 1, duration: 0.2 }, "<")
      .set(menu, { display: "flex" }, "<")
      .to(menu, {
        xPercent: 0,
        width: "30rem",
        duration: 0.8,
        ease: "power4.out",
      })
      .to(menuList, { opacity: 1, y: 0, duration: 0.2 })
      .from(
        ".navbar_linkblock",
        { xPercent: 100, stagger: 0.1, ease: "power4.out" },
        "-=1",
      );

    lenis.stop();
  }
}

function closeMenu() {
  if (!isTimelineActive()) {
    closeTimeline = gsap.timeline({
      defaults: { ease: "power3.InOut", overwrite: "auto" },
      onComplete: () => {
        menuOpen = false;
      },
    });

    closeTimeline
      .to(menuList, { opacity: 0, y: 20, duration: 0.2 })
      .to(lines[0], { rotation: 0, duration: 0.2 }, "<")
      .to(lines[1], { rotation: 0, duration: 0.2 }, "<")
      .to(hamburger, { gap: "0.5rem", duration: 0.2, delay: 0.2 }, "<")
      .to(
        ".navbar_linkblock",
        {
          xPercent: 100,
          stagger: { each: 0.1, from: "end" },
          ease: "power4.in",
        },
        "-=75%",
      )
      .to(
        menu,
        { xPercent: 100, width: "30rem", duration: 0.5, ease: "power1.in" },
        "-=50%",
      )
      .fromTo(
        menuOverlay,
        { opacity: 1 },
        { opacity: 0, duration: 0.5, ease: "power1.in" },
        "<",
      )
      .set([menuBackground, menu], { display: "none", visibility: "hidden" }) // Hide elements after animation
      .set(".navbar_linkblock", { xPercent: 0 });

    lenis.start();
  }
}

hamburger.addEventListener("click", () => {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuBackground.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOpen) {
    closeMenu();
  }
});


document.querySelectorAll(".navbar_linkblock").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      backgroundColor: "#4734f7",
      color: "#fff",
      duration: 0.3,
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    });
    document.querySelectorAll(".navbar_linkblock").forEach((el) => {
      if (el !== item) {
        gsap.to(el, { opacity: 0.5, duration: 0.3 });
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      backgroundColor: "",
      color: "",
      duration: 0.3,
      paddingLeft: "0rem",
      paddingRight: "0rem",
    });
    document.querySelectorAll(".navbar_linkblock").forEach((el) => {
      if (el !== item) {
        gsap.to(el, { opacity: 1, duration: 0.3 });
      }
    });
  });

  item.addEventListener("touchstart", () => {
    gsap.to(item, {
      backgroundColor: "#4734f7",
      color: "#fff",
      duration: 0.3,
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    });
    document.querySelectorAll(".navbar_linkblock").forEach((el) => {
      if (el !== item) {
        gsap.to(el, { opacity: 0.3, duration: 0.3 });
      }
    });
  });
});

// Navbar up and down scroll
let lastScrollTop = 0;

function scrollDirectionHandler() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let direction = st > lastScrollTop ? "down" : "up";
  lastScrollTop = st <= 0 ? 0 : st;

  if (direction === "down") {
    gsap.to(".navbar10_component", { y: "-4rem" });
  } else {
    gsap.to(".navbar10_component", { y: "0rem" });
  }
}

window.addEventListener("scroll", scrollDirectionHandler);
