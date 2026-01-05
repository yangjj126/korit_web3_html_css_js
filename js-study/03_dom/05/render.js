 // 필요한 태그들 가져오기
        // 게시물 목록
        const postListContainer = document.querySelector("#postListContainer");
        const postList = document.querySelector("#postList");
        const pagination = document.querySelector("#pagination");

        // 상세 페이지
        const postDetailContainer = document.querySelector("#postDetailContainer");
        const detailTitle = document.querySelector("#detailTitle");
        const detailId = document.querySelector("#detailId");
        const detailUserId = document.querySelector("#detailUserId");
        const detailBody = document.querySelector("#detailBody");
        const backBtn = document.querySelector("#backBtn");

        // 전역변수
        let currentPage = 1; // 바뀜
        let totalPage = 1; // 바뀜
        const pageSize = 10;
        const BASE_URL = "https://gorest.co.in/public/v2/posts";
        
        // 페이지 번호를 매개변수로 받아서 게시글을 요청
        const loadPosts = async (page) => {
            postList.innerHTML = "<li>불러오는 중...</li>";

            const url = `${BASE_URL}?page=${page}&per_page=${pageSize}`;
            // resolve 결과를 response에 담는다
            // 완료될때까지 대기
            const response = await fetch(url);
            const posts = await response.json();

            // 전체 페이지 수가 응답헤더에 담겨있을 수 있음
            let pageCount = response.headers.get("X-Pagination-Pages");
            pageCount = parseInt(pageCount); // pageCount 형변환
            totalPage = pageCount; // 전역변수 덮어쓰기

            console.log(totalPage);
            // post를 렌더링 -> 매개변수로 posts를 넘겨줄것임
            renderPostList(posts);
            // 페이지네이션 렌더링
            renderPagination();
        }

        // 게시글 렌더링 함수
        const renderPostList = (posts) => {
            let myHtml = "";
            /*
            {
                "id": 260025,
                "user_id": 8263984,
                "title": "Centum tabula quo tibi valeo carcer sublime quidem claustrum.",
                "body": "Mollitia ara cupressus. Copiose taceo contra. Conventus volva tero. Creta nobis hic. Laborum vel apostolus. Decens tyrannus ter. Cerno sub vereor. Supra aeternus laborum. Teres tumultus assentator. Adversus strues comis."
            },
            */
            for(let post of posts) {
                // data-id 속성
                // HTML에 데이터를 숨겨서 저장할 수 있는 속성
                // JS에서 요소.dataset 으로 접근가능
                // data-{id} -> 요소.dataset.id
                // data-{qwer} -> 요소.dataset.qwer
                myHtml += `
                    <li>
                        <span class="post-title" data-id="${post.id}">
                            ${post.title}
                        </span>
                        <button class="detail-btn" data-id="${post.id}">
                            상세보기
                        </button>
                    </li>
                `;
            }

            postList.innerHTML = myHtml;
        }

        // 페이지네이션 렌더링
        const renderPagination = () => {
            let myHtml = "";
            // 현재페이지가 7페이지라면
            // [처음] [이전] [5] [6] [7] [8] [9] [다음] [끝]

            // 처음 버튼
            myHtml += `
                <button
                    data-page="1"
                    ${
                        // 현재페이지가 1페이지면 비활성화
                        currentPage === 1
                        ? "disabled"
                        : ""
                    }
                >
                    처음
                </button>
            `;

            // 이전버튼
            myHtml += `
                <button
                    data-page="${currentPage - 1}"
                    ${
                        // 현재페이지가 1페이지면 비활성화
                        currentPage === 1
                        ? "disabled"
                        : ""
                    }
                >
                    이전
                </button>
            `;
            
            // 시작 / 끝 페이지 계산
            let startPage = currentPage - 2;
            let endPage = currentPage + 2;

            // 보정
            if(startPage < 1) {
                startPage = 1;
            }

            if(endPage > totalPage) {
                // 현재페이지가 100페이지
                // 102페이지까지 렌더링됨
                // 근데 최대페이지가 101페이지면, 102페이지는 잘못렌더링
                endPage = totalPage; // 보정
            }

            // 페이지 번호 출력
            for (let page = startPage; page <= endPage; page++) {
                // 현재페이지는 클릭이 안되게 막음
                if (page === currentPage) {
                    myHtml += `<button disabled>${page}</button>`;
                } else {
                    myHtml += `<button data-page=${page}>${page}</button>`;
                }
            }

            // 다음 페이지 버튼(현재 페이지가 끝 페이지면 비활성화)
            myHtml += `
                <button
                    data-page="${currentPage + 1}"
                    ${
                        currentPage === totalPage
                            ? "disabled"
                            : ""
                    }
                >
                    다음
                </button>
            `

            // 마지막 페이지 버튼
            myHtml += `
                <button
                    data-page=${totalPage}
                    ${
                        // 현재 페이지가 끝페이지면 비활성화
                        currentPage === totalPage
                            ? "disabled"
                            : ""
                    }
                >
                    끝
                </button>
            `;

            pagination.innerHTML = myHtml;
        }

        pagination.addEventListener("click", (e) => {
            const target = e.target;

            console.log(target.targetName);
            // target의 태그가 button이 아니면, 리턴
            if (target.targetName !== "BUTTON"){
                return;
            }

            // "data-page"에 담아둔것 꺼내봅시다
            // HTML 태그에 data-{어쩌고}로 담으면
            // 요소.dataset.어쩌고
            let page = target.dataset.page;

            // dataset을 통해서 target의 page를 찾아준다
            page = parseInt(page); // 형변환

            if(page < 1 || page > totalPage) {
                return;
            }

            // 현재페이지
            currentPage = page; // 전역변수 수정
            loadPosts(currentPage); // 재랜더링
        })



        // 게시물 상세보기 클릭
        postList.addEventListener("click", async (e) => {
            const target = e.target;
            // 클릭한 게시글의 data-id
            // dataset.id => dataset을 사용하는 방법 알아내기

            const id = target.dataset.id;
            if (!id){
                return;
            }
            
            // 게시글 리스트를 숨기고, 상세페이지 보이기
            postListContainer.classList.remove("active");
            postDetailContainer.classList.add("active");

            // 로딩 표시 (await 동안 보일 것)
            // --> spinner사용이 일반적이다!..
            detailTitle.innerText = "불러오는 중..";
            detailId.innerText = "";
            detailUserId.innerText = "";
            detailBody.innerText = "게시글을 불러오고 있습니다..";


            // 상세 게시글 요청
            const response = await fetch(`${BASE_URL}/${id}`); // 문자열
            const post = await response.json(); // js객체로 변환

            // 데이터 출력 -- 데이터 입출력 방법 - 비동기화
            detailTitle.innerText = post.title;
            detailId.innerText = post.id;
            detailUserId.innerText = post.user_id;
            detailBody.innerText = post.body;
        });

        // 목록으로 돌아가기 버튼
        // back버튼을 누르면, 디테일컨테이너가 사라지고,
        // 포스트리스트가 나타나게끔 구현해보기
        
        // <button id="backBtn">목록으로</button> - 해당 버튼이 어디있는지 확인
        // const backBtn = document.querySelector("#backBtn");

        backBtn.addEventListener("click", () => {
            postDetailContainer.classList.remove("active");
            postListContainer.classList.add("active");
        });
        // 복습좀 하자


        loadPosts(1);