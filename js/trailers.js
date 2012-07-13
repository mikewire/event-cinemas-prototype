$(function() {

//========================================================================================================//
//============================================ TRAILERS ===================================================//
//========================================================================================================//

	// Trailer lightbox will open upon click off all links / buttons with this class
	$(".poptrailer").click(function() {
		//LoadTrailer($(".call-to-action .poptrailer").attr("movieId"));	
	    $("#cover").show();
	    $("#trailer").show();
	});

	function RenderTrailer(trailer) {

	    var $moviesList = $("div.#trailer");
	    $moviesList.html("");

	    $("#trailer-template").tmpl(trailer).appendTo($moviesList);

	    $("#cover").show();
	    $("#trailer").show();
	}

	// These two events cause the trailer lightbox to close
	$("#trailer .close").click(function() {
		closeTrailer();
	});
	$("#cover").click(function() {
		closeTrailer();
	});

});
