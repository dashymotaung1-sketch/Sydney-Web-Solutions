

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


let images = document.querySelectorAll(".auto-grid img");
let current = 0;

function autoSlide() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
}

setInterval(autoSlide, 3000);

// This adds the 'active' class to the clicked link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});