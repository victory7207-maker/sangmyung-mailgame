function changeStat(statName, amount) {
    const current = parseInt(sessionStorage.getItem(statName));
    const updated = current + amount;
    sessionStorage.setItem(statName, updated);
}



// <button onclick="acceptMail(mailId)">수락한다</button>
// <button onclick="rejectMail(mailId)">거절한다</button>
// <button onclick="reportMail(mailId)">신고한다</button>