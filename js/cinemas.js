$(function() {

//========================================================================================================//
//============================================ CINEMA LIST ===================================================//
//========================================================================================================//
    $("#Cinema-Filter").on("filter-clicked", ".filter-element span", function () {
        FilterCinemas();
    });
    

    $("#Cinema-Filter input#cinemaKeywordFilter").keyup(function () {
        delay(function () {
            FilterCinemas();
        }, 500);
    });

//========================================================================================================//
//============================================ CINEMAS ===================================================//
//========================================================================================================//

    $("#cinema-NowShowing .filters li").bind("filter-clicked", function () {
        FilterCinemaMovies();
    });
    
	// Trailer lightbox will open upon click off all links / buttons with this class
	
	$(".block .strip").click(function() {
	
		if ($("span",this).hasClass("open")) {
			$("span",this).removeClass("open").addClass("closed");
			$(this).siblings(".content").hide();
			
		} else {
		
			$("span",this).removeClass("closed").addClass("open");
			$(this).siblings(".content").show();
		
		}		
	
	});
	
	// These two events cause the trailer lightbox to close
	
	$("#trailer .close").click(function() {

		closeTrailer();
	});
	$("#cover").click(function() {
	
		closeTrailer();
	
	});
	
	// slider element on the 
	$(".cinema-promo-slider").cycle({
		fx:     'fade', 
		speed: 	1000,
		timeout: 4000,
	    next:   '.arrow-right', 
	    prev:   '.arrow-left',
	    cleartype:  1,
		cleartypeNoBg: 1 
	});


//========================================================================================================//
//============================================ PREMIUM CINEMA ===================================================//
//========================================================================================================//

	// Trailer lightbox will open upon click off all links / buttons with this class
	
	$(".third-nav a").click(function() {
		//var p = $(this).position();
		
		$(".movie-info").css("z-index","9999");
		$("#cover").show();
		//$(".overlay").css("top",p.top+145).show();
		$(".overlay").show();
			
	});
	$(".overlay .close-small").click(function() {
		//$(this).parent().parent().css("z-index","1000");
		$(".movie-info").css("z-index","100");
		$("#cover").hide();
		$(".overlay").hide();
		
	});
	$("#enquiry").click(function() {
	
		$("#cover").show();
		$(".overlay").show();
	});
	
}); // end $(function() 
