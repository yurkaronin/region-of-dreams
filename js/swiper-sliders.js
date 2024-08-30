document.addEventListener("DOMContentLoaded", function () {
  // Слайдеры в первом экране
  if (document.querySelector(".hero")) {
    console.log("Есть контакт!");

    var heroPhotoSlider = new Swiper(".js-hero-photo-slider", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      effect: "fade",
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
      pagination: {
        el: ".hero .swiper-pagination",
        clickable: true,
      },
    });

    // Синхронизация слайдеров
    heroTextSlider.on("slideChange", function () {
      var currentIndex = heroTextSlider.realIndex;
      heroPhotoSlider.slideToLoop(currentIndex);
    });
  }

  if (document.querySelector(".prices-and-services")) {
    var heroTextSlider = new Swiper(".js-prices-and-services-slider", {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: [
          document.querySelector(
            ".js-prices-and-services-slider .swiper-button-next"
          ),
          document.querySelector(
            ".prices-and-services .swiper-button-group .swiper-button-next"
          ),
        ],
        prevEl: [
          document.querySelector(
            ".js-prices-and-services-slider .swiper-button-prev"
          ),
          document.querySelector(
            ".prices-and-services .swiper-button-group .swiper-button-prev"
          ),
        ],
      },

      breakpoints: {
        1379: {
          slidesPerView: 2,
        },
      },
    });
  }

  if (document.querySelector(".offers")) {
    var offersSwiper = new Swiper(".js-offers-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,

      navigation: {
        nextEl: ".offers .swiper-button-next",
        prevEl: ".offers .swiper-button-prev",
      },

      breakpoints: {
        // 320: {
        //   slidesPerView: 1,
        // },
        769: {
          slidesPerView: 1.3,
        },
        1025: {
          slidesPerView: 2,
        },
      },
    });
  }
  if (document.querySelector(".creative-slider")) {
    // Получаем все элементы слайдеров на странице
    document
      .querySelectorAll(".creative-slider")
      .forEach(function (sliderElement) {
        // Инициализация каждого слайдера
        var creativeSlider = new Swiper(
          sliderElement.querySelector(".js-creative-slider"),
          {
            slidesPerView: 1,
            spaceBetween: 32,
            loop: true,
            navigation: {
              nextEl: sliderElement.querySelector(".swiper-button-next"),
              prevEl: sliderElement.querySelector(".swiper-button-prev"),
            },
            on: {
              init: function () {
                updateThumbnails(this, sliderElement); // Обновляем миниатюры при инициализации
              },
              slideChange: function () {
                updateThumbnails(this, sliderElement); // Обновляем миниатюры при смене слайда
              },
            },
          }
        );

        // Функция для обновления миниатюр
        function updateThumbnails(swiper, sliderElement) {
          // Получаем текущий активный слайд
          var currentSlide = swiper.slides[swiper.activeIndex];

          // Получаем следующий и предыдущий слайды с помощью Swiper методов
          var prevSlide = currentSlide.previousElementSibling
            ? currentSlide.previousElementSibling
            : swiper.slides[swiper.slides.length - 1];
          var nextSlide = currentSlide.nextElementSibling
            ? currentSlide.nextElementSibling
            : swiper.slides[0];

          // Проверка на случай, если слайды зациклены (loop)
          if (prevSlide.classList.contains("swiper-slide-duplicate")) {
            prevSlide = swiper.slides[swiper.slides.length - 2];
          }
          if (nextSlide.classList.contains("swiper-slide-duplicate")) {
            nextSlide = swiper.slides[1];
          }

          // Обновляем миниатюры для конкретного слайдера
          sliderElement.querySelector(".creative-slider__prev-photo img").src =
            prevSlide.querySelector("img").src;
          sliderElement.querySelector(".creative-slider__next-photo img").src =
            nextSlide.querySelector("img").src;
        }
      });
  }

  // Слайдер на детальной странице ОН
  // .js-place-card-slider
  // if (document.querySelector(".js-place-card-slider")) {

  //   var swiper = new Swiper(".js-place-card-slider", {
  //     slidesPerView: 1.4,
  //     spaceBetween: 0,
  //     // centeredSlides: true,
  //     loop: true,
  //     pagination: {
  //       el: ".js-place-card-slider-pagination",
  //       // clickable: true,
  //       type: "fraction",
  //     },
  //     navigation: {
  //       nextEl: [
  //         document.querySelector(".js-place-card-slider .swiper-button-next"),
  //         document.querySelector(".place-card__slider-footer-right .swiper-button-next")
  //       ],
  //       prevEl: [
  //         document.querySelector(".js-place-card-slider .swiper-button-prev"),
  //         document.querySelector(".place-card__slider-footer-right .swiper-button-prev")
  //       ],
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //       },
  //       767: {
  //         slidesPerView: 1,
  //       },
  //       1024: {
  //         slidesPerView: 1.4,
  //       },
  //     },

  //   });
  // };

  // if (document.querySelector(".js-recommendations-slider")) {

  //   var swiper = new Swiper(".js-recommendations-slider", {
  //     slidesPerView: 4,
  //     spaceBetween: 32,
  //     loop: true,
  //     navigation: {
  //       nextEl: ".js-recommendations-slider .swiper-button-next",
  //       prevEl: ".js-recommendations-slider .swiper-button-prev",
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //         spaceBetween: 16,
  //       },
  //       767: {
  //         slidesPerView: 2,
  //         spaceBetween: 24,
  //       },
  //       1024: {
  //         slidesPerView: 3,
  //       },
  //     },

  //   });
  // };

  // скрипт инициализации мини-слайдеров в анонсах
  // if (document.querySelector(".announce-card__slider")) {
  //   const sliderCards = document.querySelectorAll(".announce-card");

  //   sliderCards.forEach((card, index) => {
  //     const sliderContainer = card.querySelector(".js-announce-card-slider");

  //     if (sliderContainer) {
  //       sliderContainer.classList.add(`announce-card-gallery-${index}`);
  //       const swiperTest = new Swiper(`.announce-card-gallery-${index}`, {});

  //       const navItems = card.querySelectorAll(
  //         ".announce-card__navigation-item"
  //       );

  //       navItems.forEach((item, i) => {
  //         item.setAttribute("data-number", i);
  //       });

  //       card
  //         .querySelector(".announce-card__navigation")
  //         .addEventListener("mouseover", (event) => {
  //           if (
  //             event.target.classList.contains("announce-card__navigation-item")
  //           ) {
  //             navItems.forEach((elem) => {
  //               elem.classList.remove("announce-card__navigation-item--active");
  //             });

  //             event.target.classList.add(
  //               "announce-card__navigation-item--active"
  //             );
  //             swiperTest.slideTo(event.target.getAttribute("data-number"));
  //           }
  //         });
  //     }
  //   });
  // }
});
