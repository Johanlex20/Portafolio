document.addEventListener("DOMContentLoaded", function() {
    // Obtener el menú y el input del menú
    var navMenu = document.querySelector('.nav__menu');
    var checkbox = document.getElementById('menu');
  
    // Obtener todos los enlaces del menú
    var menuLinks = document.querySelectorAll('.nav__menu .nav__item');
  
    // Iterar sobre cada enlace y agregar un evento de clic
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        checkbox.checked = false; // Desmarcar el checkbox para cerrar el menú
        navMenu.style.transitionDelay = '0s'; // Reiniciar cualquier retraso de transición
        setTimeout(function() {
          navMenu.style.transitionDelay = '0.5s'; // Restablecer el retraso de transición después de 0.5s
          navMenu.style.position = 'fixed'; // Cambiar la posición a fixed después de la transición de clip-path
        }, 500); // Esperar 500ms antes de cambiar la posición a fixed
  
        // Obtener el id del destino desde el atributo href del enlace
        var targetId = link.getAttribute('href').substring(1); // Elimina el símbolo '#'
  
        // Obtener la posición del elemento destino
        var targetElement = document.getElementById(targetId);
        var offsetTop = targetElement.offsetTop;
  
        // Desplazarse suavemente hasta la posición del elemento destino
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  