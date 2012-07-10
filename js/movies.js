$(function() {

//========================================================================================================//
//============================================ MOVIES OVERVIEW PAGE ======================================//
//========================================================================================================//


	$(".filter-element span").live("click",function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
		alert("AJAX update results");
	});
	
	$(".set-preferred-cinemas").live("click", function() {
	
		$("#cover").show();
		$(".where-blowout").addClass("in-the-middle").show();
		if ($(this).hasClass("find-times-and-book")) {
			console.log("is book button");
			$(".where-blowout .btn").addClass("wider").text("continue booking");
		}
	
	});



	// Thumb & Listview switch
	
	$(".thumb").click(function() {
		$(".quick-times-select-widget").hide();
		$(".movie-overview-list").hide();
		$(".movie-overview-thumb").show();
		$(".tools").find(".active").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".list").click(function() {
		$(".movie-overview-list .quick-times-select-widget").show();
		$(".movie-overview-thumb").hide();
		$(".movie-overview-list").show();
		determineDatesScrolling();
		$(".tools").find(".active").removeClass("active");
		$(this).addClass("active");
	});


	// In thumbview we open the quick times widget upon mouseover, with a bit of delay, using hoverIntent
	
	var config = {    
	     over: showQuickTimesWidget,     
	     timeout: 500,    
	     out: emptyFunction 
	};

	$(".find-times-and-book").hoverIntent( config );	
	
/*
	var config_seats = {    
	     over: showAvailableSeatsLink,     
	     timeout: 2000,    
	     out: emptyFunction 
	};
	
	$(".quick-times-select-widget .dates-row .btn").hoverIntent(config_seats);
*/
	
	
	$(".btn.find-times-and-book").click(function() {
	
		$("#top-ticketing-form").submit();

	});
	
	
	// If we're in listview, we need to see which dates rows are longer than the allowed content area, so we throw the arrow
	
	if ($(".movie-overview-list").length > 0) {
	
		determineDatesScrolling();	
	
	}	
	$("#main.movies .image-wrapper img").click(function() {
		var link = $(this).parent().find(".details-link");
		window.location.href = $(link).attr("href");
	});
	$("#main.movies .image-wrapper .title").click(function() {
		var link = $(this).siblings(".details-link");
		window.location.href = $(link).attr("href");
	});
	
	// In the quick times widget, this will throw an AJAX event to change the times for that day
	
	$(".dates li").click(function() {
		
		// ajax event to get times for this day
		
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");
		alert("AJAX update");
	});
	
	// If the quick times widget was opened by mouseover, get rid of it again upon mouseleave
	
	$(".quick-times-select-widget").mouseleave(function() {
		if (!$(this).parent().hasClass("movie-list-item")) {
			$(".quick-times-select-widget").hide();
		}
	});

	
	// Upon hover of the reveal more arrow for the date buttons, the row slides left to reveal more dates
	
	$(".reveal-more").hover(function() {
		$(this).siblings(".reveal-less").show();
		var reveal_more = $(this);
		var wrap = $(this).siblings(".cinema-row-wrapper");
		var dates = $(".dates-row", wrap);
		$(".shadow-left", wrap).show();
		var parentEl = $(this).parent().parent().parent();
		dateScroller = setInterval(function() { scrollDatesLeft(parentEl, dates,reveal_more); }, 5);
		
	}, function() {
	
		clearInterval(dateScroller);
		
	});
	
	// The reveal less button scrolls the dates to the right.
	
	$(".reveal-less").hover(function() {
		var reveal_less = $(this);
		$(this).siblings(".reveal-more").show();
		var wrap = $(this).siblings(".cinema-row-wrapper");
		var dates = $(".dates-row", wrap);	
		dateScroller = setInterval(function() { scrollDatesRight(dates,reveal_less); }, 5);

		
	}, function() {
	
		clearInterval(dateScroller);
		
	});



//========================================================================================================//
//============================================ MOVIE DETAIL ==============================================//
//========================================================================================================//


/*
	if ($("#slider.static").length > 0 && $("#slider.static").is(":visible")) {
		initStaticSlider();
	}
*/
	

});