//var imgSlow = document.getElementById('player1');
//var imgDoubleSpeed = document.getElementById('player2');
var imgSlow = new Image();
var imgDoubleSpeed = new Image();



$(document).ready(function () {
    imgSlow.src = "http://files.gamebanana.com/img/ico/sprays/54b226bbd6e42.png";
    imgDoubleSpeed.src = "http://pix.iemoji.com/images/emoji/apple/ios-9/256/pouting-face.png";
});



function randomCoord() { return Math.random() * 700; };

    var powerUpList = [
        doubleSpeed = {
            x: randomCoord(),
            y: randomCoord(),
            w: 40,
            h: 40,
            img: imgSlow
        },
        slow = {
            x: randomCoord(),
            y: randomCoord(),
            w: 40,
            h: 40,
            img: imgDoubleSpeed
        }
    ]

  function drawPowerUp(context, index) {
        var x = powerUpList[index].x - (powerUpList[index].w / 2);
        var y = powerUpList[index].y - (powerUpList[index].w / 2);
        context.drawImage(powerUpList[index].img, x, y, powerUpList[index].w, powerUpList[index].h);
    };
  
   