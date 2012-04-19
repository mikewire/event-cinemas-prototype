<? include("includes/header.php") ?>
  
  <div id="wrapper">
	 
	  <div id="main" role="main" class="home">
<!-- 	  <a id="home-call-to-action" class="btn" href="ticketing1.php">Find times and book</a> -->
		
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
			<a class="btn blue" href="#">Find times and book</a>
			
			<div class="ticket-img"></div>
		</div>
		
		<div id="cine-buzz">
			<img src="img/cinebuzz-rewards.png" alt="cinebuzz-rewards" width="94" height="26" />		
			<p>Sign up | Login</p>
			<span></span>
		</div>

		
	  </header>
	  <? include("includes/top-ticketing-bar-drop-downs.php") ?>
		

	
		  <nav>
					
			<a href="index.php"><img class="logo" src="img/ec-logo.png" /></a>
			
			<ul>
				<li ><a href="movies.php">Movies</a></li>
				<li><a href="cinemas.php">Cinemas</a></li>
				<li><a href="#">Advanced Tickets</a></li>
				<li><a href="events.php">Events</a></li>					
				<li><a href="offers.php">Promotions</a></li>					
				<li><a href="memberprograms.php">Member programs</a></li>							
			</ul>
			<input class="search" type="text" placeholder="Film, Actor, etc.. "/>
		  </nav>
		  
		 
		 
		  <div class="home-items">
		  	
		  	<div id="slider">
		  		<div class="opaque-background"></div>
		  		<ul class="top">
		  			<li class="active"><a href="#">Now showing</a></li>
		  			<li><a href="#">Coming soon</a></li>
		  			<li><a href="#">Advanced tickets</a></li>
		  		</ul>
		  		<span class="arrow-left">&#8249;</span>
		  		<span class="arrow-right">&#8250;</span>
		  		<div class="items">
		  		
		  			<a href="#" class="active">
		  				<img src="img/hangover-thumb.jpg" main-img="the-vow.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="snow-white.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="good-deeds.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="the-vow.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="snow-white.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="good-deeds.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="the-vow.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="snow-white.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			<a href="#">
		  				<img src="img/hangover-thumb.jpg" main-img="good-deeds.jpg" alt="hangover-thumb" width="156" height="79" />
		  				<p>The Hangover</p>
		  			</a>
		  			
		  		
		  		
		  		</div>
		  		
		  	</div>
		  	
		  	<div id="premium-cinema-box">
		  		<div class="opaque-background"></div>
	  			<ul class="top">
		  			<li class="gc active"><a href="#">Gold Class</a></li>
		  			<li class="vmax"><a href="#">Vmax</a></li>
		  		</ul>
		  		<div class="items">
		  		
		  			<a href="#">
		  				<div class="opaque-strip"></div>
		  				<img src="img/gold-class-thumb.jpg" alt="gold-class-thumb" width="290" height="78" />
		  				<span class="title">Movies as they should be</span>
						<p>What's showing in Gold Class? Find out here &#8250;</p>
		  			</a>
		  		
		  		
		  		</div>
		  	
		  	</div>
		  	<div class="clearfix"></div>
		  	
		  	<div id="ads">
		  	
		  		<div class="ad"></div>
		  		<div class="ad"></div>
		  		<div class="ad"></div>
		  		<div class="clearfix"></div>
		  	</div>
		  </div>
	  	  <!-- end home items -->
	  	  
	  </div> <!-- end main -->
	  <div id="background-wrap"><img src="img/good-deeds.jpg" alt="snow-white" /></div>

  </div>
<? include("includes/footer.php") ?>
