const products = [
    {name : "노트북", price: 1200000},
    {name : "마우스", price: 30000},
    {name : "키보드", price: 80000},
    {name : "무선헤드셋", price: 110000},
    {name : "스피커", price: 40000}
]

// 1. products에 담긴 객체들 name: "상품이름(할인)", price는 10%할인된 가격 업데이트 (원본 유지)

let discount1 =
products.map((product) => {
    let saleproduct = {
        name : `${product.name}(할인)`,
        price : product.price * 0.9
    }
    return saleproduct;
})
console.log(result);

// 1번 문제 reduce사용 방법  => 좀 복잡 - focusing해서 이해 필요
const discount2 = products.reduce((product) => {
    let saleproduct = {
    name : `${product.name}(할인)`,
    price : product.price * 0.9
    }
    result.push(saleproduct)
    return result;
},[]) // 초기값 : 빈배열




// 2. 5만원 이하의 상품들만 10%할인 업데이트


// 2-1 . filter + map
const discount3 = products
        .filter((product) => product.price <= 50000)
        .map((product) => {
            return {
                name: product.name ,
                price: product.price * 0.9
            }
        });
// 근데, 이렇게 코드적으면, 할인된것들만 나오지 않을까


// 2-2 .reduce를 쓰는 방법
const discount4 = products.reduce((result, product) => {
    if (product.price <= 50000){
        const updateProduct = {
            name : product.name,
            price : product.price * 0.9
        }
        result.push(updateProduct);
    }
    return result
}, []) // 초기값







const cart = [
    {name : "노트북", price: 1200000, count: 1, checked: true},
    {name : "마우스", price: 30000, count: 1, checked: false},
    {name : "키보드", price: 80000, count: 2, checked: false}
];

// 장바구니에서 checked가 true인 상품들의 총가격을 구해주세요!

// 1. 단순 for문
// let sum = 0;
// for (let product of cart){
//     if (product.checked){
//         sum += product.price * product.count;
//     }
// }

// 2. reduce구문
const sum = cart.reduce((sum, product) => {
    if (product.checked){
        sum += product.price * product.count
    }
    return sum; // 여기서 나온 결과가 다시 위의 sum으로 연결해준다
}, 0) // reduce안에 for문이 내재되어있는건ㄷㄱ가?



