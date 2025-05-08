// Current Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;
        
        // Toggle active class
        accordionItem.classList.toggle('active');
        
        // Toggle content height
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0';
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For demonstration purposes, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        }
    });
});