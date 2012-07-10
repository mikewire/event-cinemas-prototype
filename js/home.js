$(function() {

//========================================================================================================//
//============================================ HOME PAGE =================================================//
//========================================================================================================//

	// If there is a slider and it has class 'animate', init the slider (in functions.js)
	if ($("#slider.animate").length > 0 && $("#slider.animate").is(":visible")) {
	    initAnimatedSlider();

	    // move slides up one by one, on the slide interval
	    if (timer == null) {
	        timer = setInterval(function () { animatedSlider(); }, slide_interval);
	    }
	}

	// moving the slides left and right
	$("#slider .arrow-right").click(function() {
		moveSliderRight();
	});
	$("#slider .arrow-left").click(function() {
		moveSliderLeft();
	});	

	// clicking on a thumb causing the hp feature to change
	$("#slider.animate").on("click","a", function() {
		clearInterval(timer);
		$("#slider.animate").find("a.active").removeClass("active");
		$(this).addClass("active");
		timer = setInterval(function() { animatedSlider(); }, slide_interval);
		changeSkin();
		
	});


	$("li#rotatorNowShowing").click(function () {
	    rotatorNowShowing();
	});

	$("li#rotatorComingSoon").click(function () {
	    rotatorComingSoon();
	});

	$("li#rotatorAdvancedTickets").click(function () {
	    rotatorAdvancedTickets();
	});

});






 