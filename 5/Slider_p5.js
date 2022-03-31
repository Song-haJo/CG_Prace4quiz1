//5. Slider 사용법
// Slider는 사용자로 하여금 변수 값을 편리하게 조절할 수 있게 하여, 프로그램이 그 값을 가져와서 바로 적용시켜 변화를 구현해주도록 만드는 기능입니다. Slider가 가지는 매개 변수로는 4개가 있는데, 앞의 min & max는 슬라이더에서 받을 최댓값과 최솟값을 의미하며, 그 뒤의 value는 디폴트값, 마지막 step은 각 값의 단계마다 가지는 굵기입니다. 예를 들어, step 값이 0이면 최댓값과 최솟값 사이에서 슬라이더가 부드럽게 움직이며, 5일 경우에는 5 단위로, 10일 경우에는 10 단위로 뚝뚝 끊어져서 이동할 것입니다.

let slider;
function setup() {
  slider = createSlider(0, 255, 100, 5);    // 디폴트값은 100이며, 슬라이더는 0과 255 사이에서 5 단위로 이동합니다.
  slider.position(10, 10);                  // 슬라이더의 좌측 상단 기준점 = (10, 10)
  slider.style('width', '100px');           // 슬라이더의 가로 길이 = 100px
}

function draw() {
  let val = slider.value();                 // 슬라이더에서 값을 받아 변수로 저장하여
  background(val);                          // 변수를 기능에 적용시킵니다.
}

// 결과
// 슬라이더를 우측으로 조정하면 배경색이 밝아지고, 좌측으로 이동시키면 어두워집니다.
