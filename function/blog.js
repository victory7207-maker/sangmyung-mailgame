// 1. 탭 전환 기능
function switchTab(tabName, clickedElement) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    if (clickedElement) {
        const menuItems = document.querySelectorAll('.widget-content ul li');
        menuItems.forEach(item => item.classList.remove('active'));
        clickedElement.classList.add('active');
    }

    if (tabName === 'requests') {
        loadRequestLog();
    }
}

// 2. 의뢰 기록 불러오기
function loadRequestLog() {
    const container = document.getElementById('requests-list-container');
    if (!container) return;

    const logs = JSON.parse(sessionStorage.getItem('requestLog') || "[]");

    if (logs.length === 0) {
        container.innerHTML = `<div class="empty-request" style="text-align:center; padding:20px; color:#999;">아직 해결한 의뢰가 없습니다.</div>`;
        return;
    }

    container.innerHTML = "";
    
    logs.slice().reverse().forEach(log => {
        const div = document.createElement('div');
        div.className = 'request-item';
        div.style.marginBottom = "15px"; 
        div.style.padding = "15px";
        div.style.border = "1px solid #ddd";
        div.style.borderRadius = "8px";
        div.style.backgroundColor = "#fdfdfd";

        div.innerHTML = `
            <div class="request-title" style="font-weight:bold; font-size:1.1rem; color:#2c3e50; margin-bottom:8px;">✅ 의뢰: ${log.title}</div>
            <div class="request-content" style="color:#555;">${log.content}</div>
        `;
        container.appendChild(div);
    });
}

// 3. 블로그 테마 적용 (프로필 사진 변경 기능 추가됨)
function applyBlogTheme() {
    const theme = sessionStorage.getItem('blogTheme');
    if (!theme) return;

    const body = document.body;
    const headerBanner = document.querySelector('.header-banner');
    const profilePic = document.querySelector('.profile-pic');

    let headerImg = '';
    let bgColor = '';
    let font = '';
    
    // 기본 프로필 아이콘 (테마가 없을 때거나 이미지가 없을 때 대비)
    let profileIcon = './img/profile.png'; 

    switch (theme) {
        case 'theme1':
            headerImg = './img/background1.jpg';
            bgColor = '#e8f5e9';
            font = "'Batang', 'Times New Roman', serif";
            profileIcon = './img/profile1.jpg'; 
            break;

        case 'theme2':
            headerImg = './img/background2.jpg';
            bgColor = '#e3f2fd';
            font = "'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";
            profileIcon = './img/profile2.jpg'; 
            break;

        case 'theme3':
            headerImg = './img/background3.jpg';
            bgColor = '#fff3e0';
            font = "'Gulim', 'Comic Sans MS', sans-serif";
            profileIcon = './img/profile3.jpg'; 
            break;
    }

    // 1. 헤더 이미지 변경
    if (headerBanner) headerBanner.style.backgroundImage = `url('${headerImg}')`;
    
    // 2. 배경색 및 폰트 변경
    if (body) {
        body.style.backgroundColor = bgColor;
        body.style.fontFamily = font;
    }

    // 3. 프로필 사진 변경
    if (profilePic) {
        // 이미지 태그로 내용을 교체합니다.
        profilePic.innerHTML = `<img src="${profileIcon}" alt="Profile" style="width:100%; height:100%; object-fit:cover; border-radius: 50%;">`;
    }
}

// 4. 일기장 초기화
function initDiary() {
    const saveBtn = document.getElementById('save-diary-btn');
    if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.removeEventListener('click', saveDiary);
        saveBtn.addEventListener('click', saveDiary);
    }
    loadDiaryHistory();
}

// 5. 일기 저장 및 턴 넘기기 (수정됨: 무조건 50$ 차감)
function saveDiary() {
    const diaryText = document.getElementById('diary-textarea').value;
    
    // [수정] 자금 확인 없이 무조건 50$ 차감 (마이너스 허용)
    changeStat("money", -50);

    // 상점 구매 제한 초기화
    sessionStorage.setItem("itemPurchasedThisTurn", "false");

    // 일기 저장
    let diaries = JSON.parse(sessionStorage.getItem("diaries") || "[]");
    const y = sessionStorage.getItem("gameyear") || 2024;
    const m = sessionStorage.getItem("gamemonth") || 1;
    const d = sessionStorage.getItem("gameday") || 1;

    diaries.push({ date: `${y}-${m}-${d}`, content: diaryText });
    sessionStorage.setItem("diaries", JSON.stringify(diaries));

    // 턴 증가
    increaseTurn(); 
    
    alert("일기가 저장되었습니다. 생활비 50$가 차감되고 다음 날로 이동합니다.");
    window.location.href = "main.html";
}

// 6. 지난 일기 불러오기
function loadDiaryHistory() {
    const diaryListEl = document.getElementById('diary-list');
    if (!diaryListEl) return;
    
    let diaries = JSON.parse(sessionStorage.getItem("diaries") || "[]");
    diaryListEl.innerHTML = ""; 
    
    diaries.slice().reverse().forEach(entry => { 
        const li = document.createElement('li');
        li.innerHTML = `<strong>[${entry.date}]</strong><p>${entry.content.replace(/\n/g, '<br>')}</p>`;
        diaryListEl.appendChild(li);
    });
}

window.addEventListener('load', () => {
    applyBlogTheme();
    initDiary();
});