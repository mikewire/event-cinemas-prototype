$(function() {

	// ie7 quick times widget hack
	
	$(".quick-times-select-widget .cinema-row .btn").each(function() {
	
		var btnLength = 60;
		$("span",this).each(function() {
		
			btnLength += $(this).width();
		
		});
		$(this).width(btnLength);
	});
	
	$(".innerpage").height($(".innerpage").height()+200);
	$(".ticketing .left").height($(".ticketing .left").height()+200);
	$(".seat-selection .seats .front").width($(".seat-selection .seats").width());
	$(".seat-selection .seats .rear").width($(".seat-selection .seats").width());
});