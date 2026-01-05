// async 와 await을 사용하여,
// 작동시켜보겠다

const getTodosByUserId = async (targetId) => {
    const url = `https://jsonplaceholder.typicode.com/todos`
    // 200개의 todo를 받아와서, [js 객체들]로 변환
    // 1. 매개변수로 들어온 userId로 필터링
        const response = await fetch(url);
        const todos = await response.json();

        const filteredTodos = todos
        .filter(todo => todo.userId === targetId)
        // 받아온 id를 통해서 같은 id인 todo찾기
        .map(todo => ({ // 다른 객체로 바꿀때, map을 사용해야 한다
            title: todo.title,
            completed: todo.completed
            // 2. 각 객체에 title, completed 필드만
            //    남기고, 제거
        }));
    // 3. 제거된 [js객체들]을 return해준다
    return filteredTodos;
}

const todos = await getTodosByUserId(1);
console.log(todos);
