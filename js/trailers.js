$(function() {

//========================================================================================================//
//============================================ TRAILERS ===================================================//
//========================================================================================================//

	// Trailer lightbox will open upon click off all links / buttons with this class
	
	$(".poptrailer").click(function() {
	
		if ($(".home-items #slider").length > 0) {
			clearInterval(timer);
		}
		console.log("trailer");
		$("#cover").show();
		$("#trailer").show();
		
	
	});
	
	// These two events cause the trailer lightbox to close
	
	$("#trailer .close").click(function() {

		closeTrailer();
	});
	$("#cover").click(function() {
	
		closeTrailer();
	
	});
	

});
