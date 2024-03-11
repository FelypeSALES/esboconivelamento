function setup() {
    createCanvas(900, 900);
    background("green");
    
  }
  
  function draw() {
    
    
    stroke("red");
    fill ("black");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 26, 29);
    }
  }