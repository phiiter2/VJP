var middle3State = {
    
    create: function() {
        
        game.add.sprite(0, 0, 'backGroundM3');
        
        
        var infoText = game.add.text(20, 20, 'On fakta, että hiili ei ole ympäristöystävällisin energiantuotantovaihtoehto, \nja tämän vuoksi hallitus yhdessä muiden tahojen kanssa puuhaa kivihiilen kieltolakia. \nTämä on kuitenkin järjetön ratkaisu, sillä mikään toinen energianlähde ei ole yhtä \nvarma, edullinen, riittävä ja turvallinen kuin kivihiili. \nKivihiili on taloudellinen tapa tuottaa sähköä ja lämpöä, ja toisin kuin \nöljy- ja maakaasuvarat, hiili ei sijaitse \npoliittisesti tai taloudellisesti epävakailla alueilla \neikä näin ollen ole kriisiherkkä energianlähde. \nHiilimarkkinat pysyvät järkevinä, koska hiilen tuottajia on useita \nja sitä löytyy tasaisesti ympäri maapalloa. ', {font: '18px Lucida Console', fill: '#ffffff', align: 'center'});
   
        var resumeText = game.add.text(450, 650, 'Paina välilyöntiä jatkaaksesi!', {font: '28px Lucida Console', fill: '#ffffff'});
         
        game.stage.backgroundColor = "#408000";
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play4');
        
    }
}