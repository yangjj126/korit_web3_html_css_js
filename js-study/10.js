/*
    참고) 클로저
    --렉시컬환경, heap, stack...
*/
const myData = (value) => {
    // JS에서 데이터를 private하게 저장하는 방법
    let data = value;

    // setter
    const setData = (input) => {
        data = input;
    }

    // getter
    const getData = () => {
        return data;
    }

    return [getData, setData, data];
}

// getName은 함수 -> myData함수 내부 name변수를 참조하고 있음
// name이 저장하는 데이터는 함수에서 리턴한 값을 복사해서 가져옴
const [getName, setName, name] = myData("홍길동");
console.log(name);
console.log(getName());

setName("김길동");
console.log(name); // 복사해서 가져왔기 때문에 고정값
console.log(getName());