//Pacman p = [10];

var x = 200;
var y = 400;
var d = 20;

var p;

function setup() {
  createCanvas(800, 600);
  p = new Pacman(10);
}

function draw() {
  background(120);
  fill(255, 0, 0);
  Pacman();
}

function Pacman() {
  this.x = xPos;
  this.y = yPos;
  this.d = tempD;

  this.display = function() {
    ellipseMode(CENTER);
    fill(255, 0, 0, 100);
    ellipse(xPos, yPos, tempD, tempD);
  }
}
