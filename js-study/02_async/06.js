// Promise를 문법으로 감출 수 있다
// async / await 문법

const delay = (ms) => {
    const myPromise = new Promise((rs, rj) => {
        setTimeout(() => {
            const s = ms / 1000;
            rs(`${s} 초과 되었습니다.`);
        }, ms);
    });

    return myPromise;
}



// async를 붙히면 함수가 promise객체를 반환하게 됨

const start = () => {

}

start();

// 깃허브 보면서


const getUserInfoById = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/{id}`
    // fetch()는 webAPI -> 비동기
    let response = await fetch(url);
    // json()도 webAPI를 사용 -> 만들기
    let user = await response.json();
    const userInfo = {
        username : user.username,
        email : user.email
    };
    return userInfo; // userInfo가 Promiser안에 resolve됨
};
// 가장 이상적으로 간결한 코드

const user = await getUserInfoById();
console.log(user);