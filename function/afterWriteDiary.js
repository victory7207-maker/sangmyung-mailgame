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
}