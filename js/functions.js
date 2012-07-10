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
function initAnimatedSlider() {

    // Fix any broken images
    //$("#slider img").error().each(function () { SetMovieDefaultImageLandscape($(this)); });

    // calculate how many items are shown, based on the width of the slider (varies depending on screen res.)
    items_shown = $("#slider").width() / $(".items a").width();

    // check how many items there are in total
    items_total = $("#slider .items a").length;

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

function animatedSlider() {

    // if slider reached the end, go back to the start
    if ($("#slider a.active").nextAll().length == 0) {
        $("#slider a.active").removeClass("active");
        $("#slider a:first-child").addClass("active");
        $("#slider .items").animate({ "left": "10px" }, 300, function () {
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
    //var baseUrl = "//cdn.eventcinemas.com.au/Resources/movies/";
    //var baseUrl = $("#background-wrap").css("background-image").replace("url(", "").replace(")", "");
    //baseUrl = baseUrl.substr(0, baseUrl.lastIndexOf("/") + 1);

    var baseUrl = $("#cdnUrl").attr("path") + "../Resources/movies/";
    var RotatorImage = $("#slider.animate a.active img");

    // try to load the image
    var img = new Image();
    $(img)
        .load(function() {
            $(this).hide();
        })
        .attr("src", baseUrl + RotatorImage.attr("movieid") + "/images/skin.jpg")
        .error(function() {
            $(this).attr("src", $("#cdnUrl").attr("path") + "img/background_test.jpg");
        });

    $("#background-wrap").fadeOut(200, function () {
        $("#background-wrap").css("background-image", "url(" + $(img).attr("src") + ")");
    });

    $(".call-to-action").fadeOut(200);

    $("#background-wrap").fadeIn(600, function () {

        $(".call-to-action img#takeover-title").attr("src", baseUrl + RotatorImage.attr("movieid") + "/images/skinTitle.png");
        $(".call-to-action img#takeover-title").error(function () {
            $(this).attr("src", $("#cdnUrl").attr("path") + "img/Empty.png");
        });

        if (RotatorImage.attr("align-title") == "left") {
            $(".call-to-action .button-wrapper").css("float", RotatorImage.attr("align-title"));
        } else {
            $(".call-to-action .button-wrapper").css("float", "right");
        }
        $(".call-to-action .details").attr("href", RotatorImage.attr("movieUrl"));
        $(".call-to-action .btn.blue").text(RotatorImage.attr("btn-title"));
        if (RotatorImage.attr("btn-title").length == 0) {
            $(".call-to-action .btn.blue").attr("style", "display: none;");
        } else {
            $(".call-to-action .btn.blue").attr("style", "");
        }
        $(".call-to-action").fadeIn(300);
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

function closeTrailer() {

    $("#trailer video")[0].pause();
    $("#cover").hide();
    $("#trailer").hide();
    if ($(".home-items #slider").length > 0) {

        timer = setInterval(function () { animatedSlider(true); }, slide_interval);
    }
}

function scrollDatesLeft(parentEl, el, reveal_more) {
    //console.log(el.siblings(".cinema-row-wrapper"));
    var p = $(el).position();
    console.log($(".width-wrap", el).width());

    if (p.left > ($(".cinema-row-wrapper", parentEl).width() - $(".width-wrap", el).width())) {
        $(el).css({ "left": "-=2px" });
    } else {
        $(reveal_more).hide();
    }

}
function scrollDatesRight(el, reveal_less) {
    //console.log(el.siblings(".cinema-row-wrapper"));
    var p = $(el).position();
    console.log(p.left);
    if (p.left < 0) {
        $(el).css({ "left": "+=2px" });
    } else {
        $(reveal_less).hide();
    }

}

function determineDatesScrolling() {

    $(".cinema-row").each(function () {
        if ($(".width-wrap", this).width() > $(".cinema-row-wrapper").width()) {

            $(".reveal-more", this).show();
            $(".shadow-right", this).show();
        }
    });

}
function showQuickTimesWidget() {

    //$(this).addClass("active");
    if (preferred_cinemas.length > 0) {
    	if ($(this).hasClass("btn")) {
	        var p = $(this).parent().parent().position();
	        $(".quick-times-select-widget").css({ "left": p.left - 200, "top": p.top + 240 });
    
        } else {
	        var p = $(this).parent().parent().position();
	        $(".quick-times-select-widget").css({ "left": p.left - 200, "top": p.top + 20 });
        
        }
        //console.log(p.left);

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

    $("#main.movie-detail nav").toggle();
    $("#main.movie-detail .movie-info").toggle();
    $("#main.movie-detail .movie-detail-items").toggle();
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

    initAnimatedSlider();
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
    var $moviesList = $("ul.movie-overview");
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
    var $moviesList = $("ul.movie-overview");
    $moviesList.data("AdvancedTickets", movies);

    $("li", $moviesList).fadeOut(100).delay(200);

    if ($moviesList.data("NowShowing") == null) {
        $("li", $moviesList).hide();
        $moviesList.data("NowShowing", $moviesList.html());
    }

    $("li", $moviesList).remove();

    var movies = $moviesList.data("AdvancedTickets")
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
    $("ul.movie-overview li span").removeClass("active");

    for (var i = 0; i < selected_movies.length; i++) {
        var id = selected_movies[i].id;
        var $movie = $("ul.movie-overview li p.title[data-id=" + id + "]").parents("span");
        $movie.addClass("active");
    }
}

function RenderNowShowing() {
    var $moviesList = $("ul.movie-overview");
    var movies = $moviesList.data("NowShowing");
    $("li", $moviesList).fadeOut(100).delay(200).remove();
    $moviesList.html(movies);
    $("li", $moviesList).fadeIn();
    CheckSelectedMovies();
}


function FilterMovies() {
    var $movieContainer = $("ul.movie-overview");
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