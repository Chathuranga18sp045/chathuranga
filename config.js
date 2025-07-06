// Portfolio Configuration File
// This file contains all common styles, configurations, and functionality
// Used across index.html, about.html, and animation.html

class PortfolioConfig {
    constructor() {
        this.init();
    }

    // Initialize all common configurations
    init() {
        this.loadTailwindCSS();
        this.setupTailwindConfig();
        this.injectCommonStyles();
        this.initializeCursor();
        this.setupCommonEventListeners();
    }

    // Load Tailwind CSS dynamically
    loadTailwindCSS() {
        if (!document.querySelector('script[src*="tailwindcss"]')) {
            const script = document.createElement('script');
            script.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(script);
        }
    }

    // Setup Tailwind configuration
    setupTailwindConfig() {
        // Wait for Tailwind to load, then configure
        const checkTailwind = () => {
            if (typeof tailwind !== 'undefined') {
                tailwind.config = {
                    theme: {
                        extend: {
                            colors: {
                                'primary': '#1dd1a1',
                                'primary-light': '#26d0ce',
                                'primary-dark': '#16a085',
                                'dark-overlay': '#0a2e2a',
                                'dark-bg': '#0f2027',
                                'about-bg': '#1a3332'
                            },
                            animation: {
                                'infiniterotate': 'infiniterotate 25s infinite linear',
                                'fade-in-up': 'fadeInUp 1s ease forwards',
                                'scale-in': 'scaleIn 0.8s ease forwards',
                                'float': 'float 3s ease-in-out infinite',
                                'typing': 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
                                'float-shape': 'floatShape 20s infinite linear',
                                'particle-float': 'particleFloat 1s ease-out forwards'
                            },
                            keyframes: {
                                infiniterotate: {
                                    '0%': { transform: 'rotate(0deg)' },
                                    '100%': { transform: 'rotate(360deg)' }
                                },
                                fadeInUp: {
                                    'from': { opacity: '0', transform: 'translateY(30px)' },
                                    'to': { opacity: '1', transform: 'translateY(0)' }
                                },
                                scaleIn: {
                                    'from': { opacity: '0', transform: 'scale(0.8)' },
                                    'to': { opacity: '1', transform: 'scale(1)' }
                                },
                                float: {
                                    '0%, 100%': { transform: 'translateY(0)' },
                                    '50%': { transform: 'translateY(-10px)' }
                                },
                                typing: {
                                    'from': { width: '0' },
                                    'to': { width: '100%' }
                                },
                                'blink-caret': {
                                    'from, to': { borderColor: 'transparent' },
                                    '50%': { borderColor: '#1dd1a1' }
                                },
                                floatShape: {
                                    '0%': { transform: 'translateY(0) rotate(0deg)' },
                                    '50%': { transform: 'translateY(-100px) rotate(180deg)' },
                                    '100%': { transform: 'translateY(0) rotate(360deg)' }
                                },
                                particleFloat: {
                                    '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                                    '100%': { opacity: '0', transform: 'translateY(-50px) scale(0)' }
                                }
                            }
                        }
                    }
                };
            } else {
                setTimeout(checkTailwind, 100);
            }
        };
        checkTailwind();
    }

