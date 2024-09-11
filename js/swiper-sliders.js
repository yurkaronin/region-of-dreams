document.addEventListener("DOMContentLoaded", function () {
  // Слайдеры в первом экране
  if (document.querySelector(".js-slider-1")) {

    var swiper = new Swiper(".js-slider-1 .swiper", {
      slidesPerView: 'auto', // Количество слайдов определяется автоматически
      spaceBetween: 32, // Отступы между слайдами
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: ".js-slider-1 .swiper-button-next",
        prevEl: ".js-slider-1 .swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.update(); // Обновляем Swiper при изменении размера окна
        }
      }
    });


  }


});
