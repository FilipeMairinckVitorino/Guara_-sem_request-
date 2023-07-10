let roupasJSON = {
    "roupas": [
        {
            "Título": "Camisa Casual",
            "Preço": 10000,
            "Descrição": "Camiseta lisa Branca",
            "Imagem": "Imagens/Produtos/basic_branca.png",
            "Tipo": "Camiseta"
        },
        {
            "Título": "Camisa Casual",
            "Preço": 10000,
            "Descrição": "Camiseta lisa Preta",
            "Imagem": "Imagens/Produtos/basic_preta.png",
            "Tipo": "Camiseta"
        },
        {
            "Título": "Camisa Casual",
            "Preço": 10000,
            "Descrição": "Camiseta lisa Cinza",
            "Imagem": "Imagens/Produtos/basic_cinza.png",
            "Tipo": "Camiseta"
        },
        {
            "Título": "Camisa Casual",
            "Preço": 10000,
            "Descrição": "Camiseta lisa Cinza",
            "Imagem": "Imagens/Produtos/shirtExample.png",
            "Tipo": "Camiseta"
        },
        {
            "Título": "Bolsa de Couro",
            "Preço": 10000,
            "Descrição": "Bolsa de Couro Preta",
            "Imagem": "Imagens/Produtos/bagExample.png",
            "Tipo": "Bolsa"
        },
        {
            "Título": "Vestido Rendado",
            "Preço": 10000,
            "Descrição": "Vestido Rendado Preto",
            "Imagem": "Imagens/Produtos/dressExample.png",
            "Tipo": "Vestido"
        },
        {
            "Título": "Moletom",
            "Preço": 10000,
            "Descrição": "Moletom Azul",
            "Imagem": "Imagens/Produtos/sweatshirtExample.png",
            "Tipo": "Moletom"
        },
        {
            "Título": "Calça Social",
            "Preço": 10000,
            "Descrição": "Calça Social Cinza",
            "Imagem": "Imagens/Produtos/pantExample.png",
            "Tipo": "Calça"
        }
    ]
}

let todasRoupas = roupasJSON.roupas
const secao = document.querySelector('section.secaoDeRoupas')

function exibirLivros(arrayDeElementos){
    secao.innerHTML = ''
    for(let cont = 0; cont < arrayDeElementos.length; cont++){
        secao.innerHTML += `
            <section class="item">
                <h3 class="item">${arrayDeElementos[cont].Título}</h3>
                <p class="item">${arrayDeElementos[cont].Descrição}</p>
                <h4 class="item">${arrayDeElementos[cont].Preço.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})}</h4>
                <a href="" class="item">Comprar</a>
            </section>
        `
        secao.children[cont].style.cssText = `background-image: url(${arrayDeElementos[cont].Imagem});`
    }
}

exibirLivros(todasRoupas)

// FILTRO

const icon = document.querySelector('span.filtro')
const secaoFiltro = document.querySelector('section.filtro')
const secaoOpcoesDeFiltro = document.querySelector('section.options')
const opcoesDeFiltro = document.querySelectorAll('section.filterItem')

let F_Aberto = false

icon.addEventListener('click', ()=>{
    if(F_Aberto == false){
        F_Aberto = true
        opcoesDeFiltro.forEach((elemento, index)=>{
            setTimeout(()=>{
                elemento.style.display = 'flex'
            }, 30 * index)       
        })
    } else{
        F_Aberto = false
        opcoesDeFiltro.forEach((elemento, index)=>{
            setTimeout(()=>{
                elemento.style.display = 'none'
            }, 30 * index)       
        })
    }
})

let filtrados = []
let itensFiltrados = []

opcoesDeFiltro.forEach(elemento => {
    elemento.childNodes[1].checked = true
})

opcoesDeFiltro.forEach(elemento => {
    if(elemento.childNodes[1].checked == true){
        filtrados.push(elemento.childNodes[1].name)
    } else {
        filtrados.splice(filtrados.indexOf(elemento.childNodes[1].name),1)
    }
})

opcoesDeFiltro.forEach(elemento => {
    elemento.childNodes[1].addEventListener('change',()=>{
        if(elemento.childNodes[1].checked == true){
            filtrados.push(elemento.childNodes[1].name)
        } else {
            filtrados.splice(filtrados.indexOf(elemento.childNodes[1].name),1)
        }

        filtra()
        exibirLivros(itensFiltrados)
    })
})


function filtra(){
    itensFiltrados = todasRoupas.filter(elemento => filtrados.includes(elemento.Tipo))
}