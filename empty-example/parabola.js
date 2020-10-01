
let GRAVITY = 1;
let tanklst = []
let soldierlst = []
let tank1lst = [];
let soldier1lst = [];

function setup() {
  createCanvas(2000,800);
  background("yellow");

  platform = createSprite(1000,750);
  platform.addAnimation('normal', 'mountains.png');


  let tank = new Tank1("first")
  let tank1 = new Tank2("here")
}
function draw() {
  background("yellow");

  for (let x=0; x<tank1lst.length; x++){
    tank1lst[x].move();
  }
  for (let x=0; x<soldier1lst.length; x++){
    soldier1lst[x].move();
  }
  for (let x=0;x<tanklst;x++){
    tanklst[x].move()
  }
  for (let x=0;x<soldierlst;x++){
    soldierlst[x].move()
  }

  tank.move()
  tank1.move()
}

function keyPressed() {
  if (keyCode == UP_ARROW){
    let t1 = new Tank1("tank");
    tank1lst.push(t1);
  }
  if (keyCode == DOWN_ARROW){
    let s1 = new Soldier1("soldier");
    soldier1lst.push(s1);
  }
  if (keyCode == UP_ARROW){
    let s = new Soldier("soldier");
    solderlet.push(s)
    console.log("created")
  }
  if (keyCode == 50){
    let t = new Tank("tank");
    tanklst.push(t)
    console.log("created")
  }


}
class Soldier{
  constructor(name){
    this.x = 1000;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'soldier.png');
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
      this.name.velocity.x = 5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = -5;
    }
    drawSprites();
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

class Tank{
  constructor(name){
    this.x = 40;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'tank2.png');
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
      this.name.velocity.x = 5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = -5;
    }
    drawSprites();
  }
}

class Tank1{
  constructor(name){
    this.x = 176;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'tank2.png');
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
class Tank2{
  constructor(name){
    this.x = 50;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'tank2.png');
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
