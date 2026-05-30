function setup() {
  createCanvas(400, 600);
   textSize(20);
  fill(0);
}
 
function draw() {
  background(200);
  beginShape();//옷
  noStroke();
  fill(230);
  quad(200,430, 200, 600, 0, 600, 0, 465);
  quad(200, 430, 400, 465, 400, 600, 200, 600);
  fill(250, 232, 220);
  ellipse(85,267, 40, 60);
  ellipse(315, 267, 40, 60);
  noStroke();//목
  fill(240, 229, 216);
  quad(150, 330, 250, 330, 260, 460, 140, 460,);
  arc(200, 455, 130, 70, radians(-11), radians(191));
  noStroke();//얼굴
  fill(250, 239, 226);
  ellipse(200, 250, 230, 300);
  stroke(50);
  strokeWeight(2);//점
  point(145, 290);
  fill(255);//눈
  noStroke(0);
  ellipse(150, 265, 50, 35);
  ellipse(250, 265, 50, 35);
  fill(20)
  ellipse(150, 265, 25, 30);
  ellipse(250, 265, 25, 30);
  fill(255);
  ellipse(148, 260, 5, 5);
  ellipse(245, 260, 5, 5);
   stroke(0);//눈썹
  strokeWeight(7);
  line(175, 235,125, 235);
  line(225, 235, 275, 235)
  stroke(60);//코
  strokeWeight(1);
  line(197, 250, 187, 320);
  line(187, 320, 200, 328);
  strokeWeight(3);
  point(204, 320);
  noFill();//입술
  stroke(255, 183, 183);
  strokeWeight(3);
  bezier(160, 355, 175, 375, 225, 375, 240, 355);
  beginShape();//머리
  noStroke();
  fill(30);
  vertex(215, 90);
  bezierVertex(55, 70, 70, 220, 90, 260);
  bezierVertex(240,190, 140, 70, 215, 90);
  vertex(185, 90);
  bezierVertex(330, 80, 320, 180, 310, 270);
  bezierVertex(330, 250, 150, 190, 185, 90);
  vertex(200, 110);
  bezierVertex(100, 90, 150, 200, 120, 265);
  bezierVertex(200, 190, 230, 200, 200, 110);
   vertex(200, 110);
  bezierVertex(130, 90, 190, 200, 170, 260);
  bezierVertex(230, 200, 200, 200, 200, 110);
   vertex(200, 110);
  bezierVertex(130, 90, 190, 230, 250, 260);
  bezierVertex(250, 170, 270, 190, 200, 110);
   endShape();
  fill(30);
  quad(170, 90, 215, 90, 270, 225, 200, 190);
  noFill();//안경
  stroke(0);
  strokeWeight(6);
  rect(110, 250, 75, 50, 10, 7, 30, 30);
  rect(210, 250, 75, 50, 7, 10, 30, 30);
  line(185, 255, 210, 255);
  line(110, 251, 87, 245);
  line(285, 251, 308, 245);
  noStroke();
  fill(255);
  arc(310, 515, 50, 50, radians(90), radians(360));
  arc(310, 555, 50, 50, radians(-90), radians(180));
  fill(230);
  ellipse(310, 515, 30, 30);
  ellipse(310, 555, 30, 30);
}

 