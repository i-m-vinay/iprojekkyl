// I-Pro Solutions Website JavaScript - Jekyll Version

// Global variables
let currentSection = 'home';
let isTransitioning = false;
let countersAnimated = false;
let sparkleTimeout;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing I-Pro Solutions website...');
    
    // Initialize functionality
    initNavigation();
    initMobileMenu();
    initContactForm();
    initScrollAnimations();
    initSmoothTransitions();
    enhanceFormValidation();
    initPremiumEffects();
    
    // Initialize subtle enhancements
    initSubtleSparkles();
    initSubtleClickAnimations();
    
    // Handle initial page load
    handleInitialLoad();
    
    // Initialize hero animations immediately if on home page
    setTimeout(() => {
        if (currentSection === 'home') {
            initHeroAnimations();
        }
    }, 1000);
    
    console.log('All functionality initialized successfully');
});

// Initialize subtle sparkle effects
function initSubtleSparkles() {
    console.log('Initializing subtle sparkle effects...');
    
    // Create sparkle container
    const sparkleContainer = document.createElement('div');
    sparkleContainer.id = 'sparkle-container';
    document.body.appendChild(sparkleContainer);
    
    // Add scroll listener for sparkles
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // Only create sparkles on significant scroll movement
        if (scrollDelta > 10) {
            createSubtleSparkle();
            lastScrollY = currentScrollY;
        }
    }, 200));
    
    // Create occasional random sparkles
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 3 seconds
            createSubtleSparkle();
        }
    }, 3000);
    
    console.log('Subtle sparkle effects initialized');
}

// Create a subtle sparkle
function createSubtleSparkle() {
    const sparkleContainer = document.getElementById('sparkle-container');
    if (!sparkleContainer) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    sparkleContainer.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// Initialize subtle click animations
function initSubtleClickAnimations() {
    console.log('Initializing subtle click animations...');
    
    // Add click animation to all buttons
    const buttons = document.querySelectorAll('.btn, button, [onclick]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createClickRipple(e, this);
            createClickSparkles(e);
        });
    });
    
    console.log('Subtle click animations initialized');
}

