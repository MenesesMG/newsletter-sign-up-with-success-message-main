document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const originalCard = document.querySelector('.card');
    const successMessage = document.querySelector('.success-message');
    successMessage.style.display = 'none';
    originalCard.style.display = 'flex';

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email').value;
        console.log('Email:', emailInput);

        originalCard.style.display = 'none';
        successMessage.style.display = 'flex';
    });

    const dismissButton = document.querySelector('.modal-close button');
    dismissButton.addEventListener('click', function() {
        successMessage.style.display = 'none'; 
        originalCard.style.display = 'flex'; 
    });
});
