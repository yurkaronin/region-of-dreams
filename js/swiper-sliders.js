document.addEventListener("DOMContentLoaded", function () {

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


  if (document.querySelector(".js-slider-2")) {

    var swiper = new Swiper(".js-slider-2 .swiper", {
      slidesPerView: 'auto', // Количество слайдов определяется автоматически
      spaceBetween: 32, // Отступы между слайдами
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: ".js-slider-2 .swiper-button-next",
        prevEl: ".js-slider-2 .swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.update(); // Обновляем Swiper при изменении размера окна
        }
      }
    });


  }


});
