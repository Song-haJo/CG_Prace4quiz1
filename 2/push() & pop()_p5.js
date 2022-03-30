//2. 용어설명 및 활용
//push()_pop()

//참고 자료
//https://p5js.org/reference/#/p5/push
//https://p5js.org/reference/#/p5/pop

//push()는 현재의 스타일 설정과 공간적 변형 등을 저장해주고, pop()을 통해 이를 다시 불러올 수 있습니다. 즉, push()와 pop() 사이에서 일시적으로 다른 설정들을 추가하거나 수정할 수 있으며, 이러한 설정들은 push()와 pop() 사이의 객체들에만 적용되므로 이후 원상태의 설정들을 복구하기 위해 하나하나 다시 설정할 필요가 없습니다. push()가 저장하는 설정들로는 fill()이나 noFill()과 같은 채우기 색상, stroke()와 noStroke()와 같은 테두리 색상 등의 그리기 스타일 설정들과 translate()이나 rotate()과 같이 좌표를 다루는 공간적 설정들이 있습니다. 또한, WebGL 이용 시에는 setCamera(), ambientLight(), directionalLight(), pointLight(), texture(), specularMaterial(), shininess() 등의 기타 설정들도 push() & pop()으로 다룰 수 있습니다.

//Example
function setup() {
  background(0);
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  fill(255);
  ellipse(100, height/2, 100, 100);   // Left circle: push() & pop() 외부 설정을 따릅니다.

  push();                   // Start a new drawing state
  translate(50, 0);         // (50, 0)을 기준 좌표로 설정합니다.
  stroke(0, 0, 255);
  strokeWeight(5);
  noFill();
  ellipse(250, height/2, 100, 100);   // Middle circle: push() & pop() 내부 설정을 따릅니다. 외부 시점에서 좌표 (300, 300)에 위치해 있습니다.
  pop();                    // Restore original state

  ellipse(500, height/2, 100, 100); // Right circle: push() & pop() 외부의 원래 설정을 따릅니다.
}

//결과
//좌측과 우측에 위치한 원들은 테두리가 없고 채우기 색이 흰색이지만, push() & pop() 사이의 가운데 원은 파란색 굵기 10의 테두리를 가지고 있으며 채우기 색이 없습니다.
