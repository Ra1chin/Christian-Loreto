// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Fade-in and slide-up animations for sections
    gsap.from('.animate-fade-in', { opacity: 0, duration: 1, ease: 'power2.out' });
    gsap.from('.animate-slide-up', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.animate-slide-up',
            start: 'top 80%',
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');

        if (isActive) {
            gsap.to(mobileLinks, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            });
        } else {
            gsap.to(mobileLinks, {
                opacity: 0,
                x: -20,
                duration: 0.5,
                ease: 'power2.in'
            });
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                gsap.to(mobileLinks, { opacity: 0, x: -20, duration: 0.5 });
            }
        });
    });
});