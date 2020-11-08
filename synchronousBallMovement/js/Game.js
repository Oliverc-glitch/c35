class Game{
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("values", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
  }
}