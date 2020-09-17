//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;
let fourthBall;
let cloud1;
let cloud2;
let cloud3;
let cloud4;
let cloud5;
let cloud6;

function setup() {
  createCanvas(800, 400);
  b = new Jump(0, 100,"red",1); //make a new ball from the Ball class and call it b.
  anotherBall = new Jump(200,20,"yellow",5);
  thirdBall = new Jump(100,150, "orange",4);
  fourthBall = new Jump(200,300, "purple", 2);
  cloud1 = new Clouds(75,65);
  cloud2 = new Clouds(10,75);
  cloud3 = new Clouds(500,75);
  cloud4 = new Clouds(600,80);
  cloud5 = new Clouds(277,75);
  cloud6 = new Clouds(789,70);
}


function draw(){
	background("blue");
    b.draw(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.move(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.draw();
    anotherBall.move();
    thirdBall.draw();
    thirdBall.move();
    fourthBall.draw();
    fourthBall.move();
    cloud1.draw()
    cloud1.move()
    cloud2.draw()
    cloud2.move()
    cloud3.draw()
    cloud3.move()
    cloud4.draw()
    cloud4.move()
    cloud5.draw()
    cloud5.move()
    cloud6.draw()
    cloud6.move()

}

class Clouds {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.movex = "True"
  }
  draw(){
    fill("white");
    ellipse(this.x,this.y,100,10);
  }
  move(){
    if (this.x >= 800){
      this.movex = "False"
    }
    else if (this.x <= 0){
      this.movex = "True"
    }
    if (this.movex == "True"){
      this.x += 2
    }
    else {
      this.x = this.x-2
    }
  }
}

class Jump {

	constructor(x,y,color,strokeWeight){
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.strokeWeight = strokeWeight;
        this.width = random(5,50);
        this.height = random(5,50)
        this.movex = "True"
        this.movey = "False"
	}
	draw(){
    		stroke(0);
    		fill(this.color);
        strokeWeight(this.strokeWeight)
		    ellipse(this.x,this.y,this.width,this.height);
	}
	move(){
		if (this.x >= 800){
      this.movex = "False"
    }
    else if (this.x <= 0){
      this.movex = "True"
    }
    if (this.movex == "True"){
      this.x += 2
    }
    else {
      this.x = this.x-2
    }
    if (this.y >= 400){
      this.movey = "False"
    }
    else if (this.y <= 0){
      this.movey = "True"
    }
    if (this.movey == "True"){
      this.y += 2
    }
    else {
      this.y = this.y-2
    }

	}
}
