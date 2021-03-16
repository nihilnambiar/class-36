class Game{
    constructor(){

    }
    getState(){
database.ref('gameState').on("value",function(data){
    gameState=data.val()
    console.log(gameState)
})
    }
    updateState(state){
database.ref('/').update({
    gameState:state
})
    }
    start(){
        console.log("inside the start")
        if(gameState== 0 ){
            console.log("inside the if")
           player=new Player()
           player.getCount()
           console.log(playerCount)
           form=new Form()
           form.display()
        }
    }
}