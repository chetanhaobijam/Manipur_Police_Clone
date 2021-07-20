console.log("Website script Ready!");

// Menu Toggle Script
const menu = document.querySelector("#menu-title");
const navItems = document.querySelector("#nav-items");

menu.addEventListener("click", () => {
  navItems.classList.toggle("show");
  menu.classList.toggle("dark-menu")
})

// Modal Lighthouse
function openModal() {
  document.querySelector(".modal").style.display = "block";
}

function closeModal() {
  document.querySelector(".modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}