function showForm(formType) {
    const quoteForm = document.getElementById('quoteForm');
    const bookingForm = document.getElementById('bookingForm');

    if(formType === 'quote') {
        quoteForm.style.display = 'block';
        bookingForm.style.display = 'none';
    } else if(formType === 'booking') {
        bookingForm.style.display = 'block';
        quoteForm.style.display = 'none';
    }
}

// ---event listeners  ---
const quoteFormElement = document.getElementById('quoteForm').querySelector('form');
const bookingFormElement = document.getElementById('bookingForm').querySelector('form');

quoteFormElement.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh
    alert("Thank you! Your quote request has been submitted. You will receive an SMS confirmation shortly.");
    quoteFormElement.reset(); // clear the form
});

bookingFormElement.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh
    alert("Thank you! Your booking has been confirmed. You will receive an SMS confirmation shortly.");
    bookingFormElement.reset(); // clear the form
});
