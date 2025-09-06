/* partie btn burger*/
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active"); // anime le burger en croix
    sidebar.classList.toggle("show");  // affiche ou cache la nav
  });
});
