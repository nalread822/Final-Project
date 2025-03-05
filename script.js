document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Hero Slider Code (Conditional)
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (slides.length > 0 && prevButton && nextButton) { // Check if elements exist
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        setInterval(nextSlide, 5200);
    }

    // Hamburger Menu Code (Conditional)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav.site-nav ul');

    if (hamburger && navMenu) { // Check if elements exist
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});