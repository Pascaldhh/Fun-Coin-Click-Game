<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
    <button id="restart">Restart</button>
        <div class="wrapper">
            <div class="layer">
                <div class="head">
                    <h2 class="score">Score: <span id="score"></span></h2>
                    <h2 class="time">Time: <span id="time"></span></h2>
                </div>
            </div>
            <div class="layer2">
                <button id="start-btn">Start the game</button>
            </div>
            <div class="layer3">
                <h3>Level Finished!</h3>
                <p>Your score was: <span></span></p>
            </div>
            <canvas class="mycanvas"></canvas>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="main.js"></script>
</body>
</html>