//basic square grid with squares offset randomly by a ranged amount

let scl, row, col, pad;
let offset, offSetFactor;


function setup() {
  createCanvas(600,600);
  background(225);

  scl  = 50;
  row = height/scl;
  col = width/scl;
  pad = 2;

  offSetFactor = 0.1;
  offset = scl*offSetFactor;


  rectMode(CENTER);
  noStroke();
  fill(0,128);

  generateNew();
}

function draw() {

}

function generateNew()
{
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
  let xOff = random(-offset,offset);
  let yOff = random(-offset,offset);

  push();
  translate(i*scl+xOff,j*scl+yOff);

  rect(0,0,scl,scl);
  // rect(0,0,scl-offset,scl-offset);
  // rect(0,0,scl-offset/2,scl-offset/2);
  pop();
}

function mouseClicked()
{
  background(255);
  generateNew();
}
