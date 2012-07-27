$(function () {
    $("#movie-overview-list img").error(function () {
        $(this).attr("src", $("#cdnUrl").attr("path") + "img/unavailable_poster105x50.jpg");
    });
    $("#movie-overview-thumb img").error(function () {
        $(this).attr("src", $("#cdnUrl").attr("path") + "img/unavailable_poster105x50.jpg");
    });

    //========================================================================================================//
    //============================================ MOVIES LIST ======================================//
    //========================================================================================================//
    $("a.list").click(function () {
        var url = location.origin + location.pathname + "?viewMode=list&";
        url += BuildFilterQueryString();
        window.location = url;
    });
    $("a.thumb").click(function () {
        var url = location.origin + location.pathname + "?viewMode=thumb&";
        url += BuildFilterQueryString();
        window.location = url;
    });

    $("#advanced-sort").change(function () {
        if ($("#movie-overview-list").length == 1) {
            sortBy($("option:selected", this).val(), $("#movie-overview-list"));
        } else {
            sortBy($("option:selected", this).val(), $("#movie-overview-thumb"));

        }
    });

    if (preferred_cinemas.length == 0) {
        $("#cinema-filters").html("<a class='set-preferred-cinemas'>Set your preferred cinemas</a>");
    }

    for (var i = 0; i < preferred_cinemas.length; i++) {
        $(".where-blowout").find(".checkbox[value='" + preferred_cinemas[i] + "']").parent().addClass("active");
        if ($("#cinema-filters").length > 0) {
            if (preferred_cinemas[i] != "") {
                $("#cinema-filters").prepend("<span class='active'><div class='checkbox' value='" + preferred_cinemas[i] + "'></div> <label for='" + preferred_cinemas[i] + "filter'>" + preferred_cinemas[i] + "</label></span>");
            }
        }
    }

    var cinemas = $("#cinema-filters span");
    cinemas.sort(function (a, b) {
        var compA = $("div", a).attr("value").toLowerCase();
        var compB = $("div", b).attr("value").toLowerCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    });
    $.each(cinemas, function (idx, item) { $("#cinema-filters a").before(item); });

    var experiences = getParameterByName("experience");
    if (experiences != null && experiences.length > 0) {
        $.each(experiences.split(/[\s,]+/), function (i,experience) {
            var $exp = $("#experience-filters div[value='" + experience + "']");
            if ($exp.length > 0) {
                $exp.parent().addClass("active");
            }
        });
    }
    var genres = getParameterByName("genres");
    if (genres != null && genres.length > 0) {
        $.each(genres.split(/[\s,]+/), function (i, genre) {
            var $g = $("#MovieGenreFilter div[value='" + genre + "']");
            if ($g.length > 0) {
                $g.parent().addClass("active");
            }
        });

    }

    var keyword = getParameterByName("keyword");
    if (keyword != null && keyword.length > 0) {
        $("#movieKeywordTextbox").val(keyword);
    }

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

    $("#now-showing-tools select").change(function () {
        NowShowingSortBy($(this).val());
    });

    $(".where-blowout").on("set-cinema", "span", function () {
        // check if we're adding or removing
        var cinema = $("div", this).attr('value');
        if ($(this).hasClass("active")) {
            $("#cinema-filters").prepend("<span class='active'><div class='checkbox' value='" + cinema + "'></div> <label for='" + cinema + "filter'>" + cinema + "</label></span>");
        } else {
            $("#cinema-filters span div[value='" + cinema + "']").parent().remove();
        }

        var cinemas = $("#cinema-filters span").get();
        cinemas.sort(function (a, b) {
            var compA = $("div", a).attr("value").toLowerCase();
            var compB = $("div", b).attr("value").toLowerCase();
            return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        });
        $.each(cinemas, function (idx, item) {
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
                $(".where-blowout div.checkbox").each(function () {
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

    //$(".thumb").click(function () {
    //    $(".quick-times-select-widget").hide();
    //    $(".movie-overview-list").hide();
    //    $("#movie-overview-thumb").show();
    //    $(".tools").find(".active").removeClass("active");
    //    $(this).addClass("active");
    //});

    //$(".list").click(function () {
    //    $(".movie-overview-list .quick-times-select-widget").show();
    //    $("#movie-overview-thumb").hide();
    //    $(".movie-overview-list").show();
    //    determineDatesScrolling();
    //    $(".tools").find(".active").removeClass("active");
    //    $(this).addClass("active");
    //});


    // In thumbview we open the quick times widget upon mouseover, with a bit of delay, using hoverIntent
    var config = {
        over: showQuickTimesWidget,
        timeout: 500,
        out: emptyFunction
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
    $(".quick-times-select-widget").on("click", ".dates li", function () {
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
        var startDate = $(this).data("value");
        var $sessionWidget = $(this).parents(".quick-times-select-widget");
        var movieId = $sessionWidget.data("movieid");

        var cinemas = new Array();
        if ($("#cinema-filters").length == 1) {
            $("#cinema-filters span.active").each(function () {
                var cinemaName = $("div", this).attr("value");
                cinemas.push({ Id: getCinemaId(cinemaName), Name: cinemaName });
            });
        } else {
            $.each(preferred_cinemas, function (i, cinemaName) {
                cinemas.push({ Id: getCinemaId(cinemaName), Name: cinemaName });
            });
        }

        showSessionTime(movieId, startDate, cinemas, renderSessions2, $sessionWidget);
    });

    // If the quick times widget was opened by mouseover, get rid of it again upon mouseleave
    $(".quick-times-select-widget").mouseleave(function () {
        if (!$(this).parent().hasClass("movie-list-item")) {
            $(".quick-times-select-widget").hide();

            if ($(".home-items #slider").length > 0) {
                clearInterval(timer);
                timer = setInterval(function () { animatedSlider(true); }, slide_interval);
            }
        }
    });

   // bindRevealScrollers();

    //========================================================================================================//
    //============================================ MOVIE DETAIL ==============================================//
    //========================================================================================================//

    if ($("#slider.static").length > 0 && $("#slider.static").is(":visible")) {
        initStaticSlider();
    }
    
    if ($("#movie-filter").length > 0) {
        MovieFilter();
    }
});

var counter;
var days = 24 * 60 * 60,
    hours = 60 * 60,
    minutes = 60;
