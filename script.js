document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('active') && !event.target.closest('nav')) {
            navLinks.classList.remove('active');
        }
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Form submission
    // Contact Form Submission to Google Sheets
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxz88tmPMj4sTN7opcracG0HFwgWn8cUQgEPWRKkUfBcxTlrSOWU4ZcfyPL6BTI6zcK/exec';
    const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert("Thank you! Your message has been submitted successfully.");
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Oops! There was a problem submitting your form. Please try again.");
        });
    });
    
    // Animate on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .certificate, .curriculum-week');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const setupAnimations = () => {
        const elements = document.querySelectorAll('.project-card, .certificate, .curriculum-week');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };
    
    // Initialize animations
    setupAnimations();
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
});