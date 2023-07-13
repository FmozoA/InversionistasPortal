$(".ocw-gallery-aux__grid__item").slice(0, 9).show();



if($('.ocw-gallery-aux__grid__item').length > 9){
    $('.ocw-gallery-aux__show-more').show()
    $('.ocw-gallery-aux__show-more').css('display', 'inline-flex')

    $(".ocw-gallery-aux__show-more").on("click", function (e) {
        e.preventDefault();
        // $(".ocw-gallery-aux__grid__item:hidden").slice(0, 3).slideDown();
        if ($(".ocw-gallery-aux__grid__item:hidden").length == 0) {
            var $countEl = $(".ocw-gallery-aux__grid__item").length
            var $lastEl = $countEl - 3

            $(this).find('.ocw-gallery-aux__show-more__text').text('Ver más');
            $(this).find('.ocw-gallery-aux__show-more__icon.icon-minus').hide()
            $(this).find('.ocw-gallery-aux__show-more__icon.icon-more').show()
            $(".ocw-gallery-aux__grid__item").slice($lastEl, $countEl).slideUp();
        } else {
            $(".ocw-gallery-aux__grid__item:hidden").slice(0, 3).slideDown();
            $(this).find('.ocw-gallery-aux__show-more__text').text('Ver menos');
            $(this).find('.ocw-gallery-aux__show-more__icon.icon-minus').show()
            $(this).find('.ocw-gallery-aux__show-more__icon.icon-more').hide()
        }
    });
}

