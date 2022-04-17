const openbtn = document.querySelector('.openBtn');
const closebtn = document.querySelector('.closeBtn');
const alertBox = document.querySelector('.alert-box');

openbtn.addEventListener('click', function() {
    console.log(alertBox)
    alertBox.style.display = 'block';
})

closebtn.addEventListener('click', function() {
    alertBox.style.display = 'none';
})
