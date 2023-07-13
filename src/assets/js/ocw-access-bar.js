const access_bar = document.getElementById('ocw-access-bar')

const fontIncrement = (nodeList, units) => {
    nodeList.forEach(item => {
        const fontSize = window.getComputedStyle(item, null).getPropertyValue('font-size')
        const lineHeight = window.getComputedStyle(item, null).getPropertyValue('line-height')

        item.style.fontSize = (parseFloat(fontSize)+units) + "px"
        item.style.lineHeight = (parseFloat(lineHeight)+units) + "px"
    });
}

const fontReduce = (nodeList, units) => {
    nodeList.forEach(item => {
        const fontSize = window.getComputedStyle(item, null).getPropertyValue('font-size')
        const lineHeight = window.getComputedStyle(item, null).getPropertyValue('line-height')

        item.style.fontSize = (parseFloat(fontSize)-units) + "px"
        item.style.lineHeight = (parseFloat(lineHeight)-units) + "px"
    });
}

if(access_bar){

    const barHeight = access_bar.clientHeight
    const midBarHeight = parseInt(barHeight) / 2
    access_bar.style.top = `calc(50% - ${midBarHeight}px)`


    if(screen.width < 577){
        access_bar.style.top = "unset"
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth < 768){
            access_bar.style.top = "unset"
        } else {
            access_bar.style.top = `calc(50% - ${midBarHeight}px)`
        }
    })

    const btn_contrast = document.getElementById('btn-contrast')
    const btn_increment_size = document.getElementById('btn-increment-size')
    const btn_restore_size = document.getElementById('btn-restore-size')
    const btn_reduce_size = document.getElementById('btn-reduce-size')
    const btn_toggle_line_height = document.getElementById('btn-increment-line-height')

    // Texts
    const texts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button')
    
    let counterInc = 0
    
    // Increase Font
    btn_increment_size.addEventListener('click', function(e){
        e.preventDefault()
        counterInc++
        if(counterInc >= 3){
            return false
        }
        fontIncrement(texts, 3)
    })
    
    // Reduce Font
    btn_reduce_size.addEventListener('click', function(e){
        e.preventDefault()
        counterInc--
        if(counterInc <= -3){
            return false
        }
        fontReduce(texts, 3)
    })

    // Restore Font
    texts.forEach(item => {
        const fontSize = window.getComputedStyle(item, null).getPropertyValue('font-size')
        const lineHeight = window.getComputedStyle(item, null).getPropertyValue('line-height')

        btn_restore_size.addEventListener('click', function(e){
            e.preventDefault()

            counterInc = 0

            item.style.fontSize = fontSize
            item.style.lineHeight = lineHeight
        })

        // Toggle Line Height
        let toggleLineHeight = false 
        btn_toggle_line_height.addEventListener('click', function(e){
            e.preventDefault()
            if(!toggleLineHeight){
                item.style.lineHeight = (parseFloat(lineHeight) * 1.5) + "px"
                toggleLineHeight = true
            } else {
                item.style.lineHeight = lineHeight
                toggleLineHeight = false
            }
            
        })
    })

    // Contrast
    let toggleContrast = false
    btn_contrast.addEventListener('click', (e)=>{
        e.preventDefault()
        const page = document.querySelector('.ocw-page')
        const htmlDiv = document.querySelector('html')
        if(!toggleContrast){
            page.classList.add('ocw-contrast-mode')
            htmlDiv.style.filter = "invert(1)"
            toggleContrast = true
        } else {
            page.classList.remove('ocw-contrast-mode')
            htmlDiv.style.filter = "unset"
            toggleContrast = false
        }
        
    })
}