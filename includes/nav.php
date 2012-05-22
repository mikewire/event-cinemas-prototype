  <nav>
			
	<a href="index.php"><img class="logo" src="img/ec-logo.png" /></a>
	<div class="expand"><span></span></div>
	<span class="wrap">
		<ul>
			<li class="home"><a href="index.php">Home</a></li>
			<li <? if ($currentFile == "movies.php") { ?>class="active"<? } ?>><a href="movies.php">Movies</a></li>
			<li><a href="#">Alternate content</a></li>
			<li <? if ($currentFile == "cinemas.php") { ?>class="active"<? } ?>><a href="cinemas.php">Cinemas</a></li>
			<li><a href="#">Advanced Tickets</a></li>
			<li><a href="#">Premium Cinema</a></li>					
			<li><a href="#">Events & Promotions</a></li>					
			<li><a href="#">Member programs</a></li>							
		</ul>
		<form class="search-form">
			<input class="search" type="text" placeholder="Film, Actor, etc.. "/>
			<input class="red-search-btn" type="submit" value="" />
		</form>
	</span>
  </nav>
