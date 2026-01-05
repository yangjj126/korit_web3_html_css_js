// -> js - "Promise 객체"

// Promise 객체 : 비동기 작업의 상태와 결과를 담은 객체
// 지금은 결과를 모르지만, 결국은 성공 아니면 실패
// -> 1. 성공할때랑 실패할때를 필드로 가진다(상태)
// -> 2. 데이터 결과를 저장

// resolve : 비동기 작업이 성공했을때, setter & promise의 state변경
// reject : 비동기 작업이 실패했을때, setter & promise의 state변경


const asyncFunc = (resolve, reject) => {
    setTimeout(() => { // 비동기함수 - js는 싱글쓰레드 - 한번에 하나의 작업만 가능 하다
        // 성공 or 실패 가정
        const isSuccess = true;
        if (isSuccess) {
            resolve("성공 데이터");
        } else {
            reject("실패 데이터");
        }
    }, 1000);
}



// 비동기 함수를 Promise 객체로 변환
const promise1 = new Promise(asyncFunc);

// Promise객체가 가지고 있는 
// then()함수, catch함수로 성공/실패 분기 가능
promise1
    .then((result) => {
    // then함수는 매개변수로 "성공시 실행할 콜백함수"를 받음
    // 콜백의 result매개변수는 resolve로 담았던 데이터가 있음
    console.log(result);
    })
    .catch((error) => {
    // catch는 "실패시 실행할 콜백함수"를 받음
    // 콜백의 error에 reject로 담았던 데이터가 있음
    console.log(error);
    })


// 콜백함수위에 만든것을 promise로 변환시켜보기
// 02.js에 있던 a,b,c함수 -> promise로 변환

const a = (value) =>{
    console.log("a 호출!");
    // new Promise() 로 promise 객체가 생성되는 순간, 내부의 함수는 실행이 된다

    // 아래 코드는 webApi로 던져진다
    const promiseA = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 3000);
    });

    // 대기중인 상테로 리턴된다
    return promiseA;
}

const b = (value) =>{
    console.log("b 호출!");
    const promiseB = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 1000);
    });
    return promiseB;
}


const c = (value) =>{
    console.log("c 호출!");
    const promiseC = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 3000);
    });
    return promiseC;
}


const resultOfA = a(10);
console.log(resultOfA);
// < pending > = 대기중인 상태가 뜬다



// promise객체를 리턴
a(10) // then -> promiseA의 상태가 fullfilled되었을때
// 여기에서 resolve를 보낸다 -> 성공 / 실패
// promseorrcprk aks tlfgod
// getter
    .then((resultA)=> {
        console.log(`a결과 : ${resultA}`);
        return b(resultA);
    })
    .then((resultB) => {
        console.log(`b결과 : ${resultB}`);
        return b(resultB);
    })
    .then((resultC) => {
        console.log(`c결과 : ${resultC}`);
        return b(resultC);
    })
    .catch((error) => {
        console.log(`에러 ${error}`);
    })


//  < promise 체이닝 > -- 복습하기



