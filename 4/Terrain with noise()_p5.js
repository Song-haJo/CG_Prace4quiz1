//4. terrian 관련 코딩
//JavaScript에서 2D에 noise() 값 넣기


function setup() {
  createCanvas(800, 800);
  noStroke();
  background(0);
}

function draw() {
  for (var x = 0; x < 100; x++)
  {
    for (var y = 0; y< 100; y++) {
      var n = noise (x/8, y/8);
      var brightness = map( n, 0, 1, 0, 255);
      var size = map(n, 0, 1, 5, 40);
      fill(brightness - size/n, brightness*size/7, brightness-size);
      ellipse(x*40, y * 30, size, size);
    }
  }
}
