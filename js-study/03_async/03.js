// Promise 객체 : "비동기 작업의 상태"와 "결과"를 담은 객체

//  지금은 결과를 모르지만,결국 "성공아니면, 실패임"
// -> 1. 성공할때랑, 실패할때(상태)를 필드로 가진다
//    2. 결과를 저장


// 예를 들어, setTimeout이 성공하였는지, 실패하였는지
//          "여부의 상태", 그리고 "결과"를 "객체"로 가지고 있는 것
//          webApi를 갔다가 오면, 성공 <-> webApi를 갔다가 못오면, 실패
//          그리고, setter을 통해서 해당 상태를 나타나게끔 해준다..



// resolve :  비동기 작업이 성공하면, setter  , promise의 state를 변경한다
// reject : 비동기 작업이 실패했을때, setter  , promiser의 state를 변경한다
const asyncFunc = (resolve, reject) => {
    // 2. setTimeout 등록 완료, Promise생성자 종료
    setTimeout(() => {
        // 3. setTimeout 콜백(setTimeout내부함수) 실행
        // 성공 or 실패 가정
        const isSuccess = true;
        if (isSuccess){
            resolve("성공 데이터"); // 일종의 setter
        } else {
            reject("실패 데이터");
        }
    }, 1000);
};
// 자바스크립트 바깥의 WEB API로 던져버리자 = 비동기


// 비동기 함수를 Promise 객체로 변환
const promise1 = new Promise(asyncFunc);
// 1. Promise 생성자 실행 -> 자동으로 내부 코드 실행



// Promise 객체가 가지고 있는
// then함수, catch함수로 성공/실패 분기
promise1
    .then((result) => {
        // "then함수" = "매개변수로 "성공시 실행할 콜백함수"
        // 콜백의 result매개변수는 resolve로 담았던 데이터가 있음 (성공 데이터)
        console.log(result);
        // .then()은 오직 resolve된 경우(성공한경우)만 실행됩니다.
    })
    .catch((error) => {
        // catch는 "실패시 실행할 콜백함수"를 받음
        // 콜백의 error에 reject로 담았던 데이터가 있음
        console.log(error);
    })


// < 과정 순서 >
// 1. Promise 생성자 실행
// 2. setTimeout 등록 완료, Promise 생성자 종료
// 6. Promise 객체 생성 완료
// 3. setTimeout 콜백 실행 (1초 후)
// 4. isSuccess: true
// 5. resolve 호출 완료
// 7. then 콜백 실행: 성공 데이터





// 02.js에 있던, a,b,c함수 -> Promise로 변환

const a = (value) => 
{
    console.log("a 호출");
    // new Promise()로 promise 객체가 생성되는 순간, 내부의 함수는 실행된다 대신 상태는 대기중<pending>
    const asyncfn = (resolve) => {
        setTimeout(() => {
            resolve(value + 5)
        }, 3000); // 비동기 함수 완성
    }
    const promiseA = new Promise(asyncfn);
    return promiseA; // 결과 : Promise객체를 리턴하고 잇다
    // 그러므로  Promise { <pending> } 대기 상태이다

    // 1. Promise 생성과 동시에 setTimeout이 Web API로 등록됨
    // 2. Promise { <pending> } 즉시 리턴 ==> return promiseA
    // 3. .then() 등록 (콜백 함수 대기열에 등록)
    // 4. 3초 후: setTimeout 콜백이 Task Queue로 이동
    // 5. Event Loop가 콜백을 Call Stack으로 이동
    // 6. resolve(15) 실행
    // 7. Promise 상태가 pending → fulfilled로 변경
    // 8. .then() 콜백 실행
} 

const b = (value) => {
    console.log("b 호출");
    const asyncfn = (resolve) => {
        setTimeout(() => {
            resolve(value + 5)
        }, 3000); // 비동기 함수 완성
    }
    const promiseB = new Promise(asyncfn);
    return promiseB;
} 

const c = (value) => {
    console.log("c 호출");
    const asyncfn = (resolve) => {
        setTimeout(() => {
            resolve(value);
        }, 2000); // 비동기 함수 완성
    }
    const promiseC = new Promise(asyncfn);
    return promiseC;
} 

a(10) // Promise객체를 리턴하고 있다
    .then((resultA) => { 
        // 여기서 resultA는 resolve햇을때, resolve() <- 내부의 값을 호출
        // then만 하면, resolve값이 출력된다

        /*
        resolve('매개변수')를 호출하면
        -----------------------------------------
        .then((매개변수) => {})의
         data가 전달됨
        */
        console.log(`a결과 : ${resultA}`);
        return b(resultA);
    })
    .then((resultB) => {
        console.log(`b결과 : ${resultB}`);
        return c(resultB);
    })
    .then((resultC) => {
        console.log(`c결과 : ${resultC}`);
    })
    // 총 세번을 호출함
    .catch((error) => {
        console.log(`에러 : ${error}`);
    })
