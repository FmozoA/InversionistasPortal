//POSITION SCROLL

const scrollMap = document.getElementById('ocw-mapa');
const btoMap = document.querySelector('.ocw-mapa-bto')

if(scrollMap){
    scrollMap.scrollLeft = 250;
    if(btoMap){
        scrollMap.scrollLeft = 350;
    }
}



