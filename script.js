// JavaScript for the portfolio website

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('pesan').value;
            
            // Basic form validation
            if (!name || !email || !message) {
                alert('Mohon isi semua field yang diperlukan.');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show a success message
            alert('Terima kasih! Pesan Anda telah terkirim.');
            contactForm.reset();
        });
    }
    
    // Add active class to current navigation item based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add a subtle animation when elements come into view
    const animateOnScroll = () => {
        const elementsToAnimate = document.querySelectorAll('.portfolio-item, .blog-card, .about-card');
        
        elementsToAnimate.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Call the function on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile navigation toggle
    const mobileNavToggle = document.createElement('div');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    header.insertBefore(mobileNavToggle, nav);
    
    mobileNavToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !mobileNavToggle.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileNavToggle.classList.remove('active');
        }
    });
    
    // Add CSS class for mobile nav
    const style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                padding: 20px 0;
            }
            
            nav.active {
                display: block;
            }
            
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav ul li {
                margin: 10px 0;
            }
            
            .mobile-nav-toggle {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 25px;
                cursor: pointer;
            }
            
            .mobile-nav-toggle span {
                height: 3px;
                width: 100%;
                background-color: var(--secondary-color);
                transition: all 0.3s ease;
            }
            
            .mobile-nav-toggle.active span:nth-child(1) {
                transform: translateY(11px) rotate(45deg);
            }
            
            .mobile-nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-nav-toggle.active span:nth-child(3) {
                transform: translateY(-11px) rotate(-45deg);
            }
            
            .portfolio-item.animate, .blog-card.animate, .about-card.animate {
                animation: fadeInUp 0.8s ease forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    `;
    
    document.head.appendChild(style);
    
    // Add a back-to-top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add CSS for back-to-top button
    const backToTopStyles = document.createElement('style');
    backToTopStyles.textContent = `
        .back-to-top {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 99;
        }
        
        .back-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background-color: #009e70;
            transform: translateY(-3px);
        }
    `;
    
    document.head.appendChild(backToTopStyles);
    
    // Simple image lazy loading
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            const src = img.src;
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
            img.setAttribute('data-src', src);
            imageObserver.observe(img);
        });
    }
    
    // Add subtle hover effects to buttons and links
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 182, 130, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});