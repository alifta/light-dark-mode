const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'Dark';
const LIGHT_THEME = 'Light';
const DARK_COLOR = 'rgb(255 255 255 / 50%)';
const LIGHT_COLOR = 'rgb(0 0 0 / 50%)';
const SUN = 'fa-sun';
const MOON = 'fa-moon';

// Dark or light images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Switch dark or light mode
function toggleDarkLightMode(colorMode) {
  if (colorMode === 'Light') {
    nav.style.backgroundColor = DARK_COLOR;
    textBox.style.backgroundColor = LIGHT_COLOR;
    toggleIcon.children[0].textContent = `${colorMode} Mode`;
    toggleIcon.children[1].classList.replace(MOON, SUN);
    imageMode(colorMode.toLowerCase());
  } else if (colorMode === 'Dark') {
    nav.style.backgroundColor = LIGHT_COLOR;
    textBox.style.backgroundColor = DARK_COLOR;
    toggleIcon.children[0].textContent = `${colorMode} Mode`;
    toggleIcon.children[1].classList.replace(SUN, MOON);
    imageMode(colorMode.toLowerCase());
  }
}

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(LIGHT_THEME);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
