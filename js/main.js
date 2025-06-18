// Смена темы 'light' / 'dark'
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

let currentTheme = 'light';
currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const theme = document.body.getAttribute('data-theme');
  const newTheme = theme === 'light' ? 'dark' : 'light';

  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const moonIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'%3E%3C/path%3E%3C/svg%3E`;
  const sunIcon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3Cline x1='12' y1='1' x2='12' y2='3'%3E%3C/line%3E%3Cline x1='12' y1='21' x2='12' y2='23'%3E%3C/line%3E%3Cline x1='4.22' y1='4.22' x2='5.64' y2='5.64'%3E%3C/line%3E%3Cline x1='18.36' y1='18.36' x2='19.78' y2='19.78'%3E%3C/line%3E%3Cline x1='1' y1='12' x2='3' y2='12'%3E%3C/line%3E%3Cline x1='21' y1='12' x2='23' y2='12'%3E%3C/line%3E%3Cline x1='4.22' y1='19.78' x2='5.64' y2='18.36'%3E%3C/line%3E%3Cline x1='19.78' y1='4.22' x2='18.36' y2='5.64'%3E%3C/line%3E%3C/svg%3E`;
  themeIcon.src = theme === 'light' ? moonIcon : sunIcon;
  themeIcon.alt = theme + ' theme icon';
}

// Кастомный dropdown
function initDropdown(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);

  if (!input || !dropdown) return;

  input.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });

  dropdown.addEventListener('click', (e) => {
    if (e.target.classList.contains('ui-dropdown-item')) {
      const name = e.target.getAttribute('data-name') || e.target.textContent;
      input.value = name;
      dropdown.classList.remove('show');
    }
  });
}

initDropdown('dbInput', 'dropdownList');
initDropdown('dbInputD', 'dropdownListD');

// Закрытие dropdown
document.addEventListener('click', (e) => {
  if (!e.target.closest('.ui-dropdown')) {
    document.querySelectorAll('.ui-dropdown-menu').forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});

// Инициализация Bootstrap Select
$(document).ready(function () {
  $('.selectpicker').selectpicker();
});

// Отмена отсылки для всех форм
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted (prevented for demo)');
  });
});
