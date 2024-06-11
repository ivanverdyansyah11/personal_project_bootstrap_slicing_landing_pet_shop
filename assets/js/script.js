AOS.init({
    once: true
});

$('.button-hamburger').on('click', function() {
    $(this).toggleClass('active')
    $('.topbar').toggleClass('active')
})

const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});