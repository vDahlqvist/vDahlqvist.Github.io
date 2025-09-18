document.addEventListener('DOMContentLoaded', function() {
    // Get overlay elements
    const daniilsOverlay = document.getElementById('overlay');
    const aboutMeOverlay = document.getElementById('about-me-overlay');
    const experienceOverlay = document.getElementById('experience-overlay');
    const interestSiteOverlay = document.getElementById('interest-site-overlay');

    // Get card elements
    const aboutMeCard = document.getElementById('about-me');
    const experienceCard = document.getElementById('experience');
    const programmering1 = document.getElementById('programmering1');
    const personal = document.getElementById('personal');
    const daniilsCard = document.getElementById('daniilsCard');
    const interestSiteCard = document.getElementById('interest-site');

    // Handle overlay displays for cards
    if (aboutMeCard && aboutMeOverlay) {
        aboutMeCard.addEventListener('click', function() {
            aboutMeOverlay.style.display = 'block';
        });
    }
    
    if (experienceCard && experienceOverlay) {
        experienceCard.addEventListener('click', function() {
            experienceOverlay.style.display = 'block';
        });
    }
    
    if (daniilsCard && daniilsOverlay) {
        daniilsCard.addEventListener('click', function() {
            daniilsOverlay.style.display = 'block';
        });
    }

    if (interestSiteCard && interestSiteOverlay) {
        interestSiteCard.addEventListener('click', function() {
            interestSiteOverlay.style.display = 'block';
        });
    }

    // Handle page navigation for cards (if not using overlays)
    if (programmering1) {
        programmering1.addEventListener('click', function() {
            window.location.href = 'programmering1.html';
        });
    }
    
    if (personal) {
        personal.addEventListener('click', function() {
            window.location.href = 'personal.html';
        });
    }

    // Close buttons for all overlays
    const closeButtons = document.querySelectorAll('[id^="closeOverlay"]');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent overlay of this close button
            const overlay = this.closest('.daniils-design-overlay, .about-me-overlay, .experience-overlay, .interest-site-overlay');
            if (overlay) {
                overlay.style.display = 'none';
            }
        });
    });
    
    // Close overlays when clicking outside content
    const overlays = [daniilsOverlay, aboutMeOverlay, experienceOverlay, interestSiteOverlay].filter(Boolean);
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
});