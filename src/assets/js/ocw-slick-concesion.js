$('.ocw-slick-concesion').slick({
    dots: true,
    arrows: true,
    prevArrow: '<div class="ocw-slick-prev"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="ocw-slick-next"><i class="fas fa-angle-right"></i></div>',
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
})
