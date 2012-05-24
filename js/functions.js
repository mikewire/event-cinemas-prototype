var timer;var dateScroller;
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

function init() {

	cookie = $.cookie('preferred_cinemas');
	if (cookie != null) {
		preferred_cinemas = cookie.split(/,/); 	
		removeByElement(preferred_cinemas, "");
		$("#top-ticketing-cinemas").val(preferred_cinemas);
	} 	
	if (preferred_cinemas.length > 1) {
	
		$("#where").html("<em class='star'></em>My preferred cinemas <em class='arrow-down'></em>");
		
	} else if (preferred_cinemas.length == 1) {
	
		$("#where").html("<em class='star'></em>"+preferred_cinemas[0]+"<em class='arrow-down'></em>");
	
	} else if (preferred_cinemas.length == 0) {
	
		$("#cinema-filters").html("<a class='set-preferred-cinemas'>Set your preferred cinemas</a>");
		$(".find-times-and-book").addClass("set-preferred-cinemas");
	}
	
	for ( var i=0; i < preferred_cinemas.length; i++ ) { 
		
		$(".where-blowout").find(".checkbox[value='"+preferred_cinemas[i]+"']").parent().addClass("active");
		
		
		if ($("#cinema-filters").length > 0) {
			if (preferred_cinemas[i] != "") {
				$("#cinema-filters").prepend("<span><div class='checkbox' value='"+preferred_cinemas[i]+"'></div> <label for='"+preferred_cinemas[i]+"filter'>"+preferred_cinemas[i]+"</label></span>");
			}
		}
	
	}
	if (currentMovie != "") {
	
		$("#what").html(currentMovie+"<em class='arrow-down'></em>");
		$("#top-ticketing-movies").val(currentMovie);

	}
	$("#skin").animate({"opacity":"1"}, 500, function() {});
	$("#top-ticketing-time").val($(".when-blowout li.active").text());
	

}


function initAnimatedSlider() {

	// set slider to 10s for each slide
	if ($("#slider.animate").parent().hasClass("home-items")) {
		timer = setInterval(function() { animatedSlider(true); }, slide_interval);
	} else {
		timer = setInterval(function() { animatedSlider(false); }, slide_interval);
	}
	
	// calculate how many items are shown, based on the width of the slider (varies depending on screen res.)
	items_shown = $("#slider").width() / $(".items a").width();
	
	// check how many items there are in total
	items_total = $("#slider .items a").length;
	
	//calculate by how much the items div should slide left
    slide_amount = ((Math.floor(items_shown) * 158) + (Math.floor(items_shown))*10);
    
    // calculates how many slides
    total_slides = Math.ceil(items_total / Math.floor(items_shown));
	
	/* still need to add automatic scrolling when active slide moves beyond items_shown*/	

}

function changeSkin(isHome) {
	
	
	$("#skin").fadeOut(200, function() {
	
		$("#skin").attr("src","img/hp_bck/"+$("#slider.animate a.active img").attr("skin"));
	});
	console.log(isHome);
	if (isHome) {
		$(".call-to-action").fadeOut(200);
		$("#skin").fadeIn(600, function() {
		
			$(".call-to-action img#takeover-title").attr("src","img/hp_bck/"+$("#slider.animate a.active img").attr("skin-title"));
			if ($("#slider.animate a.active img").attr("align-title") == "left") {
				$(".call-to-action .button-wrapper").css("float",$("#slider.animate a.active img").attr("align-title"));
			} else {
				$(".call-to-action .button-wrapper").css("float","right");
			}
			$(".call-to-action .btn.blue").text($("#slider.animate a.active img").attr("btn-title"));
			$(".call-to-action").fadeIn(300);
		});
	} else {
		$("#skin").fadeIn(600);
	}
}
function animatedSlider(isHome) {
	
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
		$("#slider a.active").removeClass("active").next().addClass("active");
		if (Math.floor(items_shown) == $("#slider a.active").prevAll().length) {
		
			//moveSliderRight();
		}
	}
	
	changeSkin(isHome);
	
}
function removeByElement(arrayName,arrayElement) {
	
	for ( var i=0; i < arrayName.length; i++ ) { 

		if(arrayName[i]==arrayElement) {
		
			arrayName.splice(i,1); 
		
		}
  	} 
}
function moveSliderRight() {

	$("#slider .items").animate({"left":"-="+slide_amount}, 300, function() {
	
		current_slide = current_slide + 1;
		
		console.log(total_slides);
		
		if (current_slide == total_slides) {
			$("#slider .arrow-right").hide();
		}
		
		if (!$("#slider .arrow-left").is(":visible")) {
			$("#slider .arrow-left").show();
		}
	});


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
		console.log(p.left);
	
		$(".quick-times-select-widget").css({"left":p.left-200,"top":p.top+20});
		$(".quick-times-select-widget").show();
		determineDatesScrolling();
	}

}
function emptyFunction() {


}
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

function toggleGallery() {

	$("#main.movie-detail nav").toggle();
	$("#main.movie-detail .movie-info").toggle();
	$("#main.movie-detail .movie-detail-items").toggle();
	$(".call-to-action").toggle();
	$("footer").toggle();
	$(".gallery-items").toggle();	
	$("#gallery-close").toggle();	

}