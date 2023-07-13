$('.ocw-sub-home').on('init', function(event, slick){
    var dots = $( '.slick-dots li' );
    dots.each( function( k, v){
      $(this).find( 'button' ).addClass( 'heading'+ k );
    });
    var items = slick.$slides;
    items.each( function( k, v){
        var text = $(this).find( 'h3' ).text();
        $( '.heading' + k ).text(text);
    });
});

$('.ocw-sub-home').slick({
    dots: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
});