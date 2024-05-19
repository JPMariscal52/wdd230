document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navbar = document.getElementById('navbar');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const toggleMenu = (displayStyle) => {
        navbar.style.display = displayStyle;
    };

    hamburgerBtn.addEventListener('click', function() {
        toggleMenu('flex');
    });

    closeBtn.addEventListener('click', function() {
        toggleMenu('none');
    });

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();

    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 769) {
            toggleMenu('flex');
        } else {
            toggleMenu('none');
        }
    });

    if (window.innerWidth >= 769) {
        toggleMenu('flex');
    } else {
        toggleMenu('none');
    }
});