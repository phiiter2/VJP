var backGr;
var platforms;
var player;
var cursors;

var score = 0;
var scoreText;
var lastY = 680;

var star;




var play3State = {
    
    create: function() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        backGr = game.add.sprite(0, 0, 'backGround3');
        game.world.setBounds(0, 0, 10000, 700);
        backGr.width = 10000; backGr.height = 700;
    
    
        //PLAYER SHIT...
        player = game.add.sprite(32, game.world.height - 150, 'dude');
    
        game.physics.arcade.enable(player);
        player.body.gravity.y = 2000;
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
        
    },
    
    
    update: function() {
    
        //backGr.tilePosition.x += player.body.velocity.x /75;
    
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(player, star, this.advance, null, this);
    
    
        player.body.velocity.x = 0;
    
        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -500;

            player.animations.play('run');
        } else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 500;

            player.animations.play('run');
        } else {
            //  Stand still
            player.animations.stop();

            player.frame = 5;
        }
    
        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down) {
            player.body.velocity.y = -1200;
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
        
        game.state.start('middle3');
        
    }
    
}