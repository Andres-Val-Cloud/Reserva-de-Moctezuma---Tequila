// Wait for GSAP to be loaded
window.addEventListener('load', function() {
    if (typeof gsap !== 'undefined') {
        // Register the plugin
        gsap.registerPlugin(ScrambleTextPlugin);
        
        // Get the title element
        const title = document.getElementById('scramble-title');
        
        if (title) {
            // Create the scramble animation
            gsap.to(title, {
                duration: 3,
                scrambleText: "Reserva de Moctezuma",
                repeat: -1,
                repeatDelay: 2,
                ease: "none"
            });
        } else {
            console.error('Title element not found');
        }
    } else {
        console.error('GSAP not loaded');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Background Parallax
    const bgLayers = document.querySelectorAll('.bg-layer');
    let lastScrollTop = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // Mouse movement parallax
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const deltaX = (mouseX - lastMouseX) * 0.05;
        const deltaY = (mouseY - lastMouseY) * 0.05;

        bgLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.2;
            const x = parseFloat(layer.style.transform.replace(/[^\d.-]/g, '') || 0);
            const newX = x + (deltaX * speed);
            const newY = parseFloat(layer.style.transform.replace(/[^\d.-]/g, '') || 0) + (deltaY * speed);
            
            layer.style.transform = `translate(${newX}px, ${newY}px)`;
        });

        lastMouseX = mouseX;
        lastMouseY = mouseY;
    });

    // Scroll parallax
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const deltaY = (scrollTop - lastScrollTop) * 0.5;

        bgLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.3;
            const y = parseFloat(layer.style.transform.replace(/[^\d.-]/g, '') || 0);
            const newY = y + (deltaY * speed);
            
            layer.style.transform = `translateY(${newY}px)`;
        });

        lastScrollTop = scrollTop;
    });

    // Reset background position on window resize
    window.addEventListener('resize', () => {
        bgLayers.forEach(layer => {
            layer.style.transform = 'translate(0, 0)';
        });
    });

    // Parallax effect
    const parallaxContainer = document.querySelector('.parallax-container');
    
    parallaxContainer.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.parallax-section');
        sections.forEach(section => {
            const distance = section.getBoundingClientRect().top;
            const speed = section.dataset.speed || 0.5;
            section.style.transform = `translateY(${distance * speed}px)`;
        });
    });

    // Doom-style hover effects for panels
    const doomPanels = document.querySelectorAll('.doom-panel');
    doomPanels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            panel.style.boxShadow = `0 0 20px var(--doom-red)`;
        });

        panel.addEventListener('mouseleave', () => {
            panel.style.boxShadow = 'none';
        });
    });

    // Animated steps reveal
    const steps = document.querySelectorAll('.step');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(50px)';
        step.style.transition = 'all 0.6s ease-out';
        stepObserver.observe(step);
    });

    // SVG Doom-style icons animation
    const svgIcons = document.querySelectorAll('.step svg');
    svgIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.fill = 'var(--doom-red)';
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.fill = 'var(--doom-orange)';
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
}); 