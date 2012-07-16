$(function() {

	// gigya follow bar 
	
	var showFollowBarUI_params=
	{ 
		containerID: 'shareDiv',
		iconSize: 25,
		buttons: [
		{ 
			provider: 'facebook',
			actionURL: 'http://www.facebook.com/EventCinemas',
			action: 'dialog',
			iconURL: '//cdn.eventcinemas.com.au/www/img/fb.png'
	
		},
		{ 
			provider: 'twitter',
			action: 'dialog',
			followUsers: 'eVent_cinemas',
			iconURL: '//cdn.eventcinemas.com.au/www/img/tw.png'
		},
		{
	        provider: 'custom',
	        action: 'window',
	        actionURL: 'http://www.youtube.com/user/eventcinemas',
	        iconURL: '//cdn.eventcinemas.com.au/www/img/yt.png'
		}
		
		]
	}
	gigya.socialize.showFollowBarUI(showFollowBarUI_params);
	
	
	// gigya share bar -> needs link, descr and image set
	var share_act = new gigya.socialize.UserAction();
	share_act.setTitle("Event Cinemas");
	share_act.setLinkBack("");
	share_act.setDescription("");
	
	$(".share_li").click(function() {
		gigya.socialize.showShareUI({  userAction:share_act });
	});
	
	
	// Only for illustrative purpose - whenever a checkbox is checked something needs to happen
	
	$(".what-blowout .filters li").bind("filter-clicked", function () {
	    FilterMovies();
	});

	// cinebuzz blowout behavior
	
	$("#cine-buzz").hover(function() {
		if (!$(this).hasClass("no-blowout")) {
			$("#cine-buzz-blowout").show();
		}
	});
	
	$("#cine-buzz-blowout").mouseleave(function() {
		$("#cine-buzz-blowout").hide();
	});
		

});
