//DOM = Documen object manipulation
let open =false
document.querySelector('.menu-tigger')
.addEventListener('click', function() {

    if (!open) {

        document.querySelector('.menu')
        .setAttribute('style', 'transform: translateX(0)')
        //document.querySelector('.menu').setAttribute('style', 'display: block')

    } else {

        document.querySelector('.menu')
        .setAttribute('style', 'transform: translateX(-100%)')
        //document.querySelector('.menu').setAttribute('style', 'display: none')
    }
})