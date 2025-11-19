// --- (수정됨) 수리비 계산 로직을 별도 함수로 분리 ---
// computerRepairCount가 null일 경우 0으로 처리(parseInt(...) || 0)하여 NaN 버그 수정
function getComputerRepairPrice() {
    let repairCount = parseInt(sessionStorage.getItem("computerRepairCount")) || 0;

    if (repairCount === 0) {
        return 100;
    } else if (repairCount === 1) {
        return 150;
    } else { // 2회 이상
        return 200;
    }
}

// --- (신규) 페이지 로드 시 상점 아이템 가격 동적 표시 ---
function updateShopDisplay() {
    const repairPriceEl = document.getElementById("computer-repair-price");
    if (repairPriceEl) {
        const price = getComputerRepairPrice();
        repairPriceEl.textContent = `컴퓨터 수리 (${price}$)`;
    }

    // (참고) 나중에 다른 아이템 가격도 동적으로 바꾼다면 여기에 추가
}

// --- (신규) 페이지가 로드되면 updateShopDisplay 함수 실행 ---
window.addEventListener('load', updateShopDisplay);


// 상점 아이템 구매 로직
function buyItem(itemId) {
    let money = parseInt(sessionStorage.getItem("money"));
    let itemPurchased = sessionStorage.getItem("itemPurchasedThisTurn") === "true";

    if (itemPurchased) {
        showShopMessage("이번 턴에는 이미 아이템을 구매했습니다.");
        console.log("이번 턴에는 이미 아이템을 구매했습니다.");
        return;
    }

    let price = 0;
    let itemName = "";

    switch (itemId) {
        case 'computer_repair':
            // --- (수정됨) 분리된 가격 계산 함수 사용 ---
            price = getComputerRepairPrice();
            itemName = "컴퓨터 수리";
            break;

        case 'blog_template_1':
            price = 10;
            itemName = "블로그 템플릿 1";
            break;

        case 'blog_template_2':
            price = 15;
            itemName = "블로그 템플릿 2";
            break;

        case 'blog_template_3':
            price = 20;
            itemName = "블로그 템플릿 3";
            break;
        default:
            showShopMessage("알 수 없는 아이템입니다.");
            return;
    }

    if (money >= price) {
        // 돈 차감
        changeStat("money", -price);

        // 구매 효과 적용
        applyItemEffect(itemId);

        // 구매 제한 설정
        sessionStorage.setItem("itemPurchasedThisTurn", "true");

        showShopMessage(`${itemName} 아이템을 구매했습니다! (남은 자금: ${sessionStorage.getItem("money")}$)`);
        console.log(`${itemName} 구매 완료`);

        // --- (신규) 구매 후 가격 즉시 업데이트 ---
        updateShopDisplay();

    } else {
        showShopMessage("자금이 부족합니다!");
        console.log("자금 부족");
    }
}

// 아이템 효과 적용
function applyItemEffect(itemId) {
    switch (itemId) {
        case 'computer_repair':
            // --- (수정됨) repairCount 로직을 getComputerRepairPrice와 동일하게 (|| 0) ---
            let repairCount = parseInt(sessionStorage.getItem("computerRepairCount")) || 0;
            sessionStorage.setItem("computerRepairCount", repairCount + 1);
            changeStat("pollution_degree", -1); // 오염도 1 차감
            console.log("오염도가 1 차감되었습니다.");
            break;

        case 'blog_template_1':
            sessionStorage.setItem('blogTheme', 'theme1');
            console.log("블로그 테마가 1로 변경되었습니다.");
            break;

        case 'blog_template_2':
            sessionStorage.setItem('blogTheme', 'theme2');
            console.log("블로그 테마가 2로 변경되었습니다.");
            break;

        case 'blog_template_3':
            sessionStorage.setItem('blogTheme', 'theme3');
            console.log("블로그 테마가 3으로 변경되었습니다.");
            break;
    }
}

// alert() 대용 임시 메시지 함수
function showShopMessage(message) {
    const msgEl = document.getElementById("shop-message");
    if (msgEl) {
        msgEl.textContent = message;
        msgEl.style.display = 'block';
        setTimeout(() => { msgEl.style.display = 'none'; }, 3000);
    }
}