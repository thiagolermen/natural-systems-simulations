// Thiago Sotoriva Lermen
// Mathematics
// Maurer rose
// Based on: https://en.wikipedia.org/wiki/Maurer_rose

var d = 0 ;
var n = 0;
var sliderD;
var sliderN;

function setup() {
  createCanvas(500, 500);
  sliderD = createSlider(1, 180, 1);
  sliderN = createSlider(0, 100, 1);
  sliderD.input(draw);
  sliderN.input(draw);
  angleMode(DEGREES);
}

function draw() {
  d = sliderD.value();
  n = sliderN.value();
  background(100, 100, 100);
  text('d = ' + d, 80, 490);
  text('n = ' + n, 260, 490);
  translate(width/2, height/2);
  stroke(255);
  
  noFill();
  beginShape();
  strokeWeight(1);
  for(let teta=0;teta<361;teta++){
    let k = teta * d;
    let r = 200* sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape(CLOSE);


}

