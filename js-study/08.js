

// 콜백 함수를 매개변수로 받는 배열 내장 함수들 

const people = [
    {
        name: "홍길동",
        age: 20
    },
    {
        name: "김길동",
        age: 15
    },
    {
        name: "최길동",
        age: 17
    },
    {
        name: "박길동",
        age: 22
    }
]


// 1. forEach(배열에서 꺼내온 요소, 인덱스) => {})
// 반복용, 인덱스는 선언하지 않아도 상관없음.
// 리턴x
people.forEach((person, idx) => {
    console.log(`${idx+1}번 : ${person.name}`);
});

// 2.filter((배열에서 꺼내온 요소, 인덱스) => {})
// 배열에서 조건에 맞는 여소만 남기고, 제거한다 (기존배열은 유지)
// 리턴 o : boolean
const adults = people.filter((person) =>{
    return person.age > 20;
})
console.log(adults);

// 3. map 
const peopleWithNim = people.map((person) => {
    const addNim = {
        name : person.name + "님",
        age : person.age
    }
    return addNim;
})
console.log(people);
console.log(peopleWithNim);



// 4. 정렬 sort((pre, next) => {pre - next})
// 원본이 정렬됨
// 리턴이 존재 리턴의 결과가 양수, 음수, 0

// 나이순 정렬 오름차순
people.sort((p1, p2) => {
    return p1.age - p2.age
})
console.log(people);

people.sort((p1,p2) =>{
    return p1.age - p2.age
})


// findIndex
// indexOf() -> 데이터가 정확리 일치해야 가져온다
// 배열의 객체가 있고, 그 객체의 필드로 index 찾을때
const indexOfKim = people
    .findIndex((person) => person.name === "김길동");

console.log(indexOfKim);


// 누적합을 구해보기
const nums = [2,4,7,100,200];
let sum = 0;

nums.forEach((n) => sum += n);
console.log(sum);

// reduce(fx, 누적변수의 초기값)
// fx : (누적변수, 배열에서 꺼내온 요소) => {}
sum = nums.reduce((sum, number) => {
    console.log(`현재 누적값: ${sum}`);
    console.log(`${sum} + ${number} 연산 실행`);
    return sum + number; // sum = sum + number
}, 0)
console.log(`최종합: ${sum}`)


// reduce가 주로 사용되는 곳
// 왜 쓰느냐

// 서버에서 가져온 데이터([객체, 객체..])를 보기 좋게 가공할때 사용
const orders = [
    { order_id: 1, status: "PAID", price: 10000},
    { order_id: 2, status: "CANCEL", price: 5000},
    { order_id: 3, status: "PAID", price: 7000}
]

// 요래 써주고 싶다
/*
    {
        PAID : 17000,
        CANCEL : 5000
    }
*/

const sumByStatus = orders.reduce((result, order) => {
    // 처음에는 아무값도 안들어있음
    // 최초에는 필드가 없기 때문에
    // result[order.status] === undefined   -아래- undefined이면, 0으로 하세요
    result[order.status] = (result[order.status] ?? 0) + order.price; // result[order.status] = result의 order.status라는 필드, 초기값 = {}
    return result;
}, {}); // result의 초기값 빈객체











// 확실히 js는 6,7,8 부분 집가서 정리좀 해야 할듯