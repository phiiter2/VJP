$(document).ready(function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 700;

    document.body.appendChild(canvas);
    
//RANDOM PRODUCER
    function randomCoord() { return Math.random() * 700; };

//MONITOR KEYS
    var keysDown = {};
    var lastKeyPressed = 37;
    window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
        lastKeyPressed = e.keyCode;
    });
    
    window.addEventListener('keyup', function(e) {
        delete keysDown[e.keyCode];
    });
    
//RENDER
    var render = function() {
        context.fillStyle = '#000000';
        context.fillRect(0,0,800,700);
        if (gameOver === true) {
            drawGameOver();
        } else {
        drawPlayer1(context);
        drawPlayer2(context);
        //player1.render();
        
        
        
        if (powerUpTimer === 200) {
            powerUpTimer = -400;                            //RESET TIMER IF REACHES 100
            powerUpList[0].x = randomCoord();               //GENERATE NEW POSITIONS...
            powerUpList[0].y = randomCoord();
            powerUpList[1].x = randomCoord();
            powerUpList[1].y = randomCoord();
        }
        if (powerUpTimer > 0) {                             //+ OF TIME POWERUPS VISIBLE 
            drawPowerUp(context, 0);
            drawPowerUp(context, 1);
        };
        powerUpTimer ++;                                    //ADD TO TIMER
            
        
        drawEnemies(context);
        context.fillStyle = "red";
        context.font = "20px Arial";
        context.fillText(scoreCount,700,20);
            
        scoreCount ++;
        }
    };
    
    function update() {
        if (38 in keysDown) {
            console.log('key up');
            movePlayer1('up');
        };
        if (40 in keysDown) {
            console.log('key down');
            movePlayer1('down');
        };
        if (39 in keysDown) {
            console.log('key right');
            movePlayer1('right');
        };
        if (37 in keysDown) {
            console.log('key left');
            movePlayer1('left');
        };
        
        if (87 in keysDown) {
            console.log('key up');
            movePlayer2('up');
        };
        if (83 in keysDown) {
            console.log('key down');
            movePlayer2('down');
        };
        if (68 in keysDown) {
            console.log('key right');
            movePlayer2('right');
        };
        if (65 in keysDown) {
            console.log('key left');
            movePlayer2('left');
        };
        moveEnemies();
        
        if (lastKeyPressed === 37) {                //check direction for sprites...
            direction1 = "left";
        } else if (lastKeyPressed === 39) {
            direction1 = "right";
        } else if (lastKeyPressed === 65) {
            direction2 = "left";
        } else if (lastKeyPressed === 68) {
            direction2 = "right";
        };    
        
    };
    
    var powerUpTimer = 0
    
    function main() {
        update();
        render();
        
        requestAnimationFrame(main);
    };
    
        
//SCORE & GAME OVER SCREEN
    scoreCount = 9;
    var highScore = 0;
    function drawGameOver() {
        context.textAlign = "center";
        context.fillStyle = "red";
        context.font = "50px Arial";
        context.strokeStyle = "red"
        context.strokeText("-SCORE-",400,200);
        context.font = "35px Arial";
        context.strokeText("-HIGHSCORE-",400,400);
        context.font = "80px Arial";
        context.fillText(scoreCount,400,300);
        context.font = "60px Arial";
        context.fillText(highScore,400,480);
    }
    
    /*
    var lastHigh = localStorage.getItem("highScore");
    if (lastHigh === null || scoreCount > lastHigh ) {
        localStorage.setItem("highScore", scoreCount);
    }
    */
//GET THE GAME RUNNING!
    gameOver = false;
    createEnemy("erkki");
    createEnemy("jarmo");
    createEnemy("lissu");
    createEnemy("pirjo");
    main();
    
});