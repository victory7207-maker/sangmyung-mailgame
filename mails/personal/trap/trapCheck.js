function removeMailFromList(mailId) {
    let list = JSON.parse(sessionStorage.getItem("mailList") || "[]");

    // mailDB는 배열이므로 mailId → mailDB index를 찾아야 한다
    const mailIndex = mailDB.findIndex(m => m.id === mailId);

    // mailIndex가 mailList에 있으면 제거
    list = list.filter(id => id !== mailIndex);
    sessionStorage.setItem("mailList", JSON.stringify(list));
}

function trapCheck(mailId, action) {
    // 현재 스탯 불러오기
    let karma = parseInt(sessionStorage.getItem("karma"));
    let pollution = parseInt(sessionStorage.getItem("pollution_degree"));

    // 선택지에 따라 분기
    if (action === "accept") {
        // 첨부파일을 확인한다 → 오염도 증가
        pollution++;
        sessionStorage.setItem("pollution_degree", pollution);
        alert("악성코드에 감염되었습니다. 오염도가 증가합니다.");
    }

    else if (action === "report") {
        // 신고한다 → 업보 감소
        karma--;
        sessionStorage.setItem("karma", karma);
        alert("신고 완료. 윤리 행동으로 업보가 감소합니다.");
    }

    else if (action === "another") {
        alert("메일이 삭제됩니다.");
    }

    removeMailFromList(mailId);

    // 메일창 닫고 이전 화면으로 돌아가기
    history.back();
}