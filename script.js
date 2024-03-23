"use strict";

let hamMenu = document.querySelector(".ham-menu");
let offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

window.onscroll = function () {
  if (window.scrollY > 300) {
    myNav.classList.add("newNav");
  } else {
    myNav.classList.remove("newNav");
  }
};

// scroll to top
let topIcon = document.getElementById("topIcon");

topIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});