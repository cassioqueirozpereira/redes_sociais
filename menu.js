
let btnMenu = document.getElementById("btn_menu")

let menu = document.getElementById("menu_mobile")

let overlay = document.getElementById("overlay_menu")

// abre o menu ao clicar no ícone sanduiche que está com o id="btn_menu"
btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir_menu")
})

// fecha o menu ao clicar em qualquer lugar do menu
menu.addEventListener("click", () => {
    menu.classList.remove("abrir_menu")
})

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir_menu")
})