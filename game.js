var game = new Phaser.Game(1000, 700, Phaser.AUTO, '');    
var music;

function create() {
music = game.add.audio('backGroundMusic');
music.play();
}

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play1', play1State);
game.state.add('middle1', middle1State);
game.state.add('play2', play2State);
game.state.add('middle2', middle2State);
game.state.add('play3', play3State);
game.state.add('middle3', middle3State);
game.state.add('play4', play4State);
game.state.add('gameOver', gameOverState);

game.state.start('load');



//FOR PLATFORM CREATING
function platformY() {
    var randY = game.world.randomY;
    if (lastY > 400 && randY < 200) {
        return randY + 400;
    } else {
        return randY;
    }
}

//TO CHECK IF GAME ENDED IN FALL OR SUCCES
var dudeFell = false;