// *** 날짜(년.월.일) 변화 함수 ***
// [추가 발전사항] 변화하는 날짜에 따라서 플레이어 대사를 정해주면 더욱 재미있을 것 같다
// ex. 7일 _ 이 정도면 금방 지났네 , 10일 _ 아 왜이리 의뢰가 안 오는 거야.
// [추가 발전사항] 명성 스탯에 증가에 따라서 의뢰가 오는 주기를 줄이는 것도 좋을 듯 함.
// [추가 발전사항] 날짜가 얼마나 지났느냐(축적)에 따라서 최종 "취업"에 얼마나 빠르게 갔느냐를 점수로 보여줘도 좋을 것 같음.
function nextDay() {
    let y = parseInt(sessionStorage.getItem("gameyear"));
    let m = parseInt(sessionStorage.getItem("gamemonth"));
    let d = parseInt(sessionStorage.getItem("gameday"));

    const addDaysList = [7,8,9,10];
    const addDays = addDaysList[Math.floor(Math.random() * addDaysList.length)];
    // Math.random()은 0 이상 1 미만의 랜덤 소수 생성함수
    // 이때 *를 한다면 그 값에 따라서 범위가 0 <=  < 값 이렇게 변화함
    // Math.floor()는 소수점을 버리고 정수로 만듦.
    d += addDays;
    // 매일 매일 동일한 날짜의 간격으로 의뢰가 들어온다면 현실적으로 말이 안되므로
    // 언제 의뢰가 들어올지 모른다는 현실 고증을 살리기 위해서 랜덤으로 일 설정

    const daysInMonth = new Date(y, m, 0).getDate(); // 그 달의 총 일수

    if (d > daysInMonth) {
        d = d - daysInMonth;
        m++;
        if (m > 12) {
            m = 1;
            y++;
        }
    }

    sessionStorage.setItem("gameyear", y);
    sessionStorage.setItem("gamemonth", m);
    sessionStorage.setItem("gameday", d);
}