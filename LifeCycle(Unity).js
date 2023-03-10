//유니티 C#의 라이프사이클을 모방한 javascript입니다
let isAwake = false;
let isStart = false;
let PS = 60; //1초에 몇번 실행될지
///<<System>>///
Awake();
while(!isAwake){}
Start();
while(!isStart){}
setInterval(() => Update(), 1/PS);
console.log('Update is running...');
////////////////

///<<Functions>>
function Awake(){

  console.log('Awake Done.');
  isAwake = true;
}

function Start(){

  console.log('Start Done.');
  isStart = true;
}

function Update(){
  Frame(1/PS);
}

function Frame(ms){
  console.log(`FPS: ${PS}(${ms}ms)`);
}

function PS_set(value){
  PS = value;
}
////////////////