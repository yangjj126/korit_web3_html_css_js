let colors = ["빨강", "파랑", "노랑"];

const c0 = colors[0];
const c1 = colors[1];
const c2 = colors[2];

// 구조 분해 할당 , 비구조 할당
let [color1, color2, color3] = colors;
console.log(color1, color2, color3);

// 값 스왑
let a = 10; // 10 -> 20
let b = 20; // 20 -> 10
let temp = 0; // 0 -> 10

temp = a;
a = b;
b = temp;

// 구조 분해 할당은 등호기준으로 
// 우변이 과거의 a,b값을 기억하고 있다.
[a,b] = [b,a]

// 객체 구조 분해 할당
let post = {
    post_id : 1,
    title : 120,
    view : 120,
    author : "운영자"
}

let post_title = post.title;
let post_author = post.author;


// 객체 구조 분해 할당
let {title, author} = post;
console.log(title, author);
 
// 구조분해할당이 대입상황에서 동작한다. -- 어렵노
// 1. 대입연산자
// 2. 함수 매개변수
// 3. for
const fx = ({title, author}) => {
    console.log(`${author} : ${title}`);
}
// title = post.title, author = post.author
fx(post);

// [[key1, val1], [key2,val2] ...]
let entries = Object.entries(post);
// entry = [key, val] = [key, val]
for (let [key, val] of entries){
    // 니가 적어보셈
}

// REST(나머지) 문법 - 배열, 객체
colors = ["빨강", "파랑", "노랑", "초록", "검정"]

// 앞의 값 일부만 가져오자!, 나머지는 배열로 가져오자
const [red, blue, ...rest] = colors;
console.log(rest);


post = {
    post_id : 1,
    title : 120,
    view : 120,
    author : "운영자"
}


// post_id만 빼고, postInfo에 객체로 대입
const{post_id, ...postInfo} = post;
console.log(postInfo);

// SPREAD 문법 - 배열, 객체
const colors1 = ["빨강", "팔아", "초록"];
// 분횽, 노랑 추가
const newColor = [...colors1,"분홍","노랑"];
console.log(newColor);

const colors2 = ["분홍", "노랑", "검정"];
const newColor2 = [...colors1, ...colors2];

colors1[0] = "핑크";
console.log(colors1);
console.log(newColor2);





const product = {
    product_id : 1,
    name : "모니터",
    price : 20000,
    option : {
        color : "블랙",
        year : 2022
    }
}

const newProduct = {
    ...product,
    stock : 10 ,// 새로운 필드 -> 정보 추가
    price : 150000 // 기존 필드와 중복 -> 업데이트
}

console.log(newProduct);

// 얕은 복사의 문제점
// js에서 스프레드 사용시, 1단계 까지만 깊은 복사
// 2단계부터는 참조값만 복사 (얕은 복사) 
newProduct.option.color = "실버"; // 원본도 변경된다
newProduct.price = 100000; // 1단계는 깊은 복사라서, 변경되지 않는다
console.log(product); // newProduct의 product는 변경 안됨

