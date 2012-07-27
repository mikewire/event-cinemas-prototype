$(function() {

//========================================================================================================//
//============================================ TRAILERS ===================================================//
//========================================================================================================//

	// Trailer lightbox will open upon click off all links / buttons with this class
	$(".poptrailer").click(function() {
		LoadTrailer($(this).attr("movieId"));	
	});

	$("#trailer").on("click", ".items a", function () {
	    showTrailer($(this));
	});

	// These two events cause the trailer lightbox to close
	$("#trailer").on("click", ".close", function () {
		closeTrailer();
	});
	$("#cover").click(function() {
		closeTrailer();
	});

});
