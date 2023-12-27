import MobileChecker from './MobileChecker.js';

class BaseHelpers {
  static html = document.documentElement;
  static header = document.querySelector('.header');
  static firstScreen = document.querySelector('[data-observ]');

  /**
   * Перевірка браузера на підтримку webp
   * (i) необхідно для коректного відображення webp из css
   * */
  static checkWebpSupport() {
    /** Проверка поддержки webp */
    const testWebp = (callback) => {
      const webP = new Image();

      webP.onload = webP.onerror = () => callback(webP.height === 2);
      webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };

    /** Додавання класів _webp или _no-webp для HTML */
    testWebp((support) => {
      const className = support ? 'webp' : 'no-webp';
      this.html.classList.add(className);

      console.log(support ? 'webp поддерживается' : 'webp не поддерживается');
    });
  }

  /**
   * Додавання класу touch для HTML если браузер мобільний
   * */
  static addTouchClass() {
    if (MobileChecker.isAny) {
      this.html.classList.add('touch');
    }
  }

  /**
   * Додавання loaded для HTML після повного завантаження сторінки
   * */
  static addLoadedClass() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.html.classList.add('loaded');
      }, 0);
    });
  }

  /** Отримання хешу в адресі сайту */
  static get getHash() {
    return location.hash?.replace('#', '');
  }

  /** Вказання хешу в адресі сайту */
  static setHash(hash) {
    hash = hash ? `#${hash}` : location.href.split('#')[0];
    history.pushState('', '', hash);
  }

  /** Функція для фіксованої шапки в хедері */
  static headerFixed() {
    const headerStickyObserver = new IntersectionObserver(([entry]) => {
      this.html.classList.toggle('header-is-sticky', !entry.isIntersecting);
    });

    if (this.firstScreen) {
      headerStickyObserver.observe(this.firstScreen);
    }
  }
}

export default BaseHelpers;
