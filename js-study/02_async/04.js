// 비동기 함수가 없어도, promise는 가능함
// 비동기 없이도 promise를 다룰 수 있다


const isSuccess = true;

const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise 생성!");
    if (isSuccess) {
        resolve("성공");
    } else {
        reject("실패");
    }
});


// 간편하게 promise 체이닝 하는 법
myPromise
    .then((result) => {
        console.log(result);
        return result + "!" 
        // 다음 then의 response에 담긴다
        // 내부적으로 promise객체에 return 값을 resolve()해준다
    })
    .then((result2) => {
        console.log(result2);
        return result + "!";
    })
    .then((result3) => {
        console.log(result3);
    })
    


const postList = [
    {postId : 1, title : "1111" , content : "1111"},
    {postId : 2, title : "2222" , content : "2222"},
    {postId : 3, title : "3333" , content : "3333"},
]

const fetchPostById = (postId) => {
    console.log("fetch 실행!");

    // 4를 입력받으면, [](빈배열)
    // 1,2,3을 입력받으면, [{}] (객체하나) 를 받는다
    const targetPost
        = postList.filter((post) => post.postId === postId)

    const postPromise = new Promise((rs, rj) => {
        if (!!targetPost.length) {
            // id 있는 경우
            rs(targetPost[0]);
        } else {
            rj(new Error("해당 id의 게시글은 존재하지 않습니다"))
        }
    })

    return postPromise; 
}

fetchPostById(1)
    .then(() => {
        console.log("데이터 수신 성공");
        const {title, content} = res;
        console.log(`${title} : ${content}`);
    })
    .catch((e) => {
        console.log(e.message);
    })