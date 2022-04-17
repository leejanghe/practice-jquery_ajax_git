## jquery

### 1. 간단한 자바스크립트 조작

```js
// html
<h1 id="hello">안녕하세요!</h1>
    <h2>js초보예욤</h2>
<button>변해랏!</button>

// js
const btn = document.querySelector('button')
const h1Tag = document.getElementById('hello')
const textTag = document.querySelector('h2')


btn.addEventListener('click', function(){
    console.log(h1Tag)
    h1Tag.innerHTML = '안녕!'
    h1Tag.style.fontSize = '16px'
    textTag.innerHTML = 'Js고수예욤'
})
```