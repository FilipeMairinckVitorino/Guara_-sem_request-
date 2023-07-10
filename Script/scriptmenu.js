const menubut = document.querySelectorAll('span.menu')[0]
const menu = document.querySelectorAll('menu')[0]
const menusec = document.querySelectorAll('section.menu1')[0] 
const masc = document.querySelectorAll('span.menu2')[0]
const mascsec = document.querySelectorAll('section.menu3')[0]
const femsec = document.querySelectorAll('section.menu3')[1]
const fem = document.querySelectorAll('span.menu2')[1]
let menuFemActive = false
let menuMascActive = false
// Menu

menu.style.height = '0px'

menubut.addEventListener('click', function() {
    if (menu.style.height == '0px') {
        menusec.style.visibility = 'visible'
        menu.style.height = '202px'
    } else if (menu.style.height == '202px' || menu.style.height == '586px' || menu.style.height == '346px' || menu.style.height == '442px') {
        menusec.style.visibility = 'visible'
        masc.style.height = '28px'
        fem.style.height = '28px'
        menu.style.height = '0px'
        menuFemActive = false
        menuMascActive = false
    }
})

masc.style.height = '28px'

masc.addEventListener('click', function() {
    if(masc.style.height == '28px') {
        menuMascActive = true
        mascsec.style.visibility = 'visible'
        masc.style.height = '172px'
    } else if (masc.style.height == '172px') {
        menuMascActive = false
        masc.style.height = '28px'
    }

    if (menuFemActive == true) {
        menu.style.height = '586px'
    } else {
        menu.style.height = '346px'
    }

    if (menuMascActive == false && menuFemActive == false) {
        mascsec.style.visibility = 'hidden'
        menu.style.height = '202px'
    } else if (menuMascActive == false && menuFemActive == true) {
        mascsec.style.visibility = 'hidden'
        menu.style.height = '442px'
    }
})

fem.style.height = '28px'

fem.addEventListener('click', function() {
    if(fem.style.height == '28px') {
        menuFemActive = true
        femsec.style.visibility = 'visible'
        fem.style.height = '268px'
    } else if (fem.style.height == '268px') {
        menuFemActive = false
        fem.style.height = '28px'
    }

    if (menuMascActive == true) {
        menu.style.height = '586px'
    } else {
        menu.style.height = '442px'
    }

    if (menuFemActive == false && menuMascActive == false) {
        femsec.style.visibility = 'hidden'
        menu.style.height = '202px'
    } else if (menuFemActive == false && menuMascActive == true) {
        femsec.style.visibility = 'hidden'
        menu.style.height = '346px'
    }
})













































// Pesquisa

