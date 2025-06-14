const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('light');

  // Cambiar icono luna/sol
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
});
