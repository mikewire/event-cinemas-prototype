$(document).ready(function() {
	

	init();
	
//========================================================================================================//
//============================================ TOP TICKETING WIDGET ======================================//
//========================================================================================================//

	
	
	$("#cine-buzz").hover(function() {
		$("#cine-buzz-blowout").show();
		
	});
	$("#cine-buzz-blowout").mouseleave(function() {
	
		$("#cine-buzz-blowout").hide();
	
		
	});

	
	$("#ticket-bar .btn").click(function() {
	
	
		$("#top-ticketing-form").submit();
		//console.log("submit");
	}); 

	// To hide all the ticket bar blowouts
	
	$("#wrapper").click(function() {
		$("#where").removeClass("active");
		$(".where-blowout").hide(); 
		$("#what").removeClass("active");
		$(".what-blowout").hide(); 
		$("#when").removeClass("active");
		$(".when-blowout").hide(); 
		TicketBarZIndex(4000);
		
	});
	$("#cover").click(function() {
	
		hideAllTicketBarBlowouts();
	});




	// where would you like to go 
	
	$("#where").click(function() { 
						
		if ($(".where-blowout").is(":visible")) {
			hideAllTicketBarBlowouts(); 
			
		} else {
			$("#cover").show();
			TicketBarZIndex(9999);
			$(this).addClass("active");
			$(".where-blowout").show(); 
			$("#what").removeClass("active");
			$(".what-blowout").hide(); 
			$("#when").removeClass("active");
			$(".when-blowout").hide(); 
		
		}
		
	});
	$(".where-blowout span").click(function() {
		if ($("input",this).is(':checked')) {
			$("input",this).attr("checked", false);
			removeByElement(preferred_cinemas, $("label",this).text());
			$.cookie('preferred_cinemas', preferred_cinemas);
			$(this).removeClass("active");
		} else {
			$("input",this).attr("checked", true);		
			removeByElement(preferred_cinemas, $("label",this).text());
			preferred_cinemas.push($("label",this).text());
			$.cookie('preferred_cinemas', preferred_cinemas);
			$(this).addClass("active");
		}
		
		if (preferred_cinemas.length > 1) {
		
			$("#where").html("<em class='star'></em>My preferred cinemas <em class='arrow-down'></em>");
			
		} else if (preferred_cinemas.length == 1) {
			
			$("#where").html("<em class='star'></em>"+preferred_cinemas[0]+"<em class='arrow-down'></em>");
		
		} else {
		
			$("#where").html("Select cinema(s)<em class='arrow-down'></em>");
		} 
		$("#top-ticketing-cinemas").val(preferred_cinemas);
		
	});
	$(".where-blowout .done").click(function() {
		hideAllTicketBarBlowouts();
		console.log($.cookie('preferred_cinemas'));
		
	});
	
	
	// What would you like to see 

	$("#what").click(function() { 
		
		if ($(".what-blowout").is(":visible")) {

			hideAllTicketBarBlowouts(); 

			
		
		} else {
			$("#cover").show();
			TicketBarZIndex(9999);
		
			$(this).addClass("active");
			$(".what-blowout").show(); 
			$("#where").removeClass("active");
			$(".where-blowout").hide(); 
			$("#when").removeClass("active");
			$(".when-blowout").hide(); 
		
		}
		
	});
	$(".what-blowout .movie-overview span").click(function() {
	
		if ($("input",this).is(':checked')) {
			$("input",this).prop("checked", false);
			removeByElement(selected_movies, $(".title",this).text());
			$(this).removeClass("active");
		} else {
			$("input",this).prop("checked", true);		
			removeByElement(selected_movies, $(".title",this).text());
			selected_movies.push($(".title",this).text());
			$(this).addClass("active");
		}
		for ( var i=0; i < selected_movies.length; i++ ) { 
			console.log(selected_movies[i]);
		}

		if (selected_movies.length > 1) {
		
			$("#what").html("Your selected movies <em class='arrow-down'></em>");
			
		} else if (selected_movies.length == 1) {
			
			$("#what").html(selected_movies[0]+"<em class='arrow-down'></em>");
		
		} else {
		
			$("#what").html("Any movie now showing<em class='arrow-down'></em>");
		} 
		$("#top-ticketing-movies").val(selected_movies);

	});
	$(".what-blowout .done").click(function() {
		hideAllTicketBarBlowouts();
			
	});
	
	
	
	// When would you like to see it 

	$("#when").click(function() { 
		
		if ($(".when-blowout").is(":visible")) {

			hideAllTicketBarBlowouts();
			
		
		} else {
			$("#cover").show();
			TicketBarZIndex(9999);
		
			$(this).addClass("active");
			$(".when-blowout").show(); 
			$("#where").removeClass("active");
			$(".where-blowout").hide(); 
			$("#what").removeClass("active");
			$(".what-blowout").hide(); 
		
		}
		
	});
	
	$(".when-blowout li").click(function() {
	
		$(".when-blowout li").each(function() {
		
			$(this).removeClass("active");
		});
		$("#top-ticketing-time").val($(this).text());
		
		$(this).addClass("active");
		$("#when").html($(this).text()+"<em class='arrow-down'></em>");
		hideAllTicketBarBlowouts();
	});

});







