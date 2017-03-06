var requestURL = "https://silvanp1-93181.firebaseio.com/.json";


/*function slideContent() { $.getJSON(requestURL, function(data) {
        
        var jsoni = data;
        console.log(jsoni);
        
        function slide1() { 
            $(".slide").html(jsoni.article1[2]); 
        }
        slide1()
        
        function slide2() { $(".slide").html(jsoni.article2[2]); }
        setTimeout(slide2, 6000);
        
        function slide3() { $(".slide").html(jsoni.article3[2]); }
        setTimeout(slide3, 12000);
        
    
        });
}
*/

        

//slideContent()
function setStorageValue() {
    slideIndex = localStorage.getItem("index");
    if (slideIndex === null) {slideIndex = 0;}
}
setStorageValue();
//Array, containing slide transition commands
var slides = [

    function articleOne() {  $.getJSON(requestURL, function (data) {
        var jsoni = data;
    
        function slide1() {
            $(".slide").html(jsoni.article1);
        }
        slide1();
        });
    },


    function articleTwo() {  $.getJSON(requestURL, function (data) {
        var jsoni = data;
    
        function slide2() {
            $(".slide").html(jsoni.article2);
        }
        slide2();
        });
    },


    function articleThree() {  $.getJSON(requestURL, function (data) {
        var jsoni = data;
    
        function slide3() {
            $(".slide").html(jsoni.article3);
        }
        slide3();
        });
    }

];

var pause = false;
var slideIndex = 0;
//plays the slides every 5 secs
function showSlides() {
    if (pause === false) {
        animate(slides[slideIndex]());
        localStorage.setItem("index", slideIndex);
        slideIndex++;
    }
    if (slideIndex == slides.length) {slideIndex = 0;} 
    
    var time = setTimeout(showSlides, 5000); // Change image every 5 seconds
    if (pause === true) {clearTimeout(time);} //Stops the show if pause pressed
}



//Starts slideing from the right spot..

showSlides();



function play() {

        if (pause === false) {
            pause = true;
            $("#pauseButton").html("<p>Play</p>");
            showSlides();
        } else {
            pause = false;
            $("#pauseButton").html("<p>Pause</p>");
            showSlides();
        }
}

function right() {
    pause = true;
     if (slideIndex == 2) {
        slides[2]();
        slideIndex = 0;
    } else if (slideIndex == 1) {
        slides[1]();
        slideIndex++;
    } else {
        slides[0]();
        slideIndex++;
    }
}

function left() {
    pause = true;
    if (slideIndex == 2) {
        slides[0]();
        slideIndex--;
    } else if (slideIndex == 1) {
        slides[2]();
        slideIndex--;
    } else {
        slides[1]();
        slideIndex = 2;
    }
}

function one() {
    pause = true;
    slides[0]();
}
function two() {
    pause = true;
    slides[1]();
}
function three() {
    pause = true;
    slides[2]();
}

function animate(callJSON) {
    $('.slide').fadeOut('fast', function() {
        callJSON;
        $('.slide').fadeIn('fast');
    });
}
