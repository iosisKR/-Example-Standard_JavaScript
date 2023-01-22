//유니티 C#의 라이프사이클을 모방한 javascript입니다
let isAwake = false;
let isStart = false;
let PS = 60; //1초에 몇번 실행될지
Awake();
while(!isAwake){}
Start();
while(!isStart){}
setInterval(() => Update(), 1/PS);
console.log('Update is running...');

function Awake(){

  console.log('Awake Done.');
  isAwake = true;
}

function Start(){

  console.log('Start Done.');
  isStart = true;
}

function Update(){
  //console.log('deltatime' + (1/PS));
}