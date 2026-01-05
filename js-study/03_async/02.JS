// 우리가 작성한 JS 코드에 비동기함수(WEBAPI)가 혼합되어 있으면,
// 이 순서를 어떻게 제어 할 수 있을까?

let a = (value) => {
    console.log("a 호출"); // a(10)의 결과가 10이 아닌 이유는
    setTimeout(() => { // setTimeout이 webAPI라는 외부함수로 넘겨진 상태
        value += 5;    
    }, 1000)
    return value; // 그 상태에서 바로 return value를 실행하면, value가 10인
}                 // 그대로 출력된다고 보면 된다..

let b = (value) => {
    console.log("b 호출"); // 동기코드
    setTimeout(() => {
        value += 5;
    }, 1000)
    return value; // 동기코드
}

let c = (value) => {
    console.log("c 호출");
    setTimeout(() => {
        console.log(`결과 ${value}`);
    }, 2000);
}

//모두 비동기
// let result = a(10); // 15가 되기를 바란다
// result = b(result); // 20
// c(result); // 결과 20이 되기를 바라지만, 실제는 안그렇다

// 이유 :  동기 코드들이 먼저 실행되어서, 의도대로 코드가 진행되지 못함


//----------------- 의도대로 진행하려면 -------------------------------------------------------
// callback함수 실행

a = (v, callback) => {
    console.log('a 호출');
    setTimeout(() => {
        callback(v + 5); // callback함수를 통해서 이전 값을 전해줌
        // 콜백함수로 데이터가 전달 가능
    }, 3000)
    // 리턴하면 안됨..
}

b = (v, callback) => {
    console.log('b 호출');
    setTimeout(() => {
        callback(v + 5); // callback함수를 통해서 이전 값을 전해줌
        // 콜백함수로 데이터가 전달 가능
    }, 3000)
    // 리턴하면 안됨..
}

c = (v) => {
    console.log("c 호출!");
    setTimeout(() => {
        console.log(`결과 : ${v}`);
    }, 2000)
}


// 비동기와 동기가 혼재되어있을때
// 콜백으로 순서를 제어하는 방법
// 안티 패턴 - 콜백 지옥..-- 화살표함수
a(10, (valueA) => {
    console.log('받은 결과 :' , valueA);
    // 해당 코드에서 valueA는 callback의 v+5
})

// 콜백 지옥의 문제점
// depth가 깊어지면, 가독성 떨어짐
// 에러처리가 콜백 내부로 강제된다

// 제어권 x(요청의 성공 / 실패 서버 마음) 
// -> 비동기 요청이 끝나고, ~을 해라 라는 구조로 뵨경할수는 없을까?
// -> 해답 : "Promise 객체"