$(".ocw-cas-slick-card").slick({
  slidesToShow: 2,
  dots: true,
  arrows: true,
  centerMode: true,
  centerPadding: 50,
  prevArrow: `<div class="ocw-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="17.164" viewBox="0 0 9.289 17.164">
    <path id="Trazado_29208" data-name="Trazado 29208" d="M8.229,0,0,8.229l8.229,8.229" transform="translate(0.707 0.354)" fill="none" stroke="#8999a2" stroke-width="1"/>
  </svg>
  </div>`,
  nextArrow: `<div class="ocw-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="17.164" viewBox="0 0 9.289 17.164">
    <path id="Trazado_17884" data-name="Trazado 17884" d="M8.229,0,0,8.229l8.229,8.229" transform="translate(8.582 16.811) rotate(180)" fill="none" stroke="#8999a2" stroke-width="1"/>
  </svg>  
  </div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      },
    },
  ],
});
