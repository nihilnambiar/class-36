class Form{
    constructor(){

    }
     display(){
var title=createElement("h2")
title.html("car racing game")
title.position(130,0)
var button=createButton("play")
var input=createInput("name")
var greeting=createElement("h3")
input.position(130,160)
button.position(250,200)
button.mousePressed(function(){
    input.hide()
    button.hide()
    var name=input.value()
    playerCount=playerCount+1
    player.updateCount(playerCount)
    player.update(name)
    greeting.html("hello"+ name)
    greeting.position(130,160)
})
    }

}