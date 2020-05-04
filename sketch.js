
let colX = 0;
let colY = 0;
let colZ = 0;
let rano = 0;
let ran = 0;
let diag = {
  x : 0,
  y : 0,
  s : 100
};
let speed = 1;
let speedY = 1;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  background(0);  
}


function draw() {
  ran = random(0,250);
  colX = map(mouseX,0,width,0,255);
  colY = map(mouseY,0,height,0,255);
  colZ = map(mouseX,0,height,255,0);
  fill(colZ, colY, colX, 180);
  noStroke();
  rectMode(RADIUS)
  rect(diag.x, windowHeight/2, 1, diag.y); 
  diag.y = diag.y+speedY;
  diag.x = diag.x+speed;
 

  fill(diag.y, mouseX, mouseY);
  noStroke();
  rectMode(RADIUS);
  rect(0, windowHeight/2, diag.x, 1); 

 if (diag.x>width || diag.x<0){
  speed = speed * -1;
 } 

 if (diag.y>height/2 || diag.y<=0){
   speedY = speedY * -1
 };
//  if (diag.y<=0){
//   speedY = 1
// };

  
  // extraCanvas.strokeWeight(1);
  // extraCanvas.stroke(5, 233, 120);
  // extraCanvas.line(0,0,windowWidth,windowHeight);
  // extraCanvas.line(windowWidth,0,0,windowHeight);

    
};


