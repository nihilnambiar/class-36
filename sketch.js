var hball,position,database;
var form,player,game;
var playerCount=0;
var gameState=0;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
  game=new Game()
  game.getState()
  game.start()
}

function draw(){
   


}
