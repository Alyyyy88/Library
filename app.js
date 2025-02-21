const dark = document.querySelector("#dark-theme");
const light = document.querySelector("#light-theme");

const body = document.querySelector("body");
const aside = document.querySelector("aside");
const nav = document.querySelector("nav");

const slide = document.querySelector(".slider");

dark.addEventListener("click",function(){
  dark.classList.toggle("non-active");
  body.classList.toggle("dark");
  aside.classList.toggle("dark");
  light.classList.toggle(".acitve");
});

// slide.addEventListener("click",function(){
//   slide.classList.toggle("active");
// })