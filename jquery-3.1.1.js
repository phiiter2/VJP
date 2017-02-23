
var theOne = 0;

function getRandomInteger(min, max) {
    var rand = Math.floor(Math.random() * max);
    return Math.max(min, rand);
}

$(document).ready(function () {
    theOne = getRandomInteger(1, 10);
});


function compareNumbers(first, second) {
    var boole = true;
    if (first != second) {
        boole = false;
    } 
    return boole;
}

function guessTheNumber() {
    var feed = document.getElementById('number').value;
    console.log(feed);
    if ( (feed <= 10 && feed >= 1) && (feed.length <= 2) ) {
        alert(compareNumbers(feed, theOne).toString());
        theOne = getRandomInteger(1, 10);
    } else {
        alert("Invalid number! Give an integer 1-10, please.");
    }
}

$(document).ready(function() {
    $("#button").click(guessTheNumber)
});

