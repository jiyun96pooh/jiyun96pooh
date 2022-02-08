const toogleBtn = document.querySelector('.navbar_toogleBtn');
/*토글버튼이라는 변수에  다큐먼트쿼리셀렉터를 이용해서 html노드 중에
클래스가 navbar_tooglBtn 이라는 것을 할당해줄거. 라는 의미를 가지고 있음.*/ 
const menu = document.querySelector('.navbar_menu');
const social = document.querySelector('.navbar_social');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    social.classList.toggle('active');
});