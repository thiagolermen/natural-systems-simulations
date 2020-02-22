// Thiago Sotoriva Lermen
// Physics
// Double Pendulum
// Based on: https://www.myphysicslab.com/pendulum/double-pendulum-en.html

const pi = 3.14159265359;

let graphics;

let inp_teta1;
let inp_teta2;
let inp_l1;
let inp_l2;
let inp_m1;
let inp_m2;



//Variables:

// To the first pendulum (above)
let l1 = 100; //length of rod 1(constant)
let m1 = 10; // mass of rod 1
let teta1 = pi/2; //angle that the rod 1 do with a normal straight (floor)
let teta1_v = 0;

// To the second pendulum (below)
let l2 = 120; // length of rod 2(constant)
let m2 = 10; // mass of rod 2
let teta2 = pi/2; //angle that the rod 2 do with a normal straight (floor)
let teta2_v = 0; //velocity that the teta2 angle has

let px2 = -1;
let py2 = -1;

let g = 1;


function setup() {
  createCanvas(600, 600);
  // inp_teta1 = createInput('teta1');
  // inp_teta2 = createInput('teta2');
  // inp_l1 = createInput('l1');
  // inp_l2 = createInput('l2');
  // inp_m1 = createInput('m1');
  // inp_m2 = createInput('m2');
  //
  // teta1 = inp_teta1.value();
  // teta2 = inp_teta2.value();
  // l1 = inp_l1.value();
  // l2 = inp_l2.value();
  // m1 = inp_m1.value();
  // m2 = inp_m2.value();

  // mousePressed();

  graphics = createGraphics(width, height);
  graphics.background(255);
  graphics.translate(300, 50);
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(graphics, 0, 0, width, height);

  let num1 = -g * (2 * m1 + m2) * sin(teta1);
  let num2 = -m2 * g * sin(teta1 - 2 * teta2);
  let num3 = -2 * sin(teta1 - teta2) * m2;
  let num4 = teta2_v * teta2_v * l2 + teta1_v * teta1_v * l1 * cos(teta1 - teta2);
  let den = l1 * (2 * m1 + m2 - m2 * cos(2 * teta1 - 2 * teta2));
  let teta1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(teta1 - teta2);
  num2 = teta1_v * teta1_v * l1 * (m1 + m2);
  num3 = g * (m1 + m2) * cos(teta1);
  num4 = teta2_v * teta2_v * l2 * m2 * cos(teta1 - teta2);
  den = l2 * (2 * m1 + m2 - m2 * cos(2 * teta1 - 2 * teta2));
  let teta2_a = (num1 * (num2 + num3 + num4)) / den;


  translate(300, 50);
  stroke(0);
  strokeWeight(2);
  //the ordered pair of the rod 1
  let x1 = l1 * sin(teta1);
  let y1 = l1 * cos(teta1);
  //the ordered pair of the rod 2
  let x2 = x1 + l2 * sin(teta2);
  let y2 = y1 + l2 * cos(teta2);

  line(0,0,x1,y1);
  fill(0);
  ellipse(x1, y1, m1, m1);

  line(x1,y1,x2,y2);
  fill(0);
  ellipse(x2, y2, m2, m2);

  teta1_v += teta1_a;
  teta2_v += teta2_a;
  teta1 += teta1_v;
  teta2 += teta2_v;

  graphics.stroke(0);
  if(frameCount > 1){
    graphics.fill(255);
    graphics.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}
