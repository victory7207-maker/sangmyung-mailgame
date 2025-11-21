// ===============================
// [turn 증가 함수]
// - '일기 저장' (blog.js)에서 호출됨
// - turn 값을 1 증가시키고
// - 증가된 turn 값을 기반으로 게임 시스템 업데이트(checkTurnEvents) 실행
// - (참고) 생활비 차감, 상점 초기화는 blog.js의 saveDiary()에서 처리됨
// ===============================
function increaseTurn() {
    let turn = parseInt(sessionStorage.getItem("turn"));
    turn ++;
    sessionStorage.setItem("turn", turn);

    checkTurnEvents(turn);
}

// ===============================
// [턴 이벤트 처리 함수]
// - turn이 증가한 이후 실행되는 시스템 업데이트
// - 날짜 증가, 뉴스/광고 갱신, 특정 스토리 이벤트 등 턴 기반 로직 처리
// ===============================

function checkTurnEvents(turn) {
    nextDay();  // 날짜 증가 (nextDay.js)
    
    // (참고) updateStatusBar()는 main.html 로드 시 호출되므로 여기서 호출 불필요
    // 만약 즉각적인 반영이 필요하다면 호출해야 하지만,
    // 지금 구조는 main.html로 돌아갔을 때 갱신된 정보를 보게 됨.
    // updateStatusBar(); 

    // (참고) updateAds(), updateNews()도 main.html 로드 시 호출될 수 있음.
    // 만약 턴 증가 시점에 미리 다음 턴의 광고/뉴스를 정해야 한다면 여기서 호출.
    // 지금 구조에서는 main.html이 로드될 때 랜덤으로 정해지므로, 
    // 여기서 굳이 호출할 필요는 없어 보임.
    // updateAds();
    // updateNews();

    // --- (예시) 특정 턴 이벤트 ---
    // if (turn === 10) triggerSpecialEvent();  
    // if (turn === 10) bossEmail();  

    // --- (예시) 엔딩 조건 체크 ---
    // checkEndings(); 
}