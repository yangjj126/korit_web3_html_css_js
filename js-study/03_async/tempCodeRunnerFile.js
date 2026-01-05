console.log(1);
setTimeout(() => { // webAPI 함수 중 하나
    console.log(2);
}, 3000); // 메인스레드 : 3초뒤에 callback함수를 실행학세여 -> timeout쓰레드
console.log(3);