ballLst = []
rectLst = []
function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220,123,432);

    for (x=0;x<ballLst.length;x++){
      ballLst[x].draw()
      ballLst[x].grow()
    }
    for (x=0;x<rectLst.length;x++){
      rectLst[x].draw()
      rectLst[x].grow()
    }



}


class Rectangle {
  constructor(x,y,a,b) {
    this.x = x
    this.y = y
    this.a = a
    this.b = b
    this.color = [random(255),random(255),random(255)]
    this.pulse = "true"
    this.counter = 0
  }
  draw(){
    fill(this.color[0],this.color[1],this.color[2]);
    rect(this.x,this.y,this.a,this.b);
  }
  grow(){

    if (this.counter >= 40){
      this.pulse = "false"
      this.counter = 0
    } else if (this.counter <= -40) {
      this.pulse = "true"
      this.counter = 0
    }

    if (this.pulse == "true"){

      this.a += random(2,4)
      this.b += random(2,4)
      this.counter++
    } else {
      this.a = this.a - random(2,4);
      this.b = this.b - random(2,4);
      this.counter = this.counter - 1
    }
  }

}
class Ball {
  constructor(x,y,a,b) {
    this.x = x
    this.y = y
    this.a = a
    this.b = b
    this.color = [random(255),random(255),random(255)]
    this.pulse = "true"
    this.counter = 0
    }
  draw(){
    fill(this.color[0],this.color[1],this.color[2]);
    ellipse(this.x,this.y,this.a,this.b);
  }
  grow(){

    if (this.counter >= 40){
      this.pulse = "false"
      this.counter = 0
    } else if (this.counter <= -40) {
      this.pulse = "true"
      this.counter = 0
    }

    if (this.pulse == "true"){

      this.a += random(2,4)
      this.b += random(2,4)
      this.counter++
    } else {
      this.a = this.a - random(2,4);
      this.b = this.b - random(2,4);
      this.counter = this.counter - 1
    }
  }
}
function keyPressed() {
  if (keyCode == UP_ARROW){
    let b = new Ball(random(800),random(400),random(50),random(50));
    ballLst.push(b);
  }
  if (keyCode == DOWN_ARROW){
    let r = new Rectangle(random(800),random(400),random(50),random(50));
    rectLst.push(r);
  }

}
