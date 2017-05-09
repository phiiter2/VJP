var backGr;
var platforms;
var player;
var cursors;

var score = 0;
var scoreText;
var lastY = 680;

var star;

var play1State = {
    
    create: function() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        backGr = game.add.sprite(0, 0, 'backGround1');
        game.world.setBounds(0, 0, 10000, 700);
        backGr.width = 10000; backGr.height = 700;
        
        game.sound.stopAll();
        var music = game.add.audio('backGroundMusic');
        music.loop = true;
        music.play();
        
    
    
        //PLAYER SHIT...
        player = game.add.sprite(32, game.world.height - 150, 'dude');
    
        game.physics.arcade.enable(player);
        player.body.gravity.y = 1500;
        player.body.collideWorldBounds = false;
    
        player.animations.add('run', [1,2,3,4], 10, true);
        
        
        
        //GENERATE PLATFORMS
        platforms = game.add.group();
        platforms.enableBody = true;
        for (var i = 0; i < 100; i++) {
            var platY = platformY();
            //  Create a star inside of the 'stars' group
            var ledge = platforms.create(i * 200 + Math.random() * 200, platY, 'platform');
            ledge.body.immovable = true;
            lastY = platY;
        }
        ledge = platforms.create(30, game.world.height - 50, 'platform');
        ledge.body.immovable = true;
    
    
        
    
        
        //GOAL STAR
        star = game.add.sprite(game.world.width - 80, game.world.height / 2, 'star');
        game.physics.arcade.enable(star);
        star.enableBody = true;
        star.body.immovable = true;
        
        //ARROW-KEY SETUP
        cursors = game.input.keyboard.createCursorKeys();
        //SCORE TEXT SETUP
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#0ff00f' });
        scoreText.fixedToCamera = true;
    
        game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
        
        //RESET dudeFell to false
        dudeFell = false;
        
    },
    
    
    update: function() {
    
        //backGr.tilePosition.x += player.body.velocity.x /75;
    
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(player, star, this.advance, null, this);
    
    
        player.body.velocity.x = 0;
    
        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -350;

            player.animations.play('run');
        } else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 350;

            player.animations.play('run');
        } else {
            //  Stand still
            player.animations.stop();

            player.frame = 5;
        }
    
        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -1100;
        }
    
        if (!player.body.touching.down) {
            player.animations.stop();
            player.frame = 0;
        }
    
        scoreText.text = 'score: ' + Math.floor( player.x / 10 );
        
        if (player.y > 800) {
            dudeFell = true;
            game.state.start('gameOver');
        }

    },
    
    
    advance: function() {
        
        game.state.start('middle1');
        
    }

}







/*



/*
//Creates new platform & updates the lastPlatformX variable
function createPlatform() {
    var ledge = platforms.create(lastPlatfromX + Math.random() * 200, game.world.randomY, 'platform');
    ledge.body.immovable = true;
    lastPlatformX = ledge.x;
}

var game = new Phaser.Game(1000, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });



function preload() {
    game.load.image('backGround', "back.jpg");
    game.load.image('platform', "plat.png");
    game.load.spritesheet('dude', "dude.png", 64, 64);
    game.load.image('star', "star.png");
}

var backGr;
var platforms;
var player;
var cursors;

var score = 0;
var scoreText;

var lastPlatformX = 1000;

var star;

const levels = [
    function() {
        alert('Hei! Tervetuloa kivihiilen matkalle oppimaan lisää ainoasta energianlähteestä, joka voi turvata energiansaantimme kriisitilanteissakin. Pelin edetessä pääset seuraamaan, miten kivihiili muuntautuu energiaksi, joka lämmittää juuri sinun ja perheesi kotia. Hyppää matkaan!');
        levels.shift()();
    },
    function() {
        //GENERATE PLATFORMS
        platforms = game.add.group();
        platforms.enableBody = true;
        for (var i = 0; i < 100; i++) {
            //  Create a star inside of the 'stars' group
            var ledge = platforms.create(i * 200 + Math.random() * 200, game.world.randomY, 'platform');
            ledge.body.immovable = true;
        }
        ledge = platforms.create(30, game.world.height - 50, 'platform');
        ledge.body.immovable = true;
        star = platforms.create(10000, game.world.height - 90, 'star')
        star.body.immovable = true;
    },
    function() {
        alert("jee");
    }
]

function create() {
        
    game.physics.startSystem(Phaser.Physics.ARCADE);
    backGr = game.add.sprite(0, 0, 'backGround');
    game.world.setBounds(0, 0, 10000, 700);
    backGr.width = 10000; backGr.height = 700;
    
    
    levels.shift()();
    
    
    //PLAYER SHIT...
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    
    game.physics.arcade.enable(player);
    player.body.gravity.y = 1500;
    player.body.collideWorldBounds = false;
    
    player.animations.add('run', [1,2,3,4], 10, true);
    
    
    //ARROW-KEY SETUP
    cursors = game.input.keyboard.createCursorKeys();
    //SCORE TEXT SETUP
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#0ff00f' });
    scoreText.fixedToCamera = true;
    
    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
};



function update() {
    
    //backGr.tilePosition.x += player.body.velocity.x /75;
    
    game.physics.arcade.collide(player, star, function() {
        levels.shift()();
    });
    
    game.physics.arcade.collide(player, platforms);
    
    player.body.velocity.x = 0;
    
    if (cursors.left.isDown) {
        //  Move to the left
        player.body.velocity.x = -200;

        player.animations.play('run');
    } else if (cursors.right.isDown) {
        //  Move to the right
        player.body.velocity.x = 200;

        player.animations.play('run');
    } else {
        //  Stand still
        player.animations.stop();

        player.frame = 5;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -1100;
    }
    
    if (!player.body.touching.down) {
        player.animations.stop();
        player.frame = 0;
    }
    
    scoreText.text = 'score: ' + Math.floor( player.x / 10 );
    console.log(game.physics.arcade.collide(player, star))

    
    /*
    if (lastPlatformX < player.x + 1000) {              //Create new platform if last created is nearer than (player position + screenwidth)
        createPlatform();
    }
    
    
    
};



*/