var img1 = new Image();
var img2 = new Image();


$(document).ready(function () {
    img1.src = "fish.png";
    img2.src = "fish.png";
});

/*
function sprite (options) {
				
    var that = {};
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
    
    that.render = function () {

    // Draw the animation
    that.context.drawImage(
       that.image,
       0,
       0,
       that.width,
       that.height,
       0,
       0,
       that.width,
       that.height);
    };
}

var sprite1 = sprite({
    context: context,
    width: 100,
    height: 100,
    image: img1
});
*/

/*




    
var player1 = sprite({
    context: cnv.getContext("2d"), 
    width: 26,
    height: 35,
    image: img1
});
               */                

//PLAYERS FEATURES
    var player1 = {
        speed: 4,
        x: 300,
        y: 300,
        w: 38,
        h: 38,
        img: img1
    };
    var player2 = {
        speed: 5,
        x: 400,
        y: 400,
        w: 30,
        h: 30,
        img: img2
    };



//MOVING PLAYERS
    function movePlayer1(direction) {
        switch (direction) {
            case 'left':
                player1.x -= player1.speed;
                if (player1.x < 20) {
                    player1.x = 20;
                }
                break;
            case 'right':
                player1.x += player1.speed;
                if (player1.x > 680) {
                    player1.x = 680;
                }
                break;
            case 'up':
                player1.y -= player1.speed;
                if (player1.y < 20) {
                    player1.y = 20;
                }
                break;
            case 'down':
                player1.y += player1.speed;
                if (player1.y > 680) {
                    player1.y = 680;
                }
                break;
        }
        var rEdgeCoord = player1.x + player1.w;
        var lEdgeCoord = player1.x;
        var tEdgeCoord = player1.y;
        var bEdgeCoord = player1.y + player1.h;
        if ( (rEdgeCoord > player2.x) && (lEdgeCoord < (player2.x + player2.w)) && (bEdgeCoord > player2.y) && (tEdgeCoord < (player2.y + player2.w)) ) {
            gameOver = true;
            var lastHigh = localStorage.getItem("highScore");
            if (lastHigh === null || scoreCount > lastHigh ) {
                localStorage.setItem("highScore", scoreCount);
            }
            highScore = localStorage.getItem("highScore");
        }
    };
    function movePlayer2(direction) {
        switch (direction) {
            case 'left':
                player2.x -= player2.speed;
                if (player2.x < 20) {
                    player2.x = 20;
                }
                break;
            case 'right':
                player2.x += player2.speed;
                if (player2.x > 680) {
                    player2.x = 680;
                }
                break;
            case 'up':
                player2.y -= player2.speed;
                if (player2.y < 20) {
                    player2.y = 20;
                }
                break;
            case 'down':
                player2.y += player2.speed;
                if (player2.y > 680) {
                    player2.y = 680;
                }
                break;
        }
    };

//EDIT PLAYERS
    function changeSpeed1(changeBy) {
        player1.speed = player1.speed + changeBy;
    };
    
    function changeSpeed2(changeBy) {
        player2.speed = player2.speed + changeBy;
    };







//DRAW SPRITE
    var spriteIndex = 1;
    var timer = 0;
    var direction1 = "left"
    var direction2 = "left"
    
    
    function drawPlayer1(context) {
        
        function startCutY() {
            if (direction1 === "left") {
                return 49;
            } else {
                return 93;
            }
        };
        
        function startCutX() {
            if (spriteIndex !== 1) {
                return (spriteIndex * player1.h) - player1.w + spriteIndex * 6;
            } else {
                return 7;
            }
        };
        
        var x = player1.x - (player1.w / 2);
        var y = player1.y - (player1.w / 2);
        context.drawImage(player1.img, startCutX(), startCutY(), player1.w - 1, player1.h - 1, x, y, player1.w, player1.h);
        
        if (timer !== 10) {
            timer += 1;
        } else {
            timer = 0;
        }
        
        if (spriteIndex !== 5 && timer === 10) {
            spriteIndex ++;
        } else if (timer === 10){
            spriteIndex = 1;
        }
        
    };


    function drawPlayer2(context) {
        
        function startCutY() {
            if (direction2 === "left") {
                return 288;
            } else {
                return 323;
            }
        };
        
        function startCutX() {
            if (spriteIndex !== 1) {
                return (spriteIndex * player2.h) - player2.w + spriteIndex * 5.5;
            } else {
                return 8.1;
            }
        };
        
        var x = player2.x - (player2.w / 2);
        var y = player2.y - (player2.w / 2);
        context.drawImage(player2.img, x, y, player2.w, player2.h);
        context.drawImage(player2.img, startCutX(), startCutY(), player2.w - 1, player2.h - 1, x, y, player2.w, player2.h);
 
        if (timer !== 10) {
            timer += 1;
        } else {
            timer = 0;
        }
        
        if (spriteIndex !== 5 && timer === 10) {
            spriteIndex ++;
        } else if (timer === 10){
            spriteIndex = 1;
        }

    };
       
    

