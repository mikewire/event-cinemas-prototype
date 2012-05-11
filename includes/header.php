<?
$currentFile = $_SERVER["SCRIPT_NAME"];
$parts = Explode('/', $currentFile);
$currentFile = $parts[count($parts) - 1];
?>
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
  <link rel="stylesheet" href="style/css/0.style.css">
  <script src="js/libs/modernizr-2.5.3.min.js"></script>
</head>
<body>
  
	<header>
	
		<div id="ticket-bar">
			<span>
				<label><strong>Where</strong> would you like to go?</label>
				<div id="where">Select cinema(s) <em class="arrow-down"></em></div>
			</span>
		
			<span>
				<label><strong>What</strong> would you like to see?</label>
				<div id="what">Any movie now showing <em class="arrow-down"></em></div>
			</span>
		
			<span>
				<label><strong>When</strong> would you like to see it?</label>
				<div id="when">Today <em class="arrow-down"></em></div>
			</span>
			<a class="btn blue" href="#">Find times and book</a>
		
			<div class="ticket-img"></div>
		
		</div>
		
		<div id="cine-buzz">
			<img src="img/cinebuzz-rewards.png" alt="cinebuzz-rewards" width="94" height="26" />		
			<p>Sign up | Login</p>
			<span></span>
		</div>
		<div id="cine-buzz-blowout">
			<div class="hidden-area"></div>
			<div class="arrow"></div>
			<p>Login using your favorite social network</p>
			<div class="gigya"><img src="../img/social-login.png" alt="social-login" width="125" height="19" /></div>
			<p>Or sign in using your Cine Buzz member number and password</p>
			<form>
			
				<input type="text" placeholder="Member number" />
				<input type="text" placeholder="Password" />
				<input type="submit" class="btn yellow" value="sign in" >
				
			</form>
			<p>Not yet a member? Earn free movies and much more by signing up today!</p>
			<a class="btn yellow">Sign up for Cine buzz</a>
		</div>
		<? include("includes/top-ticketing-bar-drop-downs.php") ?>	  
		
	</header>
	
  	<div id="wrapper">
	
