// Typed.js
if (document.querySelector(".typing-text")) {
  new Typed(".typing-text", {
    strings: ["Frontend Developer", "UI Enthusiast", "Web Designer"],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true
  });
}

// Scroll Spy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.id;

    if (scrollPos >= offset && scrollPos < offset + height) {
      navLinks.forEach(a => a.classList.remove("active"));
      document.querySelector(`.navbar a[href*=${id}]`).classList.add("active");
    }
  });
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


// Toggle Menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); // Changes icon to an 'X'
  navbar.classList.toggle('active');
};

// Auto-close menu on link click
navLinks.forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});

// Refined Scroll Spy
window.onscroll = () => {
  let top = window.scrollY;
  document.querySelectorAll('section').forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};