
        const modeToggle = document.getElementById('modeToggle');
        const toggleThumb = document.getElementById('toggleThumb');
        const modeIcon = document.getElementById('modeIcon');
        const body = document.body;
        const logoSuffix = document.getElementById('logoSuffix');
        const heroTitle = document.getElementById('heroTitle');
        const heroHighlight = document.getElementById('heroHighlight');
        const heroRole = document.getElementById('heroRole');
        const heroDescription = document.getElementById('heroDescription');
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');


        // Add this to your main JavaScript file or before closing </body> tag
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});
// Add this JavaScript code to your existing script.js file or in a <script> tag

// Bottom toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const bottomModeToggle = document.getElementById('bottomModeToggle');
    const bottomModeIcon = document.getElementById('bottomModeIcon');
    const body = document.body;

    if (bottomModeToggle) {
        bottomModeToggle.addEventListener('click', function() {
            // Toggle between developer and creative mode
            if (body.classList.contains('developer-mode')) {
                body.classList.remove('developer-mode');
                body.classList.add('creative-mode');
                bottomModeIcon.className = 'fas fa-palette';
            } else {
                body.classList.remove('creative-mode');
                body.classList.add('developer-mode');
                bottomModeIcon.className = 'fas fa-code';
            }
            
            // Update logo suffix and other elements as needed
            updateModeElements();
        });
    }
});

