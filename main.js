const canvas = document.querySelector('.mycanvas');
const ctx = canvas.getContext('2d');
const counterDiv = document.querySelector('.layer .head #score');
const timerDiv = document.querySelector('.layer .head #time');

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
        validationCoin();
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



function validationCoin(varr = counterDiv)
{
    $.ajax({
        type : "POST", 
        url  : "validation_score.php",  
        data : { score: counter },
        success: function(data){  
            varr.innerHTML = data;
        }
    });
}
validationCoin();

let time = 60;
timerDiv.innerHTML = time;
const layer3 = document.querySelector('.layer3');
const scoreEnd = document.querySelector('.layer3 p span');
function gameTimer()
{
    timerDiv.innerHTML = time;
    let interval = setInterval(() => {
        time--;
        timerDiv.innerHTML = time;
        if(time == 0) 
        {
            clearInterval(interval);
            layer3.style.display = 'flex';
            validationCoin(scoreEnd);
        }
    }, 100);
    
}

const start_btn = document.querySelector('#start-btn');
const layer2 = document.querySelector('.layer2');
start_btn.addEventListener('click', () => {
    layer2.style.display = 'none';
    time = 60;
    gameTimer();
    randomSpawn();
});

document.querySelector('#restart').addEventListener('click', () => {
    layer2.style.display = 'flex';
    ctx.clearRect(0,0,canvas.width,canvas.height);
});