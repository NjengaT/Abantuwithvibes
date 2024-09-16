document.addEventListener('DOMContentLoaded', function () {
    // Handle Buy Ticket buttons on Events Page
    const buyTicketButtons = document.querySelectorAll('.buy-ticket');
    
    buyTicketButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Ticket added to cart!');
        });
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
