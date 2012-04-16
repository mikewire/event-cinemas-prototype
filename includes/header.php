<!doctype html>
<!--[if IE 7]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!--[if !IE]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Event Cinemas</title>
  <meta name="description" content="">
  <link rel="stylesheet" href="style/css/style.css">
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body>
  
  <header>

  	<div id="ticket-bar">
  		<span>
			<label><strong>Where</strong> would you like to go?</label>
			<input type="text" id="where" placeholder="Select a cinema">
		</span>
		
		<span>
			<label><strong>What</strong> would you like to see?</label>
			<input type="text" id="what" placeholder="Any Movie">
		</span>
		
		<span>
			<label><strong>When</strong> would you like to see it?</label>
			<input type="text" id="when" placeholder="Today">
		</span>
		<a class="btn" href="ticketing1.php">Find times and book</a>
		
		<div class="ticket-img"></div>
	</div>
	<a id="cine-buzz" href="cinebuzz.php"></a>
	
  </header>


  <? include("includes/top-ticketing-bar-drop-downs.php") ?>

                                        
                                 