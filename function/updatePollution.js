window.addEventListener("load", () => {

    const pollution = parseInt(sessionStorage.getItem("pollution_degree") || "0")
    const logo = document.querySelector(".logo");
    const warningText = document.querySelector("#warning-text");
    const warnings = [
        "시스템 이상 감지... 치료가 시급합니다.",
        "보안 위험! 즉시 조치가 필요합니다.",
        "GOOGOO가 감염을 추적 중..."
    ]

    function glitch() {
            const originalBackground = logo.style.background; // 원래 배경 저장
            logo.style.background = "none";

            logo.style.animation = "glitchAnim 4s";

            logo.classList.add("pollution");


            setTimeout(() => {
                logo.style.animation = "";
                logo.classList.remove("pollution");
                logo.style.background = originalBackground;
            }, 300);


            const next = Math.floor(Math.random() * 2700) + 3000;
            setTimeout(glitch, next);
        }


    if (pollution >= 1) {
        glitch();
    }


    if (pollution >= 2) {
        setInterval(() => {
            document.body.style.animation = "shakeScreen 0.15s";

            setTimeout(() => {
                document.body.style.animation = "";
            }, 200);

        }, Math.floor(Math.random() * 4000) + 5000);

        setInterval(() => {
            const msg = warnings[Math.floor(Math.random() * warnings.length)];
            warningText.innerText = msg;
            warningText.style.opacity = "1";
            setTimeout(() => {
                warningText.style.opacity = "0";
            }, 1500);
        }, 2000);
    }
})