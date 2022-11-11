function mostrarMenu () {
 const hamburguerMenu = document.querySelector(".nav__hamburguer")
 const navegacionNav = document.querySelector(".contenedor__ul--delnav")
 const contenedorNav = document.querySelector(".contenedor__nav")
 const primeraseccionImg = document.querySelector(".contenedor__primerasection--img")
 const test = document.querySelector(".test")
        hamburguerMenu.addEventListener("click", () => {
            navegacionNav.classList.toggle("activo")
            contenedorNav.classList.toggle("oculted")
            primeraseccionImg.classList.toggle("primerasection__imagen")
            test.classList.toggle("test__completed")
    })
}

mostrarMenu();