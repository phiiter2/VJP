var gameOverState = {
    
    
    create: function() {
        
        game.add.sprite(0, 0, 'gameOverBackGround');
        game.sound.stopAll();
        var music = game.add.audio('gameOverMusic');
        music.loop = true;
        music.play();
    
        
        if(dudeFell) {
            
        var description = game.add.text(380, 50, 'Valitettavasti tipuit kivihiilen matkasta. \nSaadaksesi tietää lisää, aloita peli alusta tai \nsiirry sivustolle www.hiilitieto.fi. \nKiitos mielenkiinnostasi; \nliity sinäkin mukaan vaikuttamaan kivihiilen \nenergiakäytön säilyttämisen puolesta!', {font: '20px Lucida Console', fill: '#ffffff'}); 
        var resumeText = game.add.text(400, 600, 'Paina välilyöntiä \naloittaaksesi alusta!', {font: '35px Lucida Console', fill: '#000000', align: 'center'});
        } else {
            var header = game.add.text(630, 80, 'ONNEA!', {font: '50px Lucida Console', fill: '#000000' });
            var infoText = game.add.text(450, 150, ' Olet kulkenut kivihiilen mukana \nsen matkan aina 350 miljoonan vuoden takaa \ntähän päivään asti. Matkan aikana sait \narvokasta tietoa kivihiilestä, \njoka kannattaa pitää mielessä. \nLiity sinäkin mukaan vaikuttamaan \nkivihiilen energiakäytön säilyttämisen puolesta!', {font: '18px Lucida Console', fill: '#ffffff', align: 'center'});
            
            
        }
         
        game.stage.backgroundColor = "#008040";
         
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    
    start: function()  {
        
        game.state.start('play1');
        
    }
    
    
    
}
