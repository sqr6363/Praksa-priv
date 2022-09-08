const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("mobile");
});

//# sourceMappingURL=script.js.map
