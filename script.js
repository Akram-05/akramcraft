document.addEventListener('DOMContentLoaded', function() {
    // Previous code remains here...
    
    // Typing animation for the name in the hero section
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = ''; // Clear the text first
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // Start typing
        type();
    }
    
    // Get the name heading element
    const nameHeading = document.querySelector('.hero h1');
    if (nameHeading) {
        const originalText = nameHeading.textContent;
        // Start the typing animation after a short delay
        setTimeout(() => {
            typeWriter(nameHeading, originalText, 80);
        }, 500);
    }
    
    // Enhanced scroll animation with intersection observer
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when at least 10% of the element is visible
    };
    
    const animateElements = document.querySelectorAll('.portfolio-item, .blog-card, .about-card, .hero-text p, .hero-text h2, .contact-form, .contact-info, .faq-item');
    
    // Hide all elements that should be animated on scroll
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is now visible, trigger animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stop observing the element after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing all elements that should be animated
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add CSS styling for the animations
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        /* Base styles for scroll animations */
        .portfolio-item, .blog-card, .about-card, .hero-text p, .hero-text h2, .contact-form, .contact-info, .faq-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        /* Staggered animation delay for sections with multiple items */
        .about-card:nth-child(1) { transition-delay: 0.1s; }
        .about-card:nth-child(2) { transition-delay: 0.2s; }
        .about-card:nth-child(3) { transition-delay: 0.3s; }
        
        .portfolio-item:nth-child(1) { transition-delay: 0.1s; }
        .portfolio-item:nth-child(2) { transition-delay: 0.2s; }
        .portfolio-item:nth-child(3) { transition-delay: 0.3s; }
        
        .blog-card:nth-child(1) { transition-delay: 0.1s; }
        .blog-card:nth-child(2) { transition-delay: 0.2s; }
        
        /* Custom cursor effect for the typing animation */
        .hero h1 {
            border-right: 2px solid var(--primary-color);
            white-space: nowrap;
            overflow: hidden;
            margin: 0 auto;
            animation: blinking-cursor 0.8s step-end infinite;
        }
        
        @keyframes blinking-cursor {
            from, to { border-color: transparent }
            50% { border-color: var(--primary-color); }
        }
    `;
    
    document.head.appendChild(animationStyles);
    
    // Previous code continues...
});
// Combined JavaScript file with preloader and animations

document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Preloader functionality
    window.addEventListener('load', function() {
        setTimeout(function() {
            const preloader = document.getElementById('preloader');
            
            // Fade out the preloader
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            
            // Remove loading class from body
            document.body.classList.remove('loading');
            
            // Remove preloader after animation completes
            setTimeout(function() {
                if (preloader) {
                    preloader.style.display = 'none';
                }
                
                // Start the name typing animation after preloader is gone
                const nameHeading = document.querySelector('.hero h1');
                if (nameHeading) {
                    const originalText = nameHeading.textContent;
                    nameHeading.textContent = '';
                    nameHeading.style.borderRight = '2px solid var(--primary-color)';
                    
                    // Start the typing animation
                    setTimeout(() => {
                        typeWriter(nameHeading, originalText, 80);
                    }, 300);
                }
            }, 500);
        }, 2000); // Show preloader for at least 2 seconds
    });
    
    // Typing animation for the name in the hero section
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = ''; // Clear the text first
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Remove the blinking cursor effect when typing is complete
                element.style.borderRight = 'none';
            }
        }
        
        // Start typing
        type();
    }
    
    // Enhanced scroll animation with intersection observer
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when at least 10% of the element is visible
    };
    
    const animateElements = document.querySelectorAll('.portfolio-item, .blog-card, .about-card, .hero-text p, .hero-text h2, .contact-form, .contact-info, .faq-item');
    
    // Hide all elements that should be animated on scroll
    animateElements.forEach(element => {
        // Skip the name heading as it's handled by the typing animation
        if (!element.classList.contains('hero h1')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is now visible, trigger animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stop observing the element after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Start observing all elements that should be animated
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add CSS styling for the animations
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        /* Base styles for scroll animations */
        .portfolio-item, .blog-card, .about-card, .hero-text p, .hero-text h2, .contact-form, .contact-info, .faq-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        /* Staggered animation delay for sections with multiple items */
        .about-card:nth-child(1) { transition-delay: 0.1s; }
        .about-card:nth-child(2) { transition-delay: 0.2s; }
        .about-card:nth-child(3) { transition-delay: 0.3s; }
        
        .portfolio-item:nth-child(1) { transition-delay: 0.1s; }
        .portfolio-item:nth-child(2) { transition-delay: 0.2s; }
        .portfolio-item:nth-child(3) { transition-delay: 0.3s; }
        
        .blog-card:nth-child(1) { transition-delay: 0.1s; }
        .blog-card:nth-child(2) { transition-delay: 0.2s; }
        
        /* Modified cursor effect for the typing animation */
        .hero h1 {
            white-space: nowrap;
            overflow: hidden;
            margin: 0 auto;
        }
    `;
    
    document.head.appendChild(animationStyles);
    
    // Rest of your existing JavaScript (FAQ toggle, smooth scrolling, etc.)
    
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Update the toggle icon
            const toggleIcon = question.querySelector('.toggle-icon');
            toggleIcon.textContent = item.classList.contains('active') ? '×' : '+';
            
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherToggleIcon = otherItem.querySelector('.toggle-icon');
                    otherToggleIcon.textContent = '+';
                }
            });
        });
    });
    
    // Keep rest of your original code...
});