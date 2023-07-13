// Sticky header
window.onscroll = function() {
    let y = window.scrollY;
    const headerPrincipal = document.querySelector('.ocw-header-principal');
    const headerSticky = document.querySelector('.ocw-header-sticky');
    const headerFixed = document.querySelector('.ocw-header-fixed');

    if(headerSticky){
        if(y > 200){
            headerPrincipal.classList.add('ocw-header-fixed')
            headerPrincipal.classList.add('ocw-active-scroll')
        } else {
            headerPrincipal.classList.remove('ocw-header-fixed')
            headerPrincipal.classList.remove('ocw-active-scroll')
        }
    }

    if(headerFixed){
        if(y > 200){
            headerPrincipal.classList.add('ocw-active-scroll')
        } else {
            headerPrincipal.classList.remove('ocw-active-scroll')
        }
    }
    
    // Toggle Float Buttons
    if(y > 200){
        $("#ocw-float-buttons").fadeIn()
    } else {
        $("#ocw-float-buttons").fadeOut()
    }
};


// Menu active item
const ocwPage = document.querySelector('.ocw-page')

if(ocwPage){
    const pageId = ocwPage.getAttribute('id')
    // Active item menu
    $('.ocw-header-principal__nav__menu .nav-link[data-target='+pageId+']').addClass('active')
}


// Submenus
$('.ocw-has-children').on({
    mouseenter: function () {
        if(!$(this).find('.ocw-header-principal__nav__submenu').first().hasClass('sub-list')){
           //stuff to do on mouse enter
            $(this).find('.ocw-header-principal__nav__submenu').first().show().css('display', 'flex')
        }
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        if(!$(this).find('.ocw-header-principal__nav__submenu').first().hasClass('sub-list')){
            $(this).find('.ocw-header-principal__nav__submenu').hide() 
        }

        $(this).find('.ocw-header-principal__nav__submenu .ocw-header-principal__nav__submenu__list').first().css('border-right', 'none')
        
    }
})

$('.ocw-has-children .nav-link__arrow').on('mouseover', function(e){
    e.preventDefault()
    $(this).parent().parent().parent().css('border-right', '1px solid')
    $('.sub-list').hide()
    
    $('.ocw-has-children .nav-link__arrow').removeClass('active')
    $(this).addClass('active')
    $(this).parent().parent().find('.ocw-header-principal__nav__submenu').show()
})

var initHeader = $('.ocw-header-principal')
var headerLight = false

if ($(initHeader).hasClass('ocw-light')){
    headerLight = true
}

// Toggle search box
$('.ocw-header-principal .ocw-header-principal__nav__aux__search').on('click', function(e){
    e.preventDefault();

    $('.ocw-header-principal .ocw-search-box').slideToggle('slow', function() {
        
        if(headerLight){
            if($(this).is(':visible')){
                $('.ocw-header-principal').removeClass('ocw-light').addClass('ocw-dark').css('background-color', 'white')
            } else {
                $('.ocw-header-principal').removeClass('ocw-dark').addClass('ocw-light').css('background', 'none')
            }

        }
    })
    
})

// Button close search box
$('.ocw-header-principal .ocw-search-box__button-close').on('click', function(e){
    e.preventDefault()
    $('.ocw-header-principal .ocw-search-box').slideUp()

    if(headerLight){
        $('.ocw-header-principal').removeClass('ocw-dark').addClass('ocw-light').css('background', 'none')
    }
})

// Menu responsive
$('.ocw-header-principal__nav__button-toggle').on('click', function(e) {
    e.preventDefault()
    $('.ocw-menu-responsive').addClass('active')
})

$('.ocw-menu-responsive__header__btn-close').on('click', function(e){
    e.preventDefault()
    $('.ocw-menu-responsive').removeClass('active')
})

$('.ocw-menu-responsive .nav-link__arrow').on('click', function(e){
    e.preventDefault()
    $(this).next().slideToggle()
})