// Function to update other elements when mode changes
function updateModeElements() {
    const logoSuffix = document.getElementById('logoSuffix');
    const footerLogoSuffix = document.getElementById('footerLogoSuffix');
    const heroHighlight = document.getElementById('heroHighlight');
    const heroRole = document.getElementById('heroRole');
    const heroDescription = document.getElementById('heroDescription');
    
    if (document.body.classList.contains('creative-mode')) {
        if (logoSuffix) logoSuffix.textContent = 'create';
        if (footerLogoSuffix) footerLogoSuffix.textContent = 'Creative';
        if (heroHighlight) heroHighlight.textContent = '— Visual';
        if (heroRole) heroRole.textContent = 'Creator';
        if (heroDescription) {
            heroDescription.textContent = 'Crafting compelling visual stories through photo editing, video production, and digital design. Passionate about bringing creative visions to life.';
        }
        // Create petals when entering creative mode
        createPetals();
    } else {
        if (logoSuffix) logoSuffix.textContent = 'dev';
        if (footerLogoSuffix) footerLogoSuffix.textContent = 'Developer';
        if (heroHighlight) heroHighlight.textContent = '— AI & Web';
        if (heroRole) heroRole.textContent = 'Developer';
        if (heroDescription) {
            heroDescription.textContent = 'Building innovative solutions at the intersection of AI and web development. Passionate about creating tools that make learning and productivity more accessible.';
        }
        // Remove petals when leaving creative mode
        removePetals();
    }
}
// Also add this to ensure it starts at top on load
window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
});
        // Content for different modes
        const content = {
            developer: {
                logoSuffix: "dev",
                highlight: "— AI & Web",
                role: "Developer",
                description: "Building innovative solutions at the intersection of AI and web development. Passionate about creating tools that make learning and productivity more accessible.",
                icon: "fa-code"
            },
            creative: {
                logoSuffix: "creative",
                highlight: "— Designer &",
                role: "Content Creator",
                description: "Blending technical expertise with creative vision to craft compelling visual stories. Specializing in photo editing, video production, and digital design that captivates and engages.",
                icon: "fa-palette"
            }
        };

        // Initialize mode based on body class
        let isDeveloperMode = body && body.classList && body.classList.contains('developer-mode');
        updateModeDisplay();

        // Only attach listener if the element exists to avoid runtime errors
        if (modeToggle) {
            modeToggle.addEventListener('click', () => {
                isDeveloperMode = !isDeveloperMode;

                if (isDeveloperMode) {
                    body.classList.remove('creative-mode');
                    body.classList.add('developer-mode');
                } else {
                    body.classList.remove('developer-mode');
                    body.classList.add('creative-mode');
                }

                updateModeDisplay();
            });
        }

        function updateModeDisplay() {
            // Guard each DOM access so a missing element doesn't throw and stop the script
            if (isDeveloperMode) {
                if (logoSuffix) logoSuffix.textContent = content.developer.logoSuffix;
                if (heroHighlight) heroHighlight.textContent = content.developer.highlight;
                if (heroRole) heroRole.textContent = content.developer.role;
                if (heroDescription) heroDescription.textContent = content.developer.description;
                if (modeIcon) modeIcon.className = `fas ${content.developer.icon}`;
            } else {
                if (logoSuffix) logoSuffix.textContent = content.creative.logoSuffix;
                if (heroHighlight) heroHighlight.textContent = content.creative.highlight;
                if (heroRole) heroRole.textContent = content.creative.role;
                if (heroDescription) heroDescription.textContent = content.creative.description;
                if (modeIcon) modeIcon.className = `fas ${content.creative.icon}`;
            }
        }
        hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking on nav links
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
        // Create stars for the background in developer mode
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starsCount = 100;
            
            for (let i = 0; i < starsCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 2 + 1;
                
                // Random opacity
                const opacity = Math.random() * 0.5 + 0.1;
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.opacity = opacity;
                
                // Add per-star fall and twinkle animation with randomized duration/delay
                // Fall duration: slow (20-60s), negative delay to stagger initial positions
                const fallDuration = Math.random() * 40 + 20; // 20 - 60s
                const fallDelay = Math.random() * -60; // allow stars to be in-progress on load

                // Twinkle duration small and varied
                const twinkleDuration = Math.random() * 2 + 2; // 2 - 4s
                const twinkleDelay = Math.random() * 2;

                // Combine animations: starFall controls vertical movement, starTwinkle controls opacity/scale
                star.style.animation = `starFall ${fallDuration}s linear ${fallDelay}s infinite, starTwinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite`;
                
                // Ensure container exists before appending
                if (starsContainer) starsContainer.appendChild(star);
            }
        }
        
        createStars();
        
        // Petals (creative mode)
        function createPetals(count = 24) {
            const petalsContainer = document.getElementById('petals');
            if (!petalsContainer) return;
            // Avoid recreating if already populated
            if (petalsContainer.dataset.created === 'true') return;

            for (let i = 0; i < count; i++) {
                const petal = document.createElement('div');
                petal.className = 'petal';

                // Random starting X position (percent)
                const startX = Math.random() * 100;
                // Small horizontal drift amount (px)
                const drift = (Math.random() * 160 - 80) + 'px';
                // Random rotation start
                const startRot = Math.floor(Math.random() * 360) + 'deg';
                // Random rotation amount
                const rotAmt = (Math.random() * 720 + 180) + 'deg';

                // Random size
                const w = Math.random() * 12 + 10; // 10-22px
                const h = Math.max(8, w * 0.6);
                petal.style.width = w + 'px';
                petal.style.height = h + 'px';

                // Position using CSS variables so keyframes can use them
                petal.style.setProperty('--start-x', startX + 'vw');
                petal.style.setProperty('--drift-x', drift);
                petal.style.setProperty('--start-rot', startRot);
                petal.style.setProperty('--rot-amt', rotAmt);

                // Randomize animation duration/delay so they loop naturally
                const dur = Math.random() * 8 + 10; // 10 - 18s
                const delay = Math.random() * -12; // negative so some are mid-fall on entry
                petal.style.animation = `petalFall ${dur}s linear ${delay}s infinite`;

                // initial left value
                petal.style.left = startX + 'vw';

                petalsContainer.appendChild(petal);
            }

            petalsContainer.dataset.created = 'true';
        }

        function removePetals() {
            const petalsContainer = document.getElementById('petals');
            if (!petalsContainer) return;
            petalsContainer.innerHTML = '';
            delete petalsContainer.dataset.created;
        }