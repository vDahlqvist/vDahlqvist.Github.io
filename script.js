document.addEventListener('DOMContentLoaded', function() {
    // Get the overlay element
    const overlay = document.getElementById('overlay');
    
    // Get the buttons
    const showButton = document.getElementById('showOverlay');
    const closeButton = document.getElementById('closeOverlay');
    
    // When show button is clicked, display the overlay
    showButton.addEventListener('click', function() {
        overlay.style.display = 'block';
    });
    
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