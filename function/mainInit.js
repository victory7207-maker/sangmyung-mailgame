// [초기화] _ 날짜, 돈 , 명성 , 업보 , 오염도 , turn

// 0. [턴]
if (!sessionStorage.getItem("turn")) {
    sessionStorage.setItem("turn", 1);
}
// turn이라는게 없다면 turn 정보를 초기화

// 1. [날짜]
if (!sessionStorage.getItem("gameyear")||!sessionStorage.getItem("gamemonth")||!sessionStorage.getItem("gameday")) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    // const를 통해서 재할당 되는 것을 막음!!

    sessionStorage.setItem("gameyear", `${year}`);
    sessionStorage.setItem("gamemonth", `${month}`);
    sessionStorage.setItem("gameday", `${day}`);
}
// 년.월.일이 아예 없다면 [게임에 처음 들어왔다면] 정보를 초기화


// 2. [돈] 
if (!sessionStorage.getItem("money")){
    sessionStorage.setItem("money",200);
}
// [게임에 처음 들어왔다면] 정보를 초기화


// 3. [스탯 초기화 _ 명성/업보/오염도]
if (!sessionStorage.getItem("fame")) {      // 명성
    sessionStorage.setItem("fame", 0);
}
if (!sessionStorage.getItem("karma")) {     // 업보(윤리성)
    sessionStorage.setItem("karma", 0);
}
if (!sessionStorage.getItem("pollution_degree")) {    // 오염도(악성코드 감염도)
    sessionStorage.setItem("pollution_degree", 0);
}
// [게임에 처음 들어왔다면] 정보를 초기화


// 4. [보여지는 상태창 날짜.자본 출력]
// main.html에서는 updateStatusBar 써야해!!!
window.addEventListener('load', updateStatusBar);


// *** [변화 함수] ***
// 날짜 : 턴이 끝날때마다 main이 보여지게 되고 이때 날짜가 변화된 것을 알 수 있다.
// 돈 : 아이템을 구매한다면 -(아이템 가격) , 다음 턴으로 넘어갔다면 -50$,  기업의뢰를 "수락"하거나 개인의뢰를 "성공" 한다면 의뢰비를 받는다.
// 명성 : 메일을 처리했다면 + , 개인은 "수락"한다면 무조건, (기업은 성공 실패에 따라서)
// 업보 : 메일 중에서 비윤리성 메일에 해당되는 메일을 "수락","성공" 한다면...
// 오염도 : 메일 중에서 함정 메일에 해당되는 메일을 "수락", "성공" 한다면...

