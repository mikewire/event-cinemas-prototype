		<div class="quick-times-select-widget">
<!--
			<a class="view-seats-link">
				<p>View available seats</p>
				<div class="view-seats-arrow"></div>
			</a>
-->
			<span class="arrow"></span>
			<div class="hidden-area"></div>
			<?
			$preferred = array();
			
			if (isset($_COOKIE["preferred_cinemas"])){
				$cookie = $_COOKIE["preferred_cinemas"];
			}
			$preferred = explode(",",$cookie);
			if ($preferred[0] != "") {
			?>
			
				<ul class="dates">
					<li class="active">Today</li>
					<li>Tomorrow</li>
					<li>Mon 01/05</li>
					<li>Tue 02/05</li>
					<li>Wed 03/05</li>	
					<li>Thur 04/05</li>
					<li>Fri 05/05</li>
				</ul>
				<div class="clearfix"></div>
				<?
				for ( $i=0; $i < count($preferred); $i++ ) { 
				?>
					<span class="cinema-row">
						<span class="title"><?=$preferred[$i]?></span>
						<span class="cinema-row-wrapper">
							<div class="dates-row">
								<span class="width-wrap">
									<a class="btn grey">10:00am</a>
									<a class="btn vmax-btn">12:00am<span class="vmax-icon"></span></a>
									<a class="btn grey">12:00am</a>
									<a class="btn goldclass-btn">14:00am<span class="goldclass-icon"></span></a>
									<a class="btn grey">15:00am</a>
									<a class="btn chicks-btn">18:00am<span class="chicks-icon"></span></a>
									<a class="btn grey">18:00am</a>
									<a class="btn grey">19:00am</a>
									<a class="btn three-d-btn">20:00am<span class="three-d-icon"></span></a>
								</span>
							</div>
							<span class="shadow-right"></span>
							<span class="shadow-left"></span>
		
						</span>
						<div class="reveal-more">&#8250;</div>
						<div class="reveal-less">&#8249;</div>
					</span>  
							
				<? } ?>
			<? } else { ?>
<p>Nick Fury of S.H.I.E.L.D. brings together a team of super humans to form The Avengers to help save the Earth from Loki and his army.</p>
<p>With: Robert Downey Jnr, Samuel L. Jackson, Chris Evans.</p>
				<a>Find times and book</a>
			
			
			<? } ?>
		</div><!-- end quick times select widget -->
