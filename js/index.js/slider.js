let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function next() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prev() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(current); 
    setInterval(next, 5000); 

});

window.prev = prev; 
window.next = next;