//get a handle to

const hamburgerButton = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".overlay")

hamburgerButton.addEventListener("click", (e) => {
    e.preventDefault()
    menu.style.display = "flex"
    overlay.style.display = "flex"
})

closeButton.addEventListener("click", (e) => {
    e.preventDefault()
    hideMenu()
})

overlay.addEventListener("click", () => {
    hideMenu()
})

function hideMenu() {
    menu.style.display = "none"
    overlay.style.display = "none"
}