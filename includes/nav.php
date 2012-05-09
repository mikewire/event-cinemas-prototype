  <nav>
			
	<a href="index.php"><img class="logo" src="img/ec-logo.png" /></a>
	
	<ul>
		
		<li <? if ($currentFile == "movies.php" || $currentFile == "movie-detail.php") { ?>class="active"<? } ?>><a href="movies.php">Movies</a></li>
		<li><a href="#">Alternate content</a></li>
		<li><a href="#">Cinemas</a></li>
		<li><a href="#">Advanced Tickets</a></li>
		<li><a href="#">Premium Cinema</a></li>					
		<li><a href="#">Events & Promotions</a></li>					
		<li><a href="#">Member programs</a></li>							
	</ul>
	<form class="search-form">
		<input class="search" type="text" placeholder="Film, Actor, etc.. "/>
		<input class="red-search-btn" type="submit" value="" />
	</form>
  </nav>
