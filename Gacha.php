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
									<li><a class="dropdown-item" href="#">Limited 5 Star</a></li>
									<li><a class="dropdown-item" href="#">4 Star</a></li>
									<li>
										<a class="dropdown-item" href="#">Standard Banner 5 Star</a>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle">THE WORLD</a>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Mondstadt</a></li>
									<li><a class="dropdown-item" href="#">Liyue</a></li>
									<li><a class="dropdown-item" href="#">Inazuma</a></li>
									<li><a class="dropdown-item" href="#">Sumeru</a></li>
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
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-6"></div>
			</div>
		</header>

		<main class="container ms-3">
			<hr />
			<h4 class="wish_info">Wishing Info:</h4>
			<p id="debug">Total wish count：0 | Constellations: -1</p>
			<p id="debug1">Pitty level: 10 | increase rate：0%</p>
			<p id="debug2"></p>
			<hr />

			<button id="pull_1">1 pull</button>
			<button id="pull_10">10 pull</button>
			<button id="restart">Restart</button>

			<!-- transfer javascript variables -->
			<form id="myForm"  method="post" action="Gacha.php">
				<input type="hidden" name="Limited_5_star_constellations" id="Limited_5_star_constellations" value="" /> <!--constellations-->
				<input type="hidden" name="character" id="character" value="" /> <!--character's name-->
				<input type="hidden" name="color" id="color" value="" /> <!--character's name-->
				<input type="submit" value="save">
			</form>

			<br />
			<hr />
			<button id="text1" class="card_container"></button>
			<button id="text2" class="card_container"></button>
			<button id="text3" class="card_container"></button>
			<button id="text4" class="card_container"></button>
			<button id="text5" class="card_container"></button>
			<button id="text6" class="card_container"></button>
			<button id="text7" class="card_container"></button>
			<button id="text8" class="card_container"></button>
			<button id="text9" class="card_container"></button>
			<button id="text10" class="card_container"></button>
			<div class="wishingPool">
				<img id="image1" class="image_container" />
				<img id="image2" class="image_container" />
				<img id="image3" class="image_container" />
				<img id="image4" class="image_container" />
				<img id="image5" class="image_container" />
				<img id="image6" class="image_container" />
				<img id="image7" class="image_container" />
				<img id="image8" class="image_container" />
				<img id="image9" class="image_container" />
				<img id="image10" class="image_container" />
			</div>
		</main>
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
				$sql = "SELECT Character_name FROM characters WHERE Character_name = 'Klee'";
				$result = $conn->query($sql);

				$database_constellations = "";

				if($result->num_rows > 0) {
					$sql = "SELECT Constellations FROM characters";
					$result = $conn->query($sql);
					if ($result->num_rows > 0) {

						// Loop through each row and retrieve the id value
						while ($row = $result->fetch_assoc()) {
						  $database_constellations = $row['Constellations'];
						}
					}
					$saved_data = $conn->prepare("UPDATE characters SET Constellations=? WHERE Character_name = 'Klee'");
					$saved_data->bind_param("i", $constellation);
					$constellation = $_POST['Limited_5_star_constellations'];
					$character_name = "klee";
					$rarity = 5;
					echo "Input data: <br><hr>";
					echo "Character Name: " .$character_name . "<br>Constellations: " . $constellation . "<br>Rarity: " . $rarity . "Star<br><br><hr>";
					$saved_data->execute();
				}
				else {
					// add stuff into the database
					// prepare and bind
					$saved_data = $conn->prepare("INSERT INTO characters (Constellations,Character_name, Rarity) VALUES (?, ?, ?)");
					$saved_data->bind_param("sss", $constellation, $character_name, $rarity);

					// collect value of input field
					$constellation = $_POST['Limited_5_star_constellations'];
					$character_name = "klee";
					$rarity = 5;
					echo "Input data: <br><hr>";
					echo "Character Name: " .$character_name . "<br>Constellations: " . $constellation . "<br>Rarity: " . $rarity . " Star<br><br><hr>";
					$saved_data->execute();
				}
			}

			$conn->close();
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
