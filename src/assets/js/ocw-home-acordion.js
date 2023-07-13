$(".ocw-home-acor__item-head").on('click', function(e){
    e.preventDefault();
    
    var dataTarget = $(this).attr('data-target')

    $(this).toggleClass("active");
    $(".ocw-home-acor__item-body" + dataTarget).slideToggle();
});