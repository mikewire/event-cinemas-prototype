var timer;

function homeSlider() {
	
	$("#slider a.active").removeClass("active").next().addClass("active");
	$("#background-wrap img").fadeOut(500, function() {
	
		$("#background-wrap img").attr("src","img/"+$("#slider a.active img").attr("main-img"));
	});
	
	$("#background-wrap img").fadeIn(1000);
}


$(document).ready(function() {

	timer = setInterval(homeSlider, 10000);

	$(window).resize(function() {	
		//console.log($("#background-wrap img").width());
		console.log($(window).height());
	});
		
	$("#slider a").click(function() {
	
		$("#slider").find("a.active").removeClass("active");
		$(this).addClass("active");
		$("#background-wrap img").fadeOut(500, function() {
		
			$("#background-wrap img").attr("src","img/"+$("#slider a.active img").attr("main-img"));
			
		});
		$("#background-wrap img").fadeIn(1000);
		clearInterval(timer);
		timer = setInterval(homeSlider, 10000);
	});	
		
		
	$(".movie-wrapper span").hover(function() {
	
		$(".hover",this).show();
	
	}, function() {
	
		$(".hover",this).hide();
		
	});
	
	$("#where").focus(function() { 
	
		$(".where-blowout").show(); 
		$(".what-blowout").hide(); 
		$(".when-blowout").hide(); 
		
	});
	$("#what").focus(function() { 
	
		$(".what-blowout").show(); 
		$(".where-blowout").hide(); 
		$(".when-blowout").hide(); 
		
	});
	$("#when").focus(function() { 
	
		$(".when-blowout").show(); 
		$(".what-blowout").hide(); 
		$(".where-blowout").hide(); 
		
	});
	
	$(".what-blowout span").click(function() {
	
		$("#what").val($("p",this).text());
		$(".what-blowout").hide(); 
	});
	$("#done").click(function() {
	
		$("#where").val("My preferred cinemas");
		$(".where-blowout").hide(); 
	});
	
	$(".when-blowout li").click(function() {
	
		$("#when").val($(this).text());
		$(".when-blowout").hide(); 
	});

});