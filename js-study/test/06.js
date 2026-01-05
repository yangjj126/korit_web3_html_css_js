/*
`https://jsonplaceholder.typicode.com/todos/{todoId}` fetch하는 함수
fetch하는 함수 (getTodo)

todo id 1,2,3,4,5 인 todo의 데이터들을 []담아서 출략!
*/

const getTodo = async (todoId) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    let todo = await fetch(url) // 안에 RESOLVE된값 꺼내기
    todo = await todo.json()
    return todo;
}

// 여러 todo들 가져오기
let todos = [];
for (let i = 1; i < 6; i++){
    // await은 코드진행을 함수가 완료될때까지 멈춤
    const todo = await getTodo(i);
    todos = [...todos, todo];
}
console.log(todos);


// 병렬진행을 시켜야 할때 ?
// Promise.all([Promise객체1, promise객체2.. , promise객체10])
// -> 각 promise객체들이 병렬로 실행됨


const todoIds = [1,2,3,4,5];
// [getTodo(1), getTodo(2)... ,getTodo(5)];
const todoPromises = todoIds.map((id) => {
    return getTodo(id);
})

// 병렬 실행
todos = await Promise.all(todoPromises);
console.log(todos.map((todo) => {
    return todo.title
}));

