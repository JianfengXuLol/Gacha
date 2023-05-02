<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="learning project" />
		<meta name="author" content="Jess" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!-- Bootstrap CSS v5.2.1 -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
			crossorigin="anonymous" />
		<link rel="stylesheet" href="../../Regions.css" />
		<title>Gemshin Impact Page</title>
	</head>

	<body>
		<header>
			<img src="../../Logo/logo3.png" id="logo" alt="" />
		</header>

		<div class="MainContent | container-fluid">
			<div class="navigationMenu">
				<div class="row">
					<ul class="nav nav-tabs border-bottom-0">
					<li class="nav-item dropdown">
								<a class="nav-link" href="http://localhost/Gacha/index.html"><span style="color:white">HOME</span></a>
							</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle">CHARACTERS</a>
							<ul class="dropdown-menu">
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/limitedEdition_5_Star/Limited_5_star.php"
										>Limited 5 Star</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/standard_4_star/standard_4_star.php"
										>4 Star Characters</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/standard_5star/standard_5star.php"
										>Standard Banner 5 Star</a
									>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle">THE WORLD</a>
							<ul class="dropdown-menu">
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"
										>Mondstadt</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
										>Liyue</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
										>Inazuma</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"
										>Sumeru</a
									>
								</li>
							</ul>
						</li>

						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle">OTHER</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="http://localhost/Gacha/Tutorials/Tutorials.php">Tutorials</a></li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Daily_Routine/DailyRoutine.php"
										>Resources Tracker</a
									>
								</li>
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Gacha.php#"
										>Wishing Pool</a
									>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="row | contents">
					<div class="col-10 | CityDescription">
						<h1 class="titleColor">Mondstadt</h1>
						<br />
						<p>
							Mondstadt is one of the seven regions in Teyvat, and the first in
							which the Traveler starts to look for their lost sibling. It is
							the nation that worships Lord Barbatos, the Anemo Archon.
						</p>
						<br />
						<p>
							Ever since the beginning, Mondstadt has celebrated a festival
							called the Ludi Harpastum every year, with 15 days of games for
							the children to enjoy.
						</p>
						<br />
						<p>
							Before completing Archon Quest Prologue: Act I - The Outlander Who
							Caught the Wind, only small parts of Starfell Valley, Galesong
							Hill, and Windwail Highland are accessible.
						</p>
					</div>
					<div class="col-2">
						<div class="card" style="width: 250px">
							<h2 class="card-header">Mondstadt</h2>
							<img
								class="card-img-bottom"
								src="ThemeImage/Mondstadt.webp"
								alt="Theme image"
								style="width: 100%" />
							<div class="card-body">
								<p class="card-text">Archon: Barbatos</p>
								<p class="card-text">Main City: City of Mondstadt</p>
								<p class="card-text">
									Control­ling En­ti­ty: Knights of Favonius
								</p>
							</div>
						</div>
					</div>
			</div>
			<div class="row | contents">
					<div class="gallery col-7">
							<div id="demo" class="carousel slide" data-bs-ride="carousel">
								<!-- Indicators/dots -->
								<div class="carousel-indicators">
									<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
									<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
									<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
									<button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
									<button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
									<button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
								</div>
								
								<!-- The slideshow/carousel -->
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img src="City/city1.webp" alt="City#1" class="d-block" style="width:100%">
									</div>
									<div class="carousel-item">
										<img src="City/city3.webp" alt="City#3" class="d-block" style="width:100%">
									</div>
									<div class="carousel-item">
										<img src="City/city4.webp" alt="City#4" class="d-block" style="width:100%"> 
									</div>
									<div class="carousel-item">
										<img src="City/city5.webp" alt="City#5" class="d-block" style="width:100%"> 
									</div>
									<div class="carousel-item">
										<img src="City/city6.png" alt="City#6" class="d-block" style="width:100%"> 
									</div>
								
									<div class="carousel-item">
										<img src="City/city8.jpg" alt="City#8" class="d-block" style="width:100%"> 
									</div>
								</div>

								<!-- Left and right controls/icons -->
								<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
								<span class="carousel-control-prev-icon"></span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
								<span class="carousel-control-next-icon"></span>
								</button>
							</div>
					</div>

					<div class="imgDescription col-5">
							<h2 class="titleColor">Mondstadt City</h2>
							<br>
							<p>Mondstadt city features cobblestone streets and several windmills surrounded by a large stone castle wall on the east lower end. A statue of the Anemo Archon watches over the city, with the Favonius Cathedral in the back.</p>
					</div>
					<hr>
					<h4>Sub Areas</h4>
					<hr>
					<div class="d-flex">
						<img
								src="SubAreas/Brightcrown_Mountains.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
								Brightcrown Mountains
							</h4>
							<p>
							Brightcrown Mountains is an area located in Mondstadt. It consists of Brightcrown Canyon and Stormterror's Lair. About the canyon, yhe northeastern part of the canyon contains the eastern entrance to Stormterror's Lair. About the lair,Once the capital of Old Mondstadt, ruled by the God of Storms, Decarabian.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Dragonspine.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Dragonspine
							</h4>
							<p>
							Dragonspine, historically known as Vindagnyr, is an area located in Mondstadt.It is a vast mountain, engulfed with ancient ruins and snow-capped areas, and also containing the remains of Durin. It was named Vindagnyr prior to Durin's fall.There are some peculiarities with how the snow gathers but never melts on the mountain. Due to its extreme cold, Dragonspine is also one of the most dangerous places in Mondstadt.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Galesong_Hill.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Galesong Hill
							</h4>
							<p>
							Galesong Hill consists of Cape Oath, Dadaupa Gorge, Falcon Coast, Musk Reef and Windrise. Cape Oath is In the southeast corner of Mondstadt's surrounds lies a cape that borders with Galesong Hill. About Dadaupa Gorge, Home to three important hilichurl tribes: the Meaty tribe, the Sleeper tribe, and the Eclipse tribe. Within it also lies the Sword Cemetery, which witnessed the battle against the monsters of Khaenri'ah. About Falcon Coast, Stretching eastward from Windrise to the sea, Falcon Coast — together with Cape Oath — shelters the sea from three sides, creating a bay that sits east of Mondstadt. Musk Reef is Located off Cape Oath. The main feature on the island is the entrance to the Spiral Abyss. Windrise is A plain believed to be the location where Vennessa had ascended to Celestia, where she became a god and now watches over Mondstadt as the Falcon of the West of the Four Winds. The massive oak tree is believed to have grown there after she ascended.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Starfell_Valley.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Starfell Valley
							</h4>
							<p>
							It is considered the most diverse region of Mondstadt, spreading far from the tip of Stormbearer Point to the ends of the Whispering Woods. It is also home to the City of Mondstadt in Cider Lake. The area also consists of abundant lakes and tree variety.The area is where the Knights of Favonius's duties primarily takes place, protecting locals and travelers alike with guards patrolling around the area.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Windwail_Highland.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Windwail Highland
							</h4>
							<p>
							It is home to the idyllic town of Springvale and the chief winery of Mondstadt, Dawn Winery. It also spans far across the wolf-ruled Wolvendom.It is one of the more rustic areas around Mondstadt having clear springs, orchards and lush forests; until one reaches to Wolvendom, which is engulfed in higher enemy activity and is usually avoided by locals.
							</p>
						</div>
					</div>
					<hr />
			</div>
			
		</div>

		<footer></footer>

		<!-- Bootstrap JavaScript Libraries -->
		<script
			src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
			integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
			crossorigin="anonymous"></script>

		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
			integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
			crossorigin="anonymous"></script>

		<!-- <script src="Gacha.js"></script> -->

		<script></script>
	</body>
</html>
