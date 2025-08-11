const swiper = new Swiper(".swiper", {
  loop: true, // бесконечный цикл
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 20, // отступы между слайдами
  slidesPerView: 3, // по умолчанию 3 слайда видно
  slidesPerGroup: 3, // пролистываем по 3 за раз (3 картинки = 1 "слайд" для навигации)

  // Настройки для разных экранов
  breakpoints: {
    0: {
      // от 0px до 767px (мобильные)
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      // от 768px до 1023px (планшеты)
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      // от 1024px и выше (десктоп)
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
