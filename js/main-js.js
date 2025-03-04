/**
 * Serene Yoga Website - Main JavaScript File
 * Contains all interactive functionality for the yoga website
 */

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and X
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && !event.target.closest('nav')) {
            navMenu.classList.remove('active');
            
            // Reset icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-nav .prev');
    const nextBtn = document.querySelector('.testimonial-nav .next');
    
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        // Hide all testimonials except the first one
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Function to show a specific testimonial
        function showTestimonial(index) {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });
            
            // Show the selected testimonial
            testimonials[index].style.display = 'block';
            
            // Add fade-in animation
            testimonials[index].style.opacity = '0';
            setTimeout(() => {
                testimonials[index].style.opacity = '1';
                testimonials[index].style.transition = 'opacity 0.5s ease';
            }, 50);
        }
        
        // Event listeners for navigation buttons
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function() {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonials.length - 1;
                }
                showTestimonial(currentTestimonial);
            });
            
            nextBtn.addEventListener('click', function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            });
            
            // Auto-rotate testimonials
            setInterval(function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            }, 8000); // Change testimonial every 8 seconds
        }
    }
    
    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                    
                    // Add animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        if (item.style.display !== 'none') {
                            item.style.opacity = '1';
                            item.style.transition = 'opacity 0.5s ease';
                        }
                    }, 50);
                });
            });
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle answer visibility
                const answer = this.nextElementSibling;
                const isOpen = answer.style.display === 'block';
                
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.display = 'none';
                });
                
                document.querySelectorAll('.faq-toggle i').forEach(icon => {
                    icon.className = 'fas fa-plus';
                });
                
                // If the clicked question wasn't open, open it
                if (!isOpen) {
                    answer.style.display = 'block';
                    this.querySelector('.faq-toggle i').className = 'fas fa-minus';
                }
            });
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            // Reset validation styling
            contactForm.querySelectorAll('.error-message').forEach(error => {
                error.remove();
            });
            
            requiredFields.forEach(field => {
                field.style.borderColor = '';
                
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = 'red';
                    
                    // Add error message
                    const errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.style.color = 'red';
                    errorMessage.style.fontSize = '0.8rem';
                    errorMessage.style.marginTop = '5px';
                    errorMessage.textContent = 'This field is required';
                    
                    field.parentNode.appendChild(errorMessage);
                }
                
                // Validate email format
                if (field.type === 'email' && field.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(field.value)) {
                        valid = false;
                        field.style.borderColor = 'red';
                        
                        // Add error message
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.style.color = 'red';
                        errorMessage.style.fontSize = '0.8rem';
                        errorMessage.style.marginTop = '5px';
                        errorMessage.textContent = 'Please enter a valid email address';
                        
                        field.parentNode.appendChild(errorMessage);
                    }
                }
            });
            
            if (valid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.style.backgroundColor = '#e6f7e9';
                successMessage.style.color = '#2e7d32';
                successMessage.style.padding = '1rem';
                successMessage.style.borderRadius = '5px';
                successMessage.style.textAlign = 'center';
                successMessage.style.marginTop = '1rem';
                successMessage.innerHTML = '<p><strong>Thank you for your message!</strong></p><p>I will get back to you as soon as possible.</p>';
                
                // Insert success message after form
                contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    successMessage.style.transition = 'opacity 0.5s ease';
                    
                    setTimeout(() => {
                        successMessage.remove();
                    }, 500);
                }, 5000);
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    
                    const icon = menuToggle.querySelector('i');
                    if (icon.classList.contains('fa-times')) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
                
                // Scroll to element
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Video play button
    const playButton = document.querySelector('.play-button');
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (playButton && videoPlaceholder) {
        playButton.addEventListener('click', function() {
            // In a real implementation, this would play the video
            // For now, we'll just show a message
            const message = document.createElement('div');
            message.textContent = 'Video would play here';
            message.style.position = 'absolute';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
            message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            message.style.color = 'white';
            message.style.padding = '1rem';
            message.style.borderRadius = '5px';
            
            // Remove play button
            playButton.style.display = 'none';
            
            // Add message
            videoPlaceholder.appendChild(message);
        });
    }
    
    // Lazy loading for images
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
                    
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
        });
    }
});
