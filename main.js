// document.querySelector(".menu-btn").addEventListener("click", () => {
//   document.querySelector(".nav-menu").classList.toggle("show");
// });

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }else{
    navMenu.classList.add("show");
  }
});

document.querySelector(".gaming").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});

document.querySelector(".partners").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});

document.querySelector(".features").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});

document.querySelector(".portfolio").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});

document.querySelector(".testimonial").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});


document.querySelector(".team").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});

document.querySelector(".footer").addEventListener('click', () => {
  if (navMenu.classList.contains("show")){
    navMenu.classList.remove("show");
  }
});