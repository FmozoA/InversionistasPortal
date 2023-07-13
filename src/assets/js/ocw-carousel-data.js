$('.ocw-carousel-data__photos').slick({
    prevArrow: '<div class="ocw-slick-prev"><i class="fal fa-angle-left"></i></div>',
    nextArrow: '<div class="ocw-slick-next"><i class="fal fa-angle-right"></i></div>',
    infinite: false
})

$('.ocw-carousel-data__info').slick({
    prevArrow: `<div class="ocw-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="17.164" viewBox="0 0 9.289 17.164">
    <path id="slick-arrow-2-prev" d="M2269.712,3727.328l-8.229,8.229,8.229,8.229" transform="translate(-2260.776 -3726.975)" fill="none" stroke="#c0cbd1" stroke-width="1"/>
  </svg></div>`,
    nextArrow: `<div class="ocw-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="17.164" viewBox="0 0 9.289 17.164">
    <path id="slick-arrow-2-next" d="M8.229,0,0,8.229l8.229,8.229" transform="translate(8.582 16.811) rotate(180)" fill="none" stroke="#C0CBD1" stroke-width="1"/>
  </svg></div>`,
    infinite: false,
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
})
