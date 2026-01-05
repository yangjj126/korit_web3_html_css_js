    const cell1 = document.getElementById("cell-1");
    cell1.addEventListener("click", (event) =>{
        console.log("cell1리스너가 클릭감지");
        // click이벤트 객체 < 브라우져가 만들어주는 객체
        console.log(event);
        console.log(event.target); // 마우스로 클릭한 대상
        const target = event.target;
        const number = target.innerText;
        // alert(`클릭한 상자의 번호: ${number}`);

        // event는 최하층 자식 요소에서 발생한다
        // 자식리스너 -> 부모리스너 -> 부모부모리스너...
        // 전파된다 == (이벤트따블링)

        // 근데, 전파를 막고싶다 - 1번만 다르게 동작
        // 자식리스너 -> 부모리스너 이 화살표를 막고 싶다
        // 전파방지
        event.stopPropagation();
    });

    const board = document.querySelector("#board");
    board.addEventListener("click", (event) =>{
        console.log("보드판 리스너가 클릭감지", event.target);
        console.log("이벤트리스너가 붙어있는 요소: ", event.currentTarget);
    })
    // 이벤트들의 차이에 대해 알아보기
    // event.currentTarget과 event