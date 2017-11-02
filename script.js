var btnPrev = document.querySelector(".buttons > .btn-prev");
var btnNext = document.querySelector(".buttons > .btn-next");

var arrowPrev = document.querySelector(".arrow-block-prev");
var arrowNext = document.querySelector(".arrow-block-next");

var slides = document.querySelectorAll(".slides > .slide");
var activeSlide = 0;

btnNext.addEventListener("click", nextSlide);

arrowNext.addEventListener("click", nextSlide);

btnPrev.addEventListener("click", previousSlide);

arrowPrev.addEventListener("click", previousSlide);

function nextSlide(){

	if(event){
		event.preventDefault();
	}

	if(slides[activeSlide].classList.contains("slide-active-next"))
		slides[activeSlide].classList.remove("slide-active-next");
	if(slides[activeSlide].classList.contains("slide-active-prev"))
		slides[activeSlide].classList.remove("slide-active-prev");
	if(slides[activeSlide].classList.contains("slide-active"))
		slides[activeSlide].classList.remove("slide-active");

	activeSlide++;

	if (activeSlide == slides.length){
		activeSlide = 0;
	}

	slides[activeSlide].classList.add("slide-active-next");
}

function previousSlide(){
	
	if(event){
		event.preventDefault();
	}

	if(slides[activeSlide].classList.contains("slide-active-next"))
		slides[activeSlide].classList.remove("slide-active-next");
	if(slides[activeSlide].classList.contains("slide-active-prev"))
		slides[activeSlide].classList.remove("slide-active-prev");
	if(slides[activeSlide].classList.contains("slide-active"))
		slides[activeSlide].classList.remove("slide-active");

	activeSlide--;

	if (activeSlide < 0){
		activeSlide = slides.length - 1;
	}

	slides[activeSlide].classList.add("slide-active-prev");
}

setInterval(nextSlide, 2500);

nextSlide();
previousSlide();