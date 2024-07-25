document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    }

    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (darkModeToggle) {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
        }

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'true');
            } else {
                localStorage.setItem('dark-mode', 'false');
            }
        });
    }

    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInLeftSections = document.querySelectorAll('.fade-in-left');
    const fadeInRightSections = document.querySelectorAll('.fade-in-right');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    fadeInLeftSections.forEach(section => {
        observer.observe(section);
    });

    fadeInRightSections.forEach(section => {
        observer.observe(section);
    });

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                event.preventDefault();
                alert('Tous les champs sont requis.');
            }
        });
    }

    $(document).ready(function(){
        $('.hero-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            fade: false,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
});
