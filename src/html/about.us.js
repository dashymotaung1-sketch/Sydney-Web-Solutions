document.addEventListener("DOMContentLoaded", function () {

    const testimonials = document.querySelectorAll(".testimonial");
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = "none";
        });

        testimonials[index].style.display = "block";
    }

    function autoRotateTestimonials() {
        currentTestimonial++;
        if (currentTestimonial >= testimonials.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
    }

    // Initialize
    showTestimonial(currentTestimonial);

    // Change every 4 seconds
    setInterval(autoRotateTestimonials, 4000);
});
// This adds the 'active' class to the clicked link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // stop default link behavior

            const targetPage = this.getAttribute("href");

            // Navigate to the selected page
            window.location.href = targetPage;
        });
    });

});
