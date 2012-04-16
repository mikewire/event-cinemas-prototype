/* Author:

*/
$(document).ready(function() {

/*
	if(geo_position_js.init()){
			geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
		}
		else{
			alert("Functionality not available");
		}
	
	function success_callback(p)
		{
		}
		
		function error_callback(p)
		{
		}				
*/
		
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
	
	$("#main").click(function() {
	
		$(".when-blowout").hide(); 
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