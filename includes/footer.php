 </div><!-- end wrapper -->

  <div id="trailer">
  	<a class="close"></a>
  	<video src="trailers/avengers-high-res.mp4" controls="controls"></video>
  	<div class="info">
  		<img src="img/the-avengers-poster.jpg" alt="the-avengers-poster"  />
  		<a class="btn blue" href="#">find times and book</a>
  		<div class="synopsis">
	  		<h3>Movie Info</h3>
  			<p><strong>Director</strong> Joss Whedon</p>
  			<p><strong>Starring</strong> Robert Downey Jr., Chris Evans, Mark Ruffalo, Scarlett Johansson</p>
  			<p><strong>Running time</strong> 142 min</p>
  		</div>
  	</div>
  	<div class="clearfix"></div>	
  </div>
  <div id="cover"></div>


    <footer <? if ($currentFile == "index.php") { ?>class="footer-home"<? } ?>>
    	<div class="footer-wrapper">
	    	<span class="copyright">&copy; 2012 EVENT CINEMAS</span>
	    	<ul class="footer-nav">
	    		<li><a href="#">Gift Shop</a></li>
	    		<li><a href="#">Corporate sales</a></li>
	    		<li><a href="#">Event TV</a></li>
	    		<li><a href="#">Customer service</a></li>
	    		<li><a href="#">FAQ</a></li>
	    		<li><a href="#">Careers</a></li>
	    		<li><a href="#">Terms of use</a></li>
	    	</ul>
	    	<div class="right">
	    		<ul>
	    			<li><a><span class="mobile"></span>Download our mobile apps</a></li>
	    			<li class="share_li"><a><span class="share"></span>Share</a></li>    		
	    			<li class="social">

						<div id="shareDiv"></div>
	    			
	    			</li>    		
	    		</ul>
	    	</div>
    	</div>
    </footer>  

    
    <script>var currentMovie = "";</script>
  <? if ($currentFile == "movie-detail.php") { ?>
	  <script>currentMovie = "The Avengers";</script>
  <? } ?>


  <script src="js/libs/jquery-1.7.1.min.js"></script>
  <script src="js/libs/hoverIntent.js"></script>    
  <script src="js/libs/jquery.cookie.js"></script>
  <script src="js/libs/jquery.cycle.js"></script>
  <script src="js/libs/selectivizr-min.js"></script>
  
  <script type="text/javascript" src="http://cdn.gigya.com/js/socialize.js?apiKey=3_Xx36uDGryegaVqYj0xv4tDB8un6RQjCUNF37_XKEXsn5NK9ienhFHxuAoH98Pccr"></script>
  
  <script src="js/functions.js"></script>
  <script src="js/script.js"></script>
</body>
</html>