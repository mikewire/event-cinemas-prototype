var timer;
var dateScroller;
var selected_movies = new Array();
var items_shown = 0;
var items_total = 0;
var slide_amount = 0;
var total_slides = 0;
var current_slide = 1;
var slide_interval = 12000;
var rememberSkin = "";
var cookie = "";
var preferred_cinemas = new Array();

// init the animated slider at bottom of homepage 
function initStaticSlider() {
	
	// calculate how many items are shown, based on the width of the slider (varies depending on screen res.)
	items_shown = $("#slider").width() / $(".items a").width();
	
	// check how many items there are in total
	items_total = $("#slider .items a").length;
	
	//calculate by how much the items div should slide left
    slide_amount = ((Math.floor(items_shown) * 158) + (Math.floor(items_shown))*10);
    
    // calculates how many slides
    total_slides = Math.ceil(items_total / Math.floor(items_shown));
    
    if (total_slides > 1) {
    
    	$(".arrow-right").show();
    }
    console.log("items shown: "+items_shown+" items total: "+items_total+ "total slides: "+total_slides );
    
}

// init the animated slider at bottom of homepage 
function initAnimatedSlider() {
	
	// calculate how many items are shown, based on the width of the slider (varies depending on screen res.)
	items_shown = $("#slider").width() / $(".items a").width();
	
	// check how many items there are in total
	items_total = $("#slider .items a").length;
	
	//calculate by how much the items div should slide left
    slide_amount = ((Math.floor(items_shown) * 158) + (Math.floor(items_shown))*10);
    
    // calculates how many slides
    total_slides = Math.ceil(items_total / Math.floor(items_shown));
	
    if (total_slides > 1) {
    
    	$(".arrow-right").show();
    }

	// move slides up one by one, on the slide interval
	timer = setInterval(function() { animatedSlider(); }, slide_interval);
	
}

function animatedSlider() {
	
	// if slider reached the end, go back to the start
	if ($("#slider a.active").nextAll().length == 0) {
		$("#slider a.active").removeClass("active");
		$("#slider a:first-child").addClass("active");
		$("#slider .items").animate({"left":"10px"}, 300, function() {
		
			current_slide = 1;
			$("#slider .arrow-left").hide();			
			if (!$("#slider .arrow-right").is(":visible")) {
				$("#slider .arrow-right").show();
			}
		
		});
		
	} else {
		
		// if slider is not the end, set the next thumb to be active
		$("#slider a.active").removeClass("active").next().addClass("active");
		
		// if the division of the previous thumbs and the items shown is zero - move to next slide
		var div = $("#slider a.active").prevAll().length % Math.floor(items_shown);		
		if (div == 0) {
			moveSliderRight();
		}
	}
	
	// change the skin to match the next thumbnail
	changeSkin();
	
}

// fade out the current background skin, and load the next active thumb (either animated or on click)
function changeSkin() {
	
	$("#background-wrap").fadeOut(200, function() {
	
		// set the background image according to the skin attribute on the thumb image
		$("#background-wrap").css("background-image","url(img/hp_bck/"+$("#slider.animate a.active img").attr("skin")+")");
	});
	
	$(".call-to-action").fadeOut(200);
	
	$("#background-wrap").fadeIn(600, function() {
	
		$(".call-to-action img#takeover-title").attr("src","img/hp_bck/"+$("#slider.animate a.active img").attr("skin-title"));
		if ($("#slider.animate a.active img").attr("align-title") == "left") {
			$(".call-to-action .button-wrapper").css("float",$("#slider.animate a.active img").attr("align-title"));
		} else {
			$(".call-to-action .button-wrapper").css("float","right");
		}
		$(".call-to-action .btn.blue").text($("#slider.animate a.active img").attr("btn-title"));
		$(".call-to-action").fadeIn(300);
	});

}
function moveSliderRight() {

	$("#slider .items").animate({"left":"-="+slide_amount}, 300, function() {
	
		current_slide = current_slide + 1;
				
		if (current_slide == total_slides) {
			$("#slider .arrow-right").hide();
		}
		
		if (!$("#slider .arrow-left").is(":visible")) {
			$("#slider .arrow-left").show();
		}
	});

}
function moveSliderLeft() {

	$("#slider .items").animate({"left":"+="+slide_amount}, 300, function() {
	
		current_slide = current_slide - 1;
		
		if (current_slide == 1) {
			$("#slider .arrow-left").hide();
		}
		
		if (!$("#slider .arrow-right").is(":visible")) {
			$("#slider .arrow-right").show();
		}
	
	});

}


function removeByElement(arrayName,arrayElement) {
	
	for ( var i=0; i < arrayName.length; i++ ) { 

		if(arrayName[i]==arrayElement) {
		
			arrayName.splice(i,1); 
		
		}
  	} 
}

function closeTrailer() {
 
	$("#trailer video")[0].pause();
	$("#cover").hide();
 	$("#trailer").hide();
 	if ($(".home-items #slider").length > 0) {
 	
 		timer = setInterval(function() { animatedSlider(true); }, slide_interval);
 	}
}

function scrollDatesLeft(parentEl, el,reveal_more) {
	//console.log(el.siblings(".cinema-row-wrapper"));
	var p = $(el).position();
	console.log($(".width-wrap",el).width());
	
	if (p.left > ($(".cinema-row-wrapper", parentEl).width()-$(".width-wrap",el).width() )) {
		$(el).css({"left":"-=2px"});
	} else {
		$(reveal_more).hide();
	}

}
function scrollDatesRight(el, reveal_less) {
	//console.log(el.siblings(".cinema-row-wrapper"));
	var p = $(el).position();
	console.log(p.left);
	if (p.left < 0) {
		$(el).css({"left":"+=2px"});
	} else {
		$(reveal_less).hide();
	}

}

function determineDatesScrolling() {

	$(".cinema-row").each(function() {
		if ($(".width-wrap", this).width() > $(".cinema-row-wrapper").width()) {
		
			$(".reveal-more", this).show();
			$(".shadow-right", this).show();
		}
	});

}
function showQuickTimesWidget() {

	//$(this).addClass("active");
	if (preferred_cinemas.length > 0) {
		var p = $(this).parent().parent().position();
		//console.log(p.left);
	
		$(".quick-times-select-widget").css({"left":p.left-200,"top":p.top+20});
		$(".quick-times-select-widget").show();
		determineDatesScrolling();
	}

}
function showAvailableSeatsLink() {

	var p = $(this).parent().parent().parent().parent().position();
	var l = $(this).position();
	console.log(p.top);
	console.log(l.left);
	$(".view-seats-link").css({"left":l.left+100,"top":p.top-40});
	$(".view-seats-link").show();

}
function emptyFunction() {}
function TicketBarZIndex(nr) {

	$("#ticket-bar").css("z-index",nr);
	
}
function hideAllTicketBarBlowouts() {

	$("#where").removeClass("active");
	$(".where-blowout").hide(); 
	$("#what").removeClass("active");
	$(".what-blowout").hide(); 
	$("#when").removeClass("active");
	$(".when-blowout").removeClass("in-the-middle").hide(); 
	$(".where-blowout .btn").removeClass("wider").text("done");	
	TicketBarZIndex(4000);
	$(".overlay").hide();
	$("#cover").hide();
}
