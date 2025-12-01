const news = ["뉴스1.jpeg","뉴스2.jpeg","뉴스3.jpeg","뉴스4.jpeg","뉴스5.jpeg",
    "뉴스6.jpeg","뉴스7.jpeg","뉴스8.jpeg","뉴스9.jpeg","뉴스10.jpeg",
    "뉴스11.jpeg","뉴스12.jpeg","뉴스13.jpeg","뉴스14.jpeg","뉴스15.jpeg",
    "뉴스16.jpeg","뉴스17.jpeg","뉴스18.jpeg","뉴스19.jpeg","뉴스20.jpeg"]

function updateNews () {
    // 1. 'newsImage' ID를 가진 요소를 찾습니다.
    const newsImageElement = document.getElementById("newsImage");

    // 2. [가장 중요] 요소가 *없다면* 함수를 즉시 종료합니다.
    if (!newsImageElement) {
        return;
    }

    // 3. (요소가 있다면) 아래 코드를 정상 실행합니다.
    const randomIndex = Math.floor(Math.random() * news.length);
    // 4. [수정] 배열에서 올바른 파일 이름을 가져옵니다.
    const newsFileName = news[randomIndex];

    newsImageElement.src = `./뉴스/${newsFileName}`;
}

// 페이지가 로드되면 updateNews 함수를 실행합니다.
window.addEventListener('load', updateNews);