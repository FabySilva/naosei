var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
   game = new Game();
   game.getState()
   game.start() 
}

function draw(){ 
    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}
