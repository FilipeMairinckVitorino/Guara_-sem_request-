const pesquisa = document.querySelectorAll('span.search')[0]
const pesinput = document.querySelectorAll('input.search')[0]

pesquisa.addEventListener('click', function() {
    pesinput.style.height = '40px'
    pesinput.style.transition = 'height 0.25s'
    pesinput.focus()

    pesquisa.addEventListener('click', function() {
        if(pesinput.value != '') {
            //resultado da pesquisa
        }

    })

    document.addEventListener('keydown', function(tecla) {
        if(pesinput.value != '') {
            if(tecla.key == 'Enter') {
                //resultado da pesquisa 
            }
        }
    })

    pesinput.addEventListener('blur', function() {
        document.addEventListener('click', evento => {
            if(evento.target != pesquisa && evento.target != pesinput){
                pesinput.style.height = '0px'
            }
        })
    })
})