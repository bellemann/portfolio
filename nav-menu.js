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

navButton.addEventListener("click", toggleMenu);
navButton.addEventListener("touchstart", toggleMenu); // Handle touch events for mobile

blackoutMenu.addEventListener("click", () => {
  if (menuOpen) {
    toggleMenu();
  }
});

// Prevent clicks inside the slide_menu from closing the menu
slideMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Add touch event handling for menu link hover interaction
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

  // Add touch event handling for mobile
  item.addEventListener("touchstart", () => {
    // Animate the touched item
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
});
