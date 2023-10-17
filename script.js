const menuToggle = document.querySelector(".menu-toggle")
const menuItems = document.querySelector(".nav__items")

menuToggle.addEventListener("click", () => {

menuItems.classList.toggle("nav__menu--visible")

});

//esto fue hecho con chatgpt :( 
// JavaScript puro
document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', event => {
      // Elimina la clase 'active' de todos los elementos
      document.querySelectorAll('.nav__item').forEach(item => {
        item.classList.remove('active');
      });
      // Añade la clase 'active' al elemento que se ha hecho clic
      event.target.classList.add('active');
    });
  });
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});  

