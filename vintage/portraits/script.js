// Wait for the DOM to fully load before running script
// INTERVIEW TIP: Mention 'DOMContentLoaded' to ensure 
// elements exist before selecting them.
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all portrait cards
    const cards = document.querySelectorAll('.portrait-card');

    // INTERVIEW TIP: Explain that forEach is cleaner than a traditional 
    // for-loop for NodeList iteration.
    cards.forEach(card => {
        card.addEventListener('click', () => {
            
            // Get the data-name attribute
            // INTERVIEW TIP: Mention using data attributes to store 
            // metadata in HTML without affecting display.
            const portraitName = card.getAttribute('data-name');
            
            // Log to console (Non-intrusive debugging)
            console.log(`User viewed: ${portraitName}`);

            // Optional: Visual feedback
            // INTERVIEW TIP: Mention providing user feedback 
            // for accessibility/UX.
            card.style.borderColor = '#2B2B2B';
            card.style.borderWidth = '2px';
        });
    });

    // INTERVIEW TIP: If asked about scalability, mention you would 
    // extract this into a separate module or component later.
    console.log('Gallery initialized successfully.');
});