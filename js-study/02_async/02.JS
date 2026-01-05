// 우리가 작성한 JS코드에 비동기함수가 혼합되어있으면
// 이 순서를 어떻게 제어 할 수 있을까...

let a = (value) => {
    console.log("a 호출");  // 동기
    setTimeout(() => {
        value += 5; // 비동기
    }, 3000);
    return value;
    // 리턴을 하게되면, stack에 있는 값들이 사라지기때문에,
    // value에 넣은 값이 없어지기때문에, 5가 더해지지 않느다
}
// 사라지는게 무슨쯧일까

let b = (value) => {
    console.log("a 호출");
    setTimeout(() => {
        value += 5;
    }, 1000);
    return value;
}

let c = (value) => {
    console.log("c 호출");
    setTimeout(() => {
        console.log(`결과 : ${value}`);
    }, 2000);
}

// let result = a(10);
// result = b(result);
// c(result);
// // 동기 코드들이 먼저 실행되어서 의도대로 코드가 진행되지않는다

// 의도대로 진행되게끔 하기 위해서는 
// callback함수를 사용할수 밖에 없다

a = (v, callback) => {
    console.log("a 호출!");
    setTimeout(() => {
        callback(v+5);  // 콜백함수로 데이터가 전달된다
    }, 3000)
    // 리턴 x
}

b = (v, callback) => {
    console.log("b 호출");
    setTimeout(() => {
        callback(v+5);
    }, 1000);
}

b = (v) => {
    console.log("b 호출");
    setTimeout(() => {
        console.log(`결과: ${v}`);
    }, 3000);
}

// 비동기와 동기가 혼재되어있는 경우
// 안티패턴 - 콜백지옥 - 사용안한다
a(10, (value) => {
    b(valueA, (valueB) => {
        c(valueB);
    })
})// 실제 callback함수 실행과정


// 콜백지옥의 문제점
// depth가 깊어지면, 가독성이 떨어진다
// 에러처리가 콜백 내부로 강제 된다 -- ??
// 제어권 X(요청의 성공 / 실패 서버 마음)
// -> 비동기 요청이 끝나고, "~을 해라" 라는 구조로 변경할수 없을까

