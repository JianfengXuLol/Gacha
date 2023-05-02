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
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
		<link rel="stylesheet" href="../CharacterList.css" />
		<link rel="stylesheet" href="limitedEdition_5_Star.css" />

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
						<div class="Character" id="Albedo">
							<h1 class="headerName">Albedo</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Geo.png" alt="" />
								</p>
								<p>Weapon: Sword</p>
								<p>Model Type: Medium Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"
											><span style="color: aquamarine">Mondstadt</span></a
										></span
									>
								</p>
								<p>
									Intro: A synthetic human made by the alchemist Rhinedottir,
									the mysterious Albedo is the Chief Alchemist and Captain of
									the Investigation Team of the Knights of Favonius.
								</p>
							</div>
						</div>
						<div class="Character" id="Alhaitham">
							<h1 class="headerName">Alhaitham</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Dendro.png" alt="" />
								</p>
								<p>Weapon: Sword</p>
								<p>Model Type: Tall Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"
											><span style="color: limegreen">Sumeru</span></a
										></span
									>
								</p>
								<p>
									Intro: Alhaitham is a member of the Haravatat of the Sumeru
									Akademiya and the Akademiya's Scribe, responsible for
									documenting their findings and drafting ordinances. Despite
									his brilliance, people within the Akademiya are perplexed by
									Alhaitham due to his unwillingness to aspire for higher office
									in spite of his egocentricity, and many have been at odds with
									him for his uncompromising view on rationality and the truth.
								</p>
							</div>
						</div>
						<div class="Character" id="Ayaka">
							<h1 class="headerName">Ayaka</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Cryo.png" alt="" />
								</p>
								<p>Weapon: Sword</p>
								<p>Model Type: Medium Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: She is in charge of the internal and external affairs
									of the Kamisato Clan and is the younger sister of Kamisato
									Ayato. Beautiful, dignified, and noble, Ayaka has earned the
									title Shirasagi Himegimi and is considered a model of
									perfection in Inazuma.
								</p>
							</div>
						</div>
						<div class="Character" id="Ayato">
							<h1 class="headerName">Ayato</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Hydro.png" alt="" />
								</p>
								<p>Weapon: Sword</p>
								<p>Model Type: Tall Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: He is the current head of the Kamisato Clan, the older
									brother of Kamisato Ayaka, and the Yashiro Commissioner.
									Resourceful and cunning, Ayato keeps a lower profile than his
									sister and focuses on government affairs in the Commission.
								</p>
							</div>
						</div>
						<div class="Character" id="Eula">
							<h1 class="headerName">Eula</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Cryo.png" alt="" />
								</p>
								<p>Weapon: Greater Sword</p>
								<p>Model Type: Tall Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"
											><span style="color: aquamarine">Mondstadt</span></a
										></span
									>
								</p>
								<p>
									Intro: Although a descendant of the infamous and tyrannical
									Lawrence Clan, Eula severed her ties with the clan and became
									the captain of the Reconnaissance Company with the Knights of
									Favonius.
								</p>
							</div>
						</div>
						<div class="Character" id="Ganyu">
							<h1 class="headerName">Ganyu</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Cryo.png" alt="" />
								</p>
								<p>Weapon: Bow</p>
								<p>Model Type: Medium Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: She is a half-qilin Adeptus under contract with the Geo
									Archon Morax and serves as the general secretary of the Liyue
									Qixing.
								</p>
							</div>
						</div>
						<div class="Character" id="HuTao">
							<h1 class="headerName">HuTao</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Pyro.png" alt="" />
								</p>
								<p>Weapon: Spear</p>
								<p>Model Type: Medium Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: Hu Tao's antics and eccentricity belies her role as the
									77th Director of the Wangsheng Funeral Parlor and her talent
									as a poet. Nevertheless, she treats the parlor's operations
									with utmost importance, and holds funeral ceremonies with the
									highest dignity and solemnity.
								</p>
							</div>
						</div>
						<div class="Character" id="Itto">
							<h1 class="headerName">Itto</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Geo.png" alt="" />
								</p>
								<p>Weapon: Greater Sword</p>
								<p>Model Type: Tall Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: A loud and proud descendant of the crimson oni, Itto is
									also the leader and founder of the Arataki Gang. While not a
									villain, his reputation as a delinquent in Inazuma City leaves
									something to be desired.
								</p>
							</div>
						</div>
						<div class="Character" id="Kazuha">
							<h1 class="headerName">Kazuha</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Anemo.png" alt="" />
								</p>
								<p>Weapon: Sword</p>
								<p>Model Type: Medium Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: A wandering samurai of the once-famed Kaedehara Clan
									with an ability to read the sounds of nature, Kazuha is a
									temporary crewmember of The Crux. Despite being burdened by
									the many happenings of his past, Kazuha still maintains an
									easygoing disposition.
								</p>
							</div>
						</div>
						<div class="Character" id="Klee">
							<h1 class="headerName">Klee</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Pyro.png" alt="" />
								</p>
								<p>Weapon: Catalyst</p>
								<p>Model Type: Short Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Mondstadt/Mondstadt.php"
											><span style="color: aquamarine">Mondstadt</span></a
										></span
									>
								</p>
								<p>
									Intro: The daughter of the intrepid and often quite
									destructive adventurer Alice, Klee takes after her mother in
									many ways, much to the dismay of the Knights of Favonius whom
									she has been entrusted to.
								</p>
							</div>
						</div>
						<div class="Character" id="Kokomi">
							<h1 class="headerName">Kokomi</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Hydro.png" alt="" />
								</p>
								<p>Weapon: Catalyst</p>
								<p>Model Type: Medium Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: The young Divine Priestess of Watatsumi Island and a
									descendant of the Sangonomiya Clan, Kokomi is in charge of
									most of Watatsumi's affairs, shouldering heavy
									responsibilities alone in hopes for giving Watatsumi Island's
									people the hopes and happiness that they desire.
								</p>
							</div>
						</div>
						<div class="Character" id="Nahida">
							<h1 class="headerName">Nahida</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Dendro.png" alt="" />
								</p>
								<p>Weapon: Catalyst</p>
								<p>Model Type: Short Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"
											><span style="color: limegreen">Sumeru</span></a
										></span
									>
								</p>
								<p>
									Intro: She is the vessel of Buer, as Lesser Lord Kusanali,[5]
									the current Dendro Archon. Having been freed from her
									extensive confinement in the Sanctuary of Surasthana, she now
									strives to have a stronger presence in Sumeru.
								</p>
							</div>
						</div>
						<div class="Character" id="Nilou">
							<h1 class="headerName">Nilou</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Hydro.png" alt="" />
								</p>
								<p>Weapon: Sword</p>
								<p>Model Type: Medium Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"
											><span style="color: limegreen">Sumeru</span></a
										></span
									>
								</p>
								<p>
									Intro: A dancer under the Zubayr Theater, Nilou's dancing is
									but elegant and graceful — however, outside the stage's
									spotlight, she's just like any girl her age; warm, smiling,
									and friendly.
								</p>
							</div>
						</div>
						<div class="Character" id="Raiden">
							<h1 class="headerName">Raiden</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Electro.png" alt="" />
								</p>
								<p>Weapon: Spear</p>
								<p>Model Type: Tall Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: The Raiden Shogun is unique as she is comprised of two
									beings in one body: Ei, the current Electro Archon of Inazuma;
									and the Shogun, the puppet created by Ei to act as the ruler
									of Inazuma in her stead, which also serves as her vessel.
								</p>
							</div>
						</div>
						<div class="Character" id="Shenhe">
							<h1 class="headerName">Shenhe</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Cryo.png" alt="" />
								</p>
								<p>Weapon: Spear</p>
								<p>Model Type: Tall Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: The daughter of an unnamed exorcist couple, Shenhe was
									taken in and raised by Cloud Retainer as a disciple following
									a traumatic incident instigated by Shenhe's father during her
									childhood.
								</p>
							</div>
						</div>
						<div class="Character" id="Tartaglia">
							<h1 class="headerName">Tartaglia</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Hydro.png" alt="" />
								</p>
								<p>Weapon: Bow</p>
								<p>Model Type: Tall Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: He is the Eleventh of the Eleven Fatui Harbingers.
									Wherever he goes, danger follows, and Childe is always eager
									for a challenge, making him extremely dangerous despite being
									the youngest member.
								</p>
							</div>
						</div>
						<div class="Character" id="Wanderer">
							<h1 class="headerName">Wanderer</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Anemo.png" alt="" />
								</p>
								<p>Weapon: Catalyst</p>
								<p>Model Type: Medium Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: The Wanderer came into existence in place of his
									previous incarnation after the latter expunged his previous
									appellations and their respective histories from Irminsul.
									Harboring his former self's memories after willingly regaining
									them, "Wanderer" is now the only title he goes by, for he has
									no home, kin, or destination.
								</p>
								<p>
									During the Archon Quest As Though Morning Dew in Interlude
									Chapter: Act III - Inversion of Genesis, the player can change
									the Wanderer's name, which will then be used in some of the
									game's interfaces, such as Party Setup.
								</p>
							</div>
						</div>
						<div class="Character" id="Xiao">
							<h1 class="headerName">Xiao</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Anemo.png" alt="" />
								</p>
								<p>Weapon: Spear</p>
								<p>Model Type: Medium Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: He is an adeptus, under the name Alatus, and the sole
									surviving member of the five foremost Yakshas dispatched by
									Morax to subdue the demonic spirits that plagued Liyue. He
									currently resides at Wangshu Inn and mostly restrains himself
									from large crowds and social interactions.
								</p>
							</div>
						</div>
						<div class="Character" id="YaeMiko">
							<h1 class="headerName">Yae</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Electro.png" alt="" />
								</p>
								<p>Weapon: Catalyst</p>
								<p>Model Type: Tall Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: A kitsune of many facets, Yae Miko oversees the Grand
									Narukami Shrine, owns the Yae Publishing House, and is
									Eternity's servant and friend.
								</p>
							</div>
						</div>
						<div class="Character" id="Yelan">
							<h1 class="headerName">Yelan</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Hydro.png" alt="" />
								</p>
								<p>Weapon: Bow</p>
								<p>Model Type: Tall Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: She is a mysterious person who claims to work for the
									Ministry of Civil Affairs, but comes out as a non-entity on
									their list. She also claims to work for the Yanshang Teahouse,
									but only uses it for her true job, an intelligence agent
									collaborating with Ningguang.
								</p>
							</div>
						</div>
						<div class="Character" id="Yoimiya">
							<h1 class="headerName">Yoimiya</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Pyro.png" alt="" />
								</p>
								<p>Weapon: Bow</p>
								<p>Model Type: Medium Female</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Inazuma/Inazuma.php"
											><span style="color: mediumpurple">Inazuma</span></a
										></span
									>
								</p>
								<p>
									Intro: Yoimiya is the current owner of Naganohara Fireworks;
									with her colorful fireworks and outgoing personality, Yoimiya
									is loved by everyone on Narukami Island. She was coined as the
									"Queen of the Summer Festival," as they believe summer is not
									the same without her.
								</p>
							</div>
						</div>
						<div class="Character" id="Zhongli">
							<h1 class="headerName">Zhong li</h1>
							<div class="characterInfo">
								<p>
									Element: <img src="../Element_Icon/Element_Geo.png" alt="" />
								</p>
								<p>Weapon: Spear</p>
								<p>Model Type: Tall Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Liyue/Liyue.php"
											><span style="color: burlywood">Liyue</span></a
										></span
									>
								</p>
								<p>
									Intro: A consultant of the Wangsheng Funeral Parlor, he is
									later revealed to be the current vessel of the Geo Archon,
									Morax, who has decided to experience the world from the
									perspective of a mortal.
								</p>
							</div>
						</div>
						<div class="Character" id="Cyno">
							<h1 class="headerName">Cyno</h1>
							<div class="characterInfo">
								<p>
									Element:
									<img src="../Element_Icon/Element_Electro.png" alt="" />
								</p>
								<p>Weapon: Spear</p>
								<p>Model Type: Medium Male</p>
								<p>
									Region:
									<span style="display: inline-block"
										><a
											class="dropdown-item"
											href="http://localhost/Gacha/Regions/Sumeru/Sumeru.php"
											><span style="color: limegreen">Sumeru</span></a
										></span
									>
								</p>
								<p>
									Intro: As the General Mahamatra, Cyno leads the Matra and
									strikes fear into the hearts of researchers of the Sumeru
									Akademiya. In spite of this, Cyno has a fun side outside of
									his role in the Akademiya, as he has an affinity for Genius
									Invokation TCG and constantly cracks unfunny jokes.
								</p>
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

	<script src="Gacha.js"></script>

	<script src="limitedEdition_5_Star.js"></script>
</html>
