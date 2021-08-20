var started = false;
var numSquares = 4;
var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern=[];
var userClkPattern=[];
var gameLevel = 0;

 $(document).keydown(function(){
   if(!started){
   nextSequence();
   started = true;
 }
});

function nextSequence() {
  gameLevel++;
 $("h1").html("level " + gameLevel);
var randNum= Math.floor(Math.random()*4);
var randomChosenColor = buttonColors[randNum];
gamePattern.push(randomChosenColor);
//console.log("gamePattern[] " + gamePattern);
$("#"+randomChosenColor).fadeOut(200).fadeIn(200);
makeSound(randomChosenColor);
}

  $(".btn").click(function(){

    var btnPressed = $(this).attr("id");
    userClkPattern.push(btnPressed);
    //console.log("userClkPattern [] " + userClkPattern);
        animatePress(btnPressed);
        makeSound(btnPressed);
    // console.log("userClkPattern length: " + userClkPattern.length);
      if(userClkPattern[userClkPattern.length-1] === gamePattern[userClkPattern.length-1]){
        if(userClkPattern.length === gamePattern.length){
        setTimeout(function(){nextSequence();}, 1000);
        userClkPattern = [];
      }

    }
    else{

          makeSound("wrong");
          $("body").addClass("game-over");
           $("#level-title").text("Game Over, Press Any Key to Restart");
           setTimeout(function () {
           $("body").removeClass("game-over");
         }, 200);
         startOver();
        }


 });



function makeSound(sound){
  var soundMade = new Audio("sounds/"+sound+".mp3");
  soundMade.play();
}

function animatePress(btnPressed){
  $("#"+btnPressed).addClass("pressed");
  setTimeout(function(){$("#"+btnPressed).removeClass("pressed");},100);
}

function startOver(){

  gameLevel = 0;
  gamePattern = [];
  userClkPattern = [];
  started = false;
}
