// estellamakerting

// https://jsonplaceholder.typicode.com/posts/{id}

const getPostById = (postId) => {
    const postPromise 
        = fetch(https://jsonplaceholder.typicode.com/posts/{postId})
            // fetch로 해당 json파일 들고 온다
            .then((result) => {
                // .json() : json문자열 -> js객체로 반환 (webAPI)
                return result.json();
            })

    return postPromise;
    // 변환된 js객체를 return한다
}

getPostById()
    .then((post) => {
        console.log("데이터 수신 성공");
        const {title, body} = post;
        console.log(`${title} : ${body}`);
    })
    .catch((e) => {
        console.log(e.message);
    })


// https://jsonplaceholder.typicode.com/users/{id}
// fetch -> json을 js객체화 -> 함수호출 
// -> 출력창에 user정보중 username, email만 출력

const getuserBYId = (userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/{id}`
    const userPromise = fetch(url)
                            .then((result) => {
                                    return result.json();
                            })
    return userPromise;
}

getuserBYId(1)
    .then((user) => {
        console.log("데이터 수신 성공");
        const {username, email} = user;
        console.log(`${user} : ${email}`);
    })
    .catch((e) => {
        console.log(e.message);
    })

    // 깃허브 파일 보고 작성하기




