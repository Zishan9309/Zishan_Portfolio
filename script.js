// ================= MENU =================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ================= SCROLL ACTIVE LINK =================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  document.querySelector('header')
    .classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ================= SCROLL REVEAL =================
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// ================= TYPED JS =================
new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Full Stack Developer', 'Python Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// ================= READ MORE =================
const readMoreBtn = document.getElementById('read-more-btn');
const aboutTextMore = document.getElementById('about-text-more');

if (readMoreBtn && aboutTextMore) {
  readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aboutTextMore.classList.toggle('hidden');
    readMoreBtn.textContent =
      aboutTextMore.classList.contains('hidden')
        ? 'Read More'
        : 'Show Less';
  });
}

// ================= EMAILJS CONTACT FORM =================
const contactForm = document.getElementById("contact-form");
const msg = document.getElementById("msg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    msg.textContent = "Sending...";

    if (typeof emailjs === "undefined") {
      console.error("❌ EmailJS not loaded");
      msg.textContent = "Email service not loaded ❌";
      return;
    }

    emailjs.sendForm(
      "service_e21jark",
      "template_a3rol94",
      this
    )
    .then(() => {
      msg.textContent = "Message sent successfully ✅";
      contactForm.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      msg.textContent = "Failed to send ❌";
    });
  });
}
