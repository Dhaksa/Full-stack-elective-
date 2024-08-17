document.addEventListener('DOMContentLoaded', function() {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll('.download-button');

    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            
            event.preventDefault();
            
            // Ask for confirmation before downloading
            const confirmation = confirm('Do you want to download this curriculum?');

            if (confirmation) {
                // If confirmed, follow the link to download
                window.location.href = this.href;
            }
        });
    });
});