const answer = 7;
    // 7번 div를 누르면, 배경이 변하면서, 텍스트가 "정답!"으로 변경
    // 나머지를 누르면, 빨간색으로 변하면서, 텍스트가 "땡"으로 변경
    const board = document.querySelector("#board");
    // 부모인 board가 cell로부터 이벤트를 전달받아서 작동
    board.addEventListener("click", (event) => {
        const target = event.target;
        const id = target.id;
        let number = target.innerText;

        // number은 문자형타입이기 때문에 바꿔줘야 한다
        number = parseInt(number);
        // number = Number(number);

        if (number === answer){
            target.innerText = "정답!";
            // innerText가 바뀌기 때문에, number이 none이 된다
            target.classList.add("answer")
        } else {
            target.innerText = "땡!";
            target.classList.add("wrong")
        }
    })


    // < 내가 한것 >
    // const target = event.target;
    //         console.log(target);
    //         const number = target.innerText;
            
    //         if (number === "7"){ // ""해야하는구나- js - type은 존재
    //             target.classList.toggle("answer");
    //             // 텍스트를 추가하는 방법을 모르겟다
    //         } else {
    //             target.classList.toggle("wrong")
    //             event.currentTarget.innerText("땡!")
    //         }


    //     const board = document.querySelector("#board");
    // board.addEventListener("click", (event) => {
    //     // const target = event.target;
    //     // // js로 태크에 class를 부여하는 방법
    //     // console.log(target);
    //     // // 배경색이 생기게 하고 싶으면, 클릭, 없애고 싶으면, 클릭
    //     // // target.classList.add("click")
    //     // if (target.classList.contains("click")){
    //     //     target.classList.remove("click");
    //     // } else {
    //     //     target.classList.add("click");
    //     // }


        
    //     // toggle("클래스 이름")
    //     // "click"이 클래스리스트에 존재하면, 제거
    //     // 존재하지 않으면, 추가
    //     target.classList.toggle("click");
    // })