//========================================================================================================//
//============================================ HOME PAGE =================================================//
//========================================================================================================//







	// Here the various events for the homepage slider event are handled
	
	if ($("#slider.animate").length > 0 && $("#slider.animate").is(":visible")) {
	
		initAnimatedSlider();

	}


	$("#slider .arrow-right").click(function() {
		
		moveSliderRight();
		
	});
	$("#slider .arrow-left").click(function() {

		$("#slider .items").animate({"left":"+="+slide_amount}, 300, function() {
		
			current_slide = current_slide - 1;
			
			if (current_slide == 1) {
				$("#slider .arrow-left").hide();
			}
			
			if (!$("#slider .arrow-right").is(":visible")) {
				$("#slider .arrow-right").show();
			}
		
		});

	});	

	$("#slider.animate a").click(function() {
	
		$("#slider.animate").find("a.active").removeClass("active");
		$(this).addClass("active");
		if ($("#slider.animate").parent().hasClass("home-items")) {
			changeSkin(true);
			clearInterval(timer);
			timer = setInterval(function() { animatedSlider(true); }, slide_interval);
		} else {
			changeSkin(false);
			clearInterval(timer);
			timer = setInterval(function() { animatedSlider(false); }, slide_interval);
		}
		
	});	




//========================================================================================================//
//============================================ MOVIES OVERVIEW PAGE ======================================//
//========================================================================================================//


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
		$(".innerpage .movie-overview").show();
		$(".tools").find(".active").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".list").click(function() {
		$(".movie-overview-list .quick-times-select-widget").show();
		$(".innerpage .movie-overview").hide();
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
	
	// In the quick times widget, this will throw an AJAX event to change the times for that day
	
	$(".dates li").click(function() {
		
		// ajax event to get times for this day
		
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");
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



	$(".opengallery").click(function() {
	
		toggleGallery();
		rememberSkin = $("#skin").attr("src");
		$("#slider.animate a:first-child").addClass("active");
		$("#skin").fadeOut(200, function() {
	
			$("#skin").attr("src","img/hp_bck/"+$("#slider.animate a.active img").attr("skin"));
			$("#skin").fadeIn(600);
		});
		initAnimatedSlider();
	});
	
	$("#gallery-close").click(function() {
	
		$("#skin").fadeOut(200, function() {
	
			$("#skin").attr("src",rememberSkin);
			$("#skin").fadeIn(600);
		});
		clearInterval(timer);
		toggleGallery();
	
	});

//========================================================================================================//
//============================================ TRAILER ===================================================//
//========================================================================================================//


	// Trailer lightbox will open upon click off all links / buttons with this class
	
	$(".poptrailer").click(function() {
	
		if ($(".home-items #slider").length > 0) {
			clearInterval(timer);
		}
		console.log("trailer");
		$("#cover").show();
		$("#trailer").show();
		
	
	});
	
	// These two events cause the trailer lightbox to close
	
	$("#trailer .close").click(function() {

		closeTrailer();
	});
	$("#cover").click(function() {
	
		closeTrailer();
	
	});
	







