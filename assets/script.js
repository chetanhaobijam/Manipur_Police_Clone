console.log("Website script Ready!");

// Menu Toggle Script
const menu = document.querySelector("#menu-title");
const navItems = document.querySelector("#nav-items");

menu.addEventListener("click", () => {
  navItems.classList.toggle("show");
  menu.classList.toggle("dark-menu")
})

// Modal Lightbox
const modal = document.querySelector(".my-modal");
const openModal = () => {
  modal.style.display = "block";
}
const closeModal = () => {
  modal.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = n => showSlides(slideIndex += n);

const currentSlide = n => showSlides(slideIndex = n);

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Owl Carousel Script
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true
  });
});

// Scroll To Top Button Function
const scrollToTop = document.querySelector(".scrollToTop");
const rootElement = document.documentElement;

const handleScroll = () => {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if((rootElement.scrollTop / scrollTotal) > 0.20) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
}

const scrollTop = () => {
  rootElement.scrollTo ({
    top: 0,
    behavior: "smooth"
  })
}

document.addEventListener("scroll", handleScroll);
scrollToTop.addEventListener("click", scrollTop);

// Function to Increase or Decrease Font Size
const html = document.querySelector("html");
const decrease = document.querySelector("#font-decrease");
const original = document.querySelector("#font-original");
const increase = document.querySelector("#font-increase");

const changeFontSize = (element, factor) => {
  let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  let currentSize = parseFloat(style);
  element.style.fontSize = (currentSize + factor) + 'px';
}

// Increase the font-size when clicked
increase.addEventListener("click", () => {
  changeFontSize(html, 1);
})

//Set the default font-size when clicked 
original.addEventListener("click", () => {
  html.style.setProperty("font-size", "15px");
})

// Decrease the font-size when clicked
decrease.addEventListener("click", () => {
  changeFontSize(html, -1);
})

// Function for Changing Contrast Mode (Dark/Light)
const body = document.querySelector("body");
const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const accessibility = document.querySelector(".accessibility");
const fontControls = document.querySelector(".font-controls");
const dgpMessage = document.querySelector(".dgp-message");
const messageTitle = document.querySelector(".message-title");
const linkItem = document.querySelectorAll(".link-item");

darkMode.addEventListener("click", () => {
  body.classList.add("dark-body");
  accessibility.classList.add("dark-accessibility");
  fontControls.classList.add("white-text");
  dgpMessage.classList.add("dark-dgp-message");
  messageTitle.classList.add("dark-text-shadow");
  linkItem.forEach(item => item.classList.add("dark-link-item"));
})

lightMode.addEventListener("click", () => {
  body.classList.remove("dark-body");
  accessibility.classList.remove("dark-accessibility");
  fontControls.classList.remove("white-text");
  dgpMessage.classList.remove("dark-dgp-message");
  messageTitle.classList.remove("dark-text-shadow");
  linkItem.forEach(item => item.classList.remove("dark-link-item"));
})
