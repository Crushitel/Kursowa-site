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
import emailjs from '@emailjs/browser';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import BaseHelpers from './helpers/BaseHelpers';
import BurgerMenu from './modules/BurgerMenu';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

// Відправка форми
document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('.subscribe__form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Це для того, щоб форма не відправлялась звичайним способом

    sendEmail(); // Виклик функції sendEmail
  });
});

// Відправка email
function sendEmail() {
  (function () {
    emailjs.init('Bgch-lIjgzMnzHw7s');
  })();
  var params = {
    email_id: document.querySelector('.subscribe__input').value,
  };
  emailjs.send('service_gnk14as', 'template_7o3o79r', params).then((res) => {
    alert('You are subcribed to our newsletter');
  });
}

// Ініціалізація Swiper
const customer_swiper = new Swiper('.customers__swiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  slidesPerView: 1.51,
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 480,
    depth: 200,
    modifier: 1,
    slideShadows: true,
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

const app_look_swiper = new Swiper('.app-look__swiper', {
  modules: [Navigation, Pagination, EffectCoverflow],
  slidesPerView: 2.2,
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 70,
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
new BurgerMenu().init();

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
