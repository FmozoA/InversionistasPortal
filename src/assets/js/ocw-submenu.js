const page = document.querySelector('.ocw-page')

if(page){
    const pageId = page.getAttribute('id')

    // Active item submenu
    $('.ocw-submenu-section__nav .nav-link[data-target='+pageId+']').addClass('active')


    // Animate scroll horizontal Menu
    if(screen.width < 991.98){

        let itemsWidth = 0
        let lastItem = 0
        $('.ocw-submenu-section__nav__list .nav-link').each(function(){
            itemsWidth = itemsWidth + $(this).width()
            lastItem = $(this).width()

            // Stop execution in active item
            if($(this).hasClass('active')){
                return false;
            }
        })
        let totalWidth = parseInt(itemsWidth - lastItem)
        $(".ocw-submenu-section__nav__list").animate({scrollLeft: totalWidth}, 1000)
        
    }
} 
