var timer;
var preferred_cinemas = new Array();
var selected_movies = new Array();
var items_shown = 0;
var items_total = 0;
var slide_amount = 0;
var total_slides = 0;
var current_slide = 1;
var slide_interval = 12000;

function changeSkin() {
	
	$(".call-to-action").fadeOut(200);
	
	$("#skin").fadeOut(200, function() {
	
		$("#skin").attr("src","img/hp_bck/"+$("#slider a.active img").attr("skin"));
	});
	
	$("#skin").fadeIn(600, function() {
	
		$(".call-to-action img#takeover-title").attr("src","img/hp_bck/"+$("#slider a.active img").attr("skin-title"));
		if ($("#slider a.active img").attr("align-title") == "left") {
			$(".call-to-action .button-wrapper").css("float",$("#slider a.active img").attr("align-title"));
		} else {
			$(".call-to-action .button-wrapper").css("float","right");
		}
		$(".call-to-action .btn.blue").text($("#slider a.active img").attr("btn-title"));
		$(".call-to-action").fadeIn(300);
	});

}
function homeSlider() {
	
	console.log($("#slider a.active").nextAll().length);
	
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
		console.log(Math.floor(items_shown));
		console.log($("#slider a.active").prevAll().length);
		if (Math.floor(items_shown) == $("#slider a.active").prevAll().length) {
		
			//moveSliderRight();
		}
	}
	
	changeSkin();
	
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
 	timer = setInterval(homeSlider, slide_interval);
}
  
  
$(document).ready(function() {

	$(".find-times-and-book").hover(function() {
	
		var p = $(this).parent().parent().position();
		console.log(p);
		if (p.left > 300) { 
			$("#quick-times-select-widget").css({"right":"0px","top":p.top+16});
		} else {
			$("#quick-times-select-widget").css({"left":p.left,"top":p.top+16});
		}
		
		
		
		$("#quick-times-select-widget").show();
	});
	$("#quick-times-select-widget").mouseleave(function() {
	
		$("#quick-times-select-widget").hide();
	});

	$(window).resize(function() {
	
		console.log($(this).height());
	
	})
	$("#poptrailer").click(function() {
	
		clearInterval(timer);
		$("#cover").show();
		$("#trailer").show();
		
	
	});
	$("#trailer .close").click(function() {

		closeTrailer();
	});
	$("#cover").click(function() {
	
	closeTrailer();
	
	});
	
	if ($("#slider").length > 0) {
	
		// set slider to 10s for each slide
		timer = setInterval(homeSlider, slide_interval);
		
		// calculate how many items are shown, based on the width of the slider (varies depending on screen res.)
		items_shown = $("#slider").width() / $(".items a").width();
		
		// check how many items there are in total
		items_total = $("#slider .items a").length;
		
		//calculate by how much the items div should slide left
	    slide_amount = ((Math.floor(items_shown) * 158) + (Math.floor(items_shown))*10);
	    
	    // calculates how many slides
	    total_slides = Math.ceil(items_total / Math.floor(items_shown));

		
		$("#slider a").click(function() {
		
			$("#slider").find("a.active").removeClass("active");
			$(this).addClass("active");
			changeSkin();
			clearInterval(timer);
			timer = setInterval(homeSlider, slide_interval);
		});	

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
		
		/* still need to add automatic scrolling when active slide moves beyond items_shown - as well as the end moving back to start */	
	}
/*
	$("#slider img").adipoli({
	
	 'startEffect' : 'grayscale',
     'hoverEffect' : 'foldLeft'
	
	});	
*/



		
	$(".movie-wrapper span").hover(function() {
	
		$(".hover",this).show();
	
	}, function() {
	
		$(".hover",this).hide();
		
	});

	$("#wrapper").click(function() {
		$("#where").removeClass("active");
		$(".where-blowout").hide(); 
		$("#what").removeClass("active");
		$(".what-blowout").hide(); 
		$("#when").removeClass("active");
		$(".when-blowout").hide(); 
		
	});


/*======================= where would you like to go ============================

todo:
- need to save values in cookie for prototype reasons
- need to save values in form array element
- refactor hide/show blowouts
*/
	
	$("#where").click(function() { 
		if ($(".where-blowout").is(":visible")) {

			$(this).removeClass("active");
			$(".where-blowout").hide(); 
			
		
		} else {
		
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
			$("input",this).prop("checked", false);
			removeByElement(preferred_cinemas, $("label",this).text());
			$(this).removeClass("active");
		} else {
			$("input",this).prop("checked", true);		
			removeByElement(preferred_cinemas, $("label",this).text());
			preferred_cinemas.push($("label",this).text());
			$(this).addClass("active");
		}
		for ( var i=0; i < preferred_cinemas.length; i++ ) { 
			console.log(preferred_cinemas[i]);
		}
		console.log(preferred_cinemas.length+"---");
		
		if (preferred_cinemas.length > 1) {
		
			$("#where").html("<em class='star'></em>My preferred cinemas <em class='arrow-down'></em>");
			
		} else if (preferred_cinemas.length == 1) {
			
			$("#where").html("<em class='star'></em>"+preferred_cinemas[0]+"<em class='arrow-down'></em>");
		
		} else {
		
			$("#where").html("Select cinema(s)<em class='arrow-down'></em>");
		} 
		
	});
	$(".where-blowout .done").click(function() {
		$("#where").removeClass("active");
		$(".where-blowout").hide(); 
			
	});
	
/*======================= What would you like to see ============================

todo:

*/


	$("#what").click(function() { 
		
		if ($(".what-blowout").is(":visible")) {

			$(this).removeClass("active");
			$(".what-blowout").hide(); 
			
		
		} else {
		
			$(this).addClass("active");
			$(".what-blowout").show(); 
			$("#where").removeClass("active");
			$(".where-blowout").hide(); 
			$("#when").removeClass("active");
			$(".when-blowout").hide(); 
		
		}
		
	});
	$(".movie-overview span").click(function() {
	
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
		console.log(selected_movies.length+"---");

		if (selected_movies.length > 1) {
		
			$("#what").html("Selected movies <em class='arrow-down'></em>");
			
		} else if (selected_movies.length == 1) {
			
			$("#what").html(selected_movies[0]+"<em class='arrow-down'></em>");
		
		} else {
		
			$("#what").html("Any movie now showing<em class='arrow-down'></em>");
		} 

	});
	$(".what-blowout .done").click(function() {
		$("#what").removeClass("active");
		$(".what-blowout").hide(); 
			
	});
	
	
	
/*======================= What would you like to see ============================

todo:

*/	
	$("#when").click(function() { 
		
		if ($(".when-blowout").is(":visible")) {

			$(this).removeClass("active");
			$(".when-blowout").hide(); 
			
		
		} else {
		
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
		
		$(this).addClass("active");
		$("#when").html($(this).text()+"<em class='arrow-down'></em>");
		$(".when-blowout").hide();
		$("#when").removeClass("active");
	});

});