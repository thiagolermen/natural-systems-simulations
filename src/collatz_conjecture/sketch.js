var val = 2;
var inp;


function setup() {
  createCanvas(800, 600);
  background(0);
  inp = createInput();
  button = createButton('submit');
  button.mousePressed(updateValue);
  makeCollatz();
}

function makeCollatz(){
  background(0);
  for(let i = 1;i < val;i++){
    let sequence = [];
    let n = i;
    do{
      sequence.push(n);
      n = collatz(n);
    }while(n != 1);
    sequence.push(1);
    sequence.reverse();
    
    let len = 5;
    let angle = 0.15;
    resetMatrix();
    translate(width/2, height);
    for(let j = 0;j < sequence.length; j++){
      let value = sequence[j];
      if(value % 2 == 0){
        rotate(angle);
      }else{
        rotate(-angle);
      }
      strokeWeight(2);
      stroke(255, 10);
      line(0,0,0, -len);
      translate(0, -len);
    }
  }
}


function updateValue(){
  val = int(inp.value());
  inp.value('');
  makeCollatz()
}

function collatz(n){
  if(n % 2){
  // odd
  return (3 * n + 1)/2;
  }else{
  // even
  return n/2;
  }
}




