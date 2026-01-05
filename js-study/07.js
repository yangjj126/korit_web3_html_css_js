// 클래스 방식

class User {
    // 생성자 선언
    constructor(name, age){
        // constructor이 알아서, 메모리 + name,age
        this.name = name;
        this.age = age;
    }

    hello(){
        console.log(`안녕하세요 저는 ${this.name}이고,
            ${this.age}살 입니다
            `);
    }
}

let user = new User("홍길동", 20);
// 자동으로 생성자에 의해서 name과 age에 들어가진다
console.log(user.name, user.age);

user.name = "김길동";
user["age"] = 30;
console.log(user["name"], user.age);

// 리터럴 방식
user = {
    name: "홍길동",
    age: 20,
    hello: function (){
        console.log(`하이요 저는 ${this.name}이고 ${this.age}살 입니다`);
    }
}

// 객체에 없던 필드 추가 가능
user.address1 = "부산시";
console.log(user);





