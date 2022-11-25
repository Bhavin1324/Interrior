AOS.init({
  startEvent: "DOMContentLoaded",
  offset: 100,
  duration: 1000,
});

window.addEventListener("load", () => {
  document.querySelector(".loader").classList.remove("loader");
});

let elem = document.querySelector(".navbar");
function scrollAction() {
  console.log(window.scrollY);
  elem.classList.toggle("scroll-active", window.scrollY > 0);
  if (window.scrollY > 0) {
    elem.classList.add("scroll-active");
  } else {
    elem.classList.remove("scroll-active");
  }
}

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".nav-menu");
let navbar = document.querySelector(".navbar");
//hamburger styling
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  navbar.classList.toggle("light-up");
});
document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    navbar.classList.toggle("light-up");
  })
);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    if (navbar.classList.contains("light-up")) {
      navbar.classList.remove("light-up");
    }
  } else {
    if (hamburger.classList.contains("active")) {
      navbar.classList.add("light-up");
    } else {
      navbar.classList.remove("light-up");
    }
  }
});

//carousel
let slides = document.querySelectorAll(".slide");
let count = 0;
function reset() {
  slides.forEach((slide) => (slide.style.opacity = "0"));
}
function slideShow() {
  reset();
  slides[0].style.opacity = "1";
  setInterval(() => {
    if (count === slides.length - 1) {
      count = -1;
    }
    nextSlide();
  }, 8000);
}
function nextSlide() {
  reset();
  slides[count + 1].style.opacity = "1";
  count++;
}
slideShow();
