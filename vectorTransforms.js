var squareVector;
var origin;
var dividingLine;
var sq;

function setup() {
  createCanvas(900, 600);

  dividingLine = 2*width/3;
  origin = [dividingLine/2, height/2];

  //vector, first vale is width, second is height.
  squareVector = [20, 20];

  //our illustrious square
  sq = {x1: origin[0],
            w: squareVector[0],
            y1: origin[1],
            h: squareVector[1]};
  createButtons();
}

function draw() {
  background(0);
  drawAxes();
  drawDividingLines();
  drawSquare();
}

function drawAxes() {
  strokeWeight(1);
  stroke(150);

  //Draws the x axis
  line(10, height/2, dividingLine - 10, height/2);

  //Draws the y axis
  line(dividingLine/2, 10, dividingLine/2, height - 10);
}

function drawDividingLines() {
  //Draw the line dividing controls and plot
  stroke(30);
  strokeWeight(1);
  line(dividingLine, 0, dividingLine, height);

  //Draw the controls on the right
  line(dividingLine, 60, width, 60);
  textSize(32);
  noStroke();
  fill(220, 220, 200);
  text("Controls", dividingLine + 10, 40);
}

function drawSquare() {
  stroke(60, 110, 160);
  fill(120, 140, 200);
  rect(sq.x1, sq.y1, sq.w, sq.h);
}

function createButtons() {
  upScale = createButton('x 2');
  upScale.position(dividingLine + 10, 80);
  upScale.size(80, 30);
  upScale.mousePressed(scaleSquare);

  downScale = createButton('/ 2');
  downScale.position(dividingLine + 10, 140);
  downScale.size(80, 30);
  downScale.mousePressed(downscaleSquare);
}

function scaleSquare() {
  var scaleMatrix = [[1.1, 0], [0, 1]];
  sqMatrix = [[sq.x1, sq.y1],
              [sq.w, sq.h]];
  console.log(squareVector);
  squareVector = multiplyMatrices(scaleMatrix, squareVector);
}

function downscaleSquare() {

}

function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
