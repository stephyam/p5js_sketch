var r1;
var g1;
var b1;

var r2;
var g2;
var b2;

var r3;
var g3;
var b3;

function setup() {
  resizeCanvas(500,500);
  background(240);
  r1 = 255;
  g1 = 204;
  b1 = 0;

  r2 = 216;
  g2 =42;
  b2 = 42;

  r3 = 47;
  g3 =62;
  b3 = 160;
}  

function draw () {
  noStroke(0);
c = color(r1, g1, b1);
fill(c);
rect(398, 67, 500, 150);

  noStroke(0);
c = color(r2, g2, b2);
fill(c);
rect(250, 216, 148, 160);

  noStroke(0);
c = color(r3, g3, b3);
fill(c);
rect(37, 377, 153, 73);


  strokeWeight(8);  // Thicker
line(20, 40, 80, 40);
  
   stroke(9);
   line(0,67,500,67);
   stroke(9);
   line(37,3,37,500);
   stroke(9);
   line(190,2,190,500);
   stroke(9);
   line(250,0,250,500);
   stroke(9);
   line(397,3,397,500);
   stroke(9);
   line(190,215,500,215);
   stroke(9);
   line(0,450,250,450);
   stroke(9);
   line(0,376,500,376);
   stroke(9);
   

   
}
 
 
function mousePressed() {

if((mouseX>=398&&mouseX<=500&&mouseY>=67&&mouseY<=150) || (mouseX>=250&&mouseX<=398&&mouseY>=216&&mouseY<=376) ||
   (mouseX>=37&&mouseX<=190&&mouseY>=377&&mouseY<=450)){
  
 	
 	r1 = random(255);
  	g1 = random(255);
  	b1 = random(255);

  	r2 = random(255);
  	g2 = random(255);
  	b2 = random(255);

  	r3 = random(255);
  	g3 = random(255);
  	b3 = random(255);
}
 

  return false;

}