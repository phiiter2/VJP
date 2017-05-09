var middle2State = {
    
    create: function() {
        
        
        game.add.sprite(0, 0, 'backGroundM2');
        
        
        var infoText = game.add.text(10, 80, 'Kivihiilen ympäristövaikutuksia \nei pidä vähätellä, \nmutta usein niitä kavahdetaan turhaan: \nnykyteknologian avulla hiilestä \non onnistuttu kehittämään \nhuomattavasti entistä puhtaampi \nenergiantuottotapa. \nSavukaasupäästöihin on kehitetty \ntehokasta puhdistustekniikkaa, \njonka ansiosta kivihiilen \npäästöraja-arvot ovat asettuneet \nsamalle tasolle kuin \nmuidenkin polttoaineiden. \nMyös hiilidioksidihaittojen \nvähentämiseksi on käynnissä \nerittäin suuria kehityshankkeita \neri puolilla maailmaa. ', {font: '20px Lucida Console', fill: '#000000', align: 'center'});
   
        var resumeText = game.add.text(150, 600, 'Paina välilyöntiä jatkaaksesi!', {font: '25px Lucida Console', fill: '#000000'});
         
        game.stage.backgroundColor = "#408000";
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play3');
        
    }
    
}