"use strict";


let hamMenu = document.querySelector(".ham-menu");
let offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});



// scroll to top
let topIcon = document.getElementById("topIcon")

topIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});