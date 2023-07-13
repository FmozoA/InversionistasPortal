$(".ocw-prov__interes-car").slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".ocw-prov__prop-car").slick({
    dots: true,
    arrows: false,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 1,
  });