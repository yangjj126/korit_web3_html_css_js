// https://jsonplaceholder.typicode.com/posts/{id}

const getPostById = (postId) => 
{ // 내부 함수
const postPromise
    = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //
    //               < fetch 내부 구조 >
    //
    // const response = new Response(xhr.responseText, {
    //     status: xhr.status,
    //     statusText: xhr.statusText,
    //     headers: parseHeaders(xhr.getAllResponseHeaders())
    // });

    // // 3. resolve로 Response 객체 전달
    // resolve(response);  // 👈 여기서 resolve!

    // response에는 id에 해당하는 post와 관련된 온갖 정보들이 
    // 저장 되어 있다..

    // .then((result) => ~ )에서 result에 담겨있는 것은 
    // resolve()안에 잇는 데이터
    .then((result) => {
    // .json() : JSON문자열 -> js객체 반환 
    return result.json();
    })
return postPromise; // id에 해당하는 post내부내용을 모두 가짐
}


getPostById(2)
    .then((post) => {
        console.log("데이터 수신성공!");
        const{title, body} = post;
        // post의 title, body만 가져온다
        console.log(`${title} : ${body}`);
    })
    .catch((e) => {
        console.log(e.message);
    })


// https://jsonplaceholder.typicode.com/users/{id}
// fetch -> json을 js객체화 -> 함수호출
// -> 출력창에 수신해온 user의 정보 중 username, email만 출력

// 순서 : promise객체 만들기 -> .then

const userId = (userId) => {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((result) => {return result.json()})
    // id에 해당하는 Promise객체가 만들어짐 - result.json이 자바스크립트 객체로 바꾸라는 뜻
    /*
    JSON 문자열을 자바스크립트 객체로 바꾸라는 말 -- result.json()
    */
    .then((user) => {
        const userInfo = {
            username : user.username,
            email : user.email
        }
        return userInfo;
    })
    return userPromise;
} 


userId(2)
    .then((info) => {
        const {username, email} = info;
        console.log(`username : ${username}`);
        console.log(`email : ${email}`);
    })
    .catch((error) => {
        console.log(error.message);
    })