function showQuickSeats() {

	//console.log("show seats");
	var p = $(this).offset();
	var btn_width = $(this).width();
	var w = $("#quick-view-seats").width();
	var h = $("#quick-view-seats").height();
	$("#quick-view-seats .hidden-area").width($(this).width()+10).css({"left": (w/2)-(btn_width/2)});	
	$("#quick-view-seats").css({"left":p.left-(w/2)+(btn_width/2), "top":p.top-(h+0)}).fadeIn();
	

}
function nothing() {

}


$(function() {

	$("a.attribute").tooltip({ 
	    track: true, 
	    delay: 0, 
	    showURL: false, 
	    showBody: " - ", 
	    fade: 100
	});
		
	$("#quick-view-seats").mouseleave(function() {
	
		$(this).fadeOut();
	
	});
    $(".quick-times-select-widget .btn").hoverIntent({
		over: showQuickSeats,
        timeout: 0,
        interval: 500,
        out: nothing    
    });
    $("#quick-view-seats").click(function() {
    
    	$("#cover").show();
    	$(".seat-selection#onpop").show();
    });
    
    $("#cover").click(function() {
    	$(this).hide();
    	$(".seat-selection#onpop").hide();
    });
    
    $(".seat-selection#onpop .close").click(function() {

    	$("#cover").hide();
    	$(".seat-selection#onpop").hide();
    
	});
});