// document.getElementById('navToggle').addEventListener('click', function () {
//     document.getElementById('navLinks').classList.toggle('show');
// });

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});


// Get modal element
const modal = document.getElementById('contactModal');

// Get open modal button
const contactBtn = document.getElementById('contactBtn');

// Get close button
const closeModal = document.getElementById('closeModal');

// Get the form
const contactForm = document.getElementById('contactForm');

// Open modal
contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatic slide change every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);


function showTabContent(divId) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(divId).classList.add('active');

    // Add active class to the clicked tab
    event.target.classList.add('active');
  }

  // By default, show the first tab content
  document.querySelector('.tab').click();