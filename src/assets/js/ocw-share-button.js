$('.ocw-share-item__link').on('click', function(e) {
    e.preventDefault()
})
$('.ocw-share-item__link').tooltip({
    trigger: 'click'
}).on('shown.bs.tooltip', function() {
    $('.tooltip.show .ocw-share-item__box__top__close').on('click', function(){
        $('.ocw-share-item__link').tooltip('hide')
    })
})