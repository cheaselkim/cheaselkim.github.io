document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  let burger = document.getElementById('burger'),
  nav    = document.getElementById('main-nav'),
  slowmo = document.getElementById('slowmo');
    // Блок 1

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.main-nav a').forEach(function(menuItem) {
      menuItem.addEventListener('click', function() {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    let burger = document.getElementById('burger'),
      nav = document.getElementById('main-nav');
  
    burger.addEventListener('click', function (e) {
      this.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
  });
  

