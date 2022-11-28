"use strict";

var burger = document.querySelector("#three-bars");
var ul = document.querySelector("nav ul");
var nav = document.querySelector("nav");
var scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
burger.addEventListener("click", function () {
  ul.classList.toggle("show");
});
var navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (link) {
  return link.addEventListener("click", function () {
    ul.classList.remove("show");
  });
});