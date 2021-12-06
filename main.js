const canvas = document.querySelector('.mycanvas');
const ctx = canvas.getContext('2d');
const counterDiv = document.querySelector('.layer .head span');

canvas.width = '500';
canvas.height = '500';

let counter = 0;

let coinStats = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
}

canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    if((x >= coinStats.x && x < coinStats.x + coinStats.width) && (y >= coinStats.y && y < coinStats.y + coinStats.height)) 
    {
        ctx.clearRect(coinStats.x, coinStats.y, coinStats.width, coinStats.height);
        counter++;
        $.ajax({
            type : "POST", 
            url  : "validation_score.php",  
            data : { score: counter },
            success: function(data){  
                counterDiv.innerHTML = data;
            }
        });
        randomSpawn();
    }
});

function randomSpawn()
{
    const coin = new Image();
    coin.src = "coin.png";

    coin.onload = function() {
        coinStats.x = Math.floor(Math.random() * (canvas.width - 1) + 1);
        coinStats.y = Math.floor(Math.random() * (canvas.height - 1) + 1);
        ctx.drawImage(coin, coinStats.x, coinStats.y, coinStats.width, coinStats.height);
    }
    
}
randomSpawn();

$.ajax({
    type : "POST", 
    url  : "validation_score.php",  
    data : { score: counter },
    success: function(data){  
        counterDiv.innerHTML = data;
    }
});