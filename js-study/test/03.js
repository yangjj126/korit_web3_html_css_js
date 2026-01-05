// 객체 (중괄호) - 키-값 쌍으로 데이터 저장

const scores = {
    math: 80,
    eng: 60,
    kor: 75,
    sci: 50
}


const passed = {};



const entries = Object.entries(scores);
for (let entry of entries) {
    let key = entry[0];
    let value = entry[1];

    if (value >= 80){
        passed[key] = value;
    }
}




// entries() 사용!
const following = { 민수: true, 철수: false,
    지우: true, 나연: true
}
const follower = { 정우: true, 민수: true,
    나연: false
}



const followEachOthers = [];
const followEntries = Object.entries(following);

for (let entry of followEntries) {
    let name = entry[0];
    let isFollowing = entry[1];

    let isFollower = follower[name]; // follower[민수, 철수, 지우, 나연]
}