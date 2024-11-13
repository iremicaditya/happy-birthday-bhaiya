let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Show the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Show the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Event listeners for buttons
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Initial slide setup
showSlide(currentSlide);
