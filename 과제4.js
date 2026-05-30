//원본 좌표 
let r1x1=220, r1y1=120,  r1x2=300, r1y2=225,  r1x3=240, r1y3=200;
let r2x1=300, r2y1=220,  r2x2=400, r2y2=140,  r2x3=360, r2y3=210;
let g1x1=210, g1y1=190,  g1x2=250, g1y2=230,  g1x3=300, g1y3=225;
let g2x1=298, g2y1=223,  g2x2=390, g2y2=190,  g2x3=350, g2y3=230;

//상태 변수 
let r1cx, r1cy, r1vx, r1vy, r1va, r1angle, r1fallen, r1scale;
let r2cx, r2cy, r2vx, r2vy, r2va, r2angle, r2fallen, r2scale;
let g1cx, g1cy, g1vx, g1vy, g1va, g1angle, g1fallen, g1scale;
let g2cx, g2cy, g2vx, g2vy, g2va, g2angle, g2fallen, g2scale;

const FLOOR_Y = 370;

//초기화
function initLeaf(x1, y1, x2, y2, x3, y3) {
  return {
    cx:     (x1 + x2 + x3) / 3,
    cy:     (y1 + y2 + y3) / 3,
    vx:     random(-0.4, 0.4),
    vy:     0,
    va:     random(-0.02, 0.02),
    angle:  0,
    fallen: false,
    scale:  1
  };
}

//물리 업데이트
function updateLeaf(cx, cy, vx, vy, va, angle, fallen, sc,
                    x1, y1, x2, y2, x3, y3,
                    lp, progress) {

  let ocy    = (y1 + y2 + y3) / 3;
  let bottom = Math.max(y1, y2, y3) - ocy;
  let finalY = FLOOR_Y - bottom;

  if (!fallen && lp > 0) {
    vy    += 0.09 * lp;
    cx    += vx + sin(frameCount * 0.04 + vx * 10) * 0.3;
    cy    += vy;
    angle += va;

    if (cy >= finalY) {
      cx = cx; cy = finalY;
      vy = 0; vx = 0; va = 0;
      fallen = true;
    }
  }

  // 바닥 착지 후 서서히 축소
  if (fallen) {
    let sp = min((progress - 0.5) / 0.5, 1);
    if (sp > 0) sc = max(1 - sp * 0.8, 0.2);
  }

  return { cx, cy, vx, vy, va, angle, fallen, sc };
}

