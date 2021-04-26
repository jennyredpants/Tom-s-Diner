var x;
var y;

function setup() {
  createCanvas(800, 600);
angleMode(DEGREES);
x = random(450, 750);
y = random(50, 150);
}

function draw() {
  background('#B4B0D6');

//"doo, doo, doo, doo, doo, doodoo, doo"
fill(random(0,150));
arc(400,275, 100,100, 90,270);
fill(random(0,150));
arc(400,325, 100,100, 270,90);  
  
//upper "window"
fill(255);
quad(375,75, 425,25, 425,175, 375,125);
line(400,50, 400,150);
line(375,100, 425,100);
  
//lower "window"
fill(255);
quad(375,425, 425,475, 425,525, 375,575);
line(400,450, 400,550);
line(375,500, 425,500);
  
//"watchful light"
fill('#D9B196');
ellipse(150,100, 150,150);
fill(255);
arc(225,100, 75,75, 105,255);
  
//"watchful coffee"
fill('#8C7668');
ellipse(225,150, 75,75);
fill(255);
arc(262.5,150, 37.5,37.5, 105,255);
  
//"looking over the shoulder"
fill('#648C61');
rect(537.5,425, 75,150);
fill('#B1DAAD');
rect(612.5,400, 75,150);
  
//"woman on the outside"
fill('#58275C');
triangle(200,400, 250,550, 150,550);
fill('#A579A8');
triangle(200,445, 225,535, 175,535);
fill('#D79EDB');
triangle(200,490, 210,520, 190,520);
  
//"big kiss" (moves freely within second quadrant)
line(x,y-25, x,y+25);
line(x-25,y, x+25,y);
  
//"little kiss" (must meet with "big kiss")
line(mouseX,mouseY-10, mouseX,mouseY+10);
line(mouseX-10,mouseY, mouseX+10,mouseY);

}