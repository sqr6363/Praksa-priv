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

const carousel = document.querySelector(".testimonials__carousel");
const items = document.querySelector(".testimonials__card");
const toggle = document.querySelector(".toggle");

document.addEventListener("click", delegate(toggleFilter, toggleHandler));

function delegate(criteria, listener) {
  return function (e) {
    const el = e.target;
    do {
      if (!criteria(el)) {
        continue;
      }
      e.delegateTarget = el;
      listener.call(this, e);
      return;
    } while ((el = el.parentNode));
  };
}

function toggleFilter(elem) {
  return elem instanceof HTMLElement && elem.matches(".toggle");
}

function toggleHandler(e) {
  let newCard;
  const el = document.querySelector(".is-ref");
  const currSliderControl = e.delegateTarget;

  el.classList.remove("is-ref");
  if (currSliderControl.getAttribute("data-toggle") === "next") {
    newCard = next(el);
    carousel.classList.remove("is-reversing");
  } else {
    newCard = prev(el);
    carousel.classList.add("is-reversing");
  }

  newCard.classList.add("is-ref");
  newCard.style.order = 1;
  for (let i = 2; i <= items.length; i++) {
    newCard = next(newCard);
    newCard.style.order = i;
  }

  carousel.classList.remove("is-set");
  return setTimeout(function () {
    return carousel.classList.add("is-set");
  }, 50);

  function next(el) {
    if (el.nextElementSibling) {
      return el.nextElementSibling;
    } else {
      return carousel.firstElementChild;
    }
  }

  function prev(el) {
    if (el.previousElementSibling) {
      return el.previousElementSibling;
    } else {
      return carousel.lastElementChild;
    }
  }
}

//# sourceMappingURL=script.js.map
