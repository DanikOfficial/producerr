let stickyEnabled = false;
let test = false;
let notesAppShown = false;
let todoAppShow = false;
const width = document.body.offsetWidth;

document.body.style.overflow = "hidden";
window.scrollTo(0, 0);

setTimeout(
  (el) => {
    document.querySelector(el).classList.add("hide-splash");
  },
  2000,
  ".splash"
);

const splash = document.querySelector(".splash");

splash.ontransitionend = () => {
  splash.remove();
  document.body.style.overflow = "auto";
};
document.querySelector(".menu-container").onclick = () => {
  document.querySelector(".menu-container").classList.toggle("change");
  document.querySelector(".main-nav-links").classList.toggle("show");
};

document.querySelector(".take-tour").addEventListener("click", () => {
  const yPosition = document.querySelector(".notes-app").offsetTop;

  window.scrollTo(0, yPosition, "smooth");
});

document.querySelector(".go-up").addEventListener("click", () => {
  const yPosition = document.querySelector("header").offsetTop;

  window.scrollTo(0, yPosition, "smooth");
});

document.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    resetNav();
  }

  if (window.scrollY > 427 && !stickyEnabled) {
    document.querySelector(".main-nav").classList.add("sticky-nav");
    stickyEnabled = true;
  }

  if (window.scrollY > 460 && stickyEnabled) {
    document.querySelector(".main-nav").classList.add("show-sticky");
  }

  if (window.scrollY > 427 && window.scrollY < 450 && stickyEnabled) {
    document.querySelector(".main-nav").classList.remove("show-sticky");
  }

  if (window.scrollY < 420 && stickyEnabled) {
    document.querySelector(".main-nav").classList.remove("sticky-nav");
    stickyEnabled = false;
  }

  if (window.scrollY > 800) {
    document
      .querySelector(".notes-section .description")
      .classList.add("show-up");
  }

  if (document.body.offsetWidth <= 768) {
    if (window.scrollY > 320 && !notesAppShown) {
      document.querySelector(".notes-app").classList.add("slide-in");
      document.querySelector(".todo-app").classList.add("slide-up");
      notesAppShown = true;
    }
  }
});

const resetNav = () => {
  const list = Array.from(document.querySelector(".main-nav").classList).join(
    " "
  );

  if (list.includes("sticky-nav")) {
    document.querySelector(".main-nav").classList.remove("sticky-nav");
  }
  if (list.includes("show-sticky")) {
    document.querySelector(".main-nav").classList.remove("show-sticky");
  }
};
