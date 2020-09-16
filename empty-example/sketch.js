function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++){
    if ((i%2) == 0){
      for (let x = 0; x<4;x++){
        fill(23,143,87);
       if (x%2 == 0){
         fill(150,100,200);
       }
        ellipse(50,x*100+50,50,50)

      }
    }
    else {
     for (let x = 0; x<5;x++){
       fill(220,5,134);
       if (x%2 == 0){
         fill(123,23,195);
       }
       ellipse(50,x*100,50,50)
      }
    }
    translate(50,0);
  }
}

function draw() {

}
