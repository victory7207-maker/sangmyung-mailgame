function getMiniGameFileName(mailId) {
    
    // 게임: 해킹 관련 퀴즈
    if (mailId >= 40 && mailId <= 49) {
        return "hacking_quiz.html"; 
    }

    // 게임: 반응 속도 테스트
    if (mailId >= 50 && mailId <= 59) {
        return "reaction_speed.html";
    }

    return null; 
}