
let GRAVITY = 1;
let tanklst = []
let soldierlst = []
let tank1lst = [];
let soldier1lst = [];
let bulletlst = [];
let bullet1lst = [];
let bulletCounter = 0;
function setup() {
  frameRate(40)
  createCanvas(2000,800);
  background("yellow");
  platform = createSprite(1000,750);
  platform.addAnimation('normal', 'mountains.png');
}
function draw() {
  background("yellow");
  if (bullet1lst.length > 50){
    bullet1lst = bullet1lst.splice(0,10);
    print('clipped1')
    print(bullet1lst.length)
  }
  if (bulletlst.length > 50){
    bulletlst = bulletlst.splice(0,10);
    print('clipped')
    print(bulletlst.length)
  }
  for (let x=0; x<tank1lst.length; x++){
    tank1lst[x].move();
    tank1lst[x].shoot()
  }
  for (let x=0; x<soldier1lst.length; x++){
    soldier1lst[x].move();
    soldier1lst[x].shoot()
  }
  for (let x=0;x<tanklst.length;x++){
    tanklst[x].move()
    tanklst[x].shoot()
  }
  for (let x=0;x<soldierlst.length;x++){
    soldierlst[x].move()
    soldierlst[x].shoot()
  }
  for (let x=0;x<bulletlst.length;x++){
    bulletlst[x].draw()
  }
  for (let x=0;x<bullet1lst.length;x++){
    bullet1lst[x].draw()
  }
  drawSprites()
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
  if (keyCode == 49){
    let s = new Soldier("soldier");
    soldierlst.push(s)
  }
  if (keyCode == 50){
    let t = new Tank("tank");
    tanklst.push(t)
  }


}
class Soldier{
  constructor(name){
    this.x = 1000;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'soldier.png');
    this.health = 100;
  }
  move(){
    this.name.velocity.x = 0
    if(platform.overlapPixel(this.name.position.x, this.name.position.y+25)==false){
      this.name.velocity.y += GRAVITY;
    }
    while(platform.overlapPixel(this.name.position.x, this.name.position.y+25)){
      this.name.position.y = this.name.position.y - 2;
      this.name.velocity.y = 0;
    }
    if (keyIsDown(65)){
      this.name.velocity.x = 5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = -5;
    }
  }
  shoot(){
    let shoot = false;
    for (let i=0;i<soldier1lst.length;i++){
      if ((soldier1lst[i].name.position.y > this.name.position.y-60)&&(soldier1lst[i].name.position.y < this.name.position.y+60)){
        if ((soldier1lst[i].name.position.x<this.name.position.x)&&(soldier1lst[i].name.position.x+700>this.name.position.x)){
          shoot = true;
          //console.log("here")
        }
      }
    }
    if (shoot == false){
      for (let i=0;i<tank1lst.length;i++){
        if ((tank1lst[i].name.position.y > this.name.position.y-75)&&(tank1lst[i].name.position.y < this.name.position.y+75)){
          if ((tank1lst[i].name.position.x<this.name.position.x)&&(tank1lst[i].name.position.x+700>this.name.position.x)){
            shoot = true;
            //console.log("tank")
          }
        }
      }
    }
    if ((shoot == true)&&(0==frameCount%50)){
      let b = new Bullet(this.name.position.x+65,this.name.position.y-12,-1,"bullet",bulletCounter);
      bulletlst.push(b);
      bulletCounter += 1;
    }
  }



}
class Soldier1{
  constructor(name){
    this.x = 10;
    this.y = 100;
    this.name = createSprite(this.x,this.y);
    this.name.addAnimation('normal', 'soldier2.png');
    this.health = 100;
  }
  move(){
    this.name.velocity.x = 0
    if(platform.overlapPixel(this.name.position.x, this.name.position.y+25)==false){
      this.name.velocity.y += GRAVITY;
    }
    while(platform.overlapPixel(this.name.position.x, this.name.position.y+25)){
      this.name.position.y = this.name.position.y - 2;
      this.name.velocity.y = 0;
    }
    if (keyIsDown(65)){
      this.name.velocity.x = -5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = 5;
    }
  }
  shoot(){
    let shoot = false;
    for (let i=0;i<soldierlst.length;i++){
      if ((soldierlst[i].name.position.y > this.name.position.y-60)&&(soldierlst[i].name.position.y < this.name.position.y+60)){
        if ((soldierlst[i].name.position.x>this.name.position.x)&&(soldierlst[i].name.position.x-700<this.name.position.x)){
          shoot = true;
          //console.log("here")
        }
      }
    }
    if (shoot == false){
      for (let i=0;i<tanklst.length;i++){
        if ((tanklst[i].name.position.y > this.name.position.y-75)&&(tanklst[i].name.position.y < this.name.position.y+75)){
          if ((tanklst[i].name.position.x < this.name.position.x)&&(tanklst[i].name.position.x+700>this.name.position.x)){
            shoot = true;
            //console.log("tank")
          }
        }
      }
    }
    if ((shoot == true)&&(0==frameCount%50)){
      let b = new Bullet1(this.name.position.x+65,this.name.position.y-12,1,"bullet",bulletCounter);
      bullet1lst.push(b);
      bulletCounter += 1;
    }
  }
}

