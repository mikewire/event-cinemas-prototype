$(function () {
    //========================================================================================================//
    //============================================ MOVIES LIST ======================================//
    //========================================================================================================//

    $("#movie-filter").on("filter-clicked", ".filter-element span", function () {
        MovieFilter();
        if ($("#cinema-filters span.active").length == 0) {
            $(".find-times-and-book").addClass("set-preferred-cinemas");
        }
    });

    $("#movie-filter input#movieKeywordTextbox").keyup(function () {
        delay(function () {
            MovieFilter();
        }, 500);
    });

    $("#now-showing-tools select").change(function() {
        NowShowingSortBy($(this).val());
    });

    $(".where-blowout").on("set-cinema", "span", function() {
        // check if we're adding or removing
        var cinema = $("div", this).attr('value');
        if ($(this).hasClass("active")) {
            $("#cinema-filters").prepend("<span class='active'><div class='checkbox' value='" + cinema + "'></div> <label for='" + cinema + "filter'>" + cinema + "</label></span>");
        } else {
            $("#cinema-filters span div[value='" + cinema + "']").parent().remove();
        }

        var cinemas = $("#cinema-filters span").get();
        cinemas.sort(function(a, b) {
            var compA = $("div", a).attr("value").toLowerCase();
            var compB = $("div", b).attr("value").toLowerCase();
            return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        });
        $.each(cinemas, function(idx, item) {
            $("#cinema-filters a").before(item);
        });
        

        MovieFilter();
    });
    //========================================================================================================//
    //============================================ MOVIES OVERVIEW PAGE ======================================//
    //========================================================================================================//
    $(".filters li").bind("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $(this).trigger("filter-clicked");
    });

    $(".filter-element span").live("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }

        $(this).trigger("filter-clicked");
    });

    $(".set-preferred-cinemas").live("click", function () {
        $("#cover").show();
        $(this).addClass("active");
        var state = $("div.where-blowout ul.head li.active a").html();
        showState(state);
        $(".where-blowout").addClass("in-the-middle").show();
        if ($(this).hasClass("find-times-and-book")) {
            $(".where-blowout .btn").addClass("wider").text("continue booking");
            // check if there's movie and show only cinemas where the movie is playing
            var movieId = $(this).attr("id");
            console.log(movieId);
            if (movieId != null) {
                var $movie = $("#movie-overview-thumb li[data-id='" + movieId + "']");
                var availableCinemas = $movie.data("cinemas").toString().split(/[\s,]+/);
                $(".where-blowout div.checkbox").each(function() {
                    if ($.inArray($(this).attr('id'), availableCinemas) == -1) {
                        $(this).parent().hide();
                    } else {
                        $(this).parent().show();
                    }
                });
                
            }
        }
    });


    // Thumb & Listview switch

    $(".thumb").click(function () {
        $(".quick-times-select-widget").hide();
        $(".movie-overview-list").hide();
        $("#movie-overview-thumb").show();
        $(".tools").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(".list").click(function () {
        $(".movie-overview-list .quick-times-select-widget").show();
        $("#movie-overview-thumb").hide();
        $(".movie-overview-list").show();
        determineDatesScrolling();
        $(".tools").find(".active").removeClass("active");
        $(this).addClass("active");
    });


    // In thumbview we open the quick times widget upon mouseover, with a bit of delay, using hoverIntent

    var config = {
        over: showQuickTimesWidget,
        timeout: 500,
        out: delay(emptyFunction, 500)
    };

    $(".find-times-and-book").hoverIntent(config);

    /*
        var config_seats = {    
             over: showAvailableSeatsLink,     
             timeout: 2000,    
             out: emptyFunction 
        };
        
        $(".quick-times-select-widget .dates-row .btn").hoverIntent(config_seats);
    */


    $(".btn.find-times-and-book").click(function () {
        $("#top-ticketing-form").submit();
    });


    // If we're in listview, we need to see which dates rows are longer than the allowed content area, so we throw the arrow

    if ($(".movie-overview-list").length > 0) {
        determineDatesScrolling();
    }
    $(".main .movies .image-wrapper img").click(function () {
        var link = $(this).parent().find(".details-link");
        window.location.href = $(link).attr("href");
    });	
    $(".main .movies .image-wrapper .title").click(function () {
        var link = $(this).siblings(".details-link");
        window.location.href = $(link).attr("href");
    });

    // In the quick times widget, this will throw an AJAX event to change the times for that day
    $("ul#cinemaNowShowingDates li").click(function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        $("div.movie-list-item:visible").hide();
        FilterCinemaNowShowing();
    });

    // In the quick times widget, this will throw an AJAX event to change the times for that day
    $(".quick-times-select-widget").on("click", ".dates li", function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        var startDate = $(this).data("value");
        var movieId = $(".quick-times-select-widget").data("movieId");
        showSessionTime(movieId, startDate);
    });

    // If the quick times widget was opened by mouseover, get rid of it again upon mouseleave
    $(".quick-times-select-widget").mouseleave(function () {
        if (!$(this).parent().hasClass("movie-list-item")) {
            $(".quick-times-select-widget").hide();
        }
    });

    // Upon hover of the reveal more arrow for the date buttons, the row slides left to reveal more dates
    $(".cinema-row").on("hover", "div.reveal-more", function (e) {
        if (e.type == "mouseenter") {
			$(this).siblings(".reveal-less").show();
			var reveal_more = $(this);
			var wrap = $(this).siblings(".cinema-row-wrapper");
			var dates = $(".dates-row", wrap);
			$(".shadow-left", wrap).show();		
			var limit = $(this).siblings(".cinema-row-wrapper").width() - $(this).siblings(".cinema-row-wrapper").find(".width-wrap").width();
			dateScroller = setInterval(function() { scrollDatesLeft(dates,reveal_more, limit); }, 5);

        } else {
            clearInterval(dateScroller);
        }
    });

    // The reveal less button scrolls the dates to the right.
    $(".cinema-row").on("hover", "div.reveal-less", function (e) {
        if (e.type == "mouseenter") {
            var reveal_less = $(this);
            $(this).siblings(".reveal-more").show();
            var wrap = $(this).siblings(".cinema-row-wrapper");
            var dates = $(".dates-row", wrap);
            dateScroller = setInterval(function () { scrollDatesRight(dates, reveal_less); }, 5);
        } else {
            clearInterval(dateScroller);

        }
    });

    //========================================================================================================//
    //============================================ MOVIE DETAIL ==============================================//
    //========================================================================================================//

    if ($("#slider.static").length > 0 && $("#slider.static").is(":visible")) {
        initStaticSlider();
    }
   
});

var counter;
var days = 24 * 60 * 60,
    hours = 60 * 60,
    minutes = 60;
