function getCinemaUrl(cinemaName) {
    var $cinemas = $(".cinemaItem a");
    for (var i = 0; i < $cinemas.length; i++) {
        if ($($cinemas[i]).text().toLowerCase() == cinemaName.trim().toLowerCase()) {
            return $($cinemas[i]).attr('href');
        }
    }
    return "#";
}

$(function () {

//========================================================================================================//
//============================================ CINEMA LIST ===================================================//
//========================================================================================================//
    $("#Cinema-Filter").on("filter-clicked", ".filter-element span", function () {
        FilterCinemas();
    });

    $(".where-blowout").on("set-cinema", "span", function () {
        if ($("#cinema-list-preferred").length > 0) {
            var cinemaName = $("div", this).attr("value");
            if ($.inArray(cinemaName, preferred_cinemas) >= 0) {
                var cinemaData = new Array();
                cinemaData.push({ Name: cinemaName, Id: getCinemaId(cinemaName), Url: getCinemaUrl(cinemaName) });
                $("#cinema-list-favorite-cinema").tmpl(cinemaData).appendTo($preflist);
            } else {
                $("#cinema-list-preferred a").each(function() {
                    if ($(this).text() == cinemaName) {
                        $(this).parent("dt.fav").fadeOut().remove();
                    }
                });
            }
            $("#preferred-cinema-count").text(preferred_cinemas.length);
        }
    });

    
    // In the quick times widget, this will throw an AJAX event to change the times for that day
    $("ul#cinemaNowShowingDates li").click(function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        $("div.movie-list-item:visible").hide();
        FilterCinemaNowShowing();
    });
    
    $("#Cinema-Filter input#cinemaKeywordFilter").keyup(function () {
        delay(function () {
            FilterCinemas();
        }, 500);
    });
    
    if (preferred_cinemas.length > 0 && $("#cinema-list-preferred").length > 0) {
        var $preflist = $("#cinema-list-preferred dl");
        var cinemaData = new Array();
        $.each(preferred_cinemas, function (i,cinemaName) {
            cinemaData.push({ Name: cinemaName, Id: getCinemaId(cinemaName), Url: getCinemaUrl(cinemaName) });
        });
        
        $("#cinema-list-favorite-cinema").tmpl(cinemaData).appendTo($preflist);
    }
    
    $("#preferred-cinema-count").text(preferred_cinemas.length);

    $("#cinema-list-preferred").on("click", "span.x", function() {
        var cinemaName = $(this).prev().text();
        $(".where-blowout span div[value='" + cinemaName + "']").parent().click();
        $(this).parent(".fav").fadeOut().remove();
        $("#preferred-cinema-count").text(preferred_cinemas.length);
    });
//========================================================================================================//
//============================================ CINEMAS ===================================================//
//========================================================================================================//

    $("#cinema-NowShowing .filters li").bind("filter-clicked", function () {
        FilterCinemaNowShowing();
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
	$("#trailer .close").on("click","a", function() {
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
