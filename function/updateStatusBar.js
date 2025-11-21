// ===============================
// [상태바 변경 함수]
// - 일기장을 쓰고 다음 turn으로 넘어가야 한다면.
// - 변경된 정보를 바탕으로 년,월,일,자금 정보를 변경한다.
// ===============================
function updateStatusBar() {
    let y = sessionStorage.getItem("gameyear");
    let m = sessionStorage.getItem("gamemonth");
    let d = sessionStorage.getItem("gameday");
    let money = sessionStorage.getItem("money");

    document.querySelector('.status').textContent =
        `[ 날짜 : ${y}년 ${m}월 ${d}일 / 자금 : ${money}$ ]`;
}

// 페이지 로드될 때 자동 실행
window.addEventListener("load", updateStatusBar);