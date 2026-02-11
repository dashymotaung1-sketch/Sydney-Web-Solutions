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
