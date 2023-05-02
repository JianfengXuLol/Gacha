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
		<link rel="stylesheet" href="standard_4_star.css" />

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
					<div class="Character" id="Aloy">
                    <h1 class="headerName">Aloy</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Cryo.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="https://www.playstation.com/en-ca/games/horizon-zero-dawn/"><span style="color:deepskyblue">Horizon Zero Dawn</span></a></span></p>
                          <p>Intro: She is the heroine from Horizon Zero Dawn and is introduced as a collaboration and crossover character between Guerrilla Games and HoYoverse.</p>
                    </div>
              </div>
              <div class="Character" id="Amber">
                    <h1 class="headerName">Amber</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: As the only remaining Outrider of the Knights of Favonius, she is always ready to help the citizens of Mondstadt — whether it be something simple or perhaps a more challenging task.</p>
                          <p>She can be obtained for free in the Archon Quest Wind-Riding Knight in Prologue: Act I - The Outlander Who Caught the Wind.</p>
                    </div>
              </div>
              <div class="Character" id="Barbara">
                    <h1 class="headerName">Barbara</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Hydro.png" alt=""></p>
                          <p>Weapon: Catalyst</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: She is the deaconess of the Church of Favonius and a prominent "idol" after learning about them from the intrepid adventurer Alice. She is also the younger sister of the Acting Grand Master Jean.</p>
                    </div>
              </div>
              <div class="Character" id="Beidou">
                    <h1 class="headerName">Beidou</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang — a trait that the other appreciates, yet grows irritated by.</p>
                    </div>
              </div>
              <div class="Character" id="Bennett">
                    <h1 class="headerName">Bennett</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Medium Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: An orphan discovered by an elderly adventurer as a baby, Bennett was raised in Mondstadt's Adventurers' Guild. He is the one and only member of "Benny's Adventure Team," as everyone else left the team after experiencing the constant misfortune that follows him.</p>
                    </div>
              </div>
              <div class="Character" id="Candace">
                    <h1 class="headerName">Candace</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Hydro.png" alt=""></p>
                          <p>Weapon: Spear</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"><span style="color:limegreen">Sumeru</span></a></span></p>
                          <p>Intro: The scion of Al-Ahmar and the Guardian of Aaru Village, Candace is kind to travelers who visit, but is unforgiving to those who violate the village's rules.</p>
                    </div>
              </div>
              <div class="Character" id="Chongyun">
                    <h1 class="headerName">Chongyun</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Cryo.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Medium Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: Born with an excess of yang (positive) energy, Chongyun has become a highly effective exorcist in Liyue — so effective to the point where he hasn't seen a spirit himself, as they immediately flee when he approaches. The excessive yang energy also makes him particularly susceptible to heat and strong emotion, which has led to some rather unexpected results.</p>
                    </div>
              </div>
              <div class="Character" id="Collei">
                    <h1 class="headerName">Collei</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Dendro.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"><span style="color:limegreen">Sumeru</span></a></span></p>
                          <p>Intro: She has appeared in the official Manga and serves as one of its main characters. Originally a victim of Fatui human experimentation, Collei wandered the world as a vagrant until she met Amber in Mondstadt. Since then, Collei has turned her life around, and currently serves as a trainee Forest Ranger in the Avidya Forest.</p>
                    </div>
              </div>
              <div class="Character" id="Diona">
                    <h1 class="headerName">Diona</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_ Cryo.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Short Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: Despite being a bartender at the Cat's Tail, she loathes alcohol and will stop at nothing to ruin Mondstadt's wine industry — a feat easier said than done when her patrons absolutely love her drinks. She is the daughter of Draff, a hunter in Springvale.</p>
                    </div>
              </div>
              <div class="Character" id="Faruzan">
                    <h1 class="headerName">Faruzan</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Anemo.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"><span style="color:limegreen">Sumeru</span></a></span></p>
                          <p>Intro: She is a renowned professor of the Sumeru Akademiya and member of the Haravatat Darshan. She recently returned to the Akademiya after solving a puzzle and escaping the ruins that trapped her a century ago.</p>
                    </div>
              </div>
              <div class="Character" id="Fischl">
                    <h1 class="headerName">Fischl</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: She is an investigator for Mondstadt's Adventurers' Guild, accompanied by the night raven Oz. A daring adventurer with seemingly outlandish theories that happen to turn out to be true, she claims to hail from a world beyond Teyvat.</p>
                    </div>
              </div>
              <div class="Character" id="Gorou">
                    <h1 class="headerName">Gorou</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Geo.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Short Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"><span style="color:mediumpurple">Inazuma</span></a></span></p>
                          <p>Intro: He is a general of the Watatsumi Army. Courageous and reliable, his men know they can place their trust in him both on and off of the battlefield.</p>
                    </div>
              </div>
              <div class="Character" id="Heizou">
                    <h1 class="headerName">Heizou</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Anemo.png" alt=""></p>
                          <p>Weapon: Catalysm</p>
                          <p>Model Type: Medium Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"><span style="color:mediumpurple">Inazuma</span></a></span></p>
                          <p>Intro: He is the number one Tenryou Commission detective, harboring a rivalry with the Bantan Sango Detective Agency's Sango.</p>
                    </div>
              </div>
              <div class="Character" id="Kaeya">
                    <h1 class="headerName">Kaeya</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Cryo.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Tall Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:aquamarine">Mondstadt</span></a></span></p>
                          <p>Intro: Kaeya is the Cavalry Captain of the Knights of Favonius. He is held in high regard by the people of Mondstadt — even with all his eccentricities and secrets.</p>
                          <p>He is obtained for free in the Archon Quest Crash Course in Prologue: Act I - The Outlander Who Caught the Wind.</p>
                    </div>
              </div>
              <div class="Character" id="KujouSara">
                    <h1 class="headerName">Kujou Sara</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Bow</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"><span style="color:mediumpurple">Inazuma</span></a></span></p>
                          <p>Intro: A tengu, Sara is the adopted daughter of the Kujou Clan of the Tenryou Commission. Loyal to both her clan and the Shogun, Sara carries out her orders by the Shogun's will.</p>
                    </div>
              </div>
              <div class="Character" id="Shinobu">
                    <h1 class="headerName">Kuki Shinobu</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"><span style="color:mediumpurple">Inazuma</span></a></span></p>
                          <p>Intro: A former shrine maiden of the Grand Narukami Shrine, she is the sidekick of Arataki Itto and Deputy Leader of the Arataki Gang. Due to her professionalism and certifications, Kuki Shinobu has helped the Arataki Gang out of many problems, and has even expanded the gang's business scope outside of the regular mischief and delinquency.</p>
                    </div>
              </div>
              <div class="Character" id="Layla">
                    <h1 class="headerName">Layla</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Cryo.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"><span style="color:limegreen">Sumeru</span></a></span></p>
                          <p>Intro: She is a student in the Rtawahist Darshan, specializing in Theoretical Astrology. Chronically sleep-deprived and of poor health as a result, Layla believes that "The Stars' Blessing" is the reason she wakes from sleepwalking to find her papers fully completed.</p>
                    </div>
              </div>
              <div class="Character" id="Lisa">
                    <h1 class="headerName">Lisa</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Catalyst</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:limegreen">Mondstadt</span></a></span></p>
                          <p>Intro: A powerful mage recognized as Sumeru Akademiya's most distinguished graduate in 200 years, Lisa has since returned to Mondstadt to become the humble Librarian of the Knights of Favonius.</p>
                          <p>She can be obtained for free in the Archon Quest Sparks Amongst the Pages in Prologue: Act I - The Outlander Who Caught the Wind.</p>
                    </div>
              </div>
              <div class="Character" id="Ningguang">
                    <h1 class="headerName">Ningguang</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Geo.png" alt=""></p>
                          <p>Weapon: Catalyst</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: The Tianquan of the Liyue Qixing and owner of the floating Jade Chamber in the skies of Liyue, Ningguang is a mogul who shakes the very foundations of business circles. Even grabbing a few scraps from the documents she shreds from the Jade Chamber will gift one an invaluable fragment of her wisdom, enough to stay a step or two from one's peers.</p>
                    </div>
              </div>
              <div class="Character" id="Noelle">
                    <h1 class="headerName">Noelle</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Geo.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:limegreen">Mondstadt</span></a></span></p>
                          <p>Intro: Extremely strong and reliable, Noelle is considered to be "the maid of all maids" in the Knights of Favonius, with many thinking she has the ability to be everywhere all at once. She is stubborn, however, and willing to unnecessarily endanger her life at any moment to help someone. She has tried many times to join the ranks of the Knights of Favonius to accomplish her dream of becoming a full-fledged knight, but has fallen short every time so far.</p>
                    </div>
              </div>
              <div class="Character" id="Razor">
                    <h1 class="headerName">Razor</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Electro.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Medium Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:limegreen">Mondstadt</span></a></span></p>
                          <p>Intro: Abandoned as an infant, Razor was taken in by the Wolf of the North, Andrius, and raised by his wolf pack in Wolvendom. After a chance encounter with Varka, the current Grand Master of the Knights of Favonius, he has slowly started integrating with humans again through the help of his teacher Lisa.</p>
                    </div>
              </div>
              <div class="Character" id="Rosaria">
                    <h1 class="headerName">Rosaria</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Cryo.png" alt=""></p>
                          <p>Weapon: Spear</p>
                          <p>Model Type: Tall Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:limegreen">Mondstadt</span></a></span></p>
                          <p>Intro: The least devout among the nuns of the Church of Favonius, Rosaria prefers acting in the shadows rather than participating in the activities of the Church.</p>
                    </div>
              </div>
              <div class="Character" id="Sayu">
                    <h1 class="headerName">Sayu</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Anemo.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Short Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"><span style="color:mediumpurple">Inazuma</span></a></span></p>
                          <p>Intro: A ninja from the Shuumatsuban that is struggling with growing tall. Sayu believes that sleeping can help her growth, which is why she prefers to use her ninja techniques to hide and "laze around."</p>
                    </div>
              </div>
              <div class="Character" id="Sucrose">
                    <h1 class="headerName">Sucrose</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Anemo.png" alt=""></p>
                          <p>Weapon: Catalyst</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"><span style="color:limegreen">Mondstadt</span></a></span></p>
                          <p>Intro: An alchemist specializing in bio-alchemy, she also serves as an assistant for Albedo, the head alchemist of the Knights of Favonius.</p>
                    </div>
              </div>
              <div class="Character" id="Thoma">
                    <h1 class="headerName">Thoma</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Spear</p>
                          <p>Model Type: Tall Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"><span style="color:mediumpurple">Inazuma</span></a></span></p>
                          <p>Intro: Hailing from Mondstadt, Thoma is the sociable and responsible housekeeper for the Kamisato Clan and a well-known "fixer" in Inazuma. Having amassed a powerful network of people, Thoma defends the rights and interests of the Yashiro Commission with utmost seriousness.</p>
                    </div>
              </div>
              <div class="Character" id="Xiangling">
                    <h1 class="headerName">Xiangling</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Spear</p>
                          <p>Model Type: Short Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: She is the Head Chef at the Wanmin Restaurant and runs it alongside her father Chef Mao. As a chef, Xiangling isn't afraid to try out different recipes or "exotic" ingredients, making her dishes sometimes quite unique.</p>
                    </div>
              </div>
              <div class="Character" id="Xingqiu">
                    <h1 class="headerName">Xingqiu</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Hydro.png" alt=""></p>
                          <p>Weapon: Sword</p>
                          <p>Model Type: Medium Male</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: He is the second son of the Guild Manager of the Feiyun Commerce Guild, an influential group in Liyue, and is also a self-proclaimed practitioner of the Guhua Clan's arts. Also an avid reader, Xingqiu aims to be the embodiment of chivalry like the heroes from the books he reads; however, this belies his knack for mischief.</p>
                    </div>
              </div>
              <div class="Character" id="Xinyan">
                    <h1 class="headerName">Xinyan</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Greater Sword</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: Rock 'n' roll is a relatively unpopular style of music in Liyue, having recently been brought over from Fontaine. Xinyan, however, loves the sound — and she's slowly but surely amassing a fanbase of her own as she performs throughout Liyue Harbor.</p>
                    </div>
              </div>
              <div class="Character" id="Yanfei">
                    <h1 class="headerName">Yanfei</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Pyro.png" alt=""></p>
                          <p>Weapon: Catalyst</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: One of the few half-illuminated-beasts who have not signed a contract with Rex Lapis, Yanfei nevertheless works for the betterment of Liyue as a premier legal adviser who values fairness.</p>
                    </div>
              </div>
              <div class="Character" id="Yaoyao">
                    <h1 class="headerName">Yaoyao</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Dendro.png" alt=""></p>
                          <p>Weapon: Spear</p>
                          <p>Model Type: Short Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: Hailing from a rural area not far from Qingce Village, Yaoyao grew up with nature at her side. Seeing potential in Yaoyao, Streetward Rambler took her in as her disciple, and Yaoyao left the tranquil mountains to live with her master in the bright and bustle Liyue Harbor.</p>
                    </div>
              </div>
              <div class="Character" id="YunJin">
                    <h1 class="headerName">YunJin</h1>
                    <div class="characterInfo">
                          <p>Element: <img src="../Element_Icon/Element_Geo.png" alt=""></p>
                          <p>Weapon: Spear</p>
                          <p>Model Type: Medium Female</p>
                          <p>Region: <span style="display:inline-block;"><a class="dropdown-item" href="http://localhost/Gacha/Regions/Liyue/Liyue.php"><span style="color:burlywood">Liyue</span></a></span></p>
                          <p>Intro: A famous figure in Liyue Harbor's opera scene, Yun Jin is the director of the Yun-Han Opera Troupe, and performs at Heyu Tea House from time to time. She is also a playwright, having written all the plays the Yun-Han Opera Troupe has performed in recent years, including a new ending for "The Divine Damsel of Devastation."</p>
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

		<script src="standard_4_star.js"></script>
</html>