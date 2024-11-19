const hamburgerButton = document.querySelector(".hamburger-menu");
const menuElements = document.querySelector(".menu-elements");
const overlay = document.querySelector(".overlay");

// Open menu
hamburgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    menuElements.classList.add("menu"); // Add the "menu" class
    overlay.style.display = "flex";
});

// Close menu via overlay click
overlay.addEventListener("click", () => {
    hideMenu();
});

// Hide menu function
function hideMenu() {
    menuElements.classList.remove("menu"); // Remove the "menu" class
    overlay.style.display = "none";
}