    // Inject common CSS styles
    injectCommonStyles() {
        const styles = `
            /* Common Portfolio Styles */
            body { 
                cursor: none; 
                margin: 0;
                padding: 0;
            }
            
            /* Custom Cursor Styles */
            .cursor {
                width: 20px;
                height: 20px;
                border: 2px solid #1dd1a1;
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
                transition: transform 0.1s ease;
            }
            
            .cursor-follower {
                width: 8px;
                height: 8px;
                background: #1dd1a1;
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9998;
                transition: transform 0.15s ease;
            }

            .cursor, .cursor-follower {
                transition: transform 0.1s ease, opacity 0.3s ease;
            }

            /* Common Button Styles */
            .btn-gradient {
                background: linear-gradient(135deg, #1dd1a1, #26d0ce);
                transition: all 0.3s ease;
            }
            
            .btn-gradient:hover {
                background: linear-gradient(135deg, #26d0ce, #1dd1a1);
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(29, 209, 161, 0.3);
            }

            /* Common Text Gradient */
            .text-gradient {
                background: linear-gradient(135deg, #1dd1a1, #26d0ce);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            /* Grid Pattern */
            .grid-pattern {
                background-image: 
                    linear-gradient(rgba(29, 209, 161, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(29, 209, 161, 0.1) 1px, transparent 1px);
                background-size: 50px 50px;
            }

            /* Common Hover Effects */
            .hover-scale:hover {
                transform: scale(1.05);
                transition: transform 0.3s ease;
            }

            .hover-glow:hover {
                box-shadow: 0 0 20px rgba(29, 209, 161, 0.5);
                transition: box-shadow 0.3s ease;
            }

            /* Typewriter Effect */
            .typewriter {
                overflow: hidden;
                border-right: 3px solid #1dd1a1;
                white-space: nowrap;
                animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
            }

            /* Shimmer Effect */
            @keyframes shimmer {
                0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
                100% { transform: translateX(100%) translateY(100%) rotate(30deg); }
            }

            .shimmer::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                animation: shimmer 3s infinite;
            }

            /* Responsive Utilities */
            @media (max-width: 768px) {
                .cursor, .cursor-follower {
                    display: none;
                }
                body {
                    cursor: auto;
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Initialize custom cursor
    initializeCursor() {
        // Create cursor elements if they don't exist
        if (!document.querySelector('.cursor')) {
            const cursor = document.createElement('div');
            cursor.className = 'cursor';
            document.body.appendChild(cursor);
        }

        if (!document.querySelector('.cursor-follower')) {
            const cursorFollower = document.createElement('div');
            cursorFollower.className = 'cursor-follower';
            document.body.appendChild(cursorFollower);
        }

        // Cursor functionality
        this.setupCursorMovement();
        this.setupCursorHoverEffects();
    }

    // Setup cursor movement
    setupCursorMovement() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        if (cursor && cursorFollower) {
            // Move the cursor with mouse
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';

                setTimeout(() => {
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                }, 100);
            });

            // Hide cursor when mouse leaves viewport
            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
                cursorFollower.style.opacity = '0';
            });

            // Show cursor again on re-entry
            document.addEventListener('mouseenter', () => {
                cursor.style.opacity = '1';
                cursorFollower.style.opacity = '1';
            });
        }
    }


    // Setup cursor hover effects
    setupCursorHoverEffects() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        if (cursor && cursorFollower) {
            // Add hover effects to common elements
            const addHoverEffect = () => {
                const hoverElements = document.querySelectorAll('a, button, .contact-item, .profile-image, .resume-btn, .hover-cursor');
                
                hoverElements.forEach(element => {
                    element.addEventListener('mouseenter', () => {
                        cursor.style.transform = 'scale(1.5)';
                        cursor.style.borderColor = '#ffffff';
                        cursorFollower.style.transform = 'scale(1.5)';
                        cursorFollower.style.background = '#ffffff';
                    });
                    
                    element.addEventListener('mouseleave', () => {
                        cursor.style.transform = 'scale(1)';
                        cursor.style.borderColor = '#1dd1a1';
                        cursorFollower.style.transform = 'scale(1)';
                        cursorFollower.style.background = '#1dd1a1';
                    });
                });
            };

            // Initial setup
            addHoverEffect();

            // Re-setup when new elements are added
            const observer = new MutationObserver(addHoverEffect);
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    // Setup common event listeners
    setupCommonEventListeners() {
        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Intersection Observer for animations
        this.setupAnimationObserver();
    }

    // Setup animation observer
    setupAnimationObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('animate-visible');
                }
            });
        }, observerOptions);

        // Observe animated elements when DOM is ready
        const observeElements = () => {
            document.querySelectorAll('.animate-fade-in-up, .animate-scale-in, .animate-on-scroll').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', observeElements);
        } else {
            observeElements();
        }
    }

    // Utility Functions

    // Create particle effect
    static createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'fixed w-1 h-1 bg-primary rounded-full pointer-events-none z-50';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animation = 'particle-float 1s ease-out forwards';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Show custom modal (if needed)
    static showModal(content, type = 'info') {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl transform transition-all">
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold">
                    ×
                </button>
                <div class="text-center">
                    ${content}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('button');
        closeBtn.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        return modal;
    }

    // Navbar scroll effect
    static setupNavbarScroll(navbarId = 'navbar', transparentClass = 'navbar-transparent', solidClass = 'navbar-solid') {
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById(navbarId);
            if (navbar) {
                const scrollPosition = window.scrollY;
                const viewportHeight = window.innerHeight;
                
                if (scrollPosition >= viewportHeight) {
                    navbar.classList.remove(transparentClass);
                    navbar.classList.add(solidClass);
                } else {
                    navbar.classList.remove(solidClass);
                    navbar.classList.add(transparentClass);
                }
            }
        });
    }

    // Parallax effect
    static setupParallax(selector, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const element = document.querySelector(selector);
            if (element) {
                const scrolled = window.pageYOffset;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
}

// Common Color Palette (for reference)
const PORTFOLIO_COLORS = {
    primary: '#1dd1a1',
    primaryLight: '#26d0ce',
    primaryDark: '#16a085',
    darkOverlay: '#0a2e2a',
    darkBg: '#0f2027',
    aboutBg: '#1a3332'
};

// Initialize configuration when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.portfolioConfig = new PortfolioConfig();
    });
} else {
    window.portfolioConfig = new PortfolioConfig();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioConfig, PORTFOLIO_COLORS };
}