//도형 그리기 
function drawLeaf(cx, cy, angle, sc,
                  x1, y1, x2, y2, x3, y3,
                  fcol, useStroke) {

  let ocx = (x1 + x2 + x3) / 3;
  let ocy = (y1 + y2 + y3) / 3;

  push();
  translate(cx, cy);
  rotate(angle);
  scale(sc);
  fill(fcol);
  if (useStroke) { stroke(0); strokeWeight(1); } else { noStroke(); }
  triangle(x1-ocx, y1-ocy,  x2-ocx, y2-ocy,  x3-ocx, y3-ocy);
  pop();
}
function setup() {
  createCanvas(600, 400);

  let l;

  l = initLeaf(r1x1,r1y1, r1x2,r1y2, r1x3,r1y3);
  r1cx=l.cx; r1cy=l.cy; r1vx=l.vx; r1vy=l.vy;
  r1va=l.va; r1angle=l.angle; r1fallen=l.fallen; r1scale=l.scale;

  l = initLeaf(r2x1,r2y1, r2x2,r2y2, r2x3,r2y3);
  r2cx=l.cx; r2cy=l.cy; r2vx=l.vx; r2vy=l.vy;
  r2va=l.va; r2angle=l.angle; r2fallen=l.fallen; r2scale=l.scale;

  l = initLeaf(g1x1,g1y1, g1x2,g1y2, g1x3,g1y3);
  g1cx=l.cx; g1cy=l.cy; g1vx=l.vx; g1vy=l.vy;
  g1va=l.va; g1angle=l.angle; g1fallen=l.fallen; g1scale=l.scale;

  l = initLeaf(g2x1,g2y1, g2x2,g2y2, g2x3,g2y3);
  g2cx=l.cx; g2cy=l.cy; g2vx=l.vx; g2vy=l.vy;
  g2va=l.va; g2angle=l.angle; g2fallen=l.fallen; g2scale=l.scale;
}
function draw() {

  let t        = millis() / 1000;
  let progress = min(t / 5, 1);
  let lp       = max(0, (progress - 0.2) / 0.8);

  let moonX     = 550 + progress * 120;
  let moonY     = 50  + progress * 120;
  let moonAlpha = map(progress, 0.5, 1.0, 255, 0);

  // 하늘 색상 변화
  background(lerp(10,100,progress), lerp(10,170,progress), lerp(50,220,progress));

  // 건물
  noStroke();
  fill(80);
  quad(20,100, 190,100, 190,400, 20,400);
  quad(420,150, 550,150, 550,400, 420,400);
  quad(220,300, 360,300, 360,400, 220,400);
  fill(150);
  quad(0,350, 0,400, 600,400, 600,370);

  // 창문
  fill(247, 234, 110);
  quad(40,130,  70,130,  70,175,  40,175);
  quad(90,130, 120,130, 120,175,  90,175);
  quad(140,130, 170,130, 170,175, 140,175);
  quad(40,200,  70,200,  70,245,  40,245);
  quad(90,200, 120,200, 120,245,  90,245);
  quad(140,200, 170,200, 170,245, 140,245);
  quad(40,270,  70,270,  70,315,  40,315);
  quad(90,270, 120,270, 120,315,  90,315);
  quad(140,270, 170,270, 170,315, 140,315);
  quad(445,270, 475,270, 475,315, 445,315);
  quad(495,270, 525,270, 525,315, 495,315);
  quad(495,200, 525,200, 525,245, 495,245);
  quad(445,200, 475,200, 475,245, 445,245);

  // 줄기
  noStroke();
  fill(lerpColor(color(171,242,0), color(101,67,33), progress));
  quad(295,370, 300,375, 303,330, 301,333);
  quad(298,210, 302,200, 302,335, 300,333);  // 원본 좌표 복원

  // 장미 외곽
  stroke(0); strokeWeight(1); noFill();
  quad(250,85, 295,150, 295,215, 250,155);
  quad(298,150, 360,78, 357,170, 298,218);

  // 빨간 꽃잎
  fill(255, 36, 36); stroke(0); strokeWeight(1);
  quad(250,85,  295,150, 295,215, 250,155);   // 왼쪽 꽃잎
  quad(298,150, 360,78,  357,170, 298,218);   // 오른쪽 꽃잎
  triangle(267,105, 300,90,  300,95);
  triangle(300,90,  336,101, 300,95);
  triangle(270,110, 296,130, 296,149);
  triangle(297,130, 330,110, 297,149);
  triangle(270,108, 300,95,  290,110);
  triangle(300,96,  335,105, 310,110);
  triangle(272,109, 290,112, 298,128);
  triangle(310,112, 330,107, 299,126);

  // 중앙 꽃심
  fill(201, 0, 0); noStroke();
  quad(299,97, 308,111, 298,125, 292,110);

  //낙하
  let s;

  s = updateLeaf(r1cx,r1cy,r1vx,r1vy,r1va,r1angle,r1fallen,r1scale, r1x1,r1y1,r1x2,r1y2,r1x3,r1y3, lp,progress);
  r1cx=s.cx; r1cy=s.cy; r1vx=s.vx; r1vy=s.vy;
  r1va=s.va; r1angle=s.angle; r1fallen=s.fallen; r1scale=s.sc;

  s = updateLeaf(r2cx,r2cy,r2vx,r2vy,r2va,r2angle,r2fallen,r2scale, r2x1,r2y1,r2x2,r2y2,r2x3,r2y3, lp,progress);
  r2cx=s.cx; r2cy=s.cy; r2vx=s.vx; r2vy=s.vy;
  r2va=s.va; r2angle=s.angle; r2fallen=s.fallen; r2scale=s.sc;

  s = updateLeaf(g1cx,g1cy,g1vx,g1vy,g1va,g1angle,g1fallen,g1scale, g1x1,g1y1,g1x2,g1y2,g1x3,g1y3, lp,progress);
  g1cx=s.cx; g1cy=s.cy; g1vx=s.vx; g1vy=s.vy;
  g1va=s.va; g1angle=s.angle; g1fallen=s.fallen; g1scale=s.sc;

  s = updateLeaf(g2cx,g2cy,g2vx,g2vy,g2va,g2angle,g2fallen,g2scale, g2x1,g2y1,g2x2,g2y2,g2x3,g2y3, lp,progress);
  g2cx=s.cx; g2cy=s.cy; g2vx=s.vx; g2vy=s.vy;
  g2va=s.va; g2angle=s.angle; g2fallen=s.fallen; g2scale=s.sc;

  //색상 계산
  let brown      = color(101, 67, 33);
  let fadeAmount = min((progress - 0.85) / 0.15, 1);

  let r1col = (r1fallen && progress > 0.85) ? lerpColor(color(255,36,36),   brown, fadeAmount) : color(255,36,36);
  let r2col = (r2fallen && progress > 0.85) ? lerpColor(color(255,36,36),   brown, fadeAmount) : color(255,36,36);
  let g1col = (g1fallen && progress > 0.85) ? lerpColor(color(143,255,134), brown, fadeAmount) : color(143,255,134);
  let g2col = (g2fallen && progress > 0.85) ? lerpColor(color(143,255,134), brown, fadeAmount) : color(143,255,134);

  //낙엽 그리기 
  drawLeaf(r1cx,r1cy, r1angle,r1scale, r1x1,r1y1,r1x2,r1y2,r1x3,r1y3, r1col, true);
  drawLeaf(r2cx,r2cy, r2angle,r2scale, r2x1,r2y1,r2x2,r2y2,r2x3,r2y3, r2col, true);
  drawLeaf(g1cx,g1cy, g1angle,g1scale, g1x1,g1y1,g1x2,g1y2,g1x3,g1y3, g1col, false);
  drawLeaf(g2cx,g2cy, g2angle,g2scale, g2x1,g2y1,g2x2,g2y2,g2x3,g2y3, g2col, false);

  // 달
  fill(255, 223, 36, moonAlpha); noStroke();
  ellipse(moonX, moonY, 80);

  if (progress >= 1) noLoop();
}
//gif 저장
function keyPressed() {
  if (key === 's') {
    saveGif('비주얼포트폴리오_과제4_20263064이유성', 10);
  }
}