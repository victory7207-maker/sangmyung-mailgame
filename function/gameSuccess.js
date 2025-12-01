function finishMission(isSuccess) {
    const mailId = parseInt(sessionStorage.getItem("currentMissionId"));

    if (!mailId) {
        alert("오류: 진행 중인 의뢰 정보를 찾을 수 없습니다.");
        window.location.href = "../main.html";
        return;
    }

    if (isSuccess) {
        
        const mail = typeof mailDB !== 'undefined' ? mailDB.find(m => m.id === mailId) : null;

        if (mail && mail.effect) {
            let fame = parseInt(sessionStorage.getItem("fame") || 0);
            let money = parseInt(sessionStorage.getItem("money") || 0);
            let karma = parseInt(sessionStorage.getItem("karma") || 0);

            fame += mail.effect.fame;
            money += mail.effect.money;

            if (mail.subtype === "unethical" || (mail.id >= 50 && mail.id <= 59)) {
                karma += 1;
            }

            sessionStorage.setItem("fame", fame);
            sessionStorage.setItem("money", money);
            sessionStorage.setItem("karma", karma);
        }

        if (typeof saveRequestLog === 'function') {
            saveRequestLog(mailId);
        }

        removeMailFromList_Game(mailId);

        alert("작업 성공! 보상이 지급되었습니다.");
        
    } else {

        alert("작업 실패... 의뢰를 완수하지 못했습니다.");
    }

    window.location.href = "../main.html";
}

function removeMailFromList_Game(mailId) {
    let list = JSON.parse(sessionStorage.getItem("mailList") || "[]");
    
    if (typeof mailDB !== 'undefined') {
        const mailIndex = mailDB.findIndex(m => m.id === mailId);
        if (mailIndex !== -1) {
            list = list.filter(id => id !== mailIndex);
        }
    } else {
        list = list.filter(id => id !== mailId);
    }
    
    sessionStorage.setItem("mailList", JSON.stringify(list));
}