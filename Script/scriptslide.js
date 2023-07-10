let adsJSON = {
    "ads": [
        {
            "Título": "Nova Linha Guara",
            "Link": "",
            "Imagem": "Imagens/Anuncios/anuncio1.jpeg",
            "Fundo": "black"
        },
        {
            "Título": "Nova Linha Guara",
            "Link": "",
            "Imagem": "Imagens/Anuncios/anuncio1.jpeg",
            "Fundo": "black"
        },
        {
            "Título": "Nova Linha Guara",
            "Link": "",
            "Imagem": "Imagens/Anuncios/anuncio1.jpeg",
            "Fundo": "black"
        }
    ]
}

const adsSec = document.querySelector('section.anuncio')
const ads = []
let tempoSeconds = 3

for(let cont = 0; cont < adsJSON.ads.length; cont++){

    adsSec.innerHTML += `<a href="${adsJSON.ads[cont].Link}" class="anuncio" rel="intern"></a>`
    
    adsSec.children[cont].style.cssText = `background-image: url(${adsJSON.ads[cont].Imagem});` + `background-color: ${adsJSON.ads[cont].Fundo};`
    
    ads.push(document.querySelectorAll('a.anuncio')[cont])
}

let AdsClone = ads[0].cloneNode(true)
adsSec.appendChild(AdsClone)
let play = true

let adsPosition = 1
function nextSlide(){
    if(play == true){
        adsSec.style.transform = `translateX(${adsPosition * -100}vw)`
        adsSec.style.transition = 'transform 1s'
        if(adsPosition < ads.length) {
            adsPosition++
        } else {
            adsPosition = 1
            setTimeout(()=>{
                adsSec.style.transition = 'none'
                adsSec.style.transform = `translateX(0vw)`
            }, 1000)
        }
    }
}

setInterval(()=>nextSlide(), 1000 * tempoSeconds)

adsSec.addEventListener('mouseenter', ()=> play = false)
adsSec.addEventListener('mouseleave', ()=> play = true)























// let adsJSON = {
//     "ads": [
//         {
//             "Título": "Nova Linha Guara",
//             "Link": "",
//             "Imagem": "Imagens/Anuncios/anuncio1.jpeg",
//             "Fundo": "black"
//         },
//         {
//             "Título": "Nova Linha Guara",
//             "Link": "",
//             "Imagem": "Imagens/Anuncios/anuncio2.jpeg",
//             "Fundo": "black"
//         },
//         {
//             "Título": "Nova Linha Guara",
//             "Link": "",
//             "Imagem": "Imagens/Anuncios/anuncio3.jpeg",
//             "Fundo": "black"
//         }
//     ]
// }





