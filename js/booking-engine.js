function showQuickSeats() {

	//console.log("show seats");
	var p = $(this).offset();
	var w = $("#quick-view-seats").width();
	var h = $("#quick-view-seats").height();
	
	$("#quick-view-seats").css({"left":p.left-(w/2), "top":p.top-(h+20)}).fadeIn();
	

}
function hideQuickSeats() {

	console.log("hide seats");
	$("#quick-view-seats").hide();
}


$(function() {


    $(".quick-times-select-widget .cinema-row .btn").hoverIntent({
		over: showQuickSeats,
        timeout: 0,
        interval: 500,
        out: hideQuickSeats    
    });

});