// Create ripple effect on click
function createClickRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(56, 217, 169, 0.3);
        border-radius: 50%;
        pointer-events: none;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        z-index: 1;
    `;
    
    // Add ripple keyframes if not exists
    if (!document.querySelector('#ripple-styles')) {
        const rippleStyles = document.createElement('style');
        rippleStyles.id = 'ripple-styles';
        rippleStyles.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyles);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Create sparkles on click
function createClickSparkles(event) {
    const sparkleContainer = document.getElementById('sparkle-container');
    if (!sparkleContainer) return;
    
    // Create 3-5 small sparkles around click point
    const sparkleCount = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Position around click point with some randomness
        const offsetX = (Math.random() - 0.5) * 60;
        const offsetY = (Math.random() - 0.5) * 60;
        const x = event.clientX + offsetX;
        const y = event.clientY + offsetY;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        sparkleContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize hero banner animations
function initHeroAnimations() {
    console.log('Initializing hero banner animations...');
    
    // Ensure we're on the home section
    const homeSection = document.getElementById('home');
    if (!homeSection || !homeSection.classList.contains('active')) {
        console.log('Not on home section, skipping hero animations');
        return;
    }
    
    // Reset all animations first
    const animateTextElements = document.querySelectorAll('.animate-text');
    const fadeUpElements = document.querySelectorAll('.animate-fade-up');
    const statsElements = document.querySelectorAll('.animate-stats');
    
    // Reset styles
    animateTextElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
    });
    
    fadeUpElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });
    
    statsElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });
    
    // Trigger text animations with staggered timing
    animateTextElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });
    
    // Trigger fade-up animations
    setTimeout(() => {
        fadeUpElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 800);
    
    // Trigger stats animation and counter
    setTimeout(() => {
        statsElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Start counter animation for this stat
                const statNumbers = element.querySelectorAll('.stat-number');
                if (statNumbers.length > 0 && !countersAnimated) {
                    statNumbers.forEach(statNumber => {
                        animateCounter(statNumber);
                    });
                }
            }, index * 150);
        });
        
        if (!countersAnimated) {
            countersAnimated = true;
        }
    }, 1200);
    
    console.log('Hero animations initialized');
}

// Counter animation for statistics
function animateCounter(element) {
    const target = element.textContent;
    let current = 0;
    const increment = target.match(/\d+/) ? parseInt(target.match(/\d+/)[0]) / 50 : 1;
    const suffix = target.replace(/\d+/, '');
    
    const timer = setInterval(() => {
        current += increment;
        const targetNumber = parseInt(target.match(/\d+/)[0]);
        
        if (current >= targetNumber) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Initialize navigation functionality
function initNavigation() {
    console.log('Initializing navigation...');
    
    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const onclick = this.getAttribute('onclick');
            if (onclick && onclick.includes('showSection')) {
                const sectionMatch = onclick.match(/showSection\('([^']+)'\)/);
                if (sectionMatch) {
                    showSection(sectionMatch[1]);
                }
            }
        });
    });
    
    // Initialize brand click
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.addEventListener('click', function() {
            showSection('home');
        });
    }
    
    // Initialize all clickable elements
    initializeOnClickButtons();
    
    console.log('Navigation initialized');
}

// Initialize all buttons with onclick attributes
function initializeOnClickButtons() {
    const buttons = document.querySelectorAll('[onclick]');
    buttons.forEach(button => {
        const onclickAttr = button.getAttribute('onclick');
        
        // Handle showSection calls
        if (onclickAttr.includes('showSection')) {
            const sectionMatch = onclickAttr.match(/showSection\('([^']+)'\)/);
            if (sectionMatch) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    showSection(sectionMatch[1]);
                });
            }
        }
        
        // Handle WhatsApp calls
        if (onclickAttr.includes('openWhatsApp')) {
            const messageMatch = onclickAttr.match(/openWhatsApp\('([^']+)'\)/);
            if (messageMatch) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    openWhatsApp(messageMatch[1]);
                });
            }
        }
    });
}

// Enhanced navigation function with smooth transitions
function showSection(sectionId) {
    if (isTransitioning || currentSection === sectionId) return;
    
    console.log('Navigating to section with smooth transition:', sectionId);
    isTransitioning = true;
    
    // Update navigation active states
    updateNavigationState(sectionId);
    
    // Get current and target sections
    const currentSectionEl = document.querySelector('.section.active');
    const targetSection = document.getElementById(sectionId);
    
    if (!targetSection) {
        console.error('Section not found:', sectionId);
        isTransitioning = false;
        return;
    }
    
    // Add transition animation to current section
    if (currentSectionEl) {
        currentSectionEl.style.transform = 'translateY(-20px)';
        currentSectionEl.style.opacity = '0';
        
        setTimeout(() => {
            currentSectionEl.classList.remove('active');
            currentSectionEl.style.display = 'none';
            currentSectionEl.style.transform = '';
            currentSectionEl.style.opacity = '';
        }, 300);
    }
    
    // Show target section with animation
    setTimeout(() => {
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(20px)';
        targetSection.style.display = 'block';
        
        requestAnimationFrame(() => {
            targetSection.classList.add('active');
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                targetSection.style.opacity = '';
                targetSection.style.transform = '';
                isTransitioning = false;
                
                // Initialize hero animations if navigating to home
                if (sectionId === 'home') {
                    setTimeout(() => {
                        initHeroAnimations();
                    }, 300);
                }
            }, 400);
        });
        
        currentSection = sectionId;
        updateURL(sectionId);
        closeMobileMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, currentSectionEl ? 150 : 0);
}

// Update navigation active states
function updateNavigationState(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const onclickAttr = link.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${sectionId}'`)) {
            link.classList.add('active');
        }
    });
}

// WhatsApp function
function openWhatsApp(message, phone = '919324090425') {
    console.log('Opening WhatsApp with message:', message);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    // Open in new window
    window.open(whatsappURL, '_blank');
    
    // Add visual feedback
    const event = new CustomEvent('whatsappOpened', { detail: { message, phone } });
    document.dispatchEvent(event);
}

