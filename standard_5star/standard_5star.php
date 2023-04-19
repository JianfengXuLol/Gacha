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
		<link rel="stylesheet" href="../Gacha.css" />
		<link rel="stylesheet" href="../CharacterList.css" />

		<title>Gemshin Impact Page</title>
	</head>

  <header>
			<div class="container ms-3">
				<div class="col-12">
					<div class="row">
						<h2 class="page_title">Gemshin Impact</h2>
					</div>
					<div class="row">
						<ul class="nav nav-tabs border-bottom-0">
            <li class="nav-item dropdown">
								<a class="nav-link" href="http://localhost/Gacha/Main.php#">HOME</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle">CHARACTERS</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="http://localhost/Gacha/limitedEdition_5_Star/Limited_5_star.php">Limited 5 Star</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/4_star/4_star.php">4 Star</a></li>
									<li>
										<a class="dropdown-item" href="http://localhost/Gacha/standard_5star/standard_5star.php">Standard Banner 5 Star</a>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle">THE WORLD</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php">Mondstadt</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php">Liyue</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php">Inazuma</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php">Sumeru</a></li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle">ITEMS</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">5 Star Weapon</a></li>
									<li><a class="dropdown-item" href="#">4 Star Weapon</a></li>
									<li><a class="dropdown-item" href="#">3 Star Weapon</a></li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle">OTHER</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Artifacts</a></li>
									<li><a class="dropdown-item" href="#">Tutorials</a></li>
									<li><a class="dropdown-item" href="#">Stories</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/Daily_Routine/DailyRoutine.php">Resources Tracker</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/Gacha.php#">Wishing Pool</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-6"></div>
			</div>
		</header>

	<body>
    <div class="imageContainer ms-5">
              <h1 class="headerName">JEAN</h1>
              <div class="characterInfo" id="JeanInfo">
                    <p>Element: <img src="../Element_Icon/Element_Anemo.png" alt=""></p>
                    <p>Weapon: Bow</p>
                    <p>Model Type: Tall Female</p>
                    <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php">Mondstadt</a></span></p>
                    <p>Intro: The older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and tirelessly working to maintain the City of Freedom.</p>
              </div>
    </div>
	</body>

  <footer>
        <ul class="characterList">
          <li><a href="#"><i class="bi bi-arrow-left-square" style="font-size: 3rem; color:white"></i></a></li>
          <li>
              <div class="card" id="JeanIcon">  
                  <img class="card-img-top" src="Jean_Icon.webp" style="width:100%">
                  <p class="card-footer characterName">Jean</p>      
              </div>     
          </li>
          <li>
              <div class="card" id="MonaIcon">  
                  <img class="card-img-top" src="Mona_Icon.webp" style="width:100%">
                  <p class="card-footer characterName">Mona</p>      
              </div>     
          </li>
          <li>
              <div class="card" id="DehyaIcon">  
                  <img class="card-img-top" src="Dehya_Icon.webp" style="width:100%">
                  <p class="card-footer characterName">Dehya</p>      
              </div>     
          </li>
          <li>
              <div class="card" id="DilucIcon">  
                  <img class="card-img-top" src="Diluc_Icon.webp" style="width:100%">
                  <p class="card-footer characterName">Diluc</p>      
              </div>     
          </li>
          <li>
              <div class="card" id="KeqingIcon">  
                  <img class="card-img-top" src="Keqing_Icon.webp" style="width:100%">
                  <p class="card-footer characterName">Keqing</p>      
              </div>     
          </li>
          <li>
              <div class="card" id="QiqiIcon">  
                  <img class="card-img-top" src="Qiqi_Icon.webp" style="width:100%">
                  <p class="card-footer characterName">Qiqi</p>      
              </div>     
          </li>
          <li><a href="#"><i class="bi bi-arrow-right-square" style="font-size: 3rem; color:white"></i></a></li>
        </ul>
        

  </footer>

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

		<script>
			
		</script>
</html>