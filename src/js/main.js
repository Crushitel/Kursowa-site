/**
 * !(i)
 * Код потрапляє в підсумковий файл, тільки коли викликається функція, наприклад FLSFunctions.spollers();
 * Або коли імпортовано весь файл, наприклад import "files/script.js";
 * Код, що не використовується, у підсумковий файл не потрапляє.

 * Якщо схочемо використати ці бібліотеки їх слід розкоментувати
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper from 'swiper';
import SendEmailForm from './modules/email';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import BaseHelpers from './helpers/BaseHelpers';
import BurgerMenu from './modules/BurgerMenu';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

//Виклик функції відправки email
SendEmailForm();

// Створення об'єкту з параметрами Swiper
let customerSwiper; // Змінна для зберігання посилання на Swiper

function initSwiper() {
  const screenWidth = window.innerWidth;

  const swiperOptions = {
    modules: [Pagination, EffectCoverflow],
    slidesPerView: 1.502,
    centeredSlides: true,
    grabCursor: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 480, // Значення за замовчуванням для розширення
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  if (screenWidth < 1170) {
    swiperOptions.coverflowEffect.stretch = 280;
    if (screenWidth < 768) {
      swiperOptions.coverflowEffect.stretch = 214;
    }
  } else {
    swiperOptions.coverflowEffect.stretch = 480;
  }

  if (customerSwiper) {
    customerSwiper.destroy(true, true); // Знищуємо попередній Swiper перед ініціалізацією нового
  }

  customerSwiper = new Swiper('.customers__swiper', swiperOptions);
}

initSwiper();

window.addEventListener('resize', initSwiper);

const app_look_swiper = new Swiper('.app-look__swiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  slidesPerView: 3,
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: -30,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  loop: true,
  // Пагінація
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Стрілки навігації
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/**
 * Відкриття/закриття модальних вікон
 * Щоб модальне вікно відкривалося та закривалося
 * На вікно повішай атрибут data-popup="<назва вікна>"
 * На кнопку, яка викликає вікно, повішай атрибут data-type="<назва вікна>"

 * На обгортку(.popup) вікна додай атрибут '[data-close-overlay]'
 * На кнопку для закриття вікна додай клас '.button-close'
 * */

/**
 *  Модуль для роботи із меню (Бургер)
 * */
BurgerMenu();

/**
 *  Бібліотека для анімацій
 *  Документація: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Паралакс ефект при русі мишки
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
//   onChange: (data) => {
//     console.log(data);
//   },
// });

// new Accordion('.accordion', {
//   shouldOpenAll: false, // true
//   defaultOpen: [], // [0,1]
//   collapsedClass: 'open',
// });
