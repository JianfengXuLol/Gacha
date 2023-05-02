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
                       <h1>Inazuma</h1>
                        <br>
                        <p>Inazuma (Japanese: 稲妻 Inazuma) is one of the seven regions in Teyvat. It is an archipelagic region that worships Raiden Shogun, the Electro Archon, who is also the leader of its governing body, the Inazuma Shogunate. Inazuma is located approximately 4 km southeast from Liyue Harbor and is a close neighbor with the Dark Sea.</p>
                        <br>
                        <p>In the past year relative to the current events of the game, the situation in Inazuma has made a drastic turn towards isolationism, locked down under the Sakoku Decree. "Baal" also enacted the related Vision Hunt Decree, declaring that Visions, as gifts from the gods, should be in the sole hands of divinity — and is now rounding up all Visions in Inazuma to inlay them in the hands of a statue of the Thousand-Armed, Hundred-Eyed God.</p>
                        <br>
                        <p>Atsuko, an Inazuman who defected to Liyue, describes the country as having a "tense" and "dangerous" environment and discourages traveling there; she also remarks that the Kanjou Commission, one of the Tri-Commission, conduct many assessments that citizens must pass in order to be given permission to leave Inazuma. She bypassed those assessments by making her own raft and fleeing to Liyue. However, the Fatui seem to be able to freely enter and exit due to their diplomatic immunity.</p>
                        <br>
                        <p>Access into Inazuma is unlocked after reaching Adventure Rank 30 and completing the first part of the Archon Quest Chapter II: Act I - The Immovable God and the Eternal Euthymia.</p>
					</div>
					<div class="col-2">
						<div class="card" style="width: 250px">
            <h2 class="card-header">Inazuma</h2>
                            <img class="card-img-bottom" src="ThemeImage/Inazuma.webp" alt="Theme image" style="width:100%">
                            <div class="card-body">
                            <p class="card-text">Archon: Beelzebul</p>
                            <p class="card-text">Main City: Inazuma City</p>
                            <p class="card-text">Control­ling En­ti­ty: Inazuma Shogunate</p>                      
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
      <img src="City/city1.png" alt="City#1" class="d-block" style="width:100%">
    </div>
    <div class="carousel-item">
      <img src="City/city2.png" alt="City#2" class="d-block" style="width:100%">
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
      <img src="City/city6.jpg" alt="City#6" class="d-block" style="width:100%"> 
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
							<h2 class="titleColor">Inazuma City</h2>
							<br>
							<p>Inazuma City (Japanese: 稲いな妻ずま城じょう Inazuma-jou) is a subarea and a main city located in Narukami Island, Inazuma. It consists of three areas: Hanamizaka, Tenryou and Tenshukaku. About Hanamizaka, it occupies the outskirts of Inazuma City between Byakko Plain and Tenryou. About Tenryou, among the streets of Tenryou is the famous Commercial Street — the busiest street in all of Inazuma. Lastly, The Tenshukaku compound occupies the southern half of Inazuma City. It is the highest point in the city and serves as the residence of the Raiden Shogun and as the headquarters of the Tenryou Commission.</p>
					</div>
					<hr>
					<h4>Sub Areas</h4>
					<hr>
					<div class="d-flex">
						<img
								src="SubAreas/Enkanomiya.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
              Enkanomiya
							</h4>
							<p>
							To enter Enkanomiya, the seals on the five Goshou Rocks need to be broken for the pearls located within the shrines for the Key of the Moon-Bathed Deep, which would allow entry to Enkanomiya, provided that the spirit veins connecting Enkanomiya and Watatsumi Island are flowing smoothly and a person whose heart is "as clear as water." According to legend, the key was forged from Orobashi's blood.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Kannazuka.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Kannazuka
							</h4>
							<p>
							Behind the rocky outcrops lies Mikage Furnace, the largest smelting facility in Inazuma and is also home to the battlefront fortress of the Shogunate's forces. It is considered to be disputed territory between the Inazuma Shogunate and the Watatsumi Army. The area neither belongs to both armies and neither Inazuman faith nor Sangonomiya faith has any influence.[1] For this reason, this area is called Kannazuka, which means "the hill where no gods reside."
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Narukami_Island.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Narukami Island
							</h4>
							<p>
							The area spans across Ritou, its port of entry, to Mt. Yougou which is home to the Grand Narukami Shrine, and on its coast is Inazuma City. It also has a mass of dense forests under the moonlight and underwater ruins alike.It is where the Inazuma Shogunate primarily takes rule, enforcing policies and laws in accordance to the Sakoku Decree. Inazuman public festivals and cultural events are being held here.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Seirai_Island.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Seirai Island
							</h4>
							<p>
							It is said that the island once experienced a calamity and the center of the island was enveloped by a perpetual thunderstorm. This storm has resulted in the unique geography of the island. Until the Seirai Stormchasers quest series is completed, the center of the island is constantly afflicted with Balethunder and lightning that targets the player. Even after completing the quest series, Electro Water will still persist at the center of the island, although it can be cleared by a nearby puzzle, which will reveal a large hole in the middle.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Tsurumi_Island.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Tsurumi Island
							</h4>
							<p>
							Shrouded in a dense Fog, Tsurumi Island was home to two ancient civilizations. One buried deep underground, before the time of the Thunderbird's reign, known as the Pre-Thunderbird Civilization. The other coming some time after, the civilization where a tribe worshipped Kanna Kapatcir (becoming known as the Thunderbird Civilization) and were subsequently wiped out by it. The land has since somewhat regrown and is now inhabited by hilichurls, riftwolves and automatons.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Watatsumi_Island.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Watatsumi Island
							</h4>
							<p>
							Among these islands, it is located the farthest and on the opposite end of Narukami Island. It is known for its dense foliage in breathtaking colors which are distinct from plants found elsewhere.
							</p>
						</div>
					</div>
					<hr />
					<div class="d-flex">
						<img
								src="SubAreas/Yashiori_Island.webp"
								alt=""
								class="articleImage"
						/>

						<div class="article">
							<h4 class="aritcleTitle titleColor">
							Yashiori Island
							</h4>
							<p>
							At some point within the last two thousand years, the island was attacked by the Watatsumi Omikami Orobashi no Mikoto, an ancient god who created Watatsumi Island.As a result of the heavy concentration of Tatarigami energy, the island suffers from torrential rainfall and frequent thunderstorms in the open, which in turn applies constant Wet status. Getting hit by a thunderstorm while raining can cause Electro-Charged. Until the quest Orobashi's Legacy is fully completed, this abnormal weather will remain on the island.
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
