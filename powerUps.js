//var imgSlow = document.getElementById('player1');
//var imgDoubleSpeed = document.getElementById('player2');
var imgPu = new Image();



$(document).ready(function () {
    imgPu.src = "plant.png";
});



function randomCoord() { return Math.random() * 700; };

    var powerUpList = [
        doubleSpeed = {
            x: randomCoord(),
            y: randomCoord(),
            w: 40,
            h: 40,
            img: imgPu
        },
        slow = {
            x: randomCoord(),
            y: randomCoord(),
            w: 40,
            h: 40,
            img: imgPu
        }
    ]

  function drawPowerUp(context, index) {
        var x = powerUpList[index].x - (powerUpList[index].w / 2);
        var y = powerUpList[index].y - (powerUpList[index].w / 2);
        context.drawImage(powerUpList[index].img, x, y, powerUpList[index].w, powerUpList[index].h);
    };
  
   