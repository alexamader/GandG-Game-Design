
let GRAVITY = 1
function setup() {
  createCanvas(1200,800);
  background("yellow");

  platform = createSprite(600,750);
  platform.addAnimation('normal', 'mountains.png');
  platform.debug = true;





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

  if (keyIsDown(LEFT_ARROW)){
    //sprite.velocity.x = -5;
    soldier.velocity.x = -5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    //sprite.velocity.x = 5;
    soldier.velocity.x = 5;
  }

  drawSprites();



}
