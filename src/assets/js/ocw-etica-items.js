// Hide content accordion initial
$('.ocw-etica').each(function(){
    if(!$(this).hasClass('show')){
        $(this).find('.ocw-etica__content').hide()
        $(this).find('.ocw-etica__btn').removeClass('active')
    }
})

$('.ocw-item-accordion').each(function(){
    if(!$(this).hasClass('show')){
        $(this).find('.ocw-item-accordion__content').hide()
        $(this).find('.ocw-item-accordion__btn').removeClass('active')
    }
})


$(".ocw-etica__btn").on('click', function(e){
    e.preventDefault();
    
    var dataTarget = $(this).attr('data-target')

    $(this).toggleClass("active");
    $(".ocw-etica__content" + dataTarget).slideToggle();
});

$(".ocw-item-accordion__btn").on('click', function(e){
    e.preventDefault();
    
    var dataTarget = $(this).attr('data-target')

    $(this).toggleClass("active");
    $(".ocw-item-accordion__content" + dataTarget).slideToggle();
});