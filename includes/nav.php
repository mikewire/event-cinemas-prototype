  <div class="nav">
			
	<a href="#"><img class="logo" src="img/ec-logo.png" /></a>
	<div class="expand"><span></span></div>
	<span class="wrap">
		<ul>
			<li class="home"><a href="#">Home</a></li>
			<li class="movies_li <? if ($currentFile == "movies.php" || $currentFile == "coming-soon.php") { ?>active<? } ?>"><a href="#">Movies</a></li>
			<li class="alternate_li <? if ($currentFile == "alternate-content.php") { ?>active<? } ?>"><a href="#">Alternate Content</a></li>
			<li class="cinemas_li <? if ($currentFile == "cinemas.php" || $currentFile == "cinema-detail.php") { ?>active<? } ?>"><a href="#">Cinemas</a></li>
			<li class="advanced-tickets_li <? if ($currentFile == "advanced-tickets.php") { ?>active<? } ?>"><a href="#">Advanced Tickets</a></li>
			<li class="premium_li <? if ($currentFile == "premium-cinema.php") { ?>active<? } ?>"><a href="#">Premium Cinema</a></li>
			<li class="promos_li <? if ($currentFile == "promotions.php") { ?>active<? } ?>"><a href="#">Events & Promotions</a></li>
			<li class="member_programs_li"><a href="#">Member programs</a></li>							
		</ul>
		<form class="search-form">
			<input class="search" type="text" placeholder="Film, Actor, etc.. "/>
			<input class="red-search-btn" type="submit" value="" />
		</form>
	</span>
  </div>
