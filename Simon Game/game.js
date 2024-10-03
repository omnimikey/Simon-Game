//Start will be used as a game switch
let start = "OFF";

//Stores random generated Simons
order = [];

//Stores player simons
player= [];

//Counters
let count= 0;
let array_tracker=0;

let player_tracker=0;

//Button Audio
const blue_beat = new Audio("sounds/blue.mp3");
const red_beat = new Audio("sounds/red.mp3");
const green_beat = new Audio("sounds/green.mp3");
const yellow_beat = new Audio("sounds/yellow.mp3");

//Sequence Runner
function sequenceRunner(){
    for (let i=0; i < order.length; i++){
            
        setTimeout(()=> {
        if (order[i] == 1){

            green_beat.play();
            $("#green").animate({
            opacity: '0.2'});
                  $("#green").animate({
                    opacity: '1',
                  });
            }
            
        else if (order[i]==2){
                red_beat.play();
                $("#red").animate({
                    opacity: '0.2'
                  });
                  $("#red").animate({
                    opacity: '1',
                  });
                }

        else if (order[i]==3){
            yellow_beat.play();
            $("#yellow").animate({
                opacity: '0.2',
            });
            $("#yellow").animate({
                opacity: '1',
            });
            }

        else if (order[i]==4){
            blue_beat.play();
            $("#blue").animate({
                opacity: '0.2',
            });
            $("#blue").animate({
                opacity: '1',
            });
    };
        
    },i * 1400) }
}

//Generates random Simon and adds to Sequence
function generateSimon(){

    var randColor= Math.floor(Math.random() *4) + 1;

    switch (randColor){
        case 1:
            order.push(1);
        break;
        case 2:
            order.push(2);
        break;
        case 3:
            order.push(3);
        break;
        case 4:
            order.push(4);
        break;
    }
}

//Checks whether most recent button pressed matches the sequence
function current_Press_Checker(){

 if (order[array_tracker] != player[array_tracker]){
    endGame();
    console.log("End Game");
 }   

 if(order[array_tracker] == player[array_tracker]){
    console.log("matched");
    array_tracker++;

 }
}


function selectColor(color){

    if (color == ".yellow"){

        green_beat.play();

            //adds fading effect
            $("#yellow").animate({
                opacity: '0.2',
              });
              $("#yellow").animate({
                opacity: '1',
              })
              //add to order sequence
              player.push(3);
            console.log("yellow");
            
            console.log("Order: " + order);
            console.log("Player: " + player);
            console.log("Count is " + count);
            console.log("Array Tracker: " + array_tracker);

            current_Press_Checker();

            //if order equals player array next level will initiate
            if (JSON.stringify(order) == JSON.stringify(player)){
                next_Level();
        }

        console.log("Player: " + player);
        console.log("Count is " + count);
    }

    else if (color == ".green"){

        green_beat.play();

            //adds fading effect
            $("#green").animate({
                opacity: '0.2',
              });
              $("#green").animate({
                opacity: '1',
              })
              //add to order sequence
              player.push(1);
            console.log("green");
            current_Press_Checker();

            console.log("Order: " + order);
            console.log("Player: " + player);
            console.log("Count is " + count);
            console.log("Array Tracker: " + array_tracker);

            //if order equals player array next level will initiate
            if (JSON.stringify(order) == JSON.stringify(player)){
                next_Level();
        }

        console.log("Player: " + player);
        console.log("Count is " + count);
    }

    else if (color == ".red"){

        red_beat.play();

            //adds fading effect
            $("#red").animate({
                opacity: '0.2',
              });
              $("#red").animate({
                opacity: '1',
              })
              //add to order sequence
              player.push(2);
            console.log("red");
            current_Press_Checker();

            console.log("Count is " + count);
            console.log("Array Tracker: " + array_tracker);

            //if order equals player array next level will initiate
            if (JSON.stringify(order) == JSON.stringify(player)){
                next_Level();
        }

        console.log("Player: " + player);
        console.log("Count is " + count);
    }

    else if (color == ".blue"){

        blue_beat.play();

            //adds fading effect
            $("#blue").animate({
                opacity: '0.2',
              });
              $("#blue").animate({
                opacity: '1',
              })
              //add to order sequence
              player.push(4);
            console.log("blue");
            current_Press_Checker();

            console.log("Order: " + order);

            console.log("Array Tracker: " + array_tracker);

            //if order equals player array next level will initiate
            if (JSON.stringify(order) == JSON.stringify(player)){
                next_Level();
        }

        console.log("Player: " + player);
        console.log("Count is " + count);
    }
}

//button input
$(".btn").on("click", function(event){
    var the_color= "";
    if (event.currentTarget.id == 'green'){
        the_color = ".green";
    } 
    else if (event.currentTarget.id == 'red'){
        the_color = ".red";
    } 
    else if (event.currentTarget.id == 'yellow'){
        the_color = ".yellow";
    } 
    else if (event.currentTarget.id == 'blue'){
        the_color = ".blue";
    } 
    selectColor(the_color);
});

//BEGIN GAME
if (start == "OFF"){
$(document).on("keypress", function(event){

  

    if (event.key == 'a'){
        
        if (start== "ON"){
            return false;
        }

        generateSimon();
        sequenceRunner();
        count++;
        $("#level-title").text("Level " + count);
        start="ON";    
    }

}
)};

//Ends Game
function endGame(){
    $("#level-title").text("You Lose! Try Again...");
    order=[];
    player=[];
    array_tracker=0;
    count=0;
    start="OFF";
    
}

//Initiates Next Level
function next_Level(){

    setTimeout(()=> {
    console.log("next Level")
    array_tracker=0;
    player=[];
    count++;
    $("#level-title").text("Level " + count);
    generateSimon();
    sequenceRunner();},2000);
}


