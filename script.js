// script.js
document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.querySelector(".fa-bars");
  const navMenu = document.querySelector("nav ul");

  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
    navToggle.setAttribute(
      "aria-expanded",
      navMenu.classList.contains("show")
    );
  });
});
// script.js
function animateCount(el) {
  const target = +el.getAttribute("data-count");
  let count = 0;
  const step = Math.ceil(target / 100);
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.textContent = target + "+";
      clearInterval(interval);
    } else {
      el.textContent = count + "+";
    }
  }, 16);
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".count").forEach(animateCount);
});
