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
  <legend>亚服大号</legend>
    <form action="http://127.0.0.1:5500/Dailly%20Routine.html" method="post">
      <fieldset><!--圣遗物-->
        
        <p>
          <input type="checkbox" name="artifacts" id="checkbox4" value="artifacts" />
          <label for="artifacts">圣遗物</label>
          <span id="time-left"></span>
        </p>
        <button id="reset-button" type="reset">Reset</button>
      </fieldset>
    </form>

    <form action="http://127.0.0.1:5500/Dailly%20Routine.html" method="post">
      <fieldset><!--质变仪-->
        <p>
          <input type="checkbox" name="pets" id="checkbox10" value="otherPet" />
          <label for="otherPet">质变仪（7天CD）</label>
          <span id="time-left1"></span>
        </p>
        <button id="reset-button3" type="reset">Reset</button>
      </fieldset>
    </form>

    <form action="http://127.0.0.1:5500/Dailly%20Routine.html" method="post">
      <fieldset><!--体力-->
        <p>     
          <span id="resin"></span>
        </p>
        <button id="reset-button1" type="reset">Reset</button>       
      </fieldset>
    </form>

    <form action="http://127.0.0.1:5500/Dailly%20Routine.html" method="post">
      <fieldset><!--壶子-->
      <p>
          <label for="otherPet">壶子</label>
        </p>
        <button id="reset-button2" type="reset">Reset</button>
      </fieldset>
    </form>
    
    <script src="CountDownTimer.js"></script>
    <script src="GeneratedResource.js"></script>
  </body>
</html>
