$('.ocw-modal-video-popup').on('hidden.bs.modal', function (event) {
    var videoModal = $(this).find('.ocw-modal-video-popup__video')
    if(videoModal.length > 0){
        videoModal[0].pause()
    } else {

        $('.ocw-modal-video-popup .video-youtube-responsive ').each(function(){
            const videoYoutube = $(this).find('iframe')
            const srcVideoYoutube = $(videoYoutube).attr('src')
            $(videoYoutube).attr('src', srcVideoYoutube)
        })
        
    }
})