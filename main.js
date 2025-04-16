document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('[data-rating-btn]');
    const submitButton = document.querySelector('[data-submit-btn]');
    const ratingState = document.querySelector('.rating-state');
    const thankYouState = document.querySelector('.thank-you-state');
    const selectedValue = document.querySelector('[data-rated-value]');
    
    let selectedRating = null;

    // Handle rating selection
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            selectedRating = this.textContent.trim();
        });
    });

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!selectedRating) {
            alert('Please select a rating before submitting');
            return;
        }
        
        selectedValue.textContent = selectedRating;
        
        ratingState.style.display = 'none';
        thankYouState.style.display = 'block';
    });
});
