var imgEnemy = new Image();

$(document).ready(function () {
    imgEnemy.src = "ball.png";
});




//RANDOM CREATORS
    function randomCoord() { return Math.random() * 700; };
    function randomSpeed() { return Math.random() * 5;  };


    var enemyList = [ ]


    function createEnemy(enemyName) {
        var enemyName = {
        speed: randomSpeed(),
        x: randomCoord(),
        y: randomCoord(),
        w: 35,
        h: 35,
        img: imgEnemy
        };
        enemyList.push(enemyName)
    }
    
    
//MOVING ENEMIES
    function moveEnemies() {
        var enemyHit = [];
        var hitIndex = 0;
        if (enemyList.length !== 0) {                       //if there are enemies...
            for (i = 0; i < enemyList.length; i++) {        //for all the enemies...
                if (i%2 === 0) {                            //if index % 2 == 0...
                    enemyList[i].x += enemyList[i].speed;
                    enemyList[i].y += enemyList[i].speed;
                } else {                                    //else...
                    enemyList[i].y += enemyList[i].speed;
                    enemyList[i].x -= enemyList[i].speed;
                }
                if (enemyList[i].x < 20) {                  //if hits the edge...
                    enemyList[i].x = 20;
                    enemyList[i].speed = (-enemyList[i].speed);
                }
                if (enemyList[i].y < 20) {                  //if hits the edge...
                    enemyList[i].y = 20;
                    enemyList[i].speed = (-enemyList[i].speed);
                }
                if (enemyList[i].x > 780) {                 //if hits the edge...
                    enemyList[i].x = 780;
                    enemyList[i].speed = (-enemyList[i].speed);
                }
                if (enemyList[i].y > 680) {                 //if hits the edge...
                    enemyList[i].y = 680;
                    enemyList[i].speed = (-enemyList[i].speed);
                }
                //character edge coordinates
                var rEdgeCoord = enemyList[i].x + enemyList[i].w
                var lEdgeCoord = enemyList[i].x 
                var tEdgeCoord = enemyList[i].y
                var bEdgeCoord = enemyList[i].y + enemyList[i].h
                
                if ( (rEdgeCoord > player1.x) && (lEdgeCoord < (player1.x + player1.w)) && (bEdgeCoord > player1.y) && (tEdgeCoord < (player1.y + player1.w)) ) {      //if hits player1
                    player1.speed -= 2;
                    setTimeout(function() {player1.speed += 2;} , 2000);
                    enemyHit[0] = enemyList[i];
                    hitIndex = i;
                }
                if ( (rEdgeCoord > player2.x) && (lEdgeCoord < (player2.x + player2.w)) && (bEdgeCoord > player2.y) && (tEdgeCoord < (player2.y + player2.w)) ) {     //if hits player2
                    player2.speed -= 2;
                    setTimeout(function() {player2.speed += 2;} , 2000);
                    enemyHit[0] = enemyList[i];
                    hitIndex = i;
                }
                                                            
                /* RANDOMNESS CODE
                if (Math.random() < 0.5){                 //50% chance moving right
                    enemyList[i].x += enemyList[i].speed;
                } else {                                //50% chance moving left
                    enemyList[i].x -= enemyList[i].speed;
                }
                if (Math.random() < 0.5){                 //50% chance moving down
                    enemyList[i].y += enemyList[i].speed;
                } else {                                //50% chance moving up
                    enemyList[i].y -= enemyList[i].speed;
                }*/
            };
        };
        if (enemyHit.length !== 0) {                    //delete hit enemies
            enemyList.splice(hitIndex, 1); 
            delete enemyHit[0];
        }
    };
//DRAW ENEMIES
    var picIndex = 1;
    var count = 0;

    function drawEnemies(context) {
         
        
        if (enemyList.length !== 0) {                       //if there are enemies...
            
            function cutX() {
                return (picIndex * enemyList[0].h) - enemyList[0].h;
            };
            for (i = 0; i < enemyList.length; i++) {        //for all the enemies...
                var x = enemyList[i].x - (enemyList[i].w / 2);
                var y = enemyList[i].y - (enemyList[i].w / 2);
                context.drawImage(enemyList[i].img, x, y, enemyList[i].w, enemyList[i].h);
                context.drawImage(enemyList[i].img, cutX(), 0, enemyList[i].w - 1, enemyList[i].h - 1, x, y, enemyList[i].w, enemyList[i].h);
            }
        }
        
        if (count !== 10) {
            count += 1;
        } else {
            count = 0;
        }
        
        if (spriteIndex !== 5 && count === 10) {
            picIndex ++;
        } else if (count === 10){
            picIndex = 1;
        }
        
        
    };
    
        
    
    