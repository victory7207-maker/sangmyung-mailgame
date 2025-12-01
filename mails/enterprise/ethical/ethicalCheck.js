function removeMailFromList(mailId) {
    let list = JSON.parse(sessionStorage.getItem("mailList") || "[]");

    // mailDB는 배열이므로 mailId → mailDB index를 찾아야 한다
    // (createMails.js 등 다른 로직과의 호환성을 위해 안전하게 처리)
    if (typeof mailDB !== 'undefined') {
        const mailIndex = mailDB.findIndex(m => m.id === mailId);
        // mailIndex가 유효하면 리스트에서 제거
        if (mailIndex !== -1) {
            list = list.filter(id => id !== mailIndex);
        }
    }

    sessionStorage.setItem("mailList", JSON.stringify(list));
}

function ethicalCheck(mailId, action) {

    const mail = mailDB.find(m => m.id === mailId);
    if (!mail) {
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
        // 1. 이 메일에 연결된 게임이 있는지 확인 (miniGameDB.js 필요)
        const gameFile = (typeof getMiniGameFileName === 'function') ? getMiniGameFileName(mailId) : null;

        if (gameFile) {
            // 2. 게임이 있다면 -> 미니게임 페이지로 이동!
            alert("⚠️ 보안 검증 프로세스를 시작합니다. (미니게임 이동)");
            
            // 현재 수행할 미션 ID를 저장해둠 (게임 끝나고 보상 줄 때 쓰임)
            sessionStorage.setItem("currentMissionId", mailId);
            
            // 게임 페이지로 이동 (경로는 현재 폴더 깊이에 맞춰 조정: ../../../minigames/)
            window.location.href = `../../../minigames/${gameFile}`;
            
            return; // ★ 중요: 여기서 함수 종료! (아래 보상 코드가 실행되지 않음)
        }
        // ▲▲▲ [미니게임 연결 로직 끝] ▲▲▲


        // --- (게임이 없는 일반 의뢰는 즉시 보상 지급 - 기존 로직 유지) ---
        fame += mail.effect.fame;
        money += mail.effect.money;

        sessionStorage.setItem("fame", fame);
        sessionStorage.setItem("karma", karma);
        sessionStorage.setItem("money", money);
        
        // 블로그 기록
        if (typeof saveRequestLog === 'function') saveRequestLog(mailId);

        alert("✔ 요청을 수락했습니다!");
        
        // 메일 리스트에서 삭제
        removeMailFromList(mailId);

    } else if (action === "report") {

        // ✔ 아무 일도 일어나지 않음
        alert("신고가 접수되었지만 별다른 조치는 필요하지 않았습니다.");
        removeMailFromList(mailId);

    } else if (action === "ignore") {

        // ✔ 아무 일도 일어나지 않음
        alert("메일을 무시했습니다.");
        removeMailFromList(mailId);
    }

    // ---------------------------------------
    // 2) 메일창 닫고 뒤로 가기
    // ---------------------------------------
    // (단, 미니게임으로 이동하는 경우에는 뒤로 가기 실행 안 함)
    if (action !== "accept" || !(typeof getMiniGameFileName === 'function' && getMiniGameFileName(mailId))) {
        history.back();
    }
}