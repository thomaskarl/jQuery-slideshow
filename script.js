/**
 * jQuery Slideshow
 * By: Thomas Karl Andersson
 * https://thomasweb.studio/
 **/



// Set the speed of autoslide
const speedSlide = 10000; //milliseconds



// Function to change slide
function changeContent(d) {
	let currentSlide = $('.active');
	let currentDot = $('.active-dot');
	let nextSlide = currentSlide.next();
	let nextDot = currentDot.next();
	let prevSlide = currentSlide.prev();
	let prevDot = currentDot.prev();

	if (d === 'next') {
		if (nextSlide.length) {
			nextSlide.addClass('active');
			nextDot.addClass('active-dot');
		} else {
			$('.slideshow-container .content').first().addClass('active');
			$('.dots .dot').first().addClass('active-dot');
		}

	} else if (d === 'prev') {
		if (prevSlide.length) {
			prevSlide.addClass('active');
			prevDot.addClass('active-dot');
		} else {
			$('.slideshow-container .content').last().addClass('active');
			$('.dots .dot').last().addClass('active-dot');
		}
	}
	currentSlide.removeClass('active');
	currentDot.removeClass('active-dot');
}



//Function for autoslide
setInterval(function autoChange() {
	changeContent('next');
}, speedSlide);



// Fullscreen & 'nav-dots'
$('.content').click(function () {
	$('.active').toggleClass('full-screen');
}).each(function () {
	$('.dots').append('<div class="dot"></div>');
});

$('.dots .dot:first-child').addClass('active-dot');

$('.close').css('cursor', 'pointer').click(function () {
	$('.active').removeClass('full-screen');
});



// Next and previous functions
$('.next').click(function () {
	changeContent('next');
});

$('.prev').click(function () {
	changeContent('prev');
});
