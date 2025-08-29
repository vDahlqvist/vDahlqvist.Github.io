document.addEventListener('DOMContentLoaded', function() {
    // Get the overlay element
    const overlay = document.getElementById('overlay');
    const tProgrammering = document.getElementById('t-programmering');
    const webbutveckling1 = document.getElementById('webbutveckling1');
    const programmering1 = document.getElementById('programmering1');
    const personal = document.getElementById('personal');

    // Get the buttons
    const showButton = document.getElementById('showOverlay');
    const closeButton = document.getElementById('closeOverlay');
    
    // When show button is clicked, display the overlay
    showButton.addEventListener('click', function() {
        
    });

    // Show the subpage for the selected card
    if (tProgrammering) {
        tProgrammering.addEventListener('click', function() {
            window.location.href = 't-programmering.html';
        });
    }
    if (webbutveckling1) {
        webbutveckling1.addEventListener('click', function() {
            window.location.href = 'webbutveckling1.html';
        });
    }
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

    // When close button is clicked, hide the overlay
    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
    
    // Close the overlay when clicking outside the content
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});