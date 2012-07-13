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
var baseCdnUrl = "";

// init the animated slider at bottom of homepage 
function initAnimatedSlider() {

    // Fix any broken images
    $("#slider img").one('error',function () { SetMovieDefaultImageLandscape($(this)); });

    // calculate how many items are shown, based on the width of the slider (varies depending on screen res.)
    items_shown = $("#slider").width() / $(".items a:visible").width();

    // check how many items there are in total
    items_total = $("#slider .items a:visible").length;

    //calculate by how much the items div should slide left
    slide_amount = ((Math.floor(items_shown) * 158) + (Math.floor(items_shown)) * 10);

    // calculates how many slides
    total_slides = Math.ceil(items_total / Math.floor(items_shown));

    $("#slider .items").attr("style", "left: 10px;");
    $("#slider .arrow-left").hide();
    if (total_slides > 1) {
      $("#slider .arrow-right").show();
    }
    current_slide = 1;

    changeSkin();
}

function resetSlider() {
    $("#slider a.active").removeClass("active");
    $("#slider a:visible:first").addClass("active");
    $("#slider .items").animate({ "left": "10px" }, 300, function () {
        current_slide = 1;
        $("#slider .arrow-left").hide();
        if (!$("#slider .arrow-right").is(":visible")) {
            $("#slider .arrow-right").show();
        }
    });

}

function animatedSlider() {
    // if slider reached the end, go back to the start
    if ($("#slider a.active").nextAll(":visible").length == 0) {
        $("#slider a.active").removeClass("active");
        $("#slider a:visible:first").addClass("active");
        $("#slider .items").animate({ "left": "10px" }, 300, function () {
            current_slide = 1;
            $("#slider .arrow-left").hide();
            if (!$("#slider .arrow-right").is(":visible")) {
                $("#slider .arrow-right").show();
            }
        });

    } else {

        // if slider is not the end, set the next thumb to be active
        $("#slider a.active").removeClass("active").nextAll(":visible:first").addClass("active");

        // if the division of the previous thumbs and the items shown is zero - move to next slide
        var div = $("#slider a.active").prevAll(":visible").length % Math.floor(items_shown);
        if (div == 0) {
            moveSliderRight();
        }
    }

    // change the skin to match the next thumbnail
    changeSkin();
}

// fade out the current background skin, and load the next active thumb (either animated or on click)
function changeSkin() {
    var RotatorImage = $("#slider.animate a.active img");

    changeSkinBackground(RotatorImage.attr("movieid"), RotatorImage.attr("skin"));
    changeCallToActionInfo(RotatorImage.attr("movieid"), "/movie" + RotatorImage.attr("movieUrl"));

    if (RotatorImage.attr("align-title") == "left") {
        $(".call-to-action .button-wrapper").css("float", RotatorImage.attr("align-title"));
    } else {
        $(".call-to-action .button-wrapper").css("float", "right");
    }

    if (RotatorImage.attr("hastrailer") == "false") {
        $(".call-to-action .poptrailer").hide();
    } else {
        $(".call-to-action .poptrailer").show();
    }

    $(".call-to-action .btn.blue").text(RotatorImage.attr("btn-title"));
    if ($(".call-to-action .btn.blue").text().length == 0) {
        $(".call-to-action .btn.blue").attr("style", "display: none;");
    } else {
        $(".call-to-action .btn.blue").attr("style", "");
    }

}

function changeSkinBackground(movieId, imageName) {
    var baseUrl = $("#cdnUrl").attr("path") + "../Resources/movies/";

    // try to load the image
    var img = new Image();
    var loaded = false;
    $(img)
        .load(function () {
            $(this).hide();
            changeSkinBackgroundSet($(this).attr("src"));
        })
         .attr("src", baseUrl + movieId + "/images/" + imageName)
        .error(function () {
            changeSkinBackgroundSet("");
        });
}

function changeSkinBackgroundSet(background) {

    $("#background-wrap").fadeOut(200, function () {
        if (background.length == 0) {
            $(this).css("background-image", "url(" + $("#cdnUrl").attr("path") + "img/Empty.png)");
            $("body").addClass("lights");
        } else {
            $(this).css("background-image", "url(" + background + ")");
            $("body").removeClass("lights");
        }

        $(this).fadeIn(600);
    });

}


