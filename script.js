// Drift Race JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Drift Race website loaded!');
    
    // Smooth scroll behavior for better user experience
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.content');
    
    // Add a subtle fade-in animation for the content section when scrolling
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Set initial state for content animation
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(content);
    }
    
    // Add parallax effect to hero title
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroTitle = document.querySelector('.hero-title');
        
        // Add scrolled class to navbar
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Parallax effect
        if (heroTitle && scrolled < window.innerHeight * 0.6) {
            const speed = scrolled * 0.5;
            heroTitle.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            content.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            hero.scrollIntoView({ behavior: 'smooth' });
        }
    });
});