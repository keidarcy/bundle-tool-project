import {
  accessoryCaps,
  accessorySelects,
  accessoryBtnsText,
  accessoryPreOrders,
  CapDataset,
  SelectDataset,
  OptionBtnDataset,
  accessoryBtns
} from './types';
import Accessory from './classes/Accessory';

if (window['Shopify'].accessory) {
  document.addEventListener('DOMContentLoaded', () => {
    accessoryCaps.forEach((cap, idx) => {
      const capData = cap.dataset as CapDataset;
      Accessory.handleBtnTextChange(+capData.inventory_quantity, accessoryBtnsText[idx]);
      Accessory.handlePreOrderTextChange(
        capData.inventory_quantity,
        capData.title,
        capData.next_coming_date,
        accessoryPreOrders[idx],
        false
      );
    });

    accessorySelects.forEach((select, idx) => {
      const selectOptionData = select.selectedOptions[0].dataset as SelectDataset;
      Accessory.handleBtnTextChange(
        +selectOptionData.inventory_quantity,
        accessoryBtnsText[idx + 2]
      );
      Accessory.handlePreOrderTextChange(
        selectOptionData.inventory_quantity,
        '',
        selectOptionData.next_coming_date,
        accessoryPreOrders[idx + 2],
        false
      );
    });
  });

  accessorySelects.forEach((select) => {
    select.addEventListener('change', (e) => {
      const selectOptionData = select.selectedOptions[0].dataset as SelectDataset;
      const btnEle = document.querySelector(
        `button.product-form__cart-submit[productid='${selectOptionData.productid}']`
      ) as HTMLButtonElement;
      const preOrderEle = document.querySelector(
        `.pre-order-text._grid[productid='${selectOptionData.productid}']`
      ) as HTMLDivElement;

      Accessory.changeBtnAttribute(
        selectOptionData,
        btnEle.dataset as OptionBtnDataset
      );

      Accessory.handleBtnTextChange(+selectOptionData.inventory_quantity, btnEle);
      Accessory.handlePreOrderTextChange(
        selectOptionData.inventory_quantity,
        '',
        selectOptionData.next_coming_date,
        preOrderEle,
        false
      );
    });
  });

  accessoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      Accessory.addCart(btn.dataset as OptionBtnDataset);
    });
  });
}
