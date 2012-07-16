$(function() {

	$(".form-block .listing").on("click", "span", function() {
	
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		
	});
	$(".form-block.last").on("click", "span", function() {
	
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		
	});
	
	$(".membership").on("click", ".checkbox", function() {
	
		if ($(this).hasClass("checked")) {
			$(this).removeClass("checked");
		} else {
			$(this).addClass("checked");
		}
		
	});	
	$(".membership").on("click", "img", function() {
	
		if ($(this).siblings(".checkbox").hasClass("checked")) {
			$(this).siblings(".checkbox").removeClass("checked");
		} else {
			$(this).siblings(".checkbox").addClass("checked");
		}
		
	});	
	

	$(".recommended-movies-wrapper").cycle({
		
		fx:     'scrollHorz', 
		speed: 	500,
		timeout: 0,
	    next:   '.move-right', 
	    prev:   '.move-left' 
		
	});
	$(".offerslider .slide-wrapper").cycle({
		
		fx:     'scrollHorz', 
		speed: 	900,
		timeout: 3500,
	    next:   '.move-offer-right', 
	    prev:   '.move-offer-left' 
		
	});
	if ($("header .progress").length > 0) {
		
		var points_width = (parseInt($("header p.points strong").text())/320)*100;
	
		if (points_width > 100) {
			$("header .progress").width(100);
		} else {
			$("header .progress").width(points_width);
		
		}
	
	}

	if ($(".main .progress").length > 0) {
	
		if (parseInt($(".main .progress p").text()) > 320) {
			$(".main .progress").width(320);
		} else {
			$(".main .progress").width($(".main .progress p").text());
		
		}
		$(".progress-bar a").tooltip({ 
		    track: true, 
		    delay: 0, 
		    showURL: false, 
		    showBody: " - ", 
		    fade: 100,
		    top: -65, 
    		left: -55
		});
	
	}
	if ($(".help").length > 0) {

		$(".help").tooltip({ 
		    track: true, 
		    delay: 0, 
		    showURL: false, 
		    showBody: " - ", 
		    fade: 100
		});
	}
});