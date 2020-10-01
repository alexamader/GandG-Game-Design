
let GRAVITY = 1;
let tanklst = [];
let soldierlst = [];

function setup() {
  createCanvas(2000,800);
  background("yellow");

  platform = createSprite(1000,750);
  platform.addAnimation('normal', 'mountains.png');

  soldier = new Soldier1("first");
  tank = new Tank1("first")
}
function draw() {
  background("yellow");

  for (let x=0; x<tanklst.length; x++){
    tanklst[x].move();
    print("hey")
  }
  for (let x=0; x<soldierlst.length; x++){
    soldierlst[x].move();
    print("hey")
  }

  soldier.move()
  tank.move()
}

function keyPressed() {
  if (keyCode == UP_ARROW){
    let t = new Tank1("tank");
    tanklst.push(t);
  }
  if (keyCode == DOWN_ARROW){
    let s = new Soldier1("soldier");
    soldierlst.push(s);
  }

}

class Soldier1{
  constructor(name){
    this.x = 10;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'soldier2.png');
  }
  move(){
    this.name.velocity.x = 0
    if(platform.overlapPixel(this.name.position.x, this.name.position.y+25)==false){
      this.name.velocity.y += GRAVITY;
    }
    while(platform.overlapPixel(this.name.position.x, this.name.position.y+25)){
      this.name.position.y--;
      this.name.velocity.y = 0;
    }
    if (keyIsDown(65)){
      this.name.velocity.x = -5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = 5;
    }
    drawSprites();
  }
}

class Tank1{
  constructor(name){
    this.x = 10;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'tank.png');
  }
  move(){
    this.name.velocity.x = 0
    if(platform.overlapPixel(this.name.position.x, this.name.position.y+25)==false){
      this.name.velocity.y += GRAVITY;
    }
    while(platform.overlapPixel(this.name.position.x, this.name.position.y+25)){
      this.name.position.y--;
      this.name.velocity.y = 0;
    }
    if (keyIsDown(65)){
      this.name.velocity.x = -5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = 5;
    }
    drawSprites();
  }
}
