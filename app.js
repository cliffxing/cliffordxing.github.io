

const aboutSection = document.querySelector('.about');
const aboutMeSection = document.querySelector('.about-me-section');

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.9, // Trigger animation when 20% of the section is in view
};

document.getElementById('L1').addEventListener('click', function(event) {
    if (event.target.classList.contains('card') && document.getElementById('c1').checked) {
        window.open('https://letuscook.ca/', '_blank');
    }
});

document.getElementById('L2').addEventListener('click', function(event) {
    if (event.target.classList.contains('card') && document.getElementById('c2').checked) {
        window.open('https://apps.apple.com/ca/app/profit-runner/id1549559750/', '_blank');
    }
});

document.getElementById('L3').addEventListener('click', function(event) {
    if (event.target.classList.contains('card') && document.getElementById('c3').checked) {
        window.open('https://devpost.com/software/fusion-roblox', '_blank');
    }
});


document.getElementById('L4').addEventListener('click', function(event) {
    if (event.target.classList.contains('card') && document.getElementById('c4').checked) {
        window.open('https://www.greenfoot.org/scenarios/27314', '_blank');
    }
});



const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutSection.classList.add('active');
      
      observer.unobserve(entry.target); // Stop observing once it's in view
    }
  });
}, options);

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
    
      if (entry.isIntersecting) {
        aboutMeSection.classList.add('active');
        
        observer.unobserve(entry.target); // Stop observing once it's in view
      }
    });
  }, options);



observer.observe(aboutSection);
observer2.observe(aboutMeSection);

document.addEventListener('DOMContentLoaded', function() {


    // Toggle mobile menu
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navbarMenu = document.getElementById('navbar__menu');

    if (!mobileMenuToggle || !navbarMenu) {
        console.error("Mobile menu or navbar menu element not found.");
    } else {
        mobileMenuToggle.addEventListener('click', function() {
            console.log("Click event fired");
            this.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }
});


let slideIndex = 1;
let slideshowInterval;

const slideshowContainer = document.querySelector(".slideshow-container");

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.transform = ""; // Reset transform property
    }
    
    slides[slideIndex - 1].classList.add("active");

    // Add a delay to apply the transform for a smooth transition effect
    setTimeout(() => {
        slides[slideIndex - 1].style.transform = "translateX(0)";
    }, 10);
}

// Automatic slideshow change every 3 seconds, only if not hovering
slideshowContainer.addEventListener("mouseenter", () => {
    clearInterval(slideshowInterval); // Pause slideshow on hover
});

slideshowContainer.addEventListener("mouseleave", () => {
    slideshowInterval = setInterval(() => {
        plusSlides(1);
    }, 3000); // Resume slideshow on mouse leave
});

// Update slide visibility based on screen width
function updateSlideVisibility() {
    if (window.innerWidth <= 768) { // Adjust the width as per your breakpoint
        showSlides(slideIndex); // Show all slides for small screens
    } else {
        showSlides(slideIndex); // Show a single slide for larger screens
    }
}

// Call the function on window resize and initial page load
window.addEventListener("resize", updateSlideVisibility);
window.addEventListener("load", updateSlideVisibility);

// Start the automatic slideshow initially
slideshowInterval = setInterval(() => {
    plusSlides(1);
}, 3000);
