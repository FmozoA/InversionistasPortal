

const items = document.querySelectorAll('#submenu-bto .submenu-bto__item')
if(items){
    const charNum = 30
    items.forEach(item => {
        if(item.innerText.length > charNum){
            let titleSub = item.innerText.substring(0, charNum)
            item.innerText = titleSub + "..."
        }
        
    });
}

const pageBto = document.querySelector('.ocw-bto')
const pageSala = document.querySelector('.ocw-page-sala-prensa')

if(pageBto){
    const pageId = pageBto.getAttribute('id')
    // Active item submenu
    $('#submenu-bto .submenu-bto__item[data-target='+pageId+']').addClass('active')
    
} 

if(pageSala){
    const pageSalaId = pageSala.getAttribute('id')
    $('#submenu-bto .submenu-bto__item[data-target='+pageSalaId+']').addClass('active')
}

$("#submenu-bto .submenu-bto__item").slice(0, 8).show();

$(".submenu-bto__show-more").on("click", function (e) {
    e.preventDefault();
    
    if ($("#submenu-bto .submenu-bto__item:hidden").length == 0) {
        if($("#submenu-bto").attr('data-lang') == 'en'){
            $(this).text("See more").addClass("noContent");
        } else {
            $(this).text("Ver más").addClass("noContent");
        }
        $("#submenu-bto .submenu-bto__item:visible")
        .slice(8, 15)
        .hide();
    } else {
        if($("#submenu-bto").attr('data-lang') == 'en'){
            $(this).text("See less").removeClass("noContent");
        } else {
            $(this).text("Ver menos").removeClass("noContent");
        }
        $("#submenu-bto .submenu-bto__item:hidden")
        .slice(0, 9)
        .show();
    }
});