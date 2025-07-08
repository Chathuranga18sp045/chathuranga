// Portfolio Configuration File
// This file contains all common styles, configurations, and functionality
// Used across index.html, about.html, and animation.html
// Now includes WhatsApp Chat Integration

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
        this.initializeWhatsAppChat();
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
                                'about-bg': '#1a3332',
                                'whatsapp-green': '#25d366',
                                'whatsapp-green-dark': '#128c7e'
                            },
                            animation: {
                                'infiniterotate': 'infiniterotate 25s infinite linear',
                                'fade-in-up': 'fadeInUp 1s ease forwards',
                                'scale-in': 'scaleIn 0.8s ease forwards',
                                'float': 'float 3s ease-in-out infinite',
                                'typing': 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
                                'float-shape': 'floatShape 20s infinite linear',
                                'particle-float': 'particleFloat 1s ease-out forwards',
                                'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
                                'badge-pulse': 'badgePulse 1.5s ease-in-out infinite'
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
                                },
                                whatsappPulse: {
                                    '0%, 100%': { transform: 'scale(1)' },
                                    '50%': { transform: 'scale(1.05)' }
                                },
                                badgePulse: {
                                    '0%, 100%': { transform: 'scale(1)' },
                                    '50%': { transform: 'scale(1.2)' }
                                },
                                fadeOut: {
                                    'from': { opacity: '1', transform: 'scale(1)' },
                                    'to': { opacity: '0', transform: 'scale(0)' }
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

    // Inject common CSS styles including WhatsApp styles
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

            /* WhatsApp Chat Bubble Styles */
            .whatsapp-container {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 10000;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            .whatsapp-bubble {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #25d366, #128c7e);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: whatsappPulse 2s ease-in-out infinite;
                position: relative;
                overflow: hidden;
            }

            .whatsapp-bubble::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                transition: left 0.5s ease;
            }

            .whatsapp-bubble:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
                animation-play-state: paused;
            }

            .whatsapp-bubble:hover::before {
                left: 100%;
            }

            .whatsapp-icon {
                width: 32px;
                height: 32px;
                color: white;
            }

            .notification-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                width: 20px;
                height: 20px;
                background: #ff4757;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 11px;
                font-weight: bold;
                color: white;
                animation: badgePulse 1.5s ease-in-out infinite;
            }

            .whatsapp-modal {
                position: fixed;
                bottom: 100px;
                right: 24px;
                width: 320px;
                max-width: calc(100vw - 48px);
                background: white;
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                transform: translateY(20px) scale(0.9);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 10001;
                overflow: hidden;
            }

            .whatsapp-modal.active {
                transform: translateY(0) scale(1);
                opacity: 1;
                visibility: visible;
            }

            .modal-header {
                background: linear-gradient(135deg, #25d366, #128c7e);
                padding: 16px 20px;
                color: white;
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .profile-pic {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 16px;
            }

            .profile-info h4 {
                margin: 0;
                font-size: 16px;
                font-weight: 600;
            }

            .profile-info p {
                margin: 0;
                font-size: 12px;
                opacity: 0.9;
            }

            .close-btn {
                margin-left: auto;
                background: none;
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                transition: background 0.2s ease;
            }

            .close-btn:hover {
                background: rgba(255, 255, 255, 0.1);
            }

            .modal-body {
                padding: 20px;
            }

            .quick-messages {
                margin-bottom: 16px;
            }

            .quick-messages h5 {
                margin: 0 0 12px 0;
                font-size: 14px;
                font-weight: 600;
                color: #333;
            }

            .quick-message-btn {
                display: block;
                width: 100%;
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                padding: 12px 16px;
                margin-bottom: 8px;
                text-align: left;
                color: #495057;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .quick-message-btn:hover {
                background: rgba(37, 211, 102, 0.1);
                border-color: #25d366;
                color: #128c7e;
            }

            .divider {
                margin: 16px 0;
                border: none;
                height: 1px;
                background: #e9ecef;
            }

            .custom-message {
                margin-bottom: 16px;
            }

            .custom-message label {
                display: block;
                margin-bottom: 8px;
                font-size: 14px;
                font-weight: 600;
                color: #333;
            }

            .message-textarea {
                width: 100%;
                min-height: 80px;
                padding: 12px;
                border: 1px solid #e9ecef;
                border-radius: 8px;
                font-size: 14px;
                font-family: inherit;
                resize: vertical;
                outline: none;
                transition: border-color 0.2s ease;
                box-sizing: border-box;
            }

            .message-textarea:focus {
                border-color: #25d366;
                box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.1);
            }

            .send-btn {
                width: 100%;
                background: linear-gradient(135deg, #25d366, #128c7e);
                color: white;
                border: none;
                border-radius: 8px;
                padding: 12px 20px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            .send-btn:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }

            .send-btn:disabled {
                opacity: 0.7;
                cursor: not-allowed;
                transform: none;
            }

            .whatsapp-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 10002;
                font-size: 14px;
                font-weight: 500;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 300px;
            }

            .whatsapp-notification.success {
                background: #25d366;
                color: white;
            }

            .whatsapp-notification.error {
                background: #ff4757;
                color: white;
            }

            .whatsapp-notification.show {
                transform: translateX(0);
            }

            /* Responsive Utilities */
            @media (max-width: 768px) {
                .cursor, .cursor-follower {
                    display: none;
                }
                body {
                    cursor: auto;
                }

                .whatsapp-modal {
                    width: calc(100vw - 32px);
                    right: 16px;
                    bottom: 90px;
                }

                .whatsapp-container {
                    right: 16px;
                    bottom: 16px;
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
                const hoverElements = document.querySelectorAll('a, button, .contact-item, .profile-image, .resume-btn, .hover-cursor, .whatsapp-bubble, .quick-message-btn');
                
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

    // Initialize WhatsApp Chat
    initializeWhatsAppChat() {
        // Create WhatsApp HTML structure
        this.createWhatsAppHTML();
        
        // Initialize WhatsApp functionality
        setTimeout(() => {
            window.whatsAppChat = new WhatsAppChat();
        }, 100);
    }

    // Create WhatsApp HTML structure
    createWhatsAppHTML() {
        // Check if WhatsApp container already exists
        if (document.getElementById('whatsappContainer')) {
            return;
        }

        const whatsappHTML = `
            <div class="whatsapp-container" id="whatsappContainer">
                <!-- Chat Modal -->
                <div id="whatsappModal" class="whatsapp-modal">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <div class="profile-pic">CM</div>
                        <div class="profile-info">
                            <h4>Chathuranga Malik</h4>
                            <p>Laravel Developer</p>
                        </div>
                        <button class="close-btn" id="closeWhatsappModal">&times;</button>
                    </div>
                    
                    <!-- Modal Body -->
                    <div class="modal-body">
                        <!-- Quick Messages -->
                        <div class="quick-messages">
                            <h5>Quick Messages</h5>
                            <button class="quick-message-btn" data-message="Hello! I'm interested in your web development services. Could we discuss my project?">
                                💼 Project Inquiry
                            </button>
                            <button class="quick-message-btn" data-message="Hi! I'd like to know more about your Laravel development expertise and availability.">
                                🚀 Laravel Development
                            </button>
                            <button class="quick-message-btn" data-message="Hello! I need help with Vue.js integration. Are you available for consultation?">
                                ⚡ Vue.js Help
                            </button>
                            <button class="quick-message-btn" data-message="Hi Chathuranga! I saw your portfolio and would like to discuss a potential collaboration.">
                                🤝 Collaboration
                            </button>
                        </div>
                        
                        <hr class="divider">
                        
                        <!-- Custom Message -->
                        <div class="custom-message">
                            <label for="customMessage">Or write your own message:</label>
                            <textarea 
                                id="customMessage" 
                                class="message-textarea" 
                                placeholder="Type your message here..."
                                maxlength="500"
                            ></textarea>
                        </div>
                        
                        <!-- Send Button -->
                        <button class="send-btn" id="sendWhatsappMessage">
                            <svg class="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.696"/>
                            </svg>
                            Send Message
                        </button>
                    </div>
                </div>
                
                <!-- WhatsApp Bubble -->
                <div class="whatsapp-bubble" id="whatsappBubble">
                    <div class="notification-badge" id="notificationBadge">1</div>
                    <svg class="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.696"/>
                    </svg>
                </div>
            </div>
        `;

        // Insert WhatsApp HTML into body
        document.body.insertAdjacentHTML('beforeend', whatsappHTML);
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

// WhatsApp Chat Class
class WhatsAppChat {
    constructor() {
        this.whatsappNumber = '+94763241451';
        this.selectedMessage = '';
        this.init();
    }

    init() {
        this.bindEvents();
        this.initNotificationBadge();
    }

    bindEvents() {
        const whatsappBubble = document.getElementById('whatsappBubble');
        const whatsappModal = document.getElementById('whatsappModal');
        const closeModalBtn = document.getElementById('closeWhatsappModal');
        const sendBtn = document.getElementById('sendWhatsappMessage');
        const customMessageTextarea = document.getElementById('customMessage');
        const quickMessageBtns = document.querySelectorAll('.quick-message-btn');

        if (!whatsappBubble || !whatsappModal) {
            console.warn('WhatsApp elements not found, retrying...');
            setTimeout(() => this.bindEvents(), 500);
            return;
        }

        // Toggle WhatsApp modal
        whatsappBubble.addEventListener('click', () => {
            whatsappModal.classList.toggle('active');
            
            // Hide notification badge when opened
            const badge = document.getElementById('notificationBadge');
            if (badge && whatsappModal.classList.contains('active')) {
                badge.style.display = 'none';
            }
        });

        // Close modal
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                whatsappModal.classList.remove('active');
            });
        }

        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            if (!whatsappModal.contains(e.target) && !whatsappBubble.contains(e.target)) {
                whatsappModal.classList.remove('active');
            }
        });

        // Quick message selection
        quickMessageBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active state from all buttons
                quickMessageBtns.forEach(b => this.resetButtonStyle(b));
                
                // Add active state to clicked button
                this.setActiveButtonStyle(btn);
                
                // Set selected message
                this.selectedMessage = btn.getAttribute('data-message');
                
                // Clear custom message
                if (customMessageTextarea) {
                    customMessageTextarea.value = '';
                }
                
                // Enable send button
                if (sendBtn) {
                    sendBtn.disabled = false;
                }
            });
        });

        // Custom message input
        if (customMessageTextarea) {
            customMessageTextarea.addEventListener('input', () => {
                // Clear quick message selection
                quickMessageBtns.forEach(b => this.resetButtonStyle(b));
                
                this.selectedMessage = customMessageTextarea.value.trim();
                if (sendBtn) {
                    sendBtn.disabled = this.selectedMessage === '';
                }
            });
        }

        // Send WhatsApp message
        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                this.sendMessage();
            });

            // Initialize send button as disabled
            sendBtn.disabled = true;
        }
    }

    resetButtonStyle(button) {
        button.style.background = '#f8f9fa';
        button.style.borderColor = '#e9ecef';
        button.style.color = '#495057';
    }

    setActiveButtonStyle(button) {
        button.style.background = 'rgba(37, 211, 102, 0.1)';
        button.style.borderColor = '#25d366';
        button.style.color = '#128c7e';
    }

    sendMessage() {
        const customMessageTextarea = document.getElementById('customMessage');
        const whatsappModal = document.getElementById('whatsappModal');
        const sendBtn = document.getElementById('sendWhatsappMessage');
        const quickMessageBtns = document.querySelectorAll('.quick-message-btn');

        let messageToSend = this.selectedMessage || (customMessageTextarea ? customMessageTextarea.value.trim() : '');
        
        if (messageToSend) {
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(messageToSend);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Close modal
            if (whatsappModal) {
                whatsappModal.classList.remove('active');
            }
            
            // Reset form
            if (customMessageTextarea) {
                customMessageTextarea.value = '';
            }
            this.selectedMessage = '';
            if (sendBtn) {
                sendBtn.disabled = true;
            }
            
            // Reset quick message buttons
            quickMessageBtns.forEach(b => this.resetButtonStyle(b));
            
            // Show success feedback
            this.showNotification('Message sent! Opening WhatsApp...', 'success');
        } else {
            this.showNotification('Please select a quick message or write your own.', 'error');
        }
    }

    showNotification(text, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.whatsapp-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `whatsapp-notification ${type}`;
        notification.textContent = text;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    initNotificationBadge() {
        // Auto-hide notification badge after 5 seconds
        setTimeout(() => {
            const badge = document.getElementById('notificationBadge');
            if (badge) {
                badge.style.animation = 'fadeOut 0.5s ease forwards';
                setTimeout(() => {
                    badge.style.display = 'none';
                }, 500);
            }
        }, 5000);
    }
}

// Common Color Palette (for reference)
const PORTFOLIO_COLORS = {
    primary: '#1dd1a1',
    primaryLight: '#26d0ce',
    primaryDark: '#16a085',
    darkOverlay: '#0a2e2a',
    darkBg: '#0f2027',
    aboutBg: '#1a3332',
    whatsappGreen: '#25d366',
    whatsappGreenDark: '#128c7e'
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
    module.exports = { PortfolioConfig, WhatsAppChat, PORTFOLIO_COLORS };
}