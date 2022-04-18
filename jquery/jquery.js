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