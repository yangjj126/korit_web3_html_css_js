// 리터럴 생성 방식
const arr3 = [1,2,3,4];
console.log(arr3);

// 자바와 다르게 자료형이 없기 때문에
// 무엇이든 담을 수 있음

const hello = () => {
    return "안녕하세요";
}

const arr4 = () => [
    "홍길동",
    11,
    () => {
        return "안녕하세요!";
    }
]

console.log(arr4[0]);
console.log(arr4[2]);

// 1.추가 -- 마지막 자리에 추가 - ~.push(~)
let fruits = ["사과", "오렌지", "체리"];
fruits.push("멜론"); 

// 2.삭제
// 마지막 index 데이터 꺼내옴 ~.pop()
const grape = fruits.pop();
console.log(grape);

// spread 문법 -- 이걸 주로 사용
fruits = [...fruits, "수박", "복숭아"];
console.log(fruits);


// 3.교체
// << splice 의 종류 >> 

// 배열.splice(시작인덱스, 제거할 갯수)
const spliced = fruits.splice(3,2);
console.log(fruits);
console.log(spliced); // 잘라오는 개념(배열안에 담아서)




// 배열.splice(시작인덱스, 제거할 갯수, 대신 들어갈 데이터)
// 제거 0 -> 특정 idx에 추가하는 코드
fruits.splice(1,0, "토마토");
console.log(fruits);
// ex)
let hamsters = ["cute", "ugly", "margingga", "gimchi"];
hamsters.splice(1,1,"cutty")
console.log(hamsters);


// 4. 요소찾기 - find함수 
//    매개변수로 넘긴 함수결과가 true인 첫번째 요소를 반환
const apple1 = fruits.find((fruit) => fruit === "사과");
console.log(apple1);
// for문으로 구현
let apple2 = "";
for (let fruit of fruits){
    if (fruit === "사과"){
        apple2 = fruit;
    }
}
// find(함수) -> 함수의 return결과가 true이면 가져온다
apple2 = fruits.find((f) => f.startsWith("사"));
console.log(apple2);
const hasApple = fruits.includes("사과");
console.log(hasApple);



const refridge = ["우유", "치즈", "블루베리(상함)", "김치", "식빵"]
// 문제 : "블루베리(상함)" 빼고,
//        "블루베리"를 refridge에 추가 - 동일한 idx

// 1. 일단 "블루베리(상함)"의 index찾기
// 2. 해당 index의 요소를 교체하기


// 배열.splice(시작인덱스, 제거할 갯수, 대신 들어갈 데이터)
// 제거 0 -> 특정 idx에 추가하는 코드
// fruits.splice(1,0, "토마토");
// console.log(fruits);  요칭구 이용하기

const idx = refridge.indexOf("블루베리(상함)");

refridge.splice(idx, 1, "블루베리");

console.log(refridge);
