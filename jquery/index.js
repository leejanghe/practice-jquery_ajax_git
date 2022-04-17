const openbtn = document.querySelector('.openBtn');
const closebtn = document.querySelector('#close');
const alertBox = document.querySelector('.alert-box');
const idbtn = document.querySelector('.idBtn');
const passwordbtn = document.querySelector('.passwordBtn');
const textTitle = document.querySelector('#title');

openbtn.addEventListener('click', function() {
    console.log(alertBox)
    alertBox.style.display = 'block';
    textTitle.innerHTML = '<p>알림창 입니다.</p>'
})

closebtn.addEventListener('click', function() {
    alertBox.style.display = 'none';
})

idbtn.addEventListener('click', function() {
    alertBox.style.display = 'block';
    textTitle.innerHTML = '<p>아이디가 무엇이니?</p>';
})

passwordbtn.addEventListener('click', function() {
    alertBox.style.display = 'block';
    textTitle.innerHTML = '<p>비밀번호가 무엇이니?</p>';
})