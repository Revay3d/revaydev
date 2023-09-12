const menuToggle = document.querySelector(".menu-toggle")
const menuItems = document.querySelector(".nav__items")

menuToggle.addEventListener("click", () => {

menuItems.classList.toggle("nav__menu--visible")

});
