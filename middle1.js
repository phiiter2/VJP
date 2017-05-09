var middle1State = {
    
     create: function() {
        
         
        game.add.sprite(0, 0, 'backGroundM1');
         
        var infoText = game.add.text(180, 450, 'Kivihiili on ensimmäinen fossiilinen polttoaine, jota ihminen hyödynsi. \nIlman hiiltä teollisuutemme ei varmasti olisi tällä tolalla, sillä hiili on energianlähde, \njoka mahdollisti teollisen vallankumouksen Englannissa \n1700-luvulla ja synnytti teollisen kulttuurin, jonka mukana maailmamme on kehittynyt nykyisekseen. \nHiili on ollut merkittävä energianlähde myös liikennepolttoaineissa \nja vauhdittanut matkaan miljoonia höyrylaivoja ja -vetureita. ', {font: '19px Lucida Console', fill: '#000000', align: 'center'});
   
        var resumeText = game.add.text(300, 40, 'Paina välilyöntiä jatkaaksesi!', {font: '25px Lucida Console', fill: '#000000'});
         
        game.stage.backgroundColor = "#008040";
         
         
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play2');
        
    }
    
    
}