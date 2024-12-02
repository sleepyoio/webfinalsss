function toggleMenu() {
    const navbarUl = document.querySelector('.navbar ul');
    navbarUl.classList.toggle('active'); // Toggle 'active' class
    attachCloseHandler(); // Attach event listener to close on outside click
}

// Function to close the sidebar
function closeMenu() {
    const navbarUl = document.querySelector('.navbar ul');
    navbarUl.classList.remove('active'); // Remove 'active' class
}

// Function to attach the event listener that closes the menu when clicking outside
function attachCloseHandler() {
    const navbarUl = document.querySelector('.navbar ul');
    document.addEventListener('click', function handler(event) {
        // Check if the click is outside the navbar and hamburger
        const isClickInsideNavbar = navbarUl.contains(event.target);
        const isClickInsideHamburger = document.querySelector('.hamburger').contains(event.target);
        
        if (!isClickInsideNavbar && !isClickInsideHamburger) {
            closeMenu();
            document.removeEventListener('click', handler); // Remove listener after execution
        }
    });
}
