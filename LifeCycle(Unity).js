//유니티 C#의 라이프사이클을 모방한 javascript입니다
let isAwake = false;
let isStart = false;
let PS = 60; //1초에 몇번 실행될지
Awake();
while(!isAwake){}
Start();
while(!isStart){}
setInterval(() => Update(), 1/PS);

function Awake(){
  
  isAwake = true;
}

function Start(){
  
  isStart = true;
}

function Update(){
  console.log('deltatime' + (1/PS));
}
