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

<br />

### 4. jquery 설치

[https://releases.jquery.com/](https://releases.jquery.com/)에 가서 3.x minified 버전 설치한다.

```html
<head>
...
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script defer src="jquery.js"></script>
...
</head>
```

<br />

### 5. jquery 기본 사용법

```html
    <p class="hello">안녕</p>
    <button id="btn">사라져버렷!</button>
    <button id="btn2">다시 나와ㅠ</button>
    <button id="btn3">토글이얌</button>
```

제이쿼리는 $거와 셀렉터만 읽을줄 알면 충분히 사용 할 수 있다. $ 표시는 쿼리셀렉터와 같은 개념이다. 그리고 .붙히고 제이쿼리 문법을 사용하면 된다. 이벤트리스너나 UI애니메이션에도 충분히 사용할수 있으니 익히도록 하자!

```js
$('.hello').html('안녕하세요미요미');
$('.hello').css('color', 'red');
console.log('gd')

$('#btn').on('click', function() {
    $('.hello').hide()
})

$('#btn2').on('click', function() {
    $('.hello').show()
})

$('#btn3').on('click', function() {
    $('.hello').toggle()
})
```