function BurgerMenu() {
  const refs = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    menu: document.querySelector('[data-burger-menu]'),
    links: document.querySelectorAll('.burger-menu__link'), // Використовуємо querySelectorAll для отримання всіх елементів
  };
  refs.openBurgerBtn.addEventListener('click', toggleModal);
  refs.closeBurgerBtn.addEventListener('click', toggleModal);
  refs.links.forEach((link) => {
    link.addEventListener('click', toggleModalOnClick);
  });

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }

  function toggleModalOnClick(event) {
    if (event.target.classList.contains('burger-menu__link')) {
      refs.menu.classList.add('is-hidden');
    }
  }
}

export default BurgerMenu;
