import Cart from './classes/Cart';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.js-cart-trigger')?.addEventListener('click', () => {
    const Executor = setInterval(() => {
      const btn = document.querySelector('button.cart__checkout');
      if (btn) {
        Cart.handleCartEvent();
        clearInterval(Executor);
      }
    }, 200);
  });
});
