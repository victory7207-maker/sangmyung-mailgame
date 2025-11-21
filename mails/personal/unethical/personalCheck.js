function removeMailFromList(mailId) {
    let list = JSON.parse(sessionStorage.getItem("mailList") || "[]");

    // mailDB는 배열이므로 mailId → mailDB index를 찾아야 한다
    const mailIndex = mailDB.findIndex(m => m.id === mailId);

    // mailIndex가 mailList에 있으면 제거
    list = list.filter(idx => idx !== mailIndex);

    sessionStorage.setItem("mailList", JSON.stringify(list));
}

function personalCheck(mailId, action) {

    const mail = mailDB.find(m => m.id === mailId);
    if (!mail) {
        console.error("메일 ID를 찾을 수 없습니다:", mailId);
        return;
    }

    // 현재 스탯 불러오기
    let fame = parseInt(sessionStorage.getItem("fame"));
    let karma = parseInt(sessionStorage.getItem("karma"));
    let money = parseInt(sessionStorage.getItem("money"));

    // ---------------------------------------
    // 1) action 분기
    // ---------------------------------------
    if (action === "accept") {

        // ✔ 명성/돈 기본 증가
        fame += mail.effect.fame;
        money += mail.effect.money;  // 예시값, 네가 정한 금액으로 수정 가능

        // ✔ subtype이 unethical인 경우 업보 감소
        if (mail.subtype === "unethical") {
            karma++;
        }

        sessionStorage.setItem("fame", fame);
        sessionStorage.setItem("karma", karma);
        sessionStorage.setItem("money", money);

        alert("✔ 요청을 수락했습니다!");

    } else if (action === "report") {

        // ✔ 아무 일도 일어나지 않음
        karma--;
        sessionStorage.setItem("karma",karma);
        alert("신고가 접수되었습니다. 당신의 행동은 큰 도움이 되었습니다!");

    } else if (action === "ignore") {

        // ✔ 아무 일도 일어나지 않음
        alert("메일을 무시했습니다.");
    }

    removeMailFromList(mailId);

    // ---------------------------------------
    // 2) 메일창 닫고 뒤로 가기
    // ---------------------------------------
    history.back();
}