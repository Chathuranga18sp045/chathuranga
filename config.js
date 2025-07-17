// Safe Enhanced Portfolio Configuration File
// This file maintains all existing functionality while adding enhanced WhatsApp features
// Compatible with index.html, about.html, animation.html, and footer.html

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
        this.initializeEnhancedWhatsAppChat();
    }

    // Load Tailwind CSS dynamically (existing)
    loadTailwindCSS() {
        if (!document.querySelector('script[src*="tailwindcss"]')) {
            const script = document.createElement('script');
            script.src = 'https://cdn.tailwindcss.com';
            document.head.appendChild(script);
        }
    }

    // Setup Tailwind configuration (existing + new animations)
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
                                'badge-pulse': 'badgePulse 1.5s ease-in-out infinite',
                                // New animations (safe additions)
                                'wa-bounce-in': 'waBounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                'wa-slide-up': 'waSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                'wa-icon-glow': 'waIconGlow 2s ease-in-out infinite',
                                'wa-typing-dots': 'waTypingDots 1.5s ease-in-out infinite',
                                'wa-shake': 'waShake 0.5s ease'
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
                                // New WhatsApp-specific animations (prefixed to avoid conflicts)
                                waBounceIn: {
                                    '0%': { transform: 'scale(0) rotate(-360deg)', opacity: '0' },
                                    '60%': { transform: 'scale(1.2) rotate(-10deg)', opacity: '1' },
                                    '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
                                },
                                waSlideUp: {
                                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                                    '100%': { transform: 'translateY(0)', opacity: '1' }
                                },
                                waIconGlow: {
                                    '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(37, 211, 102, 0.5))' },
                                    '50%': { filter: 'drop-shadow(0 0 15px rgba(37, 211, 102, 0.8))' }
                                },
                                waTypingDots: {
                                    '0%, 20%': { opacity: '0.3' },
                                    '50%': { opacity: '1' },
                                    '100%': { opacity: '0.3' }
                                },
                                waShake: {
                                    '0%, 100%': { transform: 'translateX(0)' },
                                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
                                    '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
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

    // Inject common CSS styles (existing + isolated WhatsApp enhancements)
    injectCommonStyles() {
        const styles = `
            /* ===== EXISTING COMMON PORTFOLIO STYLES (UNCHANGED) ===== */
            body { 
                cursor: none; 
                margin: 0;
                padding: 0;
            }

            /* Custom Theme Scrollbars - Global */
            ::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }

            ::-webkit-scrollbar-track {
                background: rgba(29, 209, 161, 0.1);
                border-radius: 10px;
            }

            ::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #1dd1a1, #26d0ce);
                border-radius: 10px;
                transition: all 0.3s ease;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, #26d0ce, #1dd1a1);
                box-shadow: 0 0 10px rgba(29, 209, 161, 0.4);
            }

            ::-webkit-scrollbar-corner {
                background: rgba(29, 209, 161, 0.1);
            }

            /* Firefox scrollbar styling */
            * {
                scrollbar-width: thin;
                scrollbar-color: #1dd1a1 rgba(29, 209, 161, 0.1);
            }

            /* Custom scrollbars for textarea and other elements */
            textarea::-webkit-scrollbar, 
            pre::-webkit-scrollbar,
            .scrollable::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            textarea::-webkit-scrollbar-track,
            pre::-webkit-scrollbar-track,
            .scrollable::-webkit-scrollbar-track {
                background: rgba(29, 209, 161, 0.05);
                border-radius: 8px;
            }

            textarea::-webkit-scrollbar-thumb,
            pre::-webkit-scrollbar-thumb,
            .scrollable::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #1dd1a1, #26d0ce);
                border-radius: 8px;
            }

            textarea::-webkit-scrollbar-thumb:hover,
            pre::-webkit-scrollbar-thumb:hover,
            .scrollable::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, #26d0ce, #1dd1a1);
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

            /* ===== ENHANCED WHATSAPP STYLES (ISOLATED WITH SPECIFIC SELECTORS) ===== */
            
            /* WhatsApp Container - Isolated */
            #whatsappContainer {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 10000;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            /* Enhanced WhatsApp Bubble */
            #whatsappBubble {
                width: 64px;
                height: 64px;
                background: linear-gradient(135deg, #25d366, #128c7e);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 8px 30px rgba(37, 211, 102, 0.4);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                animation: whatsappPulse 3s ease-in-out infinite;
                position: relative;
                overflow: hidden;
            }

            #whatsappBubble::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                transition: left 0.6s ease;
            }

            #whatsappBubble:hover {
                transform: scale(1.15) rotate(5deg);
                box-shadow: 0 12px 40px rgba(37, 211, 102, 0.7);
                animation-play-state: paused;
            }

            #whatsappBubble:hover::before {
                left: 100%;
            }

            #whatsappBubble .whatsapp-icon {
                width: 34px;
                height: 34px;
                color: white;
                transition: all 0.3s ease;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            }

            #whatsappBubble:hover .whatsapp-icon {
                transform: scale(1.1);
                animation: waIconGlow 1s ease-in-out infinite;
            }

            /* Compact Typing Indicator */
            #typingIndicator {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 8px 12px;
                background: rgba(37, 211, 102, 0.1);
                border-radius: 8px;
                margin-bottom: 12px;
                font-size: 11px;
                color: #128c7e;
                font-style: italic;
            }

            #typingIndicator .wa-typing-dots {
                display: flex;
                gap: 2px;
            }

            #typingIndicator .wa-typing-dot {
                width: 3px;
                height: 3px;
                background: #25d366;
                border-radius: 50%;
                animation: waTypingDots 1.5s ease-in-out infinite;
            }

            #typingIndicator .wa-typing-dot:nth-child(2) {
                animation-delay: 0.2s;
            }

            #typingIndicator .wa-typing-dot:nth-child(3) {
                animation-delay: 0.4s;
            }

            /* Enhanced Notification */
            .wa-notification {
                position: fixed;
                top: 24px;
                right: 24px;
                padding: 12px 20px;
                border-radius: 12px;
                box-shadow: 0 6px 25px rgba(0,0,0,0.3);
                z-index: 10002;
                font-size: 13px;
                font-weight: 600;
                transform: translateX(400px);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                max-width: 300px;
                display: flex;
                align-items: center;
                gap: 10px;
                border: 2px solid transparent;
            }

            .wa-notification.success {
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                border-color: rgba(255,255,255,0.2);
            }

            .wa-notification.error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
                color: white;
                border-color: rgba(255,255,255,0.2);
            }

            .wa-notification.show {
                transform: translateX(0);
                animation: waBounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }

            /* Compact WhatsApp Modal - Isolated */
            #whatsappModal {
                position: fixed;
                bottom: 90px;
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
                backdrop-filter: blur(10px);
                max-height: 80vh;
            }

            #whatsappModal.active {
                transform: translateY(0) scale(1);
                opacity: 1;
                visibility: visible;
                animation: waSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            /* Modal Header - Compact */
            #whatsappModal .wa-modal-header {
                background: linear-gradient(135deg, #25d366, #128c7e);
                padding: 16px 20px;
                color: white;
                display: flex;
                align-items: center;
                gap: 12px;
                position: relative;
                overflow: hidden;
            }

            #whatsappModal .wa-modal-header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                animation: shimmer 3s infinite;
            }

            #whatsappModal .wa-profile-pic {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 16px;
                border: 2px solid rgba(255, 255, 255, 0.2);
                position: relative;
                z-index: 1;
                animation: float 3s ease-in-out infinite;
            }

            #whatsappModal .wa-profile-info h4 {
                margin: 0;
                font-size: 16px;
                font-weight: 700;
                text-shadow: 0 1px 2px rgba(0,0,0,0.1);
            }

            #whatsappModal .wa-profile-info p {
                margin: 2px 0 0 0;
                font-size: 12px;
                opacity: 0.9;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            #whatsappModal .wa-online-indicator {
                width: 6px;
                height: 6px;
                background: #4ade80;
                border-radius: 50%;
                animation: badgePulse 2s ease-in-out infinite;
                box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.3);
            }

            #closeWhatsappModal {
                margin-left: auto;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                padding: 6px 8px;
                border-radius: 8px;
                transition: all 0.3s ease;
                position: relative;
                z-index: 1;
            }

            #closeWhatsappModal:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg) scale(1.1);
            }

            /* Modal Body - Compact */
            #whatsappModal .wa-modal-body {
                padding: 18px;
                background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                max-height: calc(80vh - 80px);
                overflow-y: auto;
            }

            /* Enhanced scrollbar for modal body */
            #whatsappModal .wa-modal-body::-webkit-scrollbar {
                width: 6px;
            }

            #whatsappModal .wa-modal-body::-webkit-scrollbar-track {
                background: rgba(29, 209, 161, 0.05);
                border-radius: 8px;
            }

            #whatsappModal .wa-modal-body::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #1dd1a1, #26d0ce);
                border-radius: 8px;
            }

            #whatsappModal .wa-modal-body::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, #26d0ce, #1dd1a1);
            }

            /* Compact Quick Messages */
            #whatsappModal .wa-quick-messages {
                margin-bottom: 16px;
            }

            #whatsappModal .wa-quick-messages h5 {
                margin: 0 0 12px 0;
                font-size: 14px;
                font-weight: 700;
                color: #1e293b;
                display: flex;
                align-items: center;
                gap: 6px;
            }

            /* Compact Quick Message Buttons */
            #whatsappModal .wa-quick-message-btn {
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100%;
                background: white;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                padding: 12px 16px;
                margin-bottom: 8px;
                text-align: left;
                color: #334155;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
                box-shadow: 0 2px 6px rgba(0,0,0,0.04);
            }

            #whatsappModal .wa-quick-message-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                transition: left 0.5s ease;
            }

            #whatsappModal .wa-quick-message-btn:hover {
                transform: translateY(-1px) scale(1.01);
                box-shadow: 0 6px 20px rgba(0,0,0,0.12);
                border-color: transparent;
            }

            #whatsappModal .wa-quick-message-btn:hover::before {
                left: 100%;
            }

            #whatsappModal .wa-quick-message-btn.active {
                border-color: transparent;
                transform: translateY(-1px);
                box-shadow: 0 6px 25px rgba(0,0,0,0.15);
            }

            /* Individual Button Colors - Updated for hiring focus */
            #whatsappModal .wa-quick-message-btn.project-inquiry {
                background: linear-gradient(135deg, #dbeafe, #bfdbfe);
                border-color: #3b82f6;
            }

            #whatsappModal .wa-quick-message-btn.project-inquiry:hover,
            #whatsappModal .wa-quick-message-btn.project-inquiry.active {
                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                color: white;
                box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
            }

            #whatsappModal .wa-quick-message-btn.freelancer {
                background: linear-gradient(135deg, #dcfce7, #bbf7d0);
                border-color: #10b981;
            }

            #whatsappModal .wa-quick-message-btn.freelancer:hover,
            #whatsappModal .wa-quick-message-btn.freelancer.active {
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                box-shadow: 0 6px 25px rgba(16, 185, 129, 0.4);
            }

            #whatsappModal .wa-quick-message-btn.fulltime {
                background: linear-gradient(135deg, #fef3c7, #fde68a);
                border-color: #f59e0b;
            }

            #whatsappModal .wa-quick-message-btn.fulltime:hover,
            #whatsappModal .wa-quick-message-btn.fulltime.active {
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: white;
                box-shadow: 0 6px 25px rgba(245, 158, 11, 0.4);
            }

            #whatsappModal .wa-quick-message-btn.consultation {
                background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
                border-color: #8b5cf6;
            }

            #whatsappModal .wa-quick-message-btn.consultation:hover,
            #whatsappModal .wa-quick-message-btn.consultation.active {
                background: linear-gradient(135deg, #8b5cf6, #7c3aed);
                color: white;
                box-shadow: 0 6px 25px rgba(139, 92, 246, 0.4);
            }

            /* Icon and Content Styles - Compact */
            #whatsappModal .wa-btn-icon {
                font-size: 18px;
                min-width: 18px;
                transition: all 0.3s ease;
            }

            #whatsappModal .wa-quick-message-btn:hover .wa-btn-icon {
                transform: scale(1.15) rotate(5deg);
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            }

            #whatsappModal .wa-btn-content {
                display: flex;
                flex-direction: column;
                gap: 1px;
            }

            #whatsappModal .wa-btn-title {
                font-weight: 600;
                font-size: 13px;
                line-height: 1.2;
            }

            /* Compact Divider */
            #whatsappModal .wa-divider {
                margin: 16px 0;
                border: none;
                height: 1px;
                background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
                position: relative;
            }

            #whatsappModal .wa-divider::before {
                content: 'OR';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #f8fafc;
                padding: 0 8px;
                font-size: 10px;
                font-weight: 600;
                color: #64748b;
            }

            /* Compact Custom Message */
            #whatsappModal .wa-custom-message {
                margin-bottom: 16px;
            }

            #whatsappModal .wa-custom-message label {
                display: flex;
                align-items: center;
                gap: 6px;
                margin-bottom: 8px;
                font-size: 13px;
                font-weight: 600;
                color: #1e293b;
            }

            #customMessage {
                width: 100%;
                min-height: 70px;
                padding: 12px;
                border: 2px solid #e2e8f0;
                border-radius: 12px;
                font-size: 13px;
                font-family: inherit;
                resize: vertical;
                outline: none;
                transition: all 0.3s ease;
                box-sizing: border-box;
                background: white;
                line-height: 1.4;
            }

            #customMessage:focus {
                border-color: #25d366;
                box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.1);
                background: #fafafa;
            }

            #customMessage::placeholder {
                color: #94a3b8;
                font-style: italic;
            }

            /* Custom scrollbar for message textarea */
            #customMessage::-webkit-scrollbar {
                width: 4px;
            }

            #customMessage::-webkit-scrollbar-track {
                background: rgba(29, 209, 161, 0.05);
                border-radius: 6px;
            }

            #customMessage::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #1dd1a1, #26d0ce);
                border-radius: 6px;
            }

            #customMessage::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(135deg, #26d0ce, #1dd1a1);
            }

            /* Character Counter */
            #charCounter {
                text-align: right;
                font-size: 10px;
                color: #64748b;
                margin-top: 4px;
                transition: color 0.3s ease;
            }

            #charCounter.warning {
                color: #f59e0b;
            }

            #charCounter.danger {
                color: #ef4444;
            }

            /* Compact Send Button */
            #sendWhatsappMessage {
                width: 100%;
                background: linear-gradient(135deg, #25d366, #128c7e);
                color: white;
                border: none;
                border-radius: 12px;
                padding: 12px 20px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
            }

            #sendWhatsappMessage::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                transition: left 0.5s ease;
            }

            #sendWhatsappMessage:hover:not(:disabled) {
                transform: translateY(-1px);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
                background: linear-gradient(135deg, #128c7e, #25d366);
            }

            #sendWhatsappMessage:hover:not(:disabled)::before {
                left: 100%;
            }

            #sendWhatsappMessage:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                box-shadow: 0 2px 8px rgba(37, 211, 102, 0.2);
            }

            /* Responsive Utilities */
            @media (max-width: 768px) {
                .cursor, .cursor-follower {
                    display: none;
                }
                body {
                    cursor: auto;
                }

                #whatsappModal {
                    width: calc(100vw - 24px);
                    right: 12px;
                    bottom: 80px;
                    max-height: 75vh; /* Increased from 70vh */
                }

                #whatsappContainer {
                    right: 12px;
                    bottom: 12px;
                }

                #whatsappBubble {
                    width: 56px;
                    height: 56px;
                }

                #whatsappBubble .whatsapp-icon {
                    width: 28px;
                    height: 28px;
                }

                #whatsappModal .wa-modal-body {
                    padding: 16px;
                    max-height: calc(75vh - 80px); /* Adjusted accordingly */
                }

                #whatsappModal .wa-modal-header {
                    padding: 14px 16px;
                }

                #whatsappModal .wa-profile-pic {
                    width: 36px;
                    height: 36px;
                    font-size: 14px;
                }

                #whatsappModal .wa-profile-info h4 {
                    font-size: 14px;
                }

                #whatsappModal .wa-profile-info p {
                    font-size: 11px;
                }

                #whatsappModal .wa-quick-message-btn {
                    padding: 10px 12px;
                    gap: 8px;
                    margin-bottom: 6px;
                }

                #whatsappModal .wa-btn-icon {
                    font-size: 16px;
                }

                #whatsappModal .wa-btn-title {
                    font-size: 12px;
                }

                #customMessage {
                    min-height: 60px;
                    padding: 10px;
                    font-size: 12px;
                }

                #sendWhatsappMessage {
                    padding: 10px 16px;
                    font-size: 13px;
                    gap: 6px;
                }

                #typingIndicator {
                    padding: 6px 10px;
                    font-size: 10px;
                }

                #closeWhatsappModal {
                    font-size: 18px;
                    padding: 4px 6px;
                }
            }

            @media (max-width: 480px) {
                #whatsappModal {
                    width: calc(100vw - 16px);
                    right: 8px;
                    bottom: 75px;
                    max-height: 78vh; /* Increased from 65vh */
                }

                #whatsappContainer {
                    right: 8px;
                    bottom: 8px;
                }

                #whatsappBubble {
                    width: 52px;
                    height: 52px;
                }

                #whatsappBubble .whatsapp-icon {
                    width: 26px;
                    height: 26px;
                }

                #whatsappModal .wa-modal-body {
                    padding: 14px;
                    max-height: calc(78vh - 75px); /* Adjusted accordingly */
                }

                #whatsappModal .wa-modal-header {
                    padding: 12px 14px;
                }

                #whatsappModal .wa-quick-message-btn {
                    padding: 8px 10px;
                    border-radius: 10px;
                }

                #whatsappModal .wa-btn-title {
                    font-size: 11px;
                }

                #customMessage {
                    min-height: 50px;
                    padding: 8px;
                    font-size: 11px;
                }

                #sendWhatsappMessage {
                    padding: 8px 14px;
                    font-size: 12px;
                }
            }

            @media (max-width: 360px) {
                #whatsappModal {
                    max-height: 80vh; /* Even more height for very small screens */
                    bottom: 70px;
                }

                #whatsappModal .wa-modal-body {
                    max-height: calc(80vh - 70px);
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Initialize custom cursor (existing - unchanged)
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

    // Setup cursor movement (existing - unchanged)
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

    // Setup cursor hover effects (existing + WhatsApp elements)
    setupCursorHoverEffects() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        if (cursor && cursorFollower) {
            // Add hover effects to common elements (including new WhatsApp elements)
            const addHoverEffect = () => {
                const hoverElements = document.querySelectorAll('a, button, .contact-item, .profile-image, .resume-btn, .hover-cursor, #whatsappBubble, #whatsappModal .wa-quick-message-btn, #closeWhatsappModal, #sendWhatsappMessage');
                
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

    // Initialize Enhanced WhatsApp Chat (NEW - Safe addition)
    initializeEnhancedWhatsAppChat() {
        // Load Font Awesome if not already loaded
        this.loadFontAwesome();
        
        // Create WhatsApp HTML structure
        this.createSafeWhatsAppHTML();
        
        // Initialize WhatsApp functionality
        setTimeout(() => {
            window.whatsAppChat = new SafeEnhancedWhatsAppChat();
        }, 100);
    }

    // Load Font Awesome (NEW - Safe addition)
    loadFontAwesome() {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(link);
        }
    }

    // Create Safe WhatsApp HTML structure (NEW - Isolated)
    createSafeWhatsAppHTML() {
        // Check if WhatsApp container already exists
        if (document.getElementById('whatsappContainer')) {
            return;
        }

        const whatsappHTML = `
            <div id="whatsappContainer">
                <!-- Compact Chat Modal -->
                <div id="whatsappModal">
                    <!-- Modal Header -->
                    <div class="wa-modal-header">
                        <div class="wa-profile-pic">CM</div>
                        <div class="wa-profile-info">
                            <h4>Chathuranga Malik</h4>
                            <p>
                                <span class="wa-online-indicator"></span>
                                Laravel Developer • Online
                            </p>
                        </div>
                        <button id="closeWhatsappModal">&times;</button>
                    </div>
                    
                    <!-- Compact Modal Body -->
                    <div class="wa-modal-body">
                        <!-- Typing Indicator (initially hidden) -->
                        <div id="typingIndicator" style="display: none;">
                            <div class="wa-typing-dots">
                                <div class="wa-typing-dot"></div>
                                <div class="wa-typing-dot"></div>
                                <div class="wa-typing-dot"></div>
                            </div>
                            Chathuranga is typing...
                        </div>
                        
                        <!-- Quick Messages - Hiring Focused -->
                        <div class="wa-quick-messages">
                            <h5><i class="fas fa-rocket"></i> How Can I Help You?</h5>
                            
                            <button class="wa-quick-message-btn project-inquiry" data-message="Hello! I'm interested in hiring you for a Laravel project. Could we discuss the requirements, timeline, and budget?">
                                <i class="fas fa-laptop-code wa-btn-icon" style="color: #3b82f6;"></i>
                                <div class="wa-btn-content">
                                    <div class="wa-btn-title">Project-Based Work</div>
                                </div>
                            </button>
                            
                            <button class="wa-quick-message-btn freelancer" data-message="Hi Chathuranga! I'm looking for a freelance Laravel developer. Are you available for freelance projects? Let's discuss rates and availability.">
                                <i class="fas fa-user-tie wa-btn-icon" style="color: #10b981;"></i>
                                <div class="wa-btn-content">
                                    <div class="wa-btn-title">Hire as Freelancer</div>
                                </div>
                            </button>
                            
                            <button class="wa-quick-message-btn fulltime" data-message="Hello! We're looking for a full-time Laravel developer to join our team. Are you open to full-time opportunities? Let's discuss.">
                                <i class="fas fa-building wa-btn-icon" style="color: #f59e0b;"></i>
                                <div class="wa-btn-content">
                                    <div class="wa-btn-title">Full-Time Position</div>
                                </div>
                            </button>
                            
                            <button class="wa-quick-message-btn consultation" data-message="Hi! I need technical consultation for my Laravel project. Can we schedule a call to discuss the technical requirements and your expertise?">
                                <i class="fas fa-comments wa-btn-icon" style="color: #8b5cf6;"></i>
                                <div class="wa-btn-content">
                                    <div class="wa-btn-title">Technical Consultation</div>
                                </div>
                            </button>
                        </div>
                        
                        <hr class="wa-divider">
                        
                        <!-- Compact Custom Message -->
                        <div class="wa-custom-message">
                            <label for="customMessage">
                                <i class="fas fa-pen"></i>
                                Custom Message:
                            </label>
                            <textarea 
                                id="customMessage" 
                                placeholder="Type your message here..."
                                maxlength="300"
                            ></textarea>
                            <div id="charCounter">0/300</div>
                        </div>
                        
                        <!-- Send Button -->
                        <button id="sendWhatsappMessage" disabled>
                            <i class="fab fa-whatsapp"></i>
                            Send Message
                        </button>
                    </div>
                </div>
                
                <!-- WhatsApp Bubble (No Red Badge) -->
                <div id="whatsappBubble">
                    <svg class="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.696"/>
                    </svg>
                </div>
            </div>
        `;

        // Insert WhatsApp HTML into body
        document.body.insertAdjacentHTML('beforeend', whatsappHTML);
    }

    // Setup common event listeners (existing - unchanged)
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

    // Setup animation observer (existing - unchanged)
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

    // Utility Functions (existing - unchanged)

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

    // Show custom modal (existing - unchanged)
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

    // Navbar scroll effect (existing - unchanged)
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

    // Parallax effect (existing - unchanged)
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

// Safe Enhanced WhatsApp Chat Class (NEW - Isolated functionality)
class SafeEnhancedWhatsAppChat {
    constructor() {
        this.whatsappNumber = '+94763241451'; // Your provided number
        this.selectedMessage = '';
        this.isTyping = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.initNotificationBadge();
        this.initCharacterCounter();
        this.showWelcomeTyping();
    }

    bindEvents() {
        const whatsappBubble = document.getElementById('whatsappBubble');
        const whatsappModal = document.getElementById('whatsappModal');
        const closeModalBtn = document.getElementById('closeWhatsappModal');
        const sendBtn = document.getElementById('sendWhatsappMessage');
        const customMessageTextarea = document.getElementById('customMessage');
        const quickMessageBtns = document.querySelectorAll('#whatsappModal .wa-quick-message-btn');

        if (!whatsappBubble || !whatsappModal) {
            console.warn('WhatsApp elements not found, retrying...');
            setTimeout(() => this.bindEvents(), 500);
            return;
        }

        // Toggle WhatsApp modal with animation
        whatsappBubble.addEventListener('click', () => {
            const isActive = whatsappModal.classList.contains('active');
            
            if (isActive) {
                whatsappModal.classList.remove('active');
            } else {
                whatsappModal.classList.add('active');
                this.triggerModalAnimation();
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

        // Enhanced quick message selection with animations
        quickMessageBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                // Animate button selection
                this.animateButtonSelection(btn, quickMessageBtns);
                
                // Show typing indicator
                this.showTypingIndicator();
                
                // Set selected message
                this.selectedMessage = btn.getAttribute('data-message');
                
                // Clear custom message
                if (customMessageTextarea) {
                    customMessageTextarea.value = '';
                    this.updateCharacterCounter();
                }
                
                // Enable send button with animation
                this.enableSendButton(sendBtn);
                
                // Hide typing indicator after a moment
                setTimeout(() => this.hideTypingIndicator(), 800);
            });

            // Add hover sound effect (optional)
            btn.addEventListener('mouseenter', () => {
                this.playHoverEffect(btn);
            });
        });

        // Enhanced custom message input
        if (customMessageTextarea) {
            customMessageTextarea.addEventListener('input', () => {
                // Clear quick message selection with animation
                this.clearQuickMessageSelection(quickMessageBtns);
                
                // Update character counter
                this.updateCharacterCounter();
                
                // Update selected message
                this.selectedMessage = customMessageTextarea.value.trim();
                
                // Update send button state
                if (sendBtn) {
                    if (this.selectedMessage) {
                        this.enableSendButton(sendBtn);
                    } else {
                        this.disableSendButton(sendBtn);
                    }
                }
            });

            // Add focus/blur effects
            customMessageTextarea.addEventListener('focus', () => {
                customMessageTextarea.parentElement.style.transform = 'scale(1.02)';
            });

            customMessageTextarea.addEventListener('blur', () => {
                customMessageTextarea.parentElement.style.transform = 'scale(1)';
            });
        }

        // Enhanced send WhatsApp message
        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                this.sendMessage();
            });

            // Initialize send button as disabled
            this.disableSendButton(sendBtn);
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Enter to send (Ctrl+Enter or Cmd+Enter)
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && this.selectedMessage) {
                e.preventDefault();
                this.sendMessage();
            }
            
            // Escape to close modal
            if (e.key === 'Escape' && whatsappModal.classList.contains('active')) {
                whatsappModal.classList.remove('active');
            }
        });
    }

    triggerModalAnimation() {
        const quickMessageBtns = document.querySelectorAll('#whatsappModal .wa-quick-message-btn');
        
        // Animate buttons with stagger effect
        quickMessageBtns.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                btn.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    animateButtonSelection(selectedBtn, allBtns) {
        // Reset all buttons
        allBtns.forEach(btn => {
            btn.classList.remove('active');
            btn.style.transform = 'scale(1)';
        });
        
        // Animate selected button
        selectedBtn.classList.add('active');
        selectedBtn.style.transform = 'scale(1.05)';
        
        // Create particles effect
        const rect = selectedBtn.getBoundingClientRect();
        this.createSelectionParticles(rect.left + rect.width/2, rect.top + rect.height/2);
        
        // Reset transform after animation
        setTimeout(() => {
            selectedBtn.style.transform = 'scale(1)';
        }, 200);
    }

    clearQuickMessageSelection(quickMessageBtns) {
        quickMessageBtns.forEach(btn => {
            btn.classList.remove('active');
            btn.style.transform = 'scale(1)';
        });
    }

    createSelectionParticles(x, y) {
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                PortfolioConfig.createParticle(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 100);
            }, i * 50);
        }
    }

    playHoverEffect(btn) {
        // Add subtle scale effect
        btn.style.transition = 'all 0.2s ease';
        btn.style.transform = 'translateY(-1px) scale(1.02)';
        
        setTimeout(() => {
            if (!btn.classList.contains('active')) {
                btn.style.transform = 'translateY(0) scale(1)';
            }
        }, 200);
    }

    showTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.style.display = 'flex';
            typingIndicator.style.animation = 'waSlideUp 0.3s ease';
            this.isTyping = true;
        }
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                typingIndicator.style.display = 'none';
                this.isTyping = false;
            }, 300);
        }
    }

    enableSendButton(sendBtn) {
        if (sendBtn) {
            sendBtn.disabled = false;
            sendBtn.style.transform = 'scale(1.02)';
            sendBtn.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.4)';
            
            setTimeout(() => {
                sendBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }

    disableSendButton(sendBtn) {
        if (sendBtn) {
            sendBtn.disabled = true;
            sendBtn.style.boxShadow = '0 2px 8px rgba(37, 211, 102, 0.2)';
        }
    }

    initCharacterCounter() {
        const customMessageTextarea = document.getElementById('customMessage');
        const charCounter = document.getElementById('charCounter');
        
        if (customMessageTextarea && charCounter) {
            this.updateCharacterCounter();
        }
    }

    updateCharacterCounter() {
        const customMessageTextarea = document.getElementById('customMessage');
        const charCounter = document.getElementById('charCounter');
        
        if (customMessageTextarea && charCounter) {
            const length = customMessageTextarea.value.length;
            const maxLength = 300;
            
            charCounter.textContent = `${length}/${maxLength}`;
            
            // Update counter color based on length
            charCounter.className = '';
            charCounter.id = 'charCounter'; // Preserve ID
            if (length > maxLength * 0.8) {
                charCounter.classList.add('warning');
            }
            if (length > maxLength * 0.95) {
                charCounter.classList.remove('warning');
                charCounter.classList.add('danger');
            }
        }
    }

    showWelcomeTyping() {
        // Show typing indicator for welcome effect
        setTimeout(() => {
            this.showTypingIndicator();
            setTimeout(() => {
                this.hideTypingIndicator();
            }, 2000);
        }, 1000);
    }

    sendMessage() {
        const customMessageTextarea = document.getElementById('customMessage');
        const whatsappModal = document.getElementById('whatsappModal');
        const sendBtn = document.getElementById('sendWhatsappMessage');
        const quickMessageBtns = document.querySelectorAll('#whatsappModal .wa-quick-message-btn');

        let messageToSend = this.selectedMessage || (customMessageTextarea ? customMessageTextarea.value.trim() : '');
        
        if (messageToSend) {
            // Show sending animation
            this.showSendingAnimation(sendBtn);
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(messageToSend);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
            
            // Simulate sending delay for better UX
            setTimeout(() => {
                // Open WhatsApp
                window.open(whatsappUrl, '_blank');
                
                // Close modal with animation
                if (whatsappModal) {
                    whatsappModal.style.animation = 'fadeOut 0.3s ease forwards';
                    setTimeout(() => {
                        whatsappModal.classList.remove('active');
                        whatsappModal.style.animation = '';
                    }, 300);
                }
                
                // Reset form
                this.resetForm(customMessageTextarea, sendBtn, quickMessageBtns);
                
                // Show success feedback
                this.showNotification('Message sent successfully! 🎉 Opening WhatsApp...', 'success');
                
                // Reset send button animation
                this.resetSendingAnimation(sendBtn);
            }, 800);
        } else {
            // Show error with shake animation
            this.showNotification('Please select a quick message or write your own message! 📝', 'error');
            this.shakeModal();
        }
    }

    showSendingAnimation(sendBtn) {
        if (sendBtn) {
            sendBtn.innerHTML = `
                <i class="fas fa-spinner fa-spin"></i>
                Sending Message...
                <div style="width: 20px;"></div>
            `;
            sendBtn.disabled = true;
            sendBtn.style.background = 'linear-gradient(135deg, #128c7e, #25d366)';
        }
    }

    resetSendingAnimation(sendBtn) {
        if (sendBtn) {
            setTimeout(() => {
                sendBtn.innerHTML = `
                    <i class="fab fa-whatsapp"></i>
                    Send Message
                `;
                sendBtn.style.background = 'linear-gradient(135deg, #25d366, #128c7e)';
            }, 500);
        }
    }

    resetForm(customMessageTextarea, sendBtn, quickMessageBtns) {
        // Reset form elements
        if (customMessageTextarea) {
            customMessageTextarea.value = '';
        }
        this.selectedMessage = '';
        this.updateCharacterCounter();
        this.disableSendButton(sendBtn);
        
        // Reset quick message buttons
        this.clearQuickMessageSelection(quickMessageBtns);
    }

    shakeModal() {
        const whatsappModal = document.getElementById('whatsappModal');
        if (whatsappModal) {
            whatsappModal.style.animation = 'waShake 0.5s ease';
            setTimeout(() => {
                whatsappModal.style.animation = '';
            }, 500);
        }
    }

    showNotification(text, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.wa-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `wa-notification ${type}`;
        
        // Add icon based on type
        const icon = type === 'success' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-triangle"></i>';
        notification.innerHTML = `${icon} ${text}`;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto-hide after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 400);
        }, 4000);
    }

    initNotificationBadge() {
        // No notification badge - removed for clean design
        console.log('WhatsApp chat initialized without notification badge');
    }
}

// Common Color Palette (for reference) - unchanged
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

// Initialize configuration when DOM is loaded (existing - unchanged)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.portfolioConfig = new PortfolioConfig();
    });
} else {
    window.portfolioConfig = new PortfolioConfig();
}

// Export for use in other files (existing - unchanged)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioConfig, SafeEnhancedWhatsAppChat, PORTFOLIO_COLORS };
}