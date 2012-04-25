var timer;
var preferred_cinemas = new Array();
var selected_movies = new Array();

function changeSkin() {
	
	$(".call-to-action").fadeOut(200);
	
	$("#skin").fadeOut(200, function() {
	
		$("#skin").attr("src","img/hp_bck/"+$("#slider a.active img").attr("skin"));
	});
	
	$("#skin").fadeIn(600, function() {
	
	
		$(".call-to-action img").attr("src","img/hp_bck/"+$("#slider a.active img").attr("skin-title"));
		$(".call-to-action .btn.blue").text($("#slider a.active img").attr("btn-title"));

		$(".call-to-action").fadeIn(300);
	});

}
function homeSlider() {
	
	$("#slider a.active").removeClass("active").next().addClass("active");
	changeSkin();
	
}
function removeByElement(arrayName,arrayElement) {
	
	for ( var i=0; i < arrayName.length; i++ ) { 

		if(arrayName[i]==arrayElement) {
		
			arrayName.splice(i,1); 
		
		}
  	} 
}
  
  
  
  
$(document).ready(function() {

	timer = setInterval(homeSlider, 10000);

/*
	$("#slider img").adipoli({
	
	 'startEffect' : 'grayscale',
     'hoverEffect' : 'foldLeft'
	
	});	
*/
	$("#slider a").click(function() {
	
		$("#slider").find("a.active").removeClass("active");
		$(this).addClass("active");
		changeSkin();
		clearInterval(timer);
		timer = setInterval(homeSlider, 10000);
	});	
		
		
	$(".movie-wrapper span").hover(function() {
	
		$(".hover",this).show();
	
	}, function() {
	
		$(".hover",this).hide();
		
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