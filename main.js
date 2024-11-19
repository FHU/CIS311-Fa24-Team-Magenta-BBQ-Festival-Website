const hamburgerButton = document.querySelector(".hamburger-menu");
const closeButton = document.querySelector(".close")
const menuElements = document.querySelector(".hamburger-info");
const overlay = document.querySelector(".overlay");


// Open menu
hamburgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    menuElements.style.display = "flex"; 
    overlay.style.display = "flex";
});

// Close menu via overlay click
overlay.addEventListener("click", () => {
    hideMenu();
});

// Hide menu function
function hideMenu() {
    menuElements.style.display = "none";
    overlay.style.display = "none";
}
