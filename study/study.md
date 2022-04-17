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

<br />

### 3. 자바스크립트, 이벤트리스너 & 클래스,id 사용

```html
   <div class="alert-box" id="alert">
        <p id="title"> 알림창임 </p>
        <button id="close">닫기</button>
      </div>
    <div class="btn-container">
        <button class="openBtn">알림창 버튼</button>
        <button class="idBtn">아이디 버튼</button>
        <button class="passwordBtn">비밀번호 버튼</button>
    </div>
```

```js
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
```