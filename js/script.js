var timer;

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
	
	$("#where").click(function() { 
		$(this).addClass("active");
		$(".arrow-down",this).css("border-top", "6px solid #dfdfdf");
		$(".where-blowout").show(); 
		
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