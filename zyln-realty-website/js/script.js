document.addEventListener('DOMContentLoaded', function() {

    // --- Disclaimer Banner Logic ---
    const disclaimerBanner = document.getElementById('disclaimer-banner');
    const closeDisclaimerBtn = document.getElementById('close-disclaimer');

    if (disclaimerBanner && closeDisclaimerBtn) {
        // Show banner only if it hasn't been closed in this session
        if (sessionStorage.getItem('disclaimerClosed') !== 'true') {
            setTimeout(() => {
                disclaimerBanner.classList.add('visible');
            }, 500); // Delay for slide-down effect
        }

        closeDisclaimerBtn.addEventListener('click', () => {
            disclaimerBanner.classList.remove('visible');
            // Remember that the user closed the banner for this session
            sessionStorage.setItem('disclaimerClosed', 'true');
        });
    }

    // --- Animated Header Logic ---
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 150) {
            // Scrolling down
            header.classList.add('header-hidden');
        } else {
            // Scrolling up
            header.classList.remove('header-hidden');
        }
        lastScrollY = window.scrollY;
    });

    // --- Lightbox for Gallery Pages ---
    // The script for the lightbox is loaded from a CDN in the property HTML files
    // This code initializes it if a gallery exists on the page.
    if (document.querySelector('.gallery')) {
        new SimpleLightbox('.gallery a', {
            // Optional settings can go here
        });
    }

});