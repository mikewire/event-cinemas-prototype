$(function() {

	$(".background-arrow-right").click(function() {
		
		
		if ($("#background-wrap-multiple .active").nextAll().length == 0) {
			
			$("#background-wrap-multiple .active").fadeOut(function() {

				$(this).removeClass("active")
				$("#background-wrap-multiple div:first-child").addClass("active").fadeIn();
			
			});
			
		} else {
		
			$("#background-wrap-multiple .active").fadeOut(function() {
			
				$(this).removeClass("active").next().addClass("active");
				$("#background-wrap-multiple .active").fadeIn();
			});
		
		}
	
	});
	
	$(".background-arrow-left").click(function() {
		
		
		if ($("#background-wrap-multiple .active").prevAll().length == 0) {
			
			$("#background-wrap-multiple .active").fadeOut(function() {

				$(this).removeClass("active")
				$("#background-wrap-multiple div:last-child").addClass("active").fadeIn();
			
			});
			
		} else {
		
			$("#background-wrap-multiple .active").fadeOut(function() {
			
				$(this).removeClass("active").prev().addClass("active");
				$("#background-wrap-multiple .active").fadeIn();
			});
		
		}
	
	});


});