function changeCallToActionInfo(movieId, movieUrl) {
    var baseUrl = $("#cdnUrl").attr("path") + "../Resources/movies/";

    $(".call-to-action").fadeOut(200, function () {

        $(".call-to-action img#takeover-title").attr("src", baseUrl + movieId + "/images/skinTitle.png");
        $(".call-to-action img#takeover-title").error(function () {
            $(this).attr("src", $("#cdnUrl").attr("path") + "img/Empty.png");
        });

        $(".call-to-action .details").attr("href", movieUrl);
        $(".call-to-action .opengallery").attr("href", movieUrl + "/gallery");
        $(".call-to-action .poptrailer").attr("movieId", movieId);

        $(".call-to-action").fadeIn(600);
    });
}




function moveSliderRight() {

    $("#slider .items").animate({ "left": "-=" + slide_amount }, 300, function () {

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

    $("#slider .items").animate({ "left": "+=" + slide_amount }, 300, function () {

        current_slide = current_slide - 1;

        if (current_slide == 1) {
            $("#slider .arrow-left").hide();
        }

        if (!$("#slider .arrow-right").is(":visible")) {
            $("#slider .arrow-right").show();
        }

    });

}


function removeByElement(arrayName, arrayElement) {
    for (var i = 0; i < arrayName.length; i++) {
        if (arrayName[i] == arrayElement) {
            arrayName.splice(i, 1);
        }
    }
}

function LoadTrailer(movieId) {

    if ($(".home-items #slider").length > 0) {
        clearInterval(timer);
    }

    $.ajax({
        url: '/SSW/MovieInfo/TrailerWithInfo?movieid=' + movieId,
        dataType: 'json',
        success: function (data) {
            if (data != null)
                RenderTrailer(data);
        }
    });
}

function closeTrailer() {
    var $trailer = $("#trailer video");
    if ($trailer.length > 0) {
        $trailer[0].pause();
    }
    $("#cover").hide();
    $("#trailer").hide();
    $("div.#trailer").html("");

    if ($(".home-items #slider").length > 0) {
        clearInterval(timer);
        timer = setInterval(function () { animatedSlider(true); }, slide_interval);
    }

}

function scrollDatesLeft(parentEl, el, reveal_more) {
    var p = $(el).position();

    if (p.left > limit) {
    	if (ie) { 
			  $(el).css({ "left": "-=4px" }).show(); // strange IE bug fix 
		} else {
			  $(el).css({ "left": "-=2px" });
		}
    } else {
        $(reveal_more).hide();
    }

}
function scrollDatesRight(el, reveal_less) {
    var p = $(el).position();
   
    if (p.left < 0) {
    	if (ie) { 
 	       $(el).css({ "left": "+=4px" });
 	    } else {
 	       $(el).css({ "left": "+=2px" });

 	    }
    } else {
        $(reveal_less).hide();
    }

}

function determineDatesScrolling(movieId) {
    if (movieId == null) {
        $(".cinema-row").each(function() {
            if ($(".width-wrap", this).width() > $(".cinema-row-wrapper").width()) {
                $(".reveal-more", this).show();
                $(".shadow-right", this).show();
            }
        });
    } else { 
        var $movie = $("div.movie-list-item[data-id='" + movieId + "']");
        if ($(".width-wrap", $movie).width() > $(".cinema-row-wrapper").width()) {
            $(".reveal-more", $movie).show();
            $(".shadow-right", $movie).show();
        }
    }
}

function showQuickTimesWidget() {
    if (preferred_cinemas.length > 0 && $("#cinema-filters span.active").length > 0) {
        var p = $(this).parent().parent().position();
        var movieId = $(this).attr("id");
        
        if ($("#movie-overview-thumb").data("isadvanced")) {
            var startDate = $(this).parents("li").first().data("firstsession");
            var endDate = $(this).parents("li").first().data("lastsession");
            endDate = Date.parse(endDate).addDays(1).toString("yyyy-MM-dd");
            SetQuickTimeSelectWidgetDates(startDate, endDate);
        }
        
        var startDate = $("#quick-times-widget-upon-hover .dates li.active").data("value");

        showSessionTime(movieId, startDate);
        $("#quick-times-widget-upon-hover .quick-times-select-widget").css({ "left": p.left - 200, "top": p.top + 20 });
        $("#quick-times-widget-upon-hover .quick-times-select-widget").show();
        
        $(".quick-times-select-widget").on("hover", "div.reveal-more", function(e) {
            if (e.type == "mouseenter") {
                $(this).siblings(".reveal-less").show();
                var reveal_more = $(this);
                var wrap = $(this).siblings(".cinema-row-wrapper");
                var dates = $(".dates-row", wrap);
                $(".shadow-left", wrap).show();
                var parentEl = $(this).parent().parent().parent();
                dateScroller = setInterval(function () { scrollDatesLeft(parentEl, dates, reveal_more); }, 5);
            } else {
                clearInterval(dateScroller);
            }
        });
        
        $(".quick-times-select-widget").on("hover", "div.reveal-less", function (e) {
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
function emptyFunction() { }
function TicketBarZIndex(nr) {
    $("#ticket-bar").css("z-index", nr);
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

    $(".main .movie-detail nav").toggle();
    $(".main .movie-detail .movie-info").toggle();
    $(".main .movie-detail .movie-detail-items").toggle();
    $(".call-to-action").toggle();
    $("footer").toggle();
    $(".gallery-items").toggle();
    $("#gallery-close").toggle();

}

function showState(state) {
    $("div.columns").hide();
    $("div#" + state).fadeIn();
}


function rotatorNowShowing() {
    rotatorClearClassAndSaveNowShowing();

    var $moviesList = $("div.rotatorMovies");
    var movies = $moviesList.data("RotatorNowShowing");
    $("a", $moviesList).fadeOut(100).delay(200).remove();
    $moviesList.html(movies);
    $("a", $moviesList).fadeIn();
    initAnimatedSlider();

    $("li#rotatorNowShowing").addClass("active");
};
function rotatorComingSoon() {
    rotatorClearClassAndSaveNowShowing();

    var $moviesList = $("div.rotatorMovies");
    var movies = $moviesList.data("RotatorComingSoon");
    if (movies == null) {
        $.ajax({
            url: '/SSW/MovieRotator/ComingSoonMovies',
            dataType: 'json',
            success: function (data) {
                $moviesList.data("RotatorComingSoon", data);
                rotatorRenderMovies(data);
            }
        });
    }
    else {
        rotatorRenderMovies(movies);
    }

    $("li#rotatorComingSoon").addClass("active");
};

function FilterRotatorByCinema() {

    var cinemaFilter = new Array();
    $("div.where-blowout span.active div").each(function () {
        cinemaFilter.push($(this).attr("id"));
    });

    if (cinemaFilter.length > 0) {
        $("#slider .items a").each(function () {
            var cinemaIds = $(this).data("cinemas").toString().split( /[\s,]+/ );
            var isInPreferred = false;
            for (var i = 0; i < cinemaFilter.length; i++) {
                isInPreferred = isInPreferred || ($.inArray(cinemaFilter[i].toString(), cinemaIds) >= 0);
            }
            if (isInPreferred) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }
    resetSlider();
}

function rotatorAdvancedTickets() {
    rotatorClearClassAndSaveNowShowing();

    var $moviesList = $("div.rotatorMovies");
    var movies = $moviesList.data("RotatorAdvancedTickets");
    if (movies == null) {
        $.ajax({
            url: '/SSW/MovieRotator/AdvancedTicketMovies',
            dataType: 'json',
            success: function (data) {
                $moviesList.data("RotatorAdvancedTickets", data);
                rotatorRenderMovies(data);
            }
        });
    }
    else {
        rotatorRenderMovies(movies);
    }

    $("li#rotatorAdvancedTickets").addClass("active");
};

function rotatorRenderMovies(movies) {
    var $moviesList = $("div.rotatorMovies");
    $("a", $moviesList).fadeOut(100).delay(200);
    $("a", $moviesList).remove();

    $("#rotatorMovie-template").tmpl(movies).appendTo($moviesList);
    $("a", $moviesList).fadeIn();

    $("a:first", $moviesList).addClass("active");

    clearInterval(timer);
    initAnimatedSlider();
    timer = setInterval(function () { animatedSlider(); }, slide_interval);
}
function rotatorClearClassAndSaveNowShowing() {
    $("li#rotatorNowShowing").removeClass("active");
    $("li#rotatorComingSoon").removeClass("active");
    $("li#rotatorAdvancedTickets").removeClass("active");

    var $moviesList = $("div.rotatorMovies");
    if ($moviesList.data("RotatorNowShowing") == null) {
        $moviesList.data("RotatorNowShowing", $moviesList.html());
        $("a", $moviesList).remove();
    }
}


function GetAdvancedMovies() {
    var $moviesList = $(".what-blowout ul.movie-overview");
    var movies = $moviesList.data("AdvancedTickets");
    if (movies == null) {
        $.ajax({
            url: '/SSW/SessionFilter/AdvancedTicketMovies',
            dataType: 'json',
            success: function (data) {
                RenderAdvancedMovies(data);
            }
        });
    }
    else {
        RenderAdvancedMovies(movies);
    }
}

function RenderAdvancedMovies(movies) {
    var $moviesList = $(".what-blowout ul.movie-overview");
    $moviesList.data("AdvancedTickets", movies);

    $("li", $moviesList).fadeOut(100).delay(200);

    if ($moviesList.data("NowShowing") == null) {
        $("li", $moviesList).hide();
        $moviesList.data("NowShowing", $moviesList.html());
    }

    $("li", $moviesList).remove();

    var movies = $moviesList.data("AdvancedTickets");
    $("#movie-template").tmpl(movies).appendTo($moviesList);
    $("li", $moviesList).fadeIn();

    CheckSelectedMovies();
}

function SetMovieDefaultImageLandscape(img) {
    img.attr("src", $("#cdnUrl").attr("path") + "img/unavailable_poster156x80.jpg");
}

function SetMovieDefaultImagePoster(img) {
    img.attr("src", $("#cdnUrl").attr("path") + "img/unavailable_poster105x50.jpg");
}

function CheckSelectedMovies() {
    $(".what-blowout ul.movie-overview li span").removeClass("active");

    for (var i = 0; i < selected_movies.length; i++) {
        var id = selected_movies[i].id;
        var $movie = $("ul.movie-overview li p.title[data-id=" + id + "]").parents("span");
        $movie.addClass("active");
    }
}

function RenderNowShowing() {
    var $moviesList = $(".what-blowout ul.movie-overview");
    var movies = $moviesList.data("NowShowing");
    $("li", $moviesList).fadeOut(100).delay(200).remove();
    $moviesList.html(movies);
    $("li", $moviesList).fadeIn();
    CheckSelectedMovies();
}


function FilterMovies() {
    var $movieContainer = $(".what-blowout ul.movie-overview");
    if ($(".what-blowout").is(":hidden")) {
        $("li", $movieContainer).hide();
    }
    else {
        $("li", $movieContainer).fadeOut(100).delay(100);
    }

    var cinemaFilter = new Array();
    $("div.where-blowout span.active div").each(function () {
        cinemaFilter.push($(this).attr("id"));
    });

    // build css selector
    var selector = "";

    for (var i = 0; i < cinemaFilter.length; i++) {
        selector += "li." + cinemaFilter[i];
        if (i != cinemaFilter.length - 1) {
            selector += ",";
        }
    }

    if (selector == "") {
        selector = "li";
    }

    var cinemaMovies = $(selector, $movieContainer);

    selector = "";
    var attributeFilter = new Array();
    $(".filters li.active").each(function () {
        selector += "li." + $(this).attr("id").toLowerCase() + ",";
    });

    if (selector == "") {
        selector = "li";
    } else {
        selector = selector.substr(0, selector.length - 1);
    }

    var moviesToShow = cinemaMovies.filter(selector);

    var dateFilter = $(".when-blowout ul li.active").data("id");

    if ($(".what-blowout").is(":hidden")) {
        moviesToShow.show();
    }
    else {
        moviesToShow.fadeIn();
    }
}



function loadSessionError(movieId) {
    $("div.movie-list-item[data-id='" + movieId + "'] span.cinema-row").html("<span class='title'>Error loading sessions</span>");
}

function renderSessions(movieId, sessions) {
    var $movie = $("div.movie-list-item[data-id='" + movieId + "']");
    if (sessions.length == 0) {
        if ($movie.is(":visible")) {
            $movie.queue(function () {
                $(this).fadeOut(100);
                $(this).dequeue();
            });
        } else {
            $movie.hide();
        }
    }
    else {
        var $cinemaRow = $("span.cinema-row", $movie);
        $cinemaRow.html("<span class='title'>Select a time: </span><span class='cinema-row-wrapper'><div class='dates-row'> <span class='width-wrap'></span></div><span class='shadow-right'></span><span class='shadow-left'></span></span><div class='reveal-more'>&#8250;</div><div class='reveal-less'>&#8249;</div>");

        var $times = $("span.width-wrap", $cinemaRow);
        $("#sessiontime-template").tmpl(sessions).appendTo($times);
        if ($movie.is(":hidden")) {
            $movie.queue(function () {
                $(this).fadeIn();
                $(this).dequeue();
            });
        } else {
            $movie.show();
        }

        determineDatesScrolling();
        ShowMovieIcons(movieId);
    }
}

function SetQuickTimeSelectWidgetDates(startDate, endDate) {
    var dates = new Array();
    var dStart = Date.parse(startDate);
    var dEnd = Date.parse(endDate);

    console.log(dStart);
    console.log(dEnd);

    while (dStart < dEnd) {
        if (Date.compare(dStart, Date.today()) == 0) {
            dates.push({ value: dStart.toString("yyyy-MM-dd"), text: "Today" });
        } else if (Date.compare(dStart,Date.today().next()) == 0) {
            dates.push({ value: dStart.toString("yyyy-MM-dd"), text: "Tomorrow" });
        } else {
            dates.push({ value: dStart.toString("yyyy-MM-dd"), text: dStart.toString("ddd dd/MM") });
        }
        dStart.addDays(1);
    }
    var $dateContainer = $("#quick-times-widget-upon-hover ul.dates");
    $dateContainer.html("");
    $("#date-template").tmpl(dates).appendTo($dateContainer);
    $("li", $dateContainer).first().addClass("active");
}

function showSessionTime(movieId, sDate) {
    if (sDate == null) {
        sDate = Date.parse(new Date()).toString("yyyy-MM-dd HH:mm");
    }
    var startDate = Date.parse(sDate);
    var endDate = startDate.clone().addDays(1);
    var attributeCodes = [];
    var screenTypeCodes = [];

    var $sessionWidget = $(".quick-times-select-widget");
    $sessionWidget.data("movieId", movieId);
    $(".cinema-row", $sessionWidget).remove();
    
    $("#cinema-filters span.active div").each(function () {
        var cinemaName = $(this).attr("value");
        var cinemaId = $(".where-blowout span div[value='" + cinemaName + "']").attr("id");
        console.log("Fetching sessions for " + cinemaName + " (" + cinemaId + ")");

        var $attributeFilters = $("#experience-filters span.active");
        var attributeFilters = new Array();
        $attributeFilters.each(function() {
            attributeFilters.push($(this).children("div").attr("value"));
        });
        console.log(attributeFilters);

        var cinemaData = { Name: cinemaName, Id: cinemaId };
        $("#cinemaRowLoading-template").tmpl(cinemaData).appendTo($sessionWidget);
        var cinemaIds = [cinemaId];
        var data = {
            cinemaIds: cinemaIds,
            movieId: movieId,
            startDate: startDate.toString("yyyy-MM-dd HH:mm"),
            endDate: endDate.toString("yyyy-MM-dd"),
            attributeCodes: attributeCodes,
            screenTypeCodes: attributeFilters
        };
        $.ajax({
            url: '/SSW/SessionFilter/FindTimesAndBook',
            data: data,
            traditional: true,
            success: function (sessions) {
                renderSessions2(cinemaId, sessions);
            },
            error: function () {
               
            }
        });
    });

}

function renderSessions2(cinemaId, sessions) {
    console.log("Found " + sessions.length + " sessions for " + cinemaId);
    var $cinemaRow = $("span[id='" + cinemaId + "']");
    var $times = $("span.width-wrap", $cinemaRow);
    $times.html("");
    
    if (sessions.length == 0) {
        $times.append("No available sessions");
    }
    else {
        $("#sessiontime-template").tmpl(sessions).appendTo($times);
    }
    determineDatesScrolling();
}

function FilterCinemaMovies() {
    var $movies = $("div.movie-list-item");
    $movies.hide();
    
    var $filters = $(".movie-overview-list .filters li.active");
    var isGoldclass = $filters.filter("[data-id='gc']").length > 0;
    var isVmax = $filters.filter("[data-id='vmax']").length > 0;
    var isThreeD = $filters.filter("[data-id='3d']").length > 0;
    
    if ($filters.length == 0) {
        $movies.fadeIn();
    }
    else {
        $movies.each(function() {

            if ($("div.icons div.three-d-icon", this).length > 0 && isThreeD) {
                $(this).fadeIn();
            }
            if ($("div.icons div.goldclass-icon", this).length > 0 && isGoldclass) {
                $(this).fadeIn();
            }
            if ($("div.icons div.vmax-icon", this).length > 0 && isVmax) {
                $(this).fadeIn();
            }
        });
    }
}

function ShowMovieIcons(movieId) {
    if (movieId == null) {
        $("div.movie-list-item").each(function() {
            var $icons = $("div.icons", this);
            $icons.html("");
            if ($("span.three-d-icon",this).length > 0) {
                $icons.append("<div class='three-d-icon'></div>");
            }
            if ($("span.goldclass-icon",this).length > 0) {
                $icons.append("<div class='goldclass-icon'></div>");
            }
            if ($("span.vmax-icon",this).length > 0) {
                $icons.append("<div class='vmax-icon'></div>");
            }
        });
    } else {
        var $movie = $("div.movie-list-item[data-id='" + movieId + "']");
        var $icons = $("div.icons", $movie);
        $icons.html("");
        if ($("span.three-d-icon", $movie).length > 0) {
            $icons.append("<div class='three-d-icon'></div>");
        }
        if ($("span.goldclass-icon", $movie).length > 0) {
            $icons.append("<div class='goldclass-icon'></div>");
        }
        if ($("span.vmax-icon", $movie).length > 0) {
            $icons.append("<div class='vmax-icon'></div>");
        }
    }
}

function FormatSessionTime(jsonDate) {
    var date = new Date(parseInt(jsonDate.substr(6)));
    return date.toString("h:mm tt");
}

function FormatSessionClass(attributes, screenType, isThreeD) {
    var cssClass = new Array();
    if (screenType.toString().toLowerCase() == "gc") {
        cssClass.push("goldclass-btn");
    }
    else if (screenType.toString().toLowerCase() == "vmax") {
        cssClass.push("vmax-btn");
    }
    else {
        if (isThreeD) {
            cssClass.push("three-d-btn");
        } else {
            cssClass.push("grey");
        }
    }

    return cssClass[0];
}

function FilterCinemaNowShowing() {
    var startDate = Date.parse($("ul.dates li.active").data("value"));
    var endDate = startDate.clone().clearTime().addDays(1);
    var attributeCodes = [];
    var screenTypeCodes = [];

    $("div.movie-list-item").each(function () {
        var movieId = $(this).data("id");
        $(".icons").html("");
        $(".cinema-row").html("");

        var data = {
            cinemaIds: cinemaIds,
            movieId: movieId,
            startDate: startDate.toString("yyyy-MM-dd HH:mm"),
            endDate: endDate.toString("yyyy-MM-dd"),
            attributeCodes: attributeCodes,
            screenTypeCodes: screenTypeCodes
        };
        $.ajax({
            url: '/SSW/SessionFilter/FindTimesAndBook',
            data: data,
            traditional: true,
            success: function (d) {
                renderSessions(movieId, d);
            },
            error: function () {
                loadSessionError(movieId);
            }
        });
    });
}

function RenderSessionIcon(attributes, screenType, isThreeD) {
    var cssClass = new Array();
    if (screenType.toString().toLowerCase() == "gc") {
        cssClass.push("goldclass-icon");
    }
    else if (screenType.toString().toLowerCase() == "vmax") {
        cssClass.push("vmax-icon");
    }
    else {
        if (isThreeD) {
            cssClass.push("three-d-icon");
        } else {
            cssClass.push("standard-icon");
        }
    }

    if (cssClass.length > 0) {
        return "<span class='" + cssClass[0] + "'></span>";
    }
    return "";
}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function MovieFilterSuccess(movieIdsToShow) {
    
}

function MovieFilter() {
    var cinemaFilters = new Array();
    $("#movie-filter #cinema-filters span.active div").each(function () {
        var cinema = $(this).attr("value");
        var id = $(".where-blowout span div[value='" + cinema + "']").attr("id");
        cinemaFilters.push(id);
    });

    var experienceFilters = new Array();
    $("#movie-filter #experience-filters span.active div").each(function () {
        experienceFilters.push($(this).attr("value"));
    });
    
    var $moviesContainer = $("#movie-overview-thumb");

    var keyword = $("#movie-filter input#movieKeywordTextbox").val().trim();

    var genreFilters = new Array();
    $("#MovieGenreFilter span.active label").each(function () {
        genreFilters.push($(this).text());
    });

    var $movies = $("li", $moviesContainer);
    $movies.hide();


    var moviesToShow = new Array();

    $movies.each(function () {
        var $movie = $(this);
        var cinemas = $movie.data("cinemas").toString().split(/[\s,]+/);
        var genres = $movie.data("genres").toString().split(/[\s,]+/);
        var inCinema = false;
        if (cinemaFilters.length > 0) {
            cinemaFilters.forEach(function (cinema) {
                inCinema = inCinema || ($.inArray(cinema, cinemas) >= 0);
            });
        }
        else {
            inCinema = true;
        }

        var hasGenre = false;
        if (genreFilters.length > 0) {
            genreFilters.forEach(function (genre) {
                hasGenre = hasGenre || ($.inArray(genre, genres) >= 0);
            });
        }
        else {
            hasGenre = true;
        }

        var hasExperienceFilter = false;
        if (experienceFilters.length > 0) {
            experienceFilters.forEach(function (experience) {
                hasExperienceFilter = hasExperienceFilter || $movie.data(experience).toLowerCase() == "true";
            });
        }
        else {
            hasExperienceFilter = true;
        }

        var hasKeywordFilter = false;
        if (keyword.length == 0) {
            hasKeywordFilter = true;
        } else {
            hasKeywordFilter = ("p.title", $movie).text().toLowerCase().indexOf(keyword) >= 0;
        }

        console.log($("p.title", $movie).text() + " inCinema: " + inCinema + ", hasGenre: " + hasGenre + ", hasExperience: " + hasExperienceFilter + ", hasKeyword: " + hasKeywordFilter);

        if (inCinema && hasGenre && hasExperienceFilter && hasKeywordFilter) {
            moviesToShow.push(this);
        }
    });


    if (cinemaFilters.length > 0 && experienceFilters.length > 0) {
        $.ajax({
            url: '/SSW/MovieList/FilterNowShowing',
            data: { cinemaId: cinemaFilters, screenTypes: experienceFilters, has3D: false },
            traditional: true,
            success: function (results) { MovieFilterSuccess(results); }
        });
    } else {
        FadeInMovies(moviesToShow);
    }


   
    
}

function FadeInMovies(moviesToShow) {
    moviesToShow.forEach(function (m) { $(m).fadeIn(); });

    var $headings = $("span.strip label", $("#movie-overview-thumb"));
    delay(function () {
        $headings.each(function () {
            $(this).text($(this).parent().parent().parent().next().children(":visible").length);
        });
    }, 500
    );
}


function FilterCinemas() {
    var $filters = $(".filter-element span.active div");

    var filterString = "";
    $filters.each(function () {
        if (filterString.length == 0) {
            filterString = "span." + $(this).attr("value");
        } else {
            filterString += ", span." + $(this).attr("value");
        }
    });

    var cinemas = $("div.cinema-list-item .block");

    var $matchedCinemas;
    if (filterString.length > 0) {
        $("div.content .cinemaItem", cinemas).hide();
        $matchedCinemas = $(filterString, cinemas);
    } else {
        $matchedCinemas = $("div.content .cinemaItem", cinemas);
    }

    $("div.content .cinemaItem", cinemas).hide();
    var searchText = $("#cinemaKeywordFilter").val().trim();
    if (searchText.length == 0) {
        $matchedCinemas.fadeIn();
    }
    else {
        $matchedCinemas.each(function () {
            if ($($(this).children()[0]).text().toString().toLowerCase().indexOf(searchText.toLowerCase()) != -1) {
                $(this).fadeIn();
            }
        });
    }
    delay(function () { updateCinemaCount(); }, 500);    
}

function updateCinemaCount() {
    var cinemas = $("div.cinema-list-item .block");

    cinemas.each(function () {
        var count = 0;
        $(".cinemaItem", this).each(function () {
            if ($(this).css("display") != "none") { count++; }
        });
        $("h2 label", this).text(count);
    });
}

function movieCountdown() {
    var startDate = new Date($("#CountdownTimer").attr("releaseDate"));
    remainingCount = Math.floor((startDate - (new Date())) / 1000);

    if (remainingCount <= 0) {
        clearInterval(counter);
        $("#CountdownTimer").hide();
        return;
    }

    var countdownDays = Math.floor(remainingCount / days);
    remainingCount -= (countdownDays * days);

    var countdownHours = Math.floor(remainingCount / hours);
    remainingCount -= (countdownHours * hours);

    var countdownMin = Math.floor(remainingCount / minutes);
    remainingCount -= (countdownMin * minutes);

    var countdownSec = Math.floor(remainingCount);

    $("div.timer").text("OPENING IN " + countdownDays + " DAYS " + countdownHours + " HOURS " + countdownMin + " MINUTES AND " + countdownSec + " SECONDS");
}

var nowShowingPopularity = [];

function NowShowingSortBy(sortType) {
    if (sortType == "alphabetical") {
        var $movieContainer = $("#movie-overview-thumb ul.movie-overview");
        var movies = $("li", $movieContainer).get();
        movies.sort(function (a, b) {
            var compA = $("p.title", a).text().toLowerCase();
            var compB = $("p.title", b).text().toLowerCase();
            return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        });
        $.each(movies, function (idx, item) {
            $movieContainer.append(item);
        });
    }
    else if (sortType == "popularity") {
        var cinemas = $("#cinema-filtersr span.active");
        var cinemaId = null;
        if (cinemas.length == 1) {
            var cinemaName = $(cinemas[0]).children("div").attr("value");
            cinemaId = $(".where-blowout div.checkbox[value='" + cinemaName + "']").attr("id");
        }
        
        if (nowShowingPopularity.length == 0) {

            $.ajax({
                url: '/SSW/MovieList/GetMoviesByPopularity',
                data: { PreviousHours: 24, ShowTop: 1000, CinemaId: cinemaId },
                dataType: "json",
                traditional: true,
                cache: true,
                success: function(movies) {
                    nowShowingOrderByPopularity(movies);
                    nowShowingPopularity = movies;
                }
            });
        } else {
            nowShowingOrderByPopularity(nowShowingPopularity);
        }
    }
}

function nowShowingOrderByPopularity(movies) {
    var $movieContainer = $("#movie-overview-thumb ul.movie-overview");
    var $movies = $("li", $movieContainer);
    $movieContainer.html("");

    for (var i = 0; i < movies.length; i++) {
        var $movie = $movies.filter("[data-id='" + movies[i].Id + "']");
        if ($movie.length == 1) {
            $movieContainer.append($movie);
            $movies = $($.grep($movies, function (value) { return $(value).html() != $movie.html(); }));
        }
    }
    if ($movies.length > 0) {
        $movieContainer.append($movies);
    }
}

(function ($) {
    $.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function (s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('=') ; i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);