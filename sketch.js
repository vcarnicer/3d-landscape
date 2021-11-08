var cols, rows;
var scl = 20;
var w = 1500;
var h = 1080;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(1920, 1080, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; 
    }
  }
}

function draw() {

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }


  background(255);
  translate(0, 50);
  rotateX(PI / 2.5);
  translate(-w / 2, -h / 3);
  for (var y = 0; y < rows - 1; y++) {
    strokeWeight(3);
    stroke("#00BEDD");
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      fill("#FFFFFF");
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();    
  }
}