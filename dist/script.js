const hamburger=document.querySelector(".hamburger"),menu=document.querySelector(".navigation");hamburger.addEventListener("click",(function(){this.classList.toggle("active"),menu.classList.toggle("mobile")}));let slideIndex=1,plusSlides=e=>{showSlides(slideIndex+=e)},currentSlide=e=>{showSlides(slideIndex=e)},showSlides=e=>{let l,s=document.getElementsByClassName("slider__image"),t=document.getElementsByClassName("slider__dot");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),l=0;l<s.length;l++)s[l].style.display="none";for(l=0;l<t.length;l++)t[l].className=t[l].className.replace(" active","");s[slideIndex-1].style.display="block",t[slideIndex-1].className+=" active"};showSlides(slideIndex);const carousel=document.querySelector(".testimonials__carousel"),items=document.querySelector(".testimonials__card"),toggle=document.querySelector(".toggle");document.addEventListener("click",delegate(toggleFilter,toggleHandler));
//# sourceMappingURL=script.js.map