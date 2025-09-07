/* partie btn burger*/
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  // Change le symbole burger ↔ croix
  if (sidebar.classList.contains('show')) {
    toggleBtn.textContent = '✖'; 
  } else {
    toggleBtn.textContent = '☰';
  }
});
