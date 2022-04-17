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

<br />

### 2. 자바스크립트 조작 간단한 alert창 만들기

```html
    <div class="alert-box">알림창임</div>
    <button class="openBtn">버튼</button>
    <button class="closeBtn">닫기</button>
```

```js
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
```