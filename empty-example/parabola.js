
let GRAVITY = 1
function setup() {
  createCanvas(2000,800);
  background("yellow");

  platform = createSprite(1000,750);
  platform.addAnimation('normal', 'mountains.png');
  platform.debug = true;



  tank = createSprite(700,100);
  tank.addAnimation('normal', 'tank.png');

  soldier = createSprite(500,100);
  soldier.addAnimation('normal', 'soldier2.png');


  drawSprites();
}

function draw() {
  background("yellow");

  soldier.velocity.x = 0
  if(platform.overlapPixel(soldier.position.x, soldier.position.y+25)==false){
    soldier.velocity.y += GRAVITY;
  }
  while(platform.overlapPixel(soldier.position.x, soldier.position.y+25)){
    soldier.position.y--;
    soldier.velocity.y = 0;
  }

  tank.velocity.x = 0;
  if(platform.overlapPixel(tank.position.x, tank.position.y+25)==false){
    tank.velocity.y += GRAVITY;
  }
  while(platform.overlapPixel(tank.position.x, tank.position.y+25)){
    tank.position.y--;
    tank.velocity.y = 0;
  }

  if (keyIsDown(65)){
    //sprite.velocity.x = -5;
    soldier.velocity.x = -5;
    tank.velocity.x = -5;
  }
  if (keyIsDown(68)){
    //sprite.velocity.x = 5;
    soldier.velocity.x = 5;
    tank.velocity.x = 5;
  }

  drawSprites();



}
