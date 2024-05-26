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

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
        });
    }

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

document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazyload");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});