// Mobile menu functionality - FIXED
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        // Remove any existing event listeners
        navToggle.removeEventListener('click', toggleMobileMenu);
        
        // Add fresh event listener
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });
        
        // Close menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(closeMobileMenu, 100);
            });
        });
        
        console.log('Mobile menu initialized successfully');
    } else {
        console.error('Mobile menu elements not found');
    }
}

function toggleMobileMenu() {
    console.log('Toggling mobile menu');
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeMobileMenu() {
    console.log('Closing mobile menu');
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize smooth transitions
function initSmoothTransitions() {
    console.log('Initializing smooth transitions...');
    
    // Add transition classes to all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.transition = 'all 0.4s ease-in-out';
    });
    
    console.log('Smooth transitions initialized');
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmit(this);
        });
    }
}

function handleContactFormSubmit(form) {
    console.log('Handling contact form submit');
    
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${name}. \\n\\nEmail: ${email}\\nPhone: ${phone}\\nService: ${service}\\n\\nMessage: ${message}`;
    
    // Open WhatsApp
    openWhatsApp(whatsappMessage);
    
    // Show success message
    showNotification('Thank you! Your message will be sent via WhatsApp.', 'success');
    
    // Reset form
    form.reset();
}

// Enhanced form validation
function enhanceFormValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    clearFieldError(field);
    
    if (required && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    
    field.parentNode.appendChild(errorEl);
    field.style.borderColor = 'var(--color-danger)';
}

function clearFieldError(field) {
    const errorEl = field.parentNode.querySelector('.form-error');
    if (errorEl) {
        errorEl.remove();
    }
    field.style.borderColor = '';
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate in
    const animateElements = document.querySelectorAll('.card, .service-card, .pricing-card, .testimonial-card, .contact-card, .trust-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize premium effects
function initPremiumEffects() {
    console.log('Initializing premium effects...');
    
    // Add floating animation classes to background elements
    const floatingElements = document.querySelectorAll('.hero-badge, .stat-item');
    floatingElements.forEach((el, index) => {
        if (index % 2 === 0) {
            el.classList.add('floating-element');
        }
    });
    
    console.log('Premium effects initialized');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 16px 24px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                box-shadow: var(--shadow-turquoise);
            }
            .notification-success {
                background: linear-gradient(135deg, var(--color-success), #059669);
            }
            .notification-error {
                background: linear-gradient(135deg, var(--color-danger), #dc2626);
            }
            .notification-info {
                background: linear-gradient(135deg, var(--color-accent-turquoise), var(--color-accent-turquoise-hover));
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Update URL without page reload
function updateURL(sectionId) {
    const url = new URL(window.location);
    url.hash = sectionId;
    window.history.pushState({}, '', url);
}

// Handle initial page load
function handleInitialLoad() {
    console.log('Handling initial page load...');
    
    // Check for hash in URL
    const hash = window.location.hash.substring(1);
    const initialSection = hash && document.getElementById(hash) ? hash : 'home';
    
    // Show initial section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    const homeSection = document.getElementById(initialSection);
    if (homeSection) {
        homeSection.style.display = 'block';
        homeSection.classList.add('active');
        currentSection = initialSection;
        updateNavigationState(initialSection);
    }
    
    console.log('Initial page load handled, showing section:', initialSection);
}

// Handle browser back/forward
window.addEventListener('popstate', function(e) {
    const hash = window.location.hash.substring(1);
    const targetSection = hash || 'home';
    if (targetSection !== currentSection) {
        showSection(targetSection);
    }
});

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Debug function
function debugCurrentState() {
    console.log('Current section:', currentSection);
    console.log('Is transitioning:', isTransitioning);
    console.log('Active section:', document.querySelector('.section.active'));
}

// Make functions globally available
window.showSection = showSection;
window.openWhatsApp = openWhatsApp;
window.debugCurrentState = debugCurrentState;