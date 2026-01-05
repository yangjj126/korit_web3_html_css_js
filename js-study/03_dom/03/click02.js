    const board = document.querySelector("#board");
    board.addEventListener("click", (event) => {
        // const target = event.target;
        // // js로 태크에 class를 부여하는 방법
        // console.log(target);
        // // 배경색이 생기게 하고 싶으면, 클릭, 없애고 싶으면, 클릭
        // // target.classList.add("click")
        // if (target.classList.contains("click")){
        //     target.classList.remove("click");
        // } else {
        //     target.classList.add("click");
        // }


        
        // toggle("클래스 이름")
        // "click"이 클래스리스트에 존재하면, 제거
        // 존재하지 않으면, 추가
        target.classList.toggle("click");
    })