<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="Jess Peter" />
    <meta name="description" content="This a daily routine in Gemshin Impact" />
    <title>Resources Tracker</title>
    <link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
			crossorigin="anonymous" />
      <link rel="stylesheet" href="../Gacha.css" />
    <link rel="stylesheet" href="CountDownTimer.css" type="text/css" />
    <link rel="stylesheet" href="DailyRoutine.css" type="text/css" />
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
  

  <body>
    <div class="container ms-3" id="tracker">
    <h1>Resources Tracker</h1>
  <legend>亚服大号(Asia Account)</legend>
    <form action="" method="post">
      <fieldset><!--圣遗物-->
        
        <p>
          <input type="checkbox" name="artifacts" id="checkbox4" value="artifacts" />
          <label for="artifacts">圣遗物(Artifacts)</label>
          <span id="time-left"></span>
        </p>
        <button id="reset-button" type="reset">Reset</button>
      </fieldset>
    </form>

    <form action="" method="post">
      <fieldset><!--质变仪-->
        <p>
          <input type="checkbox" name="pets" id="checkbox10" value="otherPet" />
          <label for="otherPet">质变仪(Transformer)（6天CD）</label>
          <span id="time-left1"></span>
        </p>
        <button id="reset-button3" type="reset">Reset</button>
      </fieldset>
    </form>

    <form action="" method="post">
      <fieldset><!--Resin(树脂)-->
        <p> Set initial resins here: 
        <input type="text" name="Resin" id="userInputResin" value="" /> 
        <span><button id="userInputResinSubmit">Submit</button></span>
        <span id="textbox1"></span>
          <p id="resin"></p>
        </p>
        <button id="reset-button1" type="reset">Reset</button>       
      </fieldset>
    </form>

    <form action="" method="post">
      <fieldset><!--壶子-->
      <p> Set initial resins here: 
        <input type="text" name="Currency" id="userInputCurrency" value="" /> 
        <span><button id="userInputCurrencySubmit">Submit</button></span>
        <span id="textbox2"></span>    
      </p>
        <p id="currency"></p>
        <button id="reset-button2" type="reset">Reset</button>
        <span id="textbox2"></span>
      </fieldset>
    </form>
    
    <!-- Bootstrap JavaScript Libraries -->
		<script
			src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
			integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
			crossorigin="anonymous"></script>

		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
			integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
			crossorigin="anonymous"></script>

    <script src="CountDownTimer.js"></script>
    <script src="GeneratedResource.js"></script>
    </div>
  
  </body>
</html>