class Tank{
  constructor(name){
    this.x = 1000;
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
      this.name.position.y = this.name.position.y - 2;
      this.name.velocity.y = 0;
    }
    if (keyIsDown(65)){
      this.name.velocity.x = 5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = -5;
    }
  }
  shoot(){
    let shoot = false;
    for (let i=0;i<soldier1lst.length;i++){
      if ((soldier1lst[i].name.position.y > this.name.position.y-60)&&(soldier1lst[i].name.position.y < this.name.position.y+60)){
        if ((soldier1lst[i].name.position.x<this.name.position.x)&&(soldier1lst[i].name.position.x+700>this.name.position.x)){
          shoot = true;
        }
      }
    }
    if (shoot == false){
      for (let i=0;i<tank1lst.length;i++){
        if ((tank1lst[i].name.position.y > this.name.position.y-75)&&(tank1lst[i].name.position.y < this.name.position.y+75)){
          if ((tank1lst[i].name.position.x<this.name.position.x)&&(tank1lst[i].name.position.x+700>this.name.position.x)){
            shoot = true;
          }
        }
      }
    }
    if ((shoot == true)&&(0==frameCount%50)){
      let b = new Bullet(this.name.position.x-65,this.name.position.y-12,-1,"bullet",bulletCounter);
      bulletlst.push(b);
      bulletCounter += 1;
    }
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
      this.name.position.y = this.name.position.y - 2;
      this.name.velocity.y = 0;
    }
    if (keyIsDown(65)){
      this.name.velocity.x = -5;
    }
    if (keyIsDown(68)){
      this.name.velocity.x = 5;
    }
  }
  shoot(){
    let shoot = false;
    for (let i=0;i<soldierlst.length;i++){
      if ((soldierlst[i].name.position.y > this.name.position.y-60)&&(soldierlst[i].name.position.y < this.name.position.y+60)){
        if ((soldierlst[i].name.position.x>this.name.position.x)&&(soldierlst[i].name.position.x-700<this.name.position.x)){
          shoot = true;
          //console.log("here")
        }
      }
    }
    if (shoot == false){
      for (let i=0;i<tanklst.length;i++){
        if ((tanklst[i].name.position.y > this.name.position.y-75)&&(tanklst[i].name.position.y < this.name.position.y+75)){
          if ((tanklst[i].name.position.x>this.name.position.x)&&(tanklst[i].name.position.x-700<this.name.position.x)){
            shoot = true;
            //console.log("tank")
          }
        }
      }
    }
    if ((shoot == true)&&(0==frameCount%50)){
      let b = new Bullet1(this.name.position.x+65,this.name.position.y-12,1,"bullet",bulletCounter);
      bullet1lst.push(b);
      bulletCounter += 1;
    }
  }
}
class Bullet{
  constructor(x,y,direction,name, number){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.name = createSprite(this.x,this.y,10,5);
    this.name.velocity.y = 0;
    this.name.life = 80;
    this.number = number;
  }
  draw(){
    this.name.velocity.x = 10 * this.direction;
    this.name.velocity.y += 1/50*GRAVITY;
    if (platform.overlapPixel(this.name.position.x, this.name.position.y-2.5)){
      this.name.life = 0;
    }
  }
}
class Bullet1{
  constructor(x,y,direction,name, number){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.name = createSprite(this.x,this.y,10,5);
    this.name.velocity.y = 0;
    this.name.life = 80;
    this.number = number;
  }
  draw(){
    this.name.velocity.x = 10 * this.direction;
    this.name.velocity.y += 1/50*GRAVITY;
    if (platform.overlapPixel(this.name.position.x, this.name.position.y-2.5)){
      this.name.life = 0;
    }
  }
}
