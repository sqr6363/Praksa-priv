const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("mobile");
});

let slideIndex = 1;

let plusSlides = (n) => {
  showSlides((slideIndex += n));
};

let currentSlide = (n) => {
  showSlides((slideIndex = n));
};

let showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("slider__image");
  let dots = document.getElementsByClassName("slider__dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

showSlides(slideIndex);

//# sourceMappingURL=script.js.map
