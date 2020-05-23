const hamburguer = document.querySelector('.hamburguer');
const header = document.getElementById("mainList")
hamburguer.addEventListener('click', () => {
    header.classList.toggle('displayedHeader')

    if (hamburguer.attributes[1].value == "./images/icon-hamburger.svg") {
        hamburguer.attributes[1].value = "./images/icon-close.svg"
    } else {
        hamburguer.setAttribute('src', './images/icon-hamburger.svg')
    }


})


console.log(hamburguer.attributes[1])