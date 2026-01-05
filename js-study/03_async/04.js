// 비동기 함수가 없어도, promise는 가능함

const isSuccess = true;
const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise 생성");
    if (isSuccess) {
        resolve("성공");
    } else {
        reject("실패"); // setter들을 다 만들어줌
    }
});


// 간편하게 promise체이닝 하는 방법
myPromise
    .then((result) => { //Promise객체이면, then을 사용할 수 있다
        console.log(result);
        return result + "!";
        // 다음 then의 response에 담긴다
        // 내부적으로 promise객체에 return값을 resolve()해준다
    })
    .then((result2) => {
        console.log(result2);
        return result2 + "!";
    })
    .then((result3) =>{
        console.log(result3);
    });






const postList = [
    {postId: 1, title: "1111", content: "1111"},
    {postId: 2, title: "2222", content: "2222"},
    {postId: 3, title: "3333", content: "3333"}
]

const fetchPostById = (postId) => {
    console.log("fetch 실행!");

    // 배열을 반환한다 
    // Id가 4일때, 없으니깐 빈배열을 반환한다
    // Id가 있냐 없냐를 성공과 실패로 나눌것임
    
    // 없는 id면 []빈배열
    // 있는 id면 [{}]객체하나
    const targetPost 
        = postList.filter((post) => post.postId === postId); // 매개변수로 들어온 postId와 같은것

    const postPromise = new Promsie((rs, rj) => {
        if (!!targetPost.length) { // length가 0이 아니라면 그렇게되면 함수 실행됨
            // id가 있는 경우
            rs(targetPost[0]);
        } else{
            rj(new Error("헤당 id의 게시글은 존재하지 않습니다"))
        }
    })

    return postPromise;
}

fetchPostById(1)
    .then(() =>{
        console.log("데이터 수신 성공!");
        const{title, content} = res;
        console.log(`${title} : ${content}`);
    })
    .catch((e) => {
        console.log(e.message);
    })