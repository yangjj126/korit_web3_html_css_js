// const product = {
//     product_id : 1,
//     name : "노트북",
//     price : 1200000,
//     stock : 5
// }


// // SPREAD를 사용하여, price 10% 할인, stock1감소 
// // id 필드 제거
// let newProduct = {
//     ...product,
//     price : produt.price * 0.9,
//     stock : product.stock - 1
// }
// // rest문법으로 product_id 필드 제거
// const {product_id, ...productInfo} = newProduct;
// console.log(productInfo); 




// // "spread문법"을 사용하여,
// // product, productOption 필드를 합친 새로운 객체를 만들어주세요
// const newProduct2 = {
//     ...product,
//     ...productOption,
//     status : "배송중"
// }










// // passwordConfirm 서버로 보내지 않는다
// // 두 객체를 병합
// // 추가로 agreeTerm: true 필드 추가
// const basicFormInput = {
//     username: "jsman",
//     password: "123456",
//     passwordConfirm: "123456",
//     email: "jsonman@js.com"
// }

// const optionFormInput = {
//     name: "홍길동",
//     phone: "010-1111-2222",
//     address: "부산시 부산진구"
// }


// // passwordConfirm 제거 - rest 문법
// const {passwordConfirm, ...restInfo } = basicFormInput;

// // 두 객체를 병합
// const submitData = {
//     ...restInfo,
//     ...optionFormInput,
//     agreeTerm: true
// }

// console.log(submitData);



// {name : "스피커", price: 40000, stock: 0} 추가
// stock옵션 제거하고, 
// 대신에 stock값이 0이면 isAvailable: false, 0이 아니면, isAvailable: true  -> map사용  
let products = [
    {name : "노트북", price: 1200000, stock: 5},
    {name : "마우스", price: 30000, stock: 0},
    {name : "키보드", price: 80000, stock: 10},
    {name : "헤드셋", price: 110000, stock: 8}
]

//알단 추가먼저하기
let newproducts = [
    ...products,
    {name : "스피커", price: 40000, stock: 0}
]

// stock옵션을 돌면서, stock에 따라 설정달리하기
for (let product of newproducts){
    if (newproducts.stock === 0){
        newproducts.isAvailable = "true";
    }
    else {
        newproducts.isAvailable = "false";
    }
}

console.log(newprducts);



 
