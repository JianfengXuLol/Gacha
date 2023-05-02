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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
		<link rel="stylesheet" href="../CharacterList.css" />
		<link rel="stylesheet" href="standard_5star.css" />

		<title>Gemshin Impact Page</title>
	</head>

	<!--Navigation-->
	<header>
		<img src="../Logo/logo3.png" id="logo" alt="" />
	</header>

	<body>
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
								<li>
									<a
										class="dropdown-item"
										href="http://localhost/Gacha/Tutorials/Tutorials.php"
										>Tutorials</a
									>
								</li>
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
			<div class="row d-flex| contents">
				<!--Character Info and Big Portrait images here-->
				<div class="mainContent ms-5 d-flex">
					<div class="CharacterSection">
					<div class="Character" id="Jean">
                    <h1 class="headerName">Jean</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Anemo.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: The older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.</p>
                    </div>
              </div>
              <div class="Character" id="Diluc">
                    <h1 class="headerName">Diluc</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Tall Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: Born into the affluent Ragnvindr Clan, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt. While a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way.</p>
                    </div>
              </div>
              <div class="Character" id="Keqing">
                    <h1 class="headerName">Keqing</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: As the Yuheng of the Liyue Qixing, she is someone who seeks her own answers instead of idly letting chaos run amok in Liyue. She chooses her own path with her own power and ability, instead of letting the gods determine her fate..</p>
                    </div>
              </div>
              <div class="Character" id="Mona">
                    <h1 class="headerName">Mona</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Hydro.png" alt=""></p>
                          <p>Weapon: Catalyst</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: An astrologist of knowledgeable skill and high pride, Mona has settled in Mondstadt to avoid suffering the ire of her master after unwittingly reading the latter's diary.</p>
                    </div>
              </div>
              <div class="Character" id="Qiqi">
                    <h1 class="headerName">Qiqi</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Cryo.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Short Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: Resurrected as a zombie by the adepti, she has ended up in Baizhu's care and now works at Bubu Pharmacy in Liyue Harbor.</p>
                    </div>
              </div>
              <div class="Character" id="Dehya">
                    <h1 class="headerName">Dehya</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"><span style="color:limegreen">Sumeru</span></a></span></p>
                          <p>Intro: A fierce and strong warrior, the "Flame-Mane" Dehya is considered a legend among the Eremites for her might, passion, and conscientiousness. Unwilling to be trapped by the conditions that force most from the desert to stay there, she aspires to deliver hope back to the sands that she considers her home.</p>
                    </div>
              </div>
              <div class="Character" id="Tighnari">
                    <h1 class="headerName">Tighnari</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Dendro.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Medium Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"><span style="color:limegreen">Sumeru</span></a></span></p>
                          <p>Intro: Tighnari is the stern Chief Officer of the Forest Rangers and Collei's mentor. Despite his intelligence, he prefers to live a solitary life in the depths of Avidya Forest rather than in the ivory tower of Sumeru Akademiya.</p>
                    </div>
              </div>
					</div>
					<div class="imageContainer">
						<img class="characterPortrait" alt="" />
					</div>
				</div>
				<!--Character Selection List-->
				<ul class="characterList">
					<li>
						<a href="#" id="toLeft"
							><i class="bi bi-arrow-left-square" style="font-size: 3rem"></i
						></a>
					</li>
					<li>
						<div class="card" id="Icon1">
							<img
								class="card-img-top"
								id="imageContainer1"
								style="width: 100%" />
							<p class="card-footer characterName" id="characterName1"></p>
						</div>
					</li>
					<li>
						<div class="card" id="Icon2">
							<img
								class="card-img-top"
								id="imageContainer2"
								style="width: 100%" />
							<p class="card-footer characterName" id="characterName2"></p>
						</div>
					</li>
					<li>
						<div class="card" id="Icon3">
							<img
								class="card-img-top"
								id="imageContainer3"
								style="width: 100%" />
							<p class="card-footer characterName" id="characterName3"></p>
						</div>
					</li>
					<li>
						<div class="card" id="Icon4">
							<img
								class="card-img-top"
								id="imageContainer4"
								style="width: 100%" />
							<p class="card-footer characterName" id="characterName4"></p>
						</div>
					</li>
					<li>
						<div class="card" id="Icon5">
							<img
								class="card-img-top"
								id="imageContainer5"
								style="width: 100%" />
							<p class="card-footer characterName" id="characterName5"></p>
						</div>
					</li>
					<li>
						<div class="card" id="Icon6">
							<img
								class="card-img-top"
								id="imageContainer6"
								style="width: 100%" />
							<p class="card-footer characterName" id="characterName6"></p>
						</div>
					</li>
					<li>
						<a href="#" id="toRight"
							><i class="bi bi-arrow-right-square" style="font-size: 3rem"></i
						></a>
					</li>
				</ul>
			</div>
		</div>
	</body>

  <!-- Bootstrap JavaScript Libraries -->
  <script
			src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
			integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
			crossorigin="anonymous"></script>

		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
			integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
			crossorigin="anonymous"></script>

		<script src="Gacha.js"></script>

		<script src="standard_5star.js"></script>
</html>