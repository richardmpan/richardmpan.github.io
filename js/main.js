// ===================================
// Dr. Yi Pan - Personal Research Website
// Main JavaScript
// ===================================

// Initialize Lucide Icons
lucide.createIcons();

// ===================================
// Scroll Animation (Intersection Observer)
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When entering: Add the 'active' class to trigger the transition (slide-in/fade-in)
            entry.target.classList.add('active');
        } else {
            // When leaving: Remove the 'active' class to reset the animation state
            // This is essential for the animation to replay when scrolling back into view.
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.reveal, .slide-up, .slide-left, .slide-right').forEach(el => {
    observer.observe(el);
});

// ===================================
// Back to Top Button Logic
// ===================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
