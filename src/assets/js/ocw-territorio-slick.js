$('.ocw-cas-slick').slick({
    slidesToShow: 1,
    infinite: false,
    dots:true,
    arrows: true,
    prevArrow: `<div class="ocw-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="17.164" viewBox="0 0 9.289 17.164">
    <path id="Trazado_29208" data-name="Trazado 29208" d="M8.229,0,0,8.229l8.229,8.229" transform="translate(0.707 0.354)" fill="none" stroke="#8999a2" stroke-width="1"/>
  </svg>
  </div>`,
  nextArrow: `<div class="ocw-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9.289" height="17.164" viewBox="0 0 9.289 17.164">
    <path id="Trazado_17884" data-name="Trazado 17884" d="M8.229,0,0,8.229l8.229,8.229" transform="translate(8.582 16.811) rotate(180)" fill="none" stroke="#8999a2" stroke-width="1"/>
  </svg>  
  </div>`,
  asNavFor: '.ocw-cas-slick-captions'
});


$('.ocw-cont-territorio-info__img-map').each(function(){
    var $slide = $(this).find('.ocw-cas-slick-captions')
    var $status = $(this).find('.ocw-slides-indicators');

    $slide.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });
    
    // Carousel captions
    $slide.slick({
        arrows: false,
        infinite: false,
        touchMove: false,
        swipe: false
    })
})

// Open Modal
$('.ocw-cont-territorio-info__img-map').each(function(index){
  var parentElement = $(this)
  $(this).find('.ocw-btn-lightbox').on('click', function(e){
    e.preventDefault()
    if($(this).attr('data-index')){
      var $index = parseInt($(this).attr('data-index'))
      $('.ocw-cas-slick').slick('slickGoTo', $index)
    }
    
    parentElement.find('.ocw-cont-territorio-info__img-map__modal').fadeIn()
    parentElement.find('.ocw-cont-territorio-info__img-map__modal').css('display', 'flex')
    parentElement.find('.ocw-cas-slick').slick('refresh')
    parentElement.find('.ocw-cas-slick-captions').slick('refresh')
  })
})

// Close Modal
$('.ocw-cont-territorio-info__img-map__modal').each(function(index){
  var parentCarousel = $(this)
  $(this).find('.ocw-btn-close-modal-gallery').on('click', function(e){
    e.preventDefault()
    $(parentCarousel).fadeOut()
  })
})