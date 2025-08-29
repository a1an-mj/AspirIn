// Dark mode functionality
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const themeSwitch2 = document.getElementById('theme-switch2');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.removeItem('darkmode'); // Use removeItem instead of setting to null
};

// Initialize dark mode on page load
if (darkmode === "active") {
  enableDarkmode();
}

// Add event listeners only if elements exist
if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });
}

if (themeSwitch2) {
  themeSwitch2.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });
}

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-phn');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
  });

  // Close mobile menu when menu items are clicked
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
}

// Optional: Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu && menuBtn && 
      !mobileMenu.contains(e.target) && 
      !menuBtn.contains(e.target) && 
      mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});
