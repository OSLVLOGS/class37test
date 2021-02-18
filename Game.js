class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("GameStart", 120, 100);
    Player.getplayerinfo();
    if(Allplayers!==undefined){

      var dp = 130;
      for(var plr in Allplayers){
      dp+= 20;
      textSize(15);
      text(Allplayers[plr].name+":"+Allplayers[plr].distance, 120, dp);
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){

       player.distance+=50;
       player.update();

    }
  }
}
