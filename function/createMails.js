// -------------------------------------------------------------------------
// 현재 턴(turn)과 직전에 메일이 생성되었던 턴(lastMailTurn)을 불러온다
// turn: 게임의 날짜/진행도를 대신하는 값 (일기장 저장 후 증가함)
// lastMailTurn: 언제 메일을 마지막으로 생성했는지를 기록
// -------------------------------------------------------------------------
const nowTurn = parseInt(sessionStorage.getItem("turn"));
const lastMailTurn = parseInt(sessionStorage.getItem("lastMailTurn"));

// ========================================================================
// [공용 메서드] 메일 1개를 화면(.right)에 추가하는 함수
// ========================================================================
function addMail(title, time, size, from, link) {
    const rightBox = document.querySelector('.right');

    const mailSpan = document.createElement('span');
    mailSpan.classList.add('mails');
    mailSpan.textContent = `[ 제목 : ${title} / 시간 : ${time} / 용량 : ${size}KB / 보낸주소 : ${from} ]`;

    mailSpan.addEventListener('click', () => {
        window.location.href = link;
    })
    rightBox.appendChild(mailSpan);
}

// ========================================================================
// [case 새로운 턴] 새로운 턴일 경우 메일을 새로 뽑아 생성하는 함수
// ========================================================================
function loadMails() {

    const selectedMails = []; // 랜덤으로 뽑힌 메일 객체들 저장
    const used = []; // 중복 방지용 index 저장

    const karma = parseInt(sessionStorage.getItem("karma"));
    const fame = parseInt(sessionStorage.getItem("fame"));

    // --------------------------------------------------------------------
    // 0) 메일DB에서 id 구간별로 별도 DB 분류
    // --------------------------------------------------------------------
    const adsDB = mailDB.filter(m => m.id >= 0 && m.id <= 9);
    const trapDB = mailDB.filter(m => m.id >= 10 && m.id <= 19);
    const ethicalDB = mailDB.filter(m => m.id >= 20 && m.id <= 29);
    const unethicalDB = mailDB.filter(m => m.id >= 30 && m.id <= 39);

    const entEthicalDB = mailDB.filter(m => m.id >= 40 && m.id <= 49);
    const entUnethicalDB = mailDB.filter(m => m.id >= 50 && m.id <= 59);

    // --------------------------------------------------------------------
    // 1) 메일DB에서 중복 없이 count개 뽑아오기
    // --------------------------------------------------------------------
    while (selectedMails.length < 2) {
        const randomAds = adsDB[Math.floor(Math.random() * adsDB.length)];
        if (!used.includes(randomAds.id)) {
            used.push(randomAds.id);
            selectedMails.push(randomAds);
        }
        // 이 상황에서는 randomIndex가 포함되어 있으므로 다시 random수를 뽑으로 가야함.
    }

    const randomOption = Math.random();

    if (randomOption < 0.5) {
    } else {
        const optionType = Math.random();

        let mail;
        if (optionType < 0.5) {
            mail = trapDB[Math.floor(Math.random() * trapDB.length)];
        } else {
            mail = unethicalDB[Math.floor(Math.random() * unethicalDB.length)];
        }

        if (!used.includes(mail.id)) {
            used.push(mail.id);
            selectedMails.push(mail);
        }
    }

    let personal;

    if (karma > 0) {
        personal = unethicalDB;   // 모두 unethical
    } else {
        personal = ethicalDB;     // normal ethical
    }

    for (let i = 0; i < 2; i++) {
        const mail = personal[Math.floor(Math.random() * personal.length)];

        if (used.includes(mail.id)) {
            i--;
            continue;
        }

        used.push(mail.id);
        selectedMails.push(mail);
    }

    let enterpriseCount = 0;

    if (fame >= 15 && fame < 40) enterpriseCount = 1;
    else if (fame >= 40 && fame < 70) enterpriseCount = 2;
    else if (fame >= 70) enterpriseCount = 3;

    for (let i = 0; i < enterpriseCount; i++) {
        const pool = (karma > 0) ? entUnethicalDB : entEthicalDB;
        const mail = pool[Math.floor(Math.random() * pool.length)];

        if (!used.includes(mail.id)) {
            used.push(mail.id);
            selectedMails.push(mail);
        } else {
            i--; // 중복이면 다시 뽑기
        }
    }
    // --------------------------------------------------------------------
    // 2) 화면에 실제 메일 UI 추가
    // --------------------------------------------------------------------

    selectedMails.forEach(mail => {
        addMail(mail.title, mail.time, mail.size, mail.from, mail.link);
    });

    // --------------------------------------------------------------------
    // 3) 이번 턴에서 뽑힌 메일들의 인덱스를 저장해둔다
    //   → 턴이 바뀌지 않으면 복원하여 그대로 보이게 하기 위함
    // --------------------------------------------------------------------
    sessionStorage.setItem("mailList", JSON.stringify(used));

    // --------------------------------------------------------------------
    // 4) 이번 턴을 '메일 생성 턴'으로 기록
    //   → 다음 방문 시 "턴이 바뀌었는지" 체크할 기준이 된다.
    // --------------------------------------------------------------------
    sessionStorage.setItem("lastMailTurn", nowTurn);
}

