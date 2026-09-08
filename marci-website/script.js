document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.navbarhome a');
  const sections = document.querySelectorAll('.section');

  // Default: show "Call Now" only
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById('call').classList.add('active');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('data-section');

      // Hide all sections
      sections.forEach(sec => sec.classList.remove('active'));

      // Show only the clicked section
      document.getElementById(target).classList.add('active');
    });
  });
});


//Slide
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

setInterval(() => {
  changeSlide(1);
}, 10000);


//Gallery
let galleryIndex = 0;
const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
let galleryTimer;

function showGallery(index) {
  gallerySlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    galleryThumbs[i].style.opacity = i === index ? "1" : "0.6";
  });
}

function changeGallery(n) {
  galleryIndex = (galleryIndex + n + gallerySlides.length) % gallerySlides.length;
  showGallery(galleryIndex);

  // reset auto-slide
  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => {
    changeGallery(1);
  }, 5000);
}

function setGallery(index) {
  galleryIndex = index;
  showGallery(galleryIndex);

  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => {
    changeGallery(1);
  }, 5000);
}

// initial run
showGallery(galleryIndex);
galleryTimer = setInterval(() => {
  changeGallery(1);
}, 10000);

