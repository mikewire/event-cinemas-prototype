$(function() {

//========================================================================================================//
//============================================ HOME PAGE =================================================//
//========================================================================================================//

	// If there is a slider and it has class 'animate', init the slider (in functions.js)
	
	if ($("#slider.animate").length > 0 && $("#slider.animate").is(":visible")) {
		initAnimatedSlider();
	}

	// moving the slides left and right
	$("#slider .arrow-right").click(function() {
		moveSliderRight();
	});
	$("#slider .arrow-left").click(function() {
		moveSliderLeft();
	});	

	// clicking on a thumb causing the hp feature to change
	$("#slider.animate a").click(function() {
		clearInterval(timer);
		$("#slider.animate").find("a.active").removeClass("active");
		$(this).addClass("active");
		timer = setInterval(function() { animatedSlider(); }, slide_interval);
		changeSkin();
		
	});	

});






 