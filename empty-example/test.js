let box;

function setup() {
  createCanvas(1000,800);

  box = new Box(20,20,"square");
  block = createSprite(50,550,100,100);

}

function draw() {
  background(255,255,255);


  box.draw()
  box.move()
}

class Box{
  constructor(x,y,name){
    this.x = x;
    this.y = y;
    this.name = createSprite(this.x,this.y,50,50);

  }
  draw(){
    drawSprites()
  }
  move(){
    block.collide(this.name);
    this.name.debug = mouseIsPressed;

    if ((this.name.collide(block)) == false){
      this.name.velocity.y += .2;
    }

  }
}
