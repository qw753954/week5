AOS.init({
    once: true
})

$('.hamIcon').click(function() {
    $('.navbar').toggleClass('ham-active');
})

$('.product-item:first-child i').click(function() {
    $(this).toggleClass('heartIng');
})

$('.product-item:nth-child(2) i').click(function() {
    $(this).toggleClass('heartIng');

})

$('.product-item:nth-child(3) i').click(function() {
    $(this).toggleClass('heartIng');

})

$('.product-item:nth-child(4) i').click(function() {
    $(this).toggleClass('heartIng');

})

$('.product-item:nth-child(5) i').click(function() {
    $(this).toggleClass('heartIng');

})

$('.product-item:last-child i').click(function() {
    $(this).toggleClass('heartIng');

})