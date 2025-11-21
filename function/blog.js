// 블로그 테마 적용
function applyBlogTheme() {
    const theme = sessionStorage.getItem('blogTheme');
    if (!theme) return;

    const body = document.body;
    const headerBanner = document.querySelector('.header-banner');
    const profilePic = document.querySelector('.profile-pic');

    let headerImg = '';
    let bgColor = '';
    let font = '';
    let profileIcon = ''; // (플레이스홀더)

    switch (theme) {
        case 'theme1': // 테마3 (예시)
            headerImg = '';
            bgColor = '#f0fff0'; // 연한 녹색
            font = "'Georgia', serif";
            profileIcon = '';
            break;
        case 'theme2': // 테마2 (예시)
            headerImg = '';
            bgColor = '#f0f8ff'; // 연한 파란색
            font = "'Arial', sans-serif";
            profileIcon = '';
            break;
        case 'theme3': // 테마1 (예시)
            headerImg = '';
            bgColor = '#fffaf0'; // 연한 노란색
            font = "'Courier New', monospace";
            profileIcon = '';
            break;
    }

    if (headerBanner) headerBanner.style.backgroundImage = `url('${headerImg}')`;
    if (body) body.style.backgroundColor = bgColor;
    if (body) body.style.fontFamily = font;
    if (profilePic) profilePic.innerHTML = `<img src="${profileIcon}" alt="Profile Pic" style="width:100%; height:100%; border-radius: 50%;">`;
}

// 일기장 초기화
function initDiary() {
    const contentMain = document.querySelector('.content-main');
    if (!contentMain) return;

    contentMain.innerHTML = `
        <article class="post">
            <h2 class="post-title">오늘의 일기</h2>
            <div class="post-body">
                <textarea id="diary-textarea" placeholder="오늘 있었던 일을 기록해보세요..."></textarea>
                <button id="save-diary-btn">일기 저장 (턴 넘기기)</button>
                <p id="diary-message" style="color: red; display: none;"></p>
            </div>
            <div id="diary-history">
                <h3>지난 일기</h3>
                <ul id="diary-list">
                    <!-- 저장된 일기가 여기에 추가됩니다 -->
                </ul>
            </div>
        </article>
    `;

    const saveBtn = document.getElementById('save-diary-btn');
    const messageEl = document.getElementById('diary-message');
    
    // 자금 확인하여 버튼 활성화/비활성화
    checkFundsForDiary(saveBtn, messageEl);

    saveBtn.addEventListener('click', saveDiary);
    
    // 저장된 일기 불러오기
    loadDiaryHistory();
}

// 일기 저장을 위한 자금 확인
function checkFundsForDiary(saveBtn, messageEl) {
    let money = parseInt(sessionStorage.getItem("money"));
    if (money < 50) {
        if (saveBtn) saveBtn.disabled = true;
        if (messageEl) {
            messageEl.textContent = "생활비(50$)가 부족하여 턴을 넘길 수 없습니다.";
            messageEl.style.display = 'block';
        }
    } else {
        if (saveBtn) saveBtn.disabled = false;
        if (messageEl) messageEl.style.display = 'none';
    }
}

// 일기 저장 및 턴 넘기기
function saveDiary() {
    let money = parseInt(sessionStorage.getItem("money"));
    if (money < 50) {
        console.log("자금 부족, 턴 넘기기 실패");
        return;
    }

    const diaryText = document.getElementById('diary-textarea').value;
    
    // 1. 생활비 차감
    changeStat("money", -50);
    console.log("생활비 50$ 차감");

    // 2. 상점 구매 제한 초기화
    sessionStorage.setItem("itemPurchasedThisTurn", "false");
    console.log("상점 구매 제한 초기화");

    // 3. 일기 저장 (sessionStorage)
    let diaries = JSON.parse(sessionStorage.getItem("diaries") || "[]");
    const y = sessionStorage.getItem("gameyear");
    const m = sessionStorage.getItem("gamemonth");
    const d = sessionStorage.getItem("gameday");
    diaries.push({ date: `${y}-${m}-${d}`, content: diaryText });
    sessionStorage.setItem("diaries", JSON.stringify(diaries));

    // 4. 턴 증가 (afterWriteDiary.js의 함수 호출)
    console.log("턴 증가 시작...");
    increaseTurn(); // 이 함수가 checkTurnEvents()를 호출함
    
    // 5. 메인 화면으로 이동
    // checkTurnEvents()가 비동기 로직을 포함할 수 있으므로,
    // 약간의 딜레이 후 이동하거나, increaseTurn이 콜백을 받도록 수정해야 할 수 있음.
    // 여기서는 턴 증가 로직이 모두 동기적이라고 가정하고 바로 이동
    alert("일기가 저장되었습니다. 다음 날로 이동합니다."); // (임시) alert 대신 좋은 UI 필요
    window.location.href = "main.html";
}

// 지난 일기 불러오기
function loadDiaryHistory() {
    const diaryListEl = document.getElementById('diary-list');
    if (!diaryListEl) return;
    
    let diaries = JSON.parse(sessionStorage.getItem("diaries") || "[]");
    diaryListEl.innerHTML = ""; // 목록 초기화
    
    diaries.slice().reverse().forEach(entry => { // 최근 일기부터 표시
        const li = document.createElement('li');
        li.innerHTML = `<strong>[${entry.date}]</strong><p>${entry.content.replace(/\n/g, '<br>')}</p>`;
        diaryListEl.appendChild(li);
    });
}
window.addEventListener('load', () => {
    applyBlogTheme();
    initDiary();
});