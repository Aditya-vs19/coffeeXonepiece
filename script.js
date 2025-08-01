const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener('click', () => menuOpenButton.click());

document.querySelectorAll('.testimonial').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.testimonial-inner').classList.toggle('flipped');
  });
});



document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
  field.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });

  field.addEventListener('blur', function() {
    if (!this.value) {
      this.parentElement.classList.remove('focused');
    }
  });
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      document.body.classList.remove('show-mobile-menu');
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const navbar = document.querySelector('.navbar');
  const mobileMenu = document.querySelector('.nav-menu');

  if (!navbar.contains(e.target) && document.body.classList.contains('show-mobile-menu')) {
    document.body.classList.remove('show-mobile-menu');
  }
});

// Add active class to nav links on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Scrolling to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Page loader Swiper  
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader-wrapper");
  if (loader) {
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  }

  setTimeout(() => {
    const swiper = new Swiper('.testimonials-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        
        delay: 3000,
        disableOnInteraction: false,
      },
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  }, 600);
});
