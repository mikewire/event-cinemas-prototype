$(function() {

//========================================================================================================//
//============================================ TOP TICKETING WIDGET ======================================//
//========================================================================================================//
	
	//======= init =======//
	
	cookie = $.cookie('preferred_cinemas');
	
	if (cookie != null) {
		preferred_cinemas = cookie.split(/,/); 	
		removeByElement(preferred_cinemas, "");
		$("#top-ticketing-cinemas").val(preferred_cinemas);
	} 	
	
	//
	if (preferred_cinemas.length > 1) {
	
		$("#where").html("<em class='star'></em>My preferred cinemas <em class='arrow-down'></em>");
		
	} else if (preferred_cinemas.length == 1) {
	
		$("#where").html("<em class='star'></em>"+preferred_cinemas[0]+"<em class='arrow-down'></em>");
	
	} else if (preferred_cinemas.length == 0) {
	
		$("#cinema-filters").html("<a class='set-preferred-cinemas'>Set your preferred cinemas</a>");
		$(".find-times-and-book").addClass("set-preferred-cinemas");
	}
	
	for ( var i=0; i < preferred_cinemas.length; i++ ) { 
		
		$(".where-blowout").find(".checkbox[value='"+preferred_cinemas[i]+"']").parent().addClass("active");
		
		
		if ($("#cinema-filters").length > 0) {
			if (preferred_cinemas[i] != "") {
				$("#cinema-filters").prepend("<span><div class='checkbox' value='"+preferred_cinemas[i]+"'></div> <label for='"+preferred_cinemas[i]+"filter'>"+preferred_cinemas[i]+"</label></span>");
			}
		}
	
	}
	if (currentMovie != "") {
	
		$("#what").html(currentMovie+"<em class='arrow-down'></em>");
		$("#top-ticketing-movies").val(currentMovie);

	}
	$("#top-ticketing-time").val($(".when-blowout li.active").text());
	
	
	//======= events =======//
		
	$("#ticket-bar .btn").click(function() {
	
		$("#top-ticketing-form").submit();
		//console.log("submit");
	}); 

	// To hide all the ticket bar blowouts
	
	$("#wrapper").click(function() {
		$("#where").removeClass("active");
		$(".where-blowout").hide(); 
		$("#what").removeClass("active");
		$(".what-blowout").hide(); 
		$("#when").removeClass("active");
		$(".when-blowout").hide(); 
		TicketBarZIndex(4000);
		
	});
	$("#cover").click(function() {
	
		hideAllTicketBarBlowouts();
	});




	// where would you like to go 
	
	$("#where").click(function() { 
						
		if ($(".where-blowout").is(":visible")) {
			hideAllTicketBarBlowouts(); 
			
		} else {
			$("#cover").show();
			TicketBarZIndex(9999);
			$(this).addClass("active");
			$(".where-blowout").removeClass("in-the-middle").show(); 
			$("#what").removeClass("active");
			$(".what-blowout").hide(); 
			$("#when").removeClass("active");
			$(".when-blowout").hide(); 
		
		}
		
	});
	$(".where-blowout span").click(function() {
		if ($(this).hasClass("active")) {
			removeByElement(preferred_cinemas, $("label",this).text());
			$.cookie('preferred_cinemas', preferred_cinemas);
			$(this).removeClass("active");
		} else {
			removeByElement(preferred_cinemas, $("label",this).text());
			preferred_cinemas.push($("label",this).text());
			$.cookie('preferred_cinemas', preferred_cinemas);
			$(this).addClass("active");
		}
		
		if (preferred_cinemas.length > 1) {
		
			$("#where").html("<em class='star'></em>My preferred cinemas <em class='arrow-down'></em>");
			
		} else if (preferred_cinemas.length == 1) {
			
			$("#where").html("<em class='star'></em>"+preferred_cinemas[0]+"<em class='arrow-down'></em>");
		
		} else {
		
			$("#where").html("Select cinema(s)<em class='arrow-down'></em>");
		} 
		$("#top-ticketing-cinemas").val(preferred_cinemas);
		
	});
	$(".where-blowout .done").click(function() {
		hideAllTicketBarBlowouts();
		
	});
	
	
	// What would you like to see 

	$("#what").click(function() { 
		
		if ($(".what-blowout").is(":visible")) {

			hideAllTicketBarBlowouts(); 

			
		
		} else {
			$("#cover").show();
			TicketBarZIndex(9999);
		
			$(this).addClass("active");
			$(".what-blowout").show(); 
			$("#where").removeClass("active");
			$(".where-blowout").hide(); 
			$("#when").removeClass("active");
			$(".when-blowout").hide(); 
		
		}
		
	});
	$(".what-blowout .movie-overview span").click(function() {
	
		if ($(this).hasClass("active")) {
			removeByElement(selected_movies, $(".title",this).text());
			$(this).removeClass("active");
		} else {
			removeByElement(selected_movies, $(".title",this).text());
			selected_movies.push($(".title",this).text());
			$(this).addClass("active");
		}
		for ( var i=0; i < selected_movies.length; i++ ) { 
			console.log(selected_movies[i]);
		}

		if (selected_movies.length > 1) {
		
			$("#what").html("Your selected movies <em class='arrow-down'></em>");
			
		} else if (selected_movies.length == 1) {
			
			$("#what").html(selected_movies[0]+"<em class='arrow-down'></em>");
		
		} else {
		
			$("#what").html("Any movie now showing<em class='arrow-down'></em>");
		} 
		$("#top-ticketing-movies").val(selected_movies);

	});
	$(".what-blowout .done").click(function() {
		hideAllTicketBarBlowouts();
			
	});
	
	
	
	// When would you like to see it 

	$("#when").click(function() { 
		
		if ($(".when-blowout").is(":visible")) {

			hideAllTicketBarBlowouts();
			
		
		} else {
			$("#cover").show();
			TicketBarZIndex(9999);
		
			$(this).addClass("active");
			$(".when-blowout").show(); 
			$("#where").removeClass("active");
			$(".where-blowout").hide(); 
			$("#what").removeClass("active");
			$(".what-blowout").hide(); 
		
		}
		
	});
	
	$(".when-blowout li").click(function() {
	
		$(".when-blowout li").each(function() {
		
			$(this).removeClass("active");
		});
		$("#top-ticketing-time").val($(this).text());
		
		$(this).addClass("active");
		$("#when").html($(this).text()+"<em class='arrow-down'></em>");
		hideAllTicketBarBlowouts();
	});

});