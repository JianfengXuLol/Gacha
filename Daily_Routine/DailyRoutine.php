<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="Jess Peter" />
    <meta name="description" content="This a daily routine in Gemshin Impact" />
    <title>Daily Routine</title>
    <link rel="stylesheet" href="../CountDownTimer.css" type="text/css" />
    <link rel="stylesheet" href="DailyRoutine.css" type="text/css" />
    <h1>Resources Tracker</h1>

  </head>

  

  <body>
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
          <label for="otherPet">质变仪(Transformer)（7天CD）</label>
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
    
    <script src="CountDownTimer.js"></script>
    <script src="GeneratedResource.js"></script>
  </body>
</html>
