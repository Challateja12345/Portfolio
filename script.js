function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typed.js initialization for class .typed-coder
document.addEventListener('DOMContentLoaded', function () {
  const typedCoder = document.querySelector('.typed-coder');
  if (typedCoder) {
    let coderStrings = typedCoder.getAttribute('data-typed-items');
    coderStrings = coderStrings.split(',').map(s => s.trim());
    new Typed('.typed-coder', {
      strings: coderStrings,
      loop: true,
      typeSpeed: 25,       // slower typing
      backSpeed: 10,       // slower deleting
      backDelay: 2000,     // 2 second pause before deleting
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      html: true
    });
  }
});
