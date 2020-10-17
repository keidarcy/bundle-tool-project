import {
  DeleteBtnDataset,
  INVENTORY_QUANTITY_KEY,
  MinusBtnDataset,
  PRE_ORDER_TEXT
} from '../types';

class Cart {
  topId = '__top';
  bottomId = '__bottom';
  preorderId = '__preorder';

  checkShouldDisable = (): boolean => {
    const quantityStatus = localStorage.getItem(INVENTORY_QUANTITY_KEY);
    const shouldDisable = true;

    if (quantityStatus === '{}' || !quantityStatus) {
      return !shouldDisable;
    }

    const booleanValues = Object.values(JSON.parse(quantityStatus));

    if (booleanValues.every((value: boolean) => value === true)) {
      return !shouldDisable;
    }
    if (booleanValues.every((value: boolean) => value === false)) {
      return !shouldDisable;
    }

    return shouldDisable;
  };

  disableBtnAndShowText = () => {
    const btn = document.querySelector(
      ".cart__checkout[name='checkout']"
    ) as HTMLButtonElement;
    let topP = document.querySelector('#' + this.topId) as HTMLParagraphElement;
    let bottomP = document.querySelector('#' + this.bottomId) as HTMLParagraphElement;

    if (!topP) {
      topP = this.createElement(this.topId);
      this.addTopTextNode(topP);
    }

    if (!bottomP) {
      bottomP = this.createElement(this.bottomId);
      this.addBottomTextNode(bottomP, btn);
    }
    btn.disabled = true;
  };

  addTopTextNode = (p: HTMLParagraphElement) => {
    const container = document.querySelector('#CartDrawer .drawer__inner');
    container?.prepend(p, container.children[0]);
  };

  addBottomTextNode = (p: HTMLParagraphElement, btn: HTMLButtonElement) => {
    const parent = document.querySelector('div.ajaxcart__footer--fixed');
    parent?.insertBefore(p, btn);
  };

  createElement = (id: string): HTMLParagraphElement => {
    const p = document.createElement('p');
    p.style.color = 'red';
    p.id = id;
    p.innerText = PRE_ORDER_TEXT[window['LangShop'].currentLanguage].CART;
    return p;
  };

  clean = () => {
    const btn = document.querySelector(
      ".cart__checkout[name='checkout']"
    ) as HTMLButtonElement;
    const topP = document.querySelector('#' + this.topId) as HTMLElement;
    const bottomP = document.querySelector('#' + this.bottomId) as HTMLElement;

    if (topP) {
      topP.remove();
    }
    if (bottomP) {
      bottomP.remove();
    }
    btn.disabled = false;
  };

  deleteItemFromLocalStorage = (ids: NodeListOf<HTMLDivElement>, idx: number) => {
    const deleteBtnData = ids[idx].dataset as DeleteBtnDataset;

    const variantId = deleteBtnData.id.replace(/:.*/, '');

    const quantityStatus = localStorage.getItem(INVENTORY_QUANTITY_KEY) as string;

    const cartVariantList = JSON.parse(quantityStatus);

    delete cartVariantList[variantId];

    localStorage.setItem(INVENTORY_QUANTITY_KEY, JSON.stringify(cartVariantList));
  };

  handleDelete = () => {
    const Executor = setInterval(() => {
      const btn = document.querySelector('button.cart__checkout') as HTMLElement;
      const notExcuting = btn ? !btn.classList.contains('btn--ajax-disabled') : false;

      if (btn && notExcuting) {
        const deleteBtns = document.querySelectorAll('.remove__lineitem');
        const ids = document.querySelectorAll('.ajaxcart__qty--remove') as NodeListOf<
          HTMLDivElement
        >;

        const minusBtns = document.querySelectorAll('.ajaxcart__qty--minus');
        const plusBtns = document.querySelectorAll('.ajaxcart__qty--plus');

        minusBtns.forEach((btn: HTMLDivElement, idx) => {
          btn.addEventListener('click', () => {
            const minusBtnData = btn.dataset as MinusBtnDataset;
            if (Object.is(+minusBtnData.qty, 0)) {
              this.deleteItemFromLocalStorage(ids, idx);
            }
            this.handleCartEvent();
          });
        });

        plusBtns.forEach((btn: HTMLDivElement) => {
          btn.addEventListener('click', () => {
            this.handleCartEvent();
          });
        });

        deleteBtns.forEach((btn: HTMLDivElement, idx) => {
          btn.addEventListener('click', () => {
            this.deleteItemFromLocalStorage(ids, idx);
            this.handleCartEvent();
          });
        });
        clearInterval(Executor);
      }
    }, 200);
  };

  handleCartEvent = () => {
    this.handleClickLater();
    this.handleDelete();

    const closeBtn = document.querySelector('#CartDrawer .drawer__close-button');

    if (closeBtn)
      closeBtn.addEventListener('click', () => {
        this.clean();
      });
  };

  handleClickLater = () => {
    setInterval(() => {
      if (this.checkShouldDisable()) {
        this.disableBtnAndShowText();
      } else {
        this.clean();
      }
    }, 1000);
  };
}

export default new Cart();
