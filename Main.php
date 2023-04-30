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
		<link rel="stylesheet" href="Gacha.css" />
		<title>Gemshin Impact Page</title>
	</head>

	<body>
		<header>
			<div class="container ms-3">
				<div class="col-12">
					<div class="row">
						<h2 class="page_title">Gemshin Impact</h2>
					</div>
					<div class="row">
						<ul class="nav nav-tabs border-bottom-0">
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle">CHARACTERS</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="http://localhost/Gacha/limitedEdition_5_Star/Limited_5_star.php">Limited 5 Star</a></li>
									<li><a class="dropdown-item" href="http://localhost/Gacha/standard_4_star/standard_4_star.php">4 Star Characters</a></li>
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
								<a class="nav-link dropdown-toggle">OTHER</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="http://localhost/Gacha/Tutorials/Tutorials.php">Tutorials</a></li>
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


		<footer></footer>

		<?php
			$servername = "localhost";
			$username = "Jesspeter";
			$password = "Justinbiberanna0";
			$dbname = "gacha_system";
			
			// Create connection
			$conn = new mysqli($servername, $username, $password,$dbname);
			// Check connection
			if ($conn->connect_error) {
			  die("Connection failed: " . $conn->connect_error);
			}

			

			//collect the data from another form
			if ($_SERVER["REQUEST_METHOD"] == "POST") {
				

			$conn->close();
            }
		?>


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
	</body>
</html>