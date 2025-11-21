if(sessionStorage.getItem('tutorialRead')===null){
    sessionStorage.setItem('tutorialRead', 'false');
}
// 튜토리얼을 읽지 않았다면 들어가지 못하므로 기존 값을 false로 설정

// 현재는 getElementsByClassName을 통해서 설정하였기 때문에 복수 형태 중에서 제일 첫 번째인
// [0]으로 설정하여 'click'이 일어났을때 'function()'이 작용하도록 설정함.
document.getElementsByClassName('tutorial')[0].addEventListener('click',function() {
    sessionStorage.setItem('tutorialRead', 'true');
});

document.getElementsByClassName('start')[0].addEventListener('click', function(event) {
    if (sessionStorage.getItem('tutorialRead') !== 'true'){
        alert("튜토리얼을 먼저 읽어주세요!");
        event.preventDefault();
    }
});


//이를 querySelector('.tutorial') querySelector('.start')로 바꾸어도 가능!!
// 또한 function을 대신해서 =>를 사용해도 가능!! 


// P. 브라우저 내부 뒤로가기를 누르면 자체적으로 새로운 창이 생성되면서 
// 기존 코드 tutorialRead가  false로 다시 변화함. 
// 이를 설정하기 위해서는 sessionStorage로 설정해야함. localStorage는 영구적이므로 게임을 다시 시작하여도 문제가 생김.


// sessionStorage.setItem(key,value) 저장
// sessionStorage.getItem(key) 불러오기
// sessionStorage.removeItem(key) 삭제

//화면 고정하는 방법
//function openFixedWindow() {
//    const url="main.html";
//    const features ="width=1920,height=1080,resiable=no,menubar=no,toolbar=no,location=no,status=no";
//    window.open(url, "GameWindow",features);
//};