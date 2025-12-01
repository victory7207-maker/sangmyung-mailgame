// 수리비 계산 로직
function getComputerRepairPrice() {
    let repairCount = parseInt(sessionStorage.getItem("computerRepairCount")) || 0;

    if (repairCount === 0) {
        return 100;
    } else if (repairCount === 1) {
        return 150;
    } else { 
        return 200;
    }
}

// 상점 가격 표시 업데이트
function updateShopDisplay() {
    const repairPriceEl = document.getElementById("computer-repair-price");
    if (repairPriceEl) {
        const price = getComputerRepairPrice();
        repairPriceEl.textContent = `컴퓨터 수리 (${price}$)`;
    }
}

window.addEventListener('load', updateShopDisplay);


// 상점 아이템 구매 로직
function buyItem(itemId) {
    let money = parseInt(sessionStorage.getItem("money")) || 0;
    let itemPurchased = sessionStorage.getItem("itemPurchasedThisTurn") === "true";

    // 1. 이미 구매했는지 확인
    if (itemPurchased) {
        showShopMessage("이번 턴에는 이미 아이템을 구매했습니다.");
        return;
    }

    let price = 0;
    let itemName = "";

    // 아이템 가격 확인
    switch (itemId) {
        case 'computer_repair':
            price = getComputerRepairPrice();
            itemName = "컴퓨터 수리";
            break;
        case 'blog_template_1':
            price = 10;
            itemName = "Forest Brid 테마";
            break;
        case 'blog_template_2':
            price = 15;
            itemName = "Ocean Shiba 테마";
            break;
        case 'blog_template_3':
            price = 20;
            itemName = "Urban Orange Cat 테마";
            break;
        default:
            showShopMessage("알 수 없는 아이템입니다.");
            return;
    }

    // 2. [수정] 단순히 물건 살 돈이 있는지만 확인 (생활비 제한 삭제)
    if (money < price) {
        showShopMessage("자금이 부족합니다!");
        return;
    }

    // 3. 구매 진행
    changeStat("money", -price);
    applyItemEffect(itemId);
    sessionStorage.setItem("itemPurchasedThisTurn", "true");
    
    showShopMessage(`${itemName} 구매 완료! (남은 돈: ${sessionStorage.getItem("money")}$)`);
    updateShopDisplay();
}

// 아이템 효과 적용
function applyItemEffect(itemId) {
    switch (itemId) {
        case 'computer_repair':
            let repairCount = parseInt(sessionStorage.getItem("computerRepairCount")) || 0;
            sessionStorage.setItem("computerRepairCount", repairCount + 1);
            changeStat("pollution_degree", -1);
            break;
        case 'blog_template_1':
            sessionStorage.setItem('blogTheme', 'theme1');
            break;
        case 'blog_template_2':
            sessionStorage.setItem('blogTheme', 'theme2');
            break;
        case 'blog_template_3':
            sessionStorage.setItem('blogTheme', 'theme3');
            break;
    }
}

// 알림 메시지
function showShopMessage(message) {
    const msgEl = document.getElementById("shop-message");
    if (msgEl) {
        msgEl.textContent = message;
        msgEl.style.display = 'block';
        setTimeout(() => { msgEl.style.display = 'none'; }, 3000);
    } else {
        alert(message);
    }
}