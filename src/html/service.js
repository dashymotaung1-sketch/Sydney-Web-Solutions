let images = document.querySelectorAll(".auto-grid img");
let current = 0;

function autoSlide() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
}

setInterval(autoSlide, 3000);