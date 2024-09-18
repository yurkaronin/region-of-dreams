document.addEventListener("DOMContentLoaded", function () {

  // Слайдеры в первом экране
  if (document.querySelector(".hero")) {
    var heroPhotoSlider = new Swiper(".js-hero-photo-slider", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      // effect: "fade",
    });

    var heroTextSlider = new Swiper(".js-hero-text-slider", {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: ".hero .swiper-button-next",
        prevEl: ".hero .swiper-button-prev",
      },
      // pagination: {
      //   el: ".hero .swiper-pagination",
      //   clickable: true,
      // },
    });

    // Синхронизация слайдеров
    heroTextSlider.on("slideChange", function () {
      var currentIndex = heroTextSlider.realIndex;
      heroPhotoSlider.slideToLoop(currentIndex);
    });
  }

  if (document.querySelector(".js-slider-1")) {
    var swiper = new Swiper(".js-slider-1 .swiper", {
      slidesPerView: "auto", // Количество слайдов определяется автоматически
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
        },
      },
    });
  }

  if (document.querySelector(".js-slider-2")) {
    var swiper = new Swiper(".js-slider-2 .swiper", {
      slidesPerView: "auto", // Количество слайдов определяется автоматически
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
        },
      },
    });
  }

  if (document.querySelector(".js-slider-3")) {
    var swiper = new Swiper(".js-slider-3 .swiper", {
      slidesPerView: 1, // Количество слайдов определяется автоматически
      spaceBetween: 32, // Отступы между слайдами
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: ".js-slider-3 .swiper-button-next",
        prevEl: ".js-slider-3 .swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.update(); // Обновляем Swiper при изменении размера окна
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: "auto",
        },
      },
    });
  }
});
