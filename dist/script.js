const hamburger=document.querySelector(".hamburger"),menu=document.querySelector(".navigation");hamburger.addEventListener("click",(function(){this.classList.toggle("active"),menu.classList.toggle("mobile")}));let slideIndex=1,plusSlides=e=>{showSlides(slideIndex+=e)},currentSlide=e=>{showSlides(slideIndex=e)},showSlides=e=>{let s,l=document.getElementsByClassName("slider__image"),d=document.getElementsByClassName("slider__dot");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<d.length;s++)d[s].className=d[s].className.replace(" active","");l[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active"};showSlides(slideIndex);
//# sourceMappingURL=script.js.map