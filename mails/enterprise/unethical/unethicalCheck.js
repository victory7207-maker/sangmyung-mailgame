function removeMailFromList(mailId) {
    let list = JSON.parse(sessionStorage.getItem("mailList") || "[]");

    // mailDB는 배열이므로 mailId → mailDB index를 찾아야 한다
    if (typeof mailDB !== 'undefined') {
        const mailIndex = mailDB.findIndex(m => m.id === mailId);
        if (mailIndex !== -1) {
            list = list.filter(idx => idx !== mailIndex);
        }
    }

    sessionStorage.setItem("mailList", JSON.stringify(list));
}

function unethicalCheck(mailId, action) {

    const mail = mailDB.find(m => m.id === mailId);
    if (!mail) {
        console.error("메일 ID를 찾을 수 없습니다:", mailId);
        return;
    }

    // 현재 스탯 불러오기
    let fame = parseInt(sessionStorage.getItem("fame") || 0);
    let karma = parseInt(sessionStorage.getItem("karma") || 0);
    let money = parseInt(sessionStorage.getItem("money") || 0);

    // ---------------------------------------
    // 1) action 분기
    // ---------------------------------------
    if (action === "accept") {

        // ▼▼▼ [미니게임 연결 로직 추가] ▼▼▼
        const gameFile = (typeof getMiniGameFileName === 'function') ? getMiniGameFileName(mailId) : null;

        if (gameFile) {
            alert("⚠️ 불법 작업을 시작합니다... (미니게임 이동)");
            
            sessionStorage.setItem("currentMissionId", mailId);
            window.location.href = `../../../minigames/${gameFile}`;
            
            return; // ★ 중요: 게임하러 가니까 여기서 종료!
        }
        // ▲▲▲ [미니게임 연결 로직 끝] ▲▲▲


        // --- (게임이 없는 일반 의뢰는 즉시 보상 지급 - 기존 로직 유지) ---
        fame += mail.effect.fame;
        money += mail.effect.money;

        // ✔ subtype이 unethical인 경우 업보 증가 (기존 로직 유지)
        if (mail.subtype === "unethical") {
            karma++;
        }

        sessionStorage.setItem("fame", fame);
        sessionStorage.setItem("karma", karma);
        sessionStorage.setItem("money", money);

        if (typeof saveRequestLog === 'function') saveRequestLog(mailId);

        alert("✔ 요청을 수락했습니다!");
        removeMailFromList(mailId);

    } else if (action === "report") {

        // ✔ 신고 시 업보 감소 (기존 로직 유지)
        karma--;
        sessionStorage.setItem("karma", karma);
        alert("신고가 접수되었습니다. 당신의 행동은 큰 도움이 되었습니다!");
        removeMailFromList(mailId);

    } else if (action === "ignore") {

        // ✔ 아무 일도 일어나지 않음
        alert("메일을 무시했습니다.");
        removeMailFromList(mailId);
    }

    // ---------------------------------------
    // 2) 메일창 닫고 뒤로 가기
    // ---------------------------------------
    if (action !== "accept" || !(typeof getMiniGameFileName === 'function' && getMiniGameFileName(mailId))) {
        history.back();
    }
}