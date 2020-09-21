//create an empty array called balls
let balls = [];
let enemyBalls = [];
let me;
let enemy;
let winner = "nobody";

function setup() {
  createCanvas(500, 400);


  me = new Avatar(width/2, 400, 3, "blue");
  enemy = new Enemy(width/2, 100, 3, "red");

}

function draw(){
	background(220);

  me.drawMe();
  me.moveMe();

  enemy.drawMe();
  enemy.moveMe();
  if (frameCount % 50 == 0) {
      let  b = new Ball(width, random(0,height), random(0.7,5), random(-3,3));
      balls.push(b);
      let e = new EnemeyBall(width, random(0,height), random(0.7,5), random(-3,3));
      enemyBalls.push(e)
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }
  for (let i = 0; i < enemyBalls.length; i++) {
  	 	     enemyBalls[i].drawBall();
         	 enemyBalls[i].moveBall();
           enemyBalls[i].bounceBall();
  	 }
     if (winner == "enemy"){
       fill("red");
       rect(0,0,1000,1000);
       enemy.x = 10000000
       me.x = 10000000
     }
     if (winner == 1000) {
       fill("blue");
       rect(0,0,1000,1000);
       enemy.x = 10000000
       me.x = 10000000
     }

}

//avatar class
class Avatar {
	constructor(x,y, speed, fill){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.fill = fill;
	}
	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill(this.fill);
		    ellipse(this.x,this.y,20,20);
	}
	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
    }
	}
  die(){
    winner = "enemy";
  }
}
class Enemy {
	constructor(x,y, speed, fill){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.fill = fill;
	}
	drawMe(){  // draw the running person
    		stroke("orange");
        strokeWeight(3);
    		fill(this.fill);
		    ellipse(this.x,this.y,20,20);
	}
	moveMe(){
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }
    if (keyIsDown(83)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(68)) {
        this.x += this.speed;
    }
    if (keyIsDown(65)) {
        this.x -= this.speed;
    }
	}
  die(){
    winner = 1000;
  }
}

//ball class from which to create new balls with similar properties.
class Ball {
	constructor(x,y, xspeed, yspeed){
		this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
	}
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("blue");
		  ellipse(this.x,this.y,10,10);
	}
	moveBall(){
		this.x = this.x - this.xspeed;
		this.y = this.y + this.yspeed;
	}
  	bounceBall(){
    		if (this.x >= me.x-20 && this.x <= me.x+20 && this.y > me.y-20 && this.y < me.y+20){

            this.xspeed = -this.xspeed * random(.5,2);
            this.yspeed = -this.yspeed * random(.5,2);
    		}
        if (this.x >= enemy.x-20 && this.x <= enemy.x+20 && this.y > enemy.y-20 && this.y < enemy.y+20){
          enemy.die();
        }
  	}

}
class EnemeyBall {
	constructor(x,y, xspeed, yspeed){
		this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
	}
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}
	moveBall(){
		this.x = this.x - this.xspeed;
		this.y = this.y + this.yspeed;
	}
  	bounceBall(){
    		if (this.x >= enemy.x-20 && this.x <= enemy.x+20 && this.y > enemy.y-20 && this.y < enemy.y+20){

            this.xspeed = -this.xspeed * random(.5,2);
            this.yspeed = -this.yspeed * random(.5,2);
    		}
        if (this.x >= me.x-20 && this.x <= me.x+20 && this.y > me.y-20 && this.y < me.y+20){
          me.die();
    		}
  	}

}
