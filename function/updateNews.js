const news = ["뉴스1.png","뉴스2.png","뉴스3.png","뉴스4.png","뉴스5.png",
    "뉴스6.png","뉴스7.png","뉴스8.png","뉴스9.png","뉴스10.png",
    "뉴스11.png","뉴스12.png","뉴스13.png","뉴스14.png","뉴스15.png",
    "뉴스16.png","뉴스17.png","뉴스18.png","뉴스19.png","뉴스20.png"]

function updateNews () {
    const randomIndex = Math.floor(Math.random() * news.length);
    document.getElementById("adImage").src = `./뉴스/뉴스${randomIndex}.png`;
    }

