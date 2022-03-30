//1. 펜 만들기
//p5.js 이용

function setup() {
  createCanvas(600, 600);     //canvas size
  stroke(0, 0, 255);          //stroke color
  strokeWeight(8);            //stroke thickness
}

function draw() {
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
