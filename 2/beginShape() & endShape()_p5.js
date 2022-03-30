//2. 용어설명 및 활용
//beginShape()_endShape()

//참고 자료
//https://p5js.org/reference/#/p5/beginShape
//https://p5js.org/reference/#/p5/endShape

//beginShape()와 endShape()는 점을 이용해 보다 복잡한 형태의 도형을 그릴 수 있게 해주는 기능입니다. beginShape()가 시작되면 beginShape()와 endShape() 사이에 있는 점들을 이어가다 endShape()에서 마칩니다. beginShape()와 endShape()에서는 다양한 파라미터(매개변수)를 받아 점과 점을 잇는 방식을 결정하는데, 이때 파라미터는 모두 대문자로 입력되어야 합니다. beginShape()의 파라미터로는 점을 그리는 POINTS, 두 점을 짝지어 선을 그리는 LINES, 각각의 삼각형을 그리는 TRIANGLES, 서로 이어진 삼각형을 그리는 TRIANGLE_STRIP 등이 있으며, 특히 TRIANGLE_STRIP은 3D 지형을 구현할 때 유용하게 사용됩니다. 또한, endShape()에서는 CLOSE라는 매개변수를 받아 최초의 시작 지점과 마지막 지점을 선으로 이을 수 있습니다.

//Example
function setup() {
  createCanvas(600, 600);
  background(0);
  stroke(255);
  noFill();
}

function draw() {
  beginShape();
  vertex(20, 20);
  vertex(70, 20);
  vertex(70, 100);
  endShape(CLOSE);    // 시작 지점과 마지막 지점을 이어 별도의 매개변수 없이도 삼각형을 그릴 수 있습니다.

  beginShape();
  vertex(100, 20);
  vertex(150, 20);
  vertex(150, 100);
  endShape();         // 삼각형이 완성되지 않습니다.
  
  beginShape(TRIANGLES);      // 각각 2개의 삼각형이 그려집니다.
  vertex(20, 250);
  vertex(40, 150);
  vertex(60, 250);
  vertex(80, 150);
  vertex(100, 250);
  vertex(120, 150);
  endShape();

  beginShape(TRIANGLE_STRIP); // 서로 연결된 총 4개의 삼각형이 그려집니다.
  vertex(20, 375);
  vertex(40, 275);
  vertex(60, 375);
  vertex(80, 275);
  vertex(100, 375);
  vertex(120, 275);
  endShape();
}


// 결과
// CLOSE가 쓰인 것과 쓰이지 않은 것, TRIANGLES와 TRIANGLE_STRIP에서는 같은 점을 사용하여 각각 다른 모양을 보여줍니다.
