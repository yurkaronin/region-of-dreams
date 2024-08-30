// Обработка открытия и закрытия мобильного меню
var buttonsMenu = document.querySelectorAll('.menu-button');
if (buttonsMenu.length > 0) {
  buttonsMenu.forEach(function(buttonMenu) {
    buttonMenu.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
  });
}

// Обработка кликов по якорным ссылкам
var anchorLinks = document.querySelectorAll('.mobile-nav__link[data-anchor="true"]');
if (anchorLinks.length > 0) {
  anchorLinks.forEach(function(anchorLink) {
    anchorLink.addEventListener('click', function (event) {
      event.preventDefault();  // Предотвращаем стандартный переход по ссылке
      var targetId = this.getAttribute('href');  // Получаем ID цели
      var targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Плавная прокрутка до цели
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }

      // Закрываем мобильное меню
      document.body.classList.remove('menu-open');
    });
  });
}
