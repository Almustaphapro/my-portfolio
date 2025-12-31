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
