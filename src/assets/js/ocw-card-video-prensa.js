const videoContainer = document.querySelector('.oc-yt-iframe')
if(videoContainer){
    const iframe = videoContainer.querySelector('iframe')
    const cardsVideos = document.querySelectorAll('.cards-videos .ocw-card-prev-new')
    cardsVideos.forEach(card => {
        const cardLink = card.querySelector('.ocw-card-prev__link-video')
        const cardLinkText = card.querySelector('.ocw-card-prev-new__caption__link')

        if(cardLink){
            cardLink.addEventListener('click', function(e){
                const videoId = this.dataset.id
                iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId)
            })

            cardLinkText.addEventListener('click', function(e){
                const videoId = this.dataset.id
                iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId)
            })
        }
       
        
    });
}
