let stickyEnabled = false;
let stickyShown = false;

let test = false;
let notesAppShown = false;
let todoAppShown = false;
let goUpShown = false;
const width = document.body.offsetWidth;

document.querySelector(".go-up").addEventListener("mouseover", () => {
  document.querySelector(".lets-go-up").classList.add("show-lets-go-up");
  goUpShown = true;
});

document.querySelector(".go-up").addEventListener("mouseout", () => {
  if (goUpShown) {
    document.querySelector(".lets-go-up").classList.add("hide-lets-go-up");
    document.querySelector(".lets-go-up").classList.remove("show-lets-go-up");

    document.querySelector(".lets-go-up").onanimationend = () => {
      document.querySelector(".lets-go-up").classList.remove("hide-lets-go-up");
    };

    goUpShown = false;
  }
});

document.querySelector(".logo").addEventListener("click", () => {
  window.scroll(0, 0, "smooth");
});

document.querySelector(".menu-container").onclick = () => {
  document.querySelector(".menu-container").classList.toggle("change");
  document.querySelector(".main-nav-links").classList.toggle("show");
};

document.querySelector(".take-tour").addEventListener("click", () => {
  const yPosition = document.querySelector(".notes-app").offsetTop - 60;

  window.scrollTo(0, yPosition, "smooth");
});

document.querySelector(".go-up").addEventListener("click", () => {
  const yPosition = document.querySelector("header").offsetTop;

  window.scrollTo(0, yPosition, "smooth");
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 100 && !stickyEnabled) {
    document.querySelector(".main-nav").classList.add("hide-nav");
  }

  if (window.scrollY < 100 && (!stickyEnabled || stickyEnabled)) {
    document.querySelector(".main-nav").classList.remove("hide-nav");
  }

  if (window.scrollY > 200 && !stickyEnabled) {
    document.querySelector(".main-nav").classList.add("sticky-nav");
    stickyEnabled = true;
  }

  if (window.scrollY <= 200 && stickyEnabled) {
    document.querySelector(".main-nav").classList.remove("sticky-nav");
    stickyEnabled = false;
  }

  if (window.scrollY >= 460 && !stickyShown) {
    document.querySelector(".main-nav").classList.add("show-sticky");
    stickyShown = true;
  }

  if (window.scrollY < 460 && stickyShown) {
    document.querySelector(".main-nav").classList.remove("show-sticky");
    stickyShown = false;
  }

  if (document.body.offsetWidth >= 1024) {
    if (window.scrollY > 480) {
      document
        .querySelector(".notes-section .description")
        .classList.add("show-up");
    }
  } else {
    if (window.scrollY > 600) {
      document
        .querySelector(".notes-section .description")
        .classList.add("show-up");
    }
  }

  if (document.body.offsetWidth <= 768) {
    if (window.scrollY > 320 && !notesAppShown) {
      document.querySelector(".notes-app").classList.add("slide-in");
      notesAppShown = true;
    }

    if (window.scrollY > 420 && !todoAppShown) {
      document.querySelector(".todo-app").classList.add("slide-up");
      todoAppShown = true;
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
