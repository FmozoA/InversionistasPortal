
/*
Esta función solo tiene como propósito mostrar la pantalla de resultados no encontrados.
Se debe modificar de acuerdo a la lógica de búsqueda que se maneje
*/
function resultsNotFound(){
    $('.ocw-results-search').hide()
    $('.ocw-not-found-search').show()
    $('.ocw-not-found-search').css('display', 'flex')
}

$('.ocw-search-transparency .ocw-button').on('click', function(e){
    e.preventDefault()

    // Función para pruebas
    resultsNotFound()
})