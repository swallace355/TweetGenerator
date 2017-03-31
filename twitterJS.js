
$(document).ready(function(){
var randomQuotes = [
    "It's hammer time!",
    "The sky is falling",
    "Cocaine is a hell of a drug",
    "Turqoise Rain",
    "And yadda yadda yadda...",
    "Pretty, pretty, pretty good",
    "Oh... yeah!",
    "These pretzels are making me thirsty",
    "You are a very bad man",
    "The Airing of Grievences",
    "The other white meat"
];

$("#newButton").on('click', function() {
    var x = Math.floor(Math.random() * randomQuotes.length);
    $("#text").text(randomQuotes[x]);
});

});

$(document).ready(function () {
    $('#twitterButton').click(function() {
        
        var textToTweet = "";
        textToTweet = document.getElementById("text").innerText;
        alert("Now going to Twitter.");
        if (textToTweet.length > 140) {
            alert('Tweet should be less than 140 Chars');
        }
        else {
        var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
        window.open(twtLink,'_blank');
        }
    });
 });
