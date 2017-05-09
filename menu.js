var menuState = {
    
    create: function() {
        
        game.add.sprite(0, 0, 'backGroundMenu');
        
        
        var header = game.add.text(245, 10, 'KIVIHIILEN MATKA', {font: '50px Lucida Console', fill: '#ffffff'})
        
        var description1 = game.add.text(15, 80, 'Hei! \nTervetuloa kivihiilen matkalle \noppimaan lisää ainoasta energianlähteestä, \njoka voi turvata energiansaantimme \nkriisitilanteissakin. Pelin edetessä \npääset seuraamaan, miten \nkivihiili muuntautuu energiaksi, \njoka lämmittää juuri \nsinun ja perheesi kotia.', {font: '18px Lucida Console', fill: '#ffffff', align: 'center'}); 
        var description2 = game.add.text(485, 105, 'Kivihiili alkoi muodostua kivihiilikaudella \n350 miljoonaa vuotta sitten. \nTällöin maailma oli rehevän kasvillisuuden peitossa. \nAikojen saatossa ja maanpinnan poimuttuessa \nkasveja ja turvetta hautautui hapettomiin \noloihin hiekan, saven ja veden alle. \nNäissä olosuhteissa syntyi kivihiili, \njoka alun alkaen on siis kasveista ja \nturpeesta muodostunutta energiaa. ', {font: '16px Lucida Console', fill: '#ffffff', align: 'center'}); 
        
        var starText = game.add.text(150, 600, 'Paina välilyöntiä aloittaaksesi seikkailun \nja kerää tähti päästäksesi seuraavalle tasolle!', {font: '26px Lucida Console', fill: '#ffffff', align: 'center'});
  

        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);
        
    },
    
    start: function()  {
        
        game.state.start('play1');
        
    }
    
}