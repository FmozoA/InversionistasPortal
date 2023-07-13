// Slick tabs
$('.ocw-slick-tabs .ocw-slick-tabs__item').on('click', function(e){
    if(screen.width > 1200){
        e.preventDefault()
    }
    
    $('.ocw-slick-tabs .ocw-slick-tabs__item').removeClass('active')
    $(this).addClass('active')
})

$('.ocw-slick-tabs').slick({
    slidesToShow: 6,
    prevArrow: '<div class="ocw-slick-prev"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="ocw-slick-next"><i class="fas fa-angle-right"></i></div>',
    asNavFor: ".ocw-slick-panels",
    focusOnSelect: true,
    responsive: [
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
})

// Slick panels
$('.ocw-slick-panels').slick({
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".ocw-slick-tabs",
})