// ========================================================================
// [case 동일 턴] 같은 턴일 경우 기존에 뽑혀 저장된 메일을 복원하는 함수
// ========================================================================
function restoreMails() {
    const saved = sessionStorage.getItem("mailList");
    if (!saved) return; // 저장된 메일 없음

    const mailIds = JSON.parse(saved);   // [21, 30, 35, ...] 이런 식으로 id 배열

    mailIds.forEach(id => {
        const mail = mailDB.find(m => m.id === id);
        if (mail) {
            addMail(mail.title, mail.time, mail.size, mail.from, mail.link);
        }
    });
}

// ========================================================================
// case 분류 
// 1. [lastMailTurn이 null이라면 첫 방문] loadMails()
// 2. [nowTurn이 lastMailTurn과 다르다면 턴이 바뀌었으므로] loadMails()
// 3. [nowTurn과 lastMailTurn이 같으면 턴이 동일하므로 ] restoreMails()
// ========================================================================
window.addEventListener('load', () => {

    // lastMailTurn이 없으면 = 첫 방문 → 새로 생성
    if (isNaN(lastMailTurn)) {
        loadMails();
        return;
    }

    // 턴이 바뀌었으면 → 새로운 메일 생성
    if (nowTurn !== lastMailTurn) {
        loadMails();
    }

    // 턴이 같으면 → 기존 메일 복원
    else {
        restoreMails();
    }
});

// html로 이어진
// <button onclick="acceptMail(mailId)">수락한다</button>
// <button onclick="rejectMail(mailId)">거절한다</button>
// <button onclick="reportMail(mailId)">신고한다</button>
// 다음으로 만들어야 할 구조
// addMails에 mail을 생성할때 각부분들에 대해서 link가 되면 들어가도록 설정하였다.
// 이때 각각 주어진 html을 통해서 내부로 들어가지게 되는데 그 내부에서
// 처리되는 결과 ->
//  case 개인
//  under_case 일반 -> 수락 (fame 증가) , 다른 선택지 (아무일도 없음)
//  under_case 함정 -> 수락 (pollution_degree 증가) , 다른 선택지 (아무일도 없음)
//  under_case 비윤리성 -> 수락 (fame 증가 + karma가 증가) , 신고 (karma가 감소) , 거절 (아무 일도 안생김)
//  선택지 (수락한다 / 거절한다 / 신고한다)

//  case 기업
//  under_case 일반 -> 수락 (미니게임 _ 성공 실패에 따른 변화) , 신고 (아무일도 없음)
//  under_case 비윤리성 -> 수락 (미니게임 _ 성공 실패에 따른 변화) , 신고 (karma 감소)

//  case 광고
//  under_case 일반 -> 아무일도 안생김
//  under_case 비윤리성 -> 신고 (karma 감소)

// 로직은 이런식으로 흘러갈 것이다. 따라서 플레이어가 어떤 선택을 했느냐에따라서
// 값이 변화하는 function을 만들어야 한다.
//  이러한 구조를 생각했을때 수치 변화 함수를 만드는게 좋을 것 같아.
//  어떠한 과정으로 어떠한 변수를 변화시키는 것은 공통된 작업이니까 이를 함수로 빼는거지
//  수치변화함수 (변화되어야 할 변수 이름 , 변화되어야 할 수치)

//  또한 현재 구조는 단순히 메일 70개 중에서 랜덤으로 메일을 뽑아서 사용하도록 되어있는데
//  메일 종류에 따라서 기본적으로 광고2 개인2 기업은 조건부에 따라서 증가
//  이런식으로 진행 될 예정이므로 loadMails를 3단계로 세분화하면 좋을 것 같음.
//  현재는 database.js로 했지만 pesonal_database.js / ads_database.js / ent_databse.js로 나누어서
//  위 함수를 수행하면 괜찮지 않을까 하고 생각됨.
