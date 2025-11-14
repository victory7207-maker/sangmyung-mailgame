// ===============================
// [turn 증가 함수]
// - 플레이어가 한 턴을 소모하는 행동(예: 일기 저장)을 하면 실행
// - turn 값을 1 증가시키고
// - 증가된 turn 값을 기반으로 게임 시스템 업데이트(checkTurnEvents) 실행
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
// - 날짜 랜덤으로 증가
// - 광고및 뉴스 새롭게 갱신
// - 오염도에 따른 이벤트 처리
// - 새로운 메일들이 들어오도록 처리
// ===============================

function checkTurnEvents(turn) {
    nextDay();  // 날짜 증가
    
    updateStatusBar(); // 날짜 및 자금 변경에 따른 상태바 변경

    updateAds();  // 광고 갱신

    updateNews();  // 뉴스 갱신

    if (turn === 10) triggerSpecialEvent();  // 특정 턴에서만 발동하는 조건 체크
    if (turn === 10) bossEmail();  // 특정 턴에서만 발동하는 조건 체크

    checkEndings(); // 엔딩 조건 체크
}