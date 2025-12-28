// DOM Elements
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const backToTopBtn = document.getElementById("back-to-top");
const typewriterElement = document.getElementById("typewriter");

// Navigation functionality
function initNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = "translateY(-100%)";
        } else {
            navbar.style.transform = "translateY(0)";
        }

        lastScrollTop = scrollTop;
    });
}

// Back to top functionality
function initBackToTop() {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
}

// Enhanced typewriter effect
function initTypewriter() {
    if (!typewriterElement) return;

    const typewriter = new Typewriter(typewriterElement, {
        loop: true,
        delay: 50,
        deleteSpeed: 30,
        cursor: "|",
        autoStart: true,
    });

    typewriter
        .typeString("Hi, I'm David")
        .pauseFor(1500)
        .deleteAll()
        .pauseFor(500)
        .typeString("I like to build stuff with code.")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("I'm a student at Gonzaga University")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("I study computer science and economics")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("I like to run")
        .pauseFor(1500)
        .deleteAll()
        .pauseFor(500)
        .typeString("I also like to cook")
        .pauseFor(1500)
        .deleteAll()
        .pauseFor(500)
        .typeString("Huge fan of traveling the world")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("Also a big fan of concerts")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("Thanks for visiting!")
        .pauseFor(2000)
        .deleteAll()
        .start();
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Intersection Observer for fade-in animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));
}

// Project cards hover effect
function initProjectCards() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });
}

// Contact form validation (if you add a contact form later)
function initContactForm() {
    const contactForm = document.querySelector("#contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Add your form submission logic here
        console.log("Form submitted");
    });
}

// Loading animation
function initLoadingAnimation() {
    // Add a loading screen if needed
    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });
}

// Theme toggle functionality (for future dark mode)
function initThemeToggle() {
    const themeToggle = document.querySelector("#theme-toggle");
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Enhanced scroll event handling
function initScrollOptimization() {
    const throttledScrollHandler = throttle(() => {
        // Handle scroll-based animations here
    }, 16); // ~60fps

    window.addEventListener("scroll", throttledScrollHandler);
}

// Keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
        // Escape key closes mobile menu
        if (e.key === "Escape") {
            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
        }

        // Arrow keys for navigation (optional)
        if (e.key === "ArrowUp" && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    });
}

// Analytics tracking (if you want to add Google Analytics later)
function initAnalytics() {
    // Track page views and interactions
    const trackEvent = (eventName, properties = {}) => {
        // Add your analytics tracking here
        console.log("Event tracked:", eventName, properties);
    };

    // Track section visits
    const sections = document.querySelectorAll("section[id]");
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    trackEvent("section_view", { section: entry.target.id });
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}

// Error handling
function initErrorHandling() {
    window.addEventListener("error", (e) => {
        console.error("JavaScript error:", e.error);
        // Add error reporting logic here
    });

    window.addEventListener("unhandledrejection", (e) => {
        console.error("Unhandled promise rejection:", e.reason);
        // Add error reporting logic here
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully! 🚀");

    // Initialize all modules
    initNavigation();
    initBackToTop();
    initSmoothScrolling();
    initTypewriter();
    initParallax();
    initIntersectionObserver();
    initProjectCards();
    initContactForm();
    initLoadingAnimation();
    initThemeToggle();
    initScrollOptimization();
    initKeyboardNavigation();
    initAnalytics();
    initErrorHandling();

    // Add some fun console messages
    console.log(
        "%cWelcome to David's Portfolio! 👋",
        "color: #2563eb; font-size: 16px; font-weight: bold;"
    );
    console.log(
        "%cFeel free to explore the code! 💻",
        "color: #7c3aed; font-size: 14px;"
    );
});

// Service Worker registration (for PWA features)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
                console.log("SW registered: ", registration);
            })
            .catch((registrationError) => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}

// Export functions for potential external use
window.PortfolioApp = {
    initTypewriter,
    initNavigation,
    initBackToTop,
    // Add other functions as needed
};
