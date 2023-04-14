<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="Jess Peter" />
    <meta name="description" content="This a daily routine in Gemshin Impact" />
    <title>Daily Routine</title>
    <link rel="stylesheet" href="../CountDownTimer.css" type="text/css" />
    <h1>Daily Routine</h1>

  </head>

  <body>
    <form action="http://127.0.0.1:5500/Dailly%20Routine.html" method="post">
      <fieldset><!--亚服大号-->
        <legend>亚服大号</legend>
        <p>
          <input type="checkbox" name="artifacts" id="checkbox4" value="artifacts" />
          <label for="artifacts">圣遗物</label>
          <span id="time-left"></span>
        </p>
        <p>
          <input type="checkbox" name="pets" id="checkbox10" value="otherPet" />
          <label for="otherPet">质变仪（7天CD）</label>
          <span id="time-left1"></span>
        </p>
        <p>
          <input type="checkbox" name="pets" id="checkbox1" value="dog" />
          <label for="dog">体力</label>
        </p>
        <p>
          <input type="checkbox" name="pets" id="checkbox7" value="otherPet" />
          <label for="otherPet">壶子</label>
        </p>
        <!-- <button type="submit" formaction="http://127.0.0.1:5500/Dailly%20Routine.html" formmethod="post">Post</button> -->
        <button id="reset-button" type="reset">Reset</button>
      </fieldset>
    </form>

    
    <script src="CountDownTimer.js"></script>
  </body>
</html>
