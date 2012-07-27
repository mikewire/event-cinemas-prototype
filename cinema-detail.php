<? include("includes/header.php") ?>
	<div class="overlay">
		<a class="close-small">x</a>
		
		<div class="content">
		<form>
			<span class="left-column">
			
				<label>First Name</label>
				<input type="text" />

				<label>Surname</label>
				<input type="text" />

				<label>Date</label>
				<input type="text" />

				<label>Time</label>
				<input type="text" />

			</span>
			
			<span class="right-column">
			
				<label>Tel</label>
				<input type="text" />

				<label>Email address</label>
				<input type="text" />

				<label>Comments</label>
				<textarea></textarea>

			</span>
			<div class="clearfix"></div>
			<input type="submit" class="btn blue" value="submit" />		
		</form>
		</div>
	
	</div>
  
  <div class="main cinemas" role="main">

		<? include("includes/nav.php") ?>	  
  		
  		<div class="innerpage">
			<div class="left">
				<span class="strip"><h1>Strathpine Cinemas</h1></span>
				
				<div class="cinema-promo-wrapper">
			  		<span class="arrow-left">&#8249;</span>
			  		<span class="arrow-right">&#8250;</span>					
					<div class="cinema-promo-slider">
						<a href="#" class="slide"><img src="img/sample-cinema-promop.jpg" alt="sample-cinema-promop" width="710" height="233" /></a>
						<a href="#" class="slide"><img src="img/sample-cinema-promo2.jpg" alt="sample-cinema-promo2" width="710" height="233" /></a>
					</div>			
				</div>
				
				<span class="strip"><h2>Now Showing in Strathpine</h2>
				<a href="#" class="compare">Compare times in multiple cinemas</a>
				<!-- needs to link to movies page -->
				
				</span>

				<div class="movie-overview-list">
				 	<ul class="dates">
						<li class="active">Today</li>
						<li>Tomorrow</li>
						<li>Mon 01/05</li>
						<li>Tue 02/05</li>
						<li>Wed 03/05</li>	
						<li>Thur 04/05</li>
						<li>Fri 05/05</li>
					</ul>

			 		<ul class="filters">
			  			<li>
			  				<div class="checkbox"></div>
			  				<label for="goldclass-filter" class="goldclass-logo">Gold Class</label>
			  			</li>
			 			<li>
			  				<div class="checkbox"></div>
			  				<label for="vmax-filter" class="vmax-logo">Vmax</label>
			  			</li>
			 			<li>
			  				<div class="checkbox"></div>
			  				<label for="three-d-filter" class="three-d-logo">3D</label>
			  			</li>
			 			<li class="for-family">
			  				<div class="checkbox"></div>
			  				<label for="family-filter">Family</label>
			  			</li>
			  		
			  		</ul>
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
								<span class="cinema-row-wrapper">
									<div class="dates-row">
										<span class="width-wrap">
											<a class="btn chicks-btn">18:00am<span class="chicks-icon"></span></a>
											<a class="btn grey">10:00am</a>
											<a class="btn vmax-btn">12:00am<span class="vmax-icon"></span></a>
											<a class="btn grey">12:00am</a>
											<a class="btn goldclass-btn">14:00am<span class="goldclass-icon"></span></a>
											<a class="btn grey">15:00am</a>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->


					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->
					
					
					
					
					<!-- start list item -->		
					<div class="movie-list-item">
			  			<div class="image-wrapper">
				  			<img src="img/movie5.png" alt="movie1" width="105" height="150" />

			  			</div>
						<div class="cinema-movie-times-info">
		  					<strong class="title">Snow White and the Huntsman 7</strong><br />
							<p>Genre: Action, Adventure</p> |  <p>Running time: 120mins</p>
				  			<a class="details-link" href="movie-detail.php">&#8250; more details</a>
				  			<a class="poptrailer">&#8250; view trailer</a>			  				
				  			<div class="icons">
					  			<div class="goldclass-icon"></div>
				  				<div class="vmax-icon"></div>
				  			</div>
						</div>
				
						<div class="quick-times-select-widget">
							<span class="cinema-row">
								<span class="title">Select a time: </span>
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
						</div>
						
						<div class="clearfix"></div>
					</div>
					<!-- end list item -->																																													
					
				
				
				</div>				
			</div><!-- end .left -->
			
			<div class="right filters">
			
				<span class="strip"><h2>Cinema Info</h2></span>
				
				<div class="wrap cinema-info">
					<div class="logo">Logo or pic of venue</div>
					<strong>Tel</strong> 8888 8888<br />
					<strong>Address</strong> 2 Cronulla Street, Cronulla, NSW 2228<br />
					<strong>Opening hours</strong> 10am - 9pm <br /><br />
					<a href="http://maps.google.com">View on google maps</a>	<br /><br />	
				</div>
				

				<span class="strip"><h2>Upcoming events</h2></span>
				
				<div class="wrap">

					<a class="item" href="#">
						
						<img src="img/movie3.png" alt="movie3" width="80" height="120" />
						<div class="desc">
							<span class="title">
								Be the first to see it!
							</span>	
							<p>15 September 2012</p><p>Lorem ipsum dolor</p>
						</div>
						<div class="clearfix"></div>
					</a>
					<a class="item" href="#">
						<img src="img/movie3.png" alt="movie3" width="80" height="120" />
						<div class="desc">
							<span class="title">
								Be the first to see it!
							</span>	
							<p>Lorem ipsum dolor</p>
						</div>
						<div class="clearfix"></div>
					</a>

					<a class="item" href="#">
						<img src="img/movie3.png" alt="movie3" width="80" height="120" />
						<div class="desc">
							<span class="title">
								Be the first to see it!
							</span>	
							<p>Lorem ipsum dolor</p>
						</div>
						<div class="clearfix"></div>
					</a>


				</div>
				<span class="strip"><h2>Venue Hire</h2></span>
				
				<div class="wrap">
					<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
					<a class="btn blue" id="enquiry">Make and Enquiry</a><br /><br />
					
					</p>
					
				</div>
				
				<span class="strip"><h2>Parking</h2></span>
				
				<div class="wrap">
					<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.<br /><br />
					
					</p>
					
				</div>

				<span class="strip"><h2>Follow us</h2></span>
				
				<div class="wrap"><img src="img/sample-facebook-page.jpg" alt="sample-facebook-page" width="200" height="247" /><br /><br /></div>
				
			
			</div>			
			

		</div><!-- end innerpage div -->  		
		
  </div> <!-- end main -->
		
<? include("includes/footer.php") ?>
