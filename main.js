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

document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Toggle expanded state
        button.setAttribute('aria-expanded', !isExpanded);
        button.textContent = isExpanded ? '+' : '−'; // Change symbol
        
        // Expand or collapse content
        content.classList.toggle('expanded');
    });
});
