class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementsPosition(){
    this.titleImg.position(10,50);
    this.input.position(width/2-100,height/2);
    this.playButton.position(width/2-90,height/2+40);
    this.greeting.position(width/2-100,height/2-100)
   }


   setElementsStyle(){
    this.titleImg.class("gametitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

   }
   
   handleMousePressed(){
     this.playButton.mousePressed(  () =>
      {
          this.input.hide();
          this.playButton.hide();
          var message = `Hello ${this.input.value()}
                    
       </br> Wait for another player to join...`;
          this.greeting.html(message);
      }
      );
  }
   display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }

}