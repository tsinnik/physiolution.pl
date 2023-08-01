$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
		responsive: {
			// breakpoint from 0 up
			loop: true,
			0: {
				items: 2,
				margin: 32,
				loop: true,
				dots: true
			},
			// breakpoint from 480 up
			601: {
				items: 3,
				margin: 32,
				loop: true,
				dots: true
			},
			// breakpoint from 768 up
			1001: {
				items: 3,
				margin: 48,
				dots: true,
				loop: true
			},
		},
	});
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


$("[data-scroll]").on("click", function(event) {
	event.preventDefault();

	var $this = $(this),
		blockId = $this.data('scroll'),
		blockOffset = $(blockId).offset().top;

	$("#nav a").removeClass("active");
	$this.addClass("active");

	$("html, body").animate({
		scrollTop:  blockOffset
	}, 500);
});
