const burgerToggle = document.getElementById('burgerToggle');
const navMenu = document.getElementById('navMenu');

burgerToggle.addEventListener('click', () => {
  burgerToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});