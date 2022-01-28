//Vera Molnar's chaotic slashes
//with perlin noise threshold
//animated with perlin

//comment/uncomment line 46 to save frames

let scl, row, col, pad;
let c1, c2;
let k, kx, ky, k0, kz;
let threshold;

function setup() {
  createCanvas(600,600);
  background(225);
  frameRate(8);
  scl  = 15;
  row = height/scl;
  col = width/scl;
  pad = -2;                        //cell padding percentage

  // c2 = color(192,197,206);           //cool grey
  // c1 = color(52,61,70);              //dark grey

  c2 = color(247, 176, 91);           //mango
  c1 = color(31, 19, 0);              //dark brown

  k = 0.05;
  k0 = random(100);
  kx = k0;
  ky = k0;
  kz = k0;
  threshold = 0.6;

  rectMode(CENTER);
  // noStroke();
  fill(c1);
  stroke(c2);
  // strokeWeight(scl*(1-pad)*0.05);
  strokeWeight(0.7);
  generateNew();
}

function draw()
{
  generateNew();
  kz+=k*0.2;
  if(frameCount<3000)
  {
    // saveFile();            //uncomment to save series
  }
}

function generateNew()
{
  // k0 = random(100);
  kx = k0;
  ky = k0;

  background(c1);
  translate(scl/2,scl/2);

  for(let j = 0;j<col;j++)
  {
    for(let i=0;i<row;i++)
    {
      let p = noise(kx,ky,kz);
      if(p>=threshold)
      {
        drawCell(i,j);
      }
      kx+=k;
    }
    ky+=k;
    kx = k0;
  }
  ky = k0;

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
