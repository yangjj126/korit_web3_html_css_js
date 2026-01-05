// 조건문 - 자바랑 동일
const age = 22;

if (age > 18){
    console.log("성인");
}



// 반복문
for (let i = 0; i < 5; i++){
    console.log(i)
}

// while문
// while(let i < 5){
//     console.log(i);
//     i++;
// }


// 배열(리스트) + for문
const nums = [10,20,30];

// 전통적인 for문
for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    // nums[0], nums[1], nums[2] ....
}

// 향상 for문
for (let n of nums){
    // nums에 있는거 하나씩 n이라는 변수에 담아서
    // 반복!
    console.log(n);
}



// 추가
let fruits = ["사과", "오렌지", "체리"];
fruits.push("포도"); // 마지막 자리에 추가

// 삭제 
// 마지막 index 데이터 꺼내옴
const grape = fruits.pop();
console.log(grape); // 꺼내왔다
console.log(fruits); // 마지막 idx사라짐



// spread문법 -> 이래서 spread안쓴다
fruits = [...fruits, "수박", "복숭아"]
console.log(fruits);



// 배열.splice(시작인덱스, 제거할 갯수)
const spliced = fruits.splice(3,2); // 잘라오는 개념(배열안에 담아서)
console.log(spliced);


// 배열.splice(시작인덱스, 제거할 갯수, 대신 들어갈 데이터)
// 특정 index에 넣고 싶다
// 제거0 -> 특정 index에 추가하는 코드
fruits.splice(1, 0, "토마토");
console.log(fruits);

// 요소 찾기 - find(함수)
// 매개변수로 넘긴 함수 결과가 true인 첫번째 요소를 반환
const apple1 = fruits.find((fruit) => fruit ==="사과");
console.log(apple1);

// for문으로 find함수 구현
let apple2 = "";
for (let fruit of fruits) {
    if (fruit === "사과") {
        apple2 = fruit;
    }
}
console.log(apple2);


// find(함수) -> 함수의 리턴이 true결과가 true면 가져온다
apple2 = fruits.find((f) => f.startsWith("사"));
console.log(apple2);

// 요소 확인
const hasApple = fruits.includes("사과");
console.log(hasApple);

// index 가져오기
const idxOfApple = fruits.indexOf("사과");
console.log(idxOfApple);

// 배열 합치기
let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b)
console.log(c);


// spread 사용 - 쉽쥬
c = [...a, ...b,];
console.log(c);

// js에서 배열 -> 객체(Array 객체)
// js에서 함수도 객체, 배열도 객체 -> heap메모리에 존재한다

const refridge = ["우유", "치즈", "블루베리(상함)", "김치", "식빵"]
// apple2 = fruits.find((f) => f.startsWith("사"));


// 1.
// refridge.splice(2,1,"블루베리");
// console.log(refridge);


// 2.
// indexof() -> 해당 데이터가 없다면, 데이터를 못 찾는다면, -1을 반환
const idx = refridge.indexOf("블루베리(상함)");
// idx찾아서, 업데이트 하기
if (idx !== -1){
    refridge[idx] = "블루베리";
}
refridge[idx] = "블루베리";


// 자바스크립트 객체 - 클래스

let user = new User("홍길동", 20);


