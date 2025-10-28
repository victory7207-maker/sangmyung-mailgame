// DOM 요소가 모두 로드된 후 스크립트 실행
document.addEventListener('DOMContentLoaded', () => {

    // 네비게이션 버튼들과 뷰(화면) 요소들을 가져옴
    const navButtons = document.querySelectorAll('#left-nav button');
    const views = document.querySelectorAll('.view');

    // 각 네비게이션 버튼에 클릭 이벤트 추가
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. 모든 버튼과 뷰에서 'active' 클래스 제거
            navButtons.forEach(btn => btn.classList.remove('active'));
            views.forEach(view => view.classList.remove('active'));

            // 2. 클릭된 버튼에 'active' 클래스 추가
            button.classList.add('active');

            // 3. 클릭된 버튼에 해당하는 뷰를 찾아서 'active' 클래스 추가하여 보여줌
            // 예: id 'nav-mail' 버튼은 'mail-view'를 보여줌
            const targetViewId = button.id.replace('nav-', '') + '-view';
            const targetView = document.getElementById(targetViewId);
            if (targetView) {
                targetView.classList.add('active');
            }
        });
    });

});