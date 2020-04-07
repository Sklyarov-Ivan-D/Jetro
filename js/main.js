$('.slider_jetro').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider_jetro',
    dots: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                asNavFor: '.slider_jetro',
            }
        },



    ]
});

$('.header__menu-btn').on('click', function() {
    $('.header__menu ul').slideToggle();
});