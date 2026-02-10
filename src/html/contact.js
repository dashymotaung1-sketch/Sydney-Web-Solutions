
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
