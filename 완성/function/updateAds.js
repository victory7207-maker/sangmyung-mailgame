const ads = ["광고1.png","광고2.png","광고3.png","광고4.png","광고5.png",
    "광고6.png","광고7.png","광고8.png","광고9.png","광고10.png",
    "광고11.png","광고12.png","광고13.png","광고14.png","광고15.png",
    "광고16.png","광고17.png","광고18.png","광고19.png","광고20.png"]

function updateAds () {
    // 1. 'adImage' ID를 가진 요소를 찾습니다.
    const adImageElement = document.getElementById("adImage");

    // 2. [가장 중요] 요소가 *없다면* (예: blog.html, shop.html)
    //    오류를 내지 말고 함수를 즉시 종료합니다.
    if (!adImageElement) {
        return; 
    }

    // 3. (요소가 있다면 main.html이므로) 아래 코드를 정상 실행합니다.
    const randomIndex = Math.floor(Math.random() * ads.length);
    // 4. [수정] 배열에서 올바른 파일 이름을 가져옵니다.
    const adFileName = ads[randomIndex]; 
    
    adImageElement.src = `./광고/${adFileName}`;
}

// 페이지가 로드되면 updateAds 함수를 실행합니다.
// (blog.html에서 실행되어도 함수 내부의 1번, 2번 단계에서 안전하게 종료됨)
window.addEventListener('load', updateAds);