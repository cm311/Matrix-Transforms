var dividingLine;
var square;
var upScale;
var fr;
var squareGrowing;
var squareShrinking;
var squareFlipping;
var squareFlippedX;

var squareW;
var newSquareW;
var newSquareY;
var newSquareX;

function setup() {
  createCanvas(900, 600);
  fr = 30;
  frameRate(fr);

  //The line that divides the controls on the right from the drawing
  //of the square/axes on the left
  dividingLine = 2*width/3;


  //The square width, in a separate variable...  cuz it causes it problems
  //when i want it to be in quadrant 1.
  squareW = 20;
  newSquareW = squareW;
  square = {x: dividingLine/2,
            y: height/2 - squareW};

  squareGrowing = false;
  squareShrinking = false;
  squareFlipping = false;
  squareFlippedX = false;

  upScale = createButton('x 2');
  upScale.position(dividingLine + 10, 80);
  upScale.size(80, 30);
  upScale.mousePressed(scaleSquare);

  downScale = createButton('/ 2');
  downScale.position(dividingLine + 10, 140);
  downScale.size(80, 30);
  downScale.mousePressed(downscaleSquare);

  flipX = createButton('Flip around X axis');
  flipX.position(dividingLine + 10, 200);
  flipX.size(140, 30);
  flipX.mousePressed(flipXAxis);

  flipY = createButton('Flip around Y axis');
  flipY.position(dividingLine + 10, 260);
  flipY.size(140, 30);
  flipY.mousePressed(flipYAxis);
}

function draw() {
  background(0);
  drawAxes();
  drawSquare();
  stroke(30);
  strokeWeight(1);
  line(dividingLine, 0, dividingLine, height);
  line(dividingLine, 60, width, 60);

  textSize(32);
  noStroke();
  fill(220, 220, 200);
  text("Controls", dividingLine + 10, 40);
}

function drawAxes() {
  strokeWeight(1);
  stroke(150);

  //Draws the x axis
  line(10, height/2, dividingLine - 10, height/2);

  //Draws the y axis
  line(dividingLine/2, 10, dividingLine/2, height - 10);
}

function drawSquare() {
  strokeWeight(2);
  stroke(20, 120, 200);
  fill(220, 220, 220);
  rect(square.x, square.y, squareW, squareW);
}

//Set so that the square scale animation happens in draw.
function scaleSquare() {
  newSquareW *= 2;
  squareW = newSquareW;
}

function downscaleSquare() {
  newSquareW /= 2;
  squareW = newSquareW;
}

function flipXAxis() {
  squareFlipping = true;

  if(squareFlippedX) {
    squareFlippedX = false;
    newSquareY = square.y - squareW;
  }
  else {
    squareFlippedX = true;
    newSquareY = square.y + squareW;
  }

  square.y = newSquareY;
}

function flipYAxis() {

}
