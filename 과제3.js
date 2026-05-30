/*********************************************
  1. mouse:
		- 마우스 버튼 클릭시 입술이감탄하는 입 모양으로 바뀜
	2. keyboard:
		- 키보드의 m or M 키를 누르면 영화관 배경으로 세팅 및 3D 안경으로 
        - 키보드의 p or P 키를 누르면 하단에 팝콘 생성
        - 키보드의 r or R 키를 누르면 모든 효과 
***********************************************/	
let modeM = false;
let modeP = false;
function setup() {
  createCanvas(400, 600);
  textSize(20);
  fill(0);
}
function draw() {
  background(modeM ? 40 : 200);
  if (modeM) {
    drawCinemaLight();
  }
  if (modeM) {
    noStroke();
    fill(128, 0, 32);
    rect(30,160, 340, 500, 60);
  }
  noStroke();//옷
  fill(230);
  quad(200,430,200,600,0,600,0,465);
  quad(200,430,400,465,400,600,200,600);
  fill(250,232,220);
  ellipse(85,267,40,60);
  ellipse(315,267,40,60);
  fill(240,229,216);
  quad(150,330,250,330,260,460,140,460);
  arc(200,455,130,70,radians(-11),radians(191));
  fill(250,239,226);//얼굴
  ellipse(200,250,230,300);
  stroke(50);//점
  strokeWeight(2);
  point(145,290);
  fill(255);//눈
  noStroke();
  ellipse(150,265,50,35);
  ellipse(250,265,50,35);
  fill(20);
  ellipse(150,265,25,30);
  ellipse(250,265,25,30);
  fill(255);
  ellipse(148,260,5,5);
  ellipse(245,260,5,5);
  stroke(0);//눈썹
  strokeWeight(7);
  line(175,235,125,235);
  line(225,235,275,235);
  stroke(60);//코
  strokeWeight(1);
  line(197,250,187,320);
  line(187,320,200,328);
  strokeWeight(3);
  point(204,320);
  noFill();//입술, 감탄하는 입 모양
  if (mouseIsPressed) {
    fill(255,183,183);
    noStroke();
    ellipse(200,360,40,50);
  } else {
    stroke(255,183,183);
    strokeWeight(3);
    bezier(160,355,175,375,225,375,240,355);
  }
  beginShape();//머리
  noStroke();
  fill(30);
  vertex(215,90);
  bezierVertex(55,70,70,220,90,260);
  bezierVertex(240,190,140,70,215,90);
  vertex(185,90);
  bezierVertex(330,80,320,180,310,270);
  bezierVertex(330,250,150,190,185,90);
  vertex(200,110);
  bezierVertex(100,90,150,200,120,265);
  bezierVertex(200,190,230,200,200,110);
  vertex(200,110);
  bezierVertex(130,90,190,200,170,260);
  bezierVertex(230,200,200,200,200,110);
  vertex(200,110);
  bezierVertex(130,90,190,230,250,260);
  bezierVertex(250,170,270,190,200,110);
  endShape();
  fill(30);
  quad(170,90,215,90,270,225,200,190);
  noFill();//안경
  stroke(modeM ? 80 : 0);
  strokeWeight(6);
  if (modeM) {//영화관 배경 및 3D 안경
    fill(10);
    rect(110,250,75,50,10,7,30,30);
    rect(210,250,75,50,7,10,30,30);
    noFill();
    stroke(80);
    strokeWeight(6);
    rect(110,250,75,50,10,7,30,30);
    rect(210,250,75,50,7,10,30,30);
  } else {
    rect(110,250,75,50,10,7,30,30);
    rect(210,250,75,50,7,10,30,30);
  }
  stroke(modeM ? 80 : 0);
  strokeWeight(6);
  line(185,255,210,255);
  line(110,251,87,245);
  line(285,251,308,245);
  noStroke();
  fill(255);
  arc(310,515,50,50,radians(90),radians(360));
  arc(310,555,50,50,radians(-90),radians(180));
  fill(230);
  ellipse(310,515,30,30);
  ellipse(310,555,30,30);
  if (modeP) {//팝콘 생성
    drawPopcorn();
  }
}
function drawCinemaLight() {//영화관 빛
  noStroke();
  fill(255, 240, 200, 30);
  rect(0, 0, width, 40);
  fill(255, 240, 200, 20);
  rect(0, 40, width, 40);
  fill(255, 240, 200, 10);
  rect(0, 80, width, 40);
  fill(255, 240, 200, 15);
  ellipse(width/2, 0, 200, 80);
}
function drawPopcorn() {
  let cx = 200, cy = 600;
  fill(220,60,60);
  noStroke();
  rect(cx-55, cy-80, 110, 100, 0, 0, 6, 6);
  stroke(180,40,40);
  strokeWeight(3);
  line(cx-18, cy-80, cx-18, cy+20);
  line(cx+18, cy-80, cx+18, cy+20);
  noStroke();
  fill(255,220,50);
  ellipse(cx-40, cy-105, 52, 46);
  ellipse(cx-15, cy-115, 54, 48);
  ellipse(cx+15, cy-118, 54, 48);
  ellipse(cx+40, cy-105, 52, 46);
  ellipse(cx-55, cy-92,  44, 40);
  ellipse(cx+55, cy-92,  44, 40);
  ellipse(cx-30, cy-130, 48, 44);
  ellipse(cx+5,  cy-138, 52, 46);
  ellipse(cx+35, cy-128, 48, 44);
  ellipse(cx-12, cy-158, 44, 40);
  ellipse(cx+18, cy-152, 44, 40);
  fill(255,245,170);
  ellipse(cx-44, cy-112, 22, 18);
  ellipse(cx-13, cy-122, 22, 18);
  ellipse(cx+17, cy-125, 22, 18);
  ellipse(cx+42, cy-112, 22, 18);
  ellipse(cx-28, cy-138, 20, 16);
  ellipse(cx+8,  cy-146, 20, 16);
  ellipse(cx-10, cy-165, 18, 14);
  fill(255,80,80);
  ellipse(cx-50, cy-98,  16, 14);
  ellipse(cx+22, cy-108, 14, 12);
  fill(255,160,30);
  ellipse(cx+50, cy-100, 14, 12);
  ellipse(cx-5,  cy-145, 14, 12);
  fill(220,60,60);
  noStroke();
  rect(cx-55, cy-82, 110, 10);
}
function keyPressed() {//키 
  if (key === 'm' || key === 'M') { modeM = true; }
  if (key === 'p' || key === 'P') { modeP = true; }
  if (key === 'r' || key === 'R') { modeM = false; modeP = false; }
  if (key === 's') {
    saveGif('비주얼포트폴리오_과제3_20263064이유성', 9);
  }
}
