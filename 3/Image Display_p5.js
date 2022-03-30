//3. 영상 넣기 코딩

let img;

function preload() {
  img = loadImage("20181023_0906161.jpg"); // 해당 스케치 폴더에 존재하는 이미지 파일
}

function setup() {
  createCanvas(1000, 2000);
  image(img, 0, 0);
}
