const ads = ["광고1.png","광고2.png","광고3.png","광고4.png","광고5.png",
    "광고6.png","광고7.png","광고8.png","광고9.png","광고10.png",
    "광고11.png","광고12.png","광고13.png","광고14.png","광고15.png",
    "광고16.png","광고17.png","광고18.png","광고19.png","광고20.png"]

function updateAds () {
    const randomIndex = Math.floor(Math.random() * ads.length);
    document.getElementById("adImage").src = `./광고/광고${randomIndex}.png`;
    }

