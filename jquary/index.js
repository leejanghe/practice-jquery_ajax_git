console.log('hello world')

const btn = document.querySelector('button')
const h1Tag = document.getElementById('hello')
const textTag = document.querySelector('h2')


btn.addEventListener('click', function(){
    console.log(h1Tag)
    h1Tag.innerHTML = '안녕!'
    h1Tag.style.fontSize = '16px'
    textTag.innerHTML = 'Js고수예욤'
})