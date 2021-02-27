class Form{
    constructor(){
      this.input = createInput("name");
      this.button = createButton("play");
      this.greetings = createElement('h3');
    }
    display(){
        var title = createElement('h2');
        title.html("carRacingGame");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.update();
          player.updateCount(playerCount);
          this.greetings.html("hello" + player.name);
          this.greetings.position(displayWidth/2-70,displayHeight/4);
        })
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.greetings.hide();
    }
}