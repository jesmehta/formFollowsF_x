//Vera Molnar's chaotic slashes


let scl, row, col, pad;
let c1, c2;

function setup() {
  createCanvas(600,600);
  background(225);

  scl  = 15;
  row = height/scl;
  col = width/scl;
  pad = -0.5;                        //cell padding percentage

  // c2 = color(192,197,206);           //cool grey
  // c1 = color(52,61,70);              //dark grey

  c2 = color(247, 176, 91);           //mango
  c1 = color(31, 19, 0);              //dark brown


  rectMode(CENTER);
  // noStroke();
  fill(c1);
  stroke(c2);
  strokeWeight(scl*(1-pad)*0.05);
  generateNew();
}

function draw() {

}

function generateNew()
{
  background(c1);
  translate(scl/2,scl/2);

  for(let j = 0;j<col;j++)
  {
    for(let i=0;i<row;i++)
    {
      drawCell(i,j);
    }
  }
}

function drawCell(i,j)
{
  let k = floor(random(360)); //draw case
  let size = (scl*(1-pad))/2;

  push();
  translate(i*scl,j*scl);
  rotate(k/180*PI);
  line(-size,0,size,0);
  pop();
}

function mouseClicked()
{
  generateNew();
}
