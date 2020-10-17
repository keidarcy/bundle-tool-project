import Product from './classes/Product';
import {
  productOptions,
  productBtn,
  productSelectedOption,
  OptionBtnDataset,
  productPreOrderTextEle,
  productCap
} from './types';

if (window['Shopify'].bottle) {
  document.addEventListener('DOMContentLoaded', () => {
    const optionData = productSelectedOption.dataset as OptionBtnDataset;
    Product.handleBtnTextChange(+optionData.inventory_quantity, productBtn);
    Product.handlePreOrderTextChange(
      optionData.inventory_quantity,
      '',
      optionData.next_coming_date,
      productPreOrderTextEle,
      false
    );
  });

  productOptions.forEach((option) => {
    option.addEventListener('click', () => {
      setTimeout(() => {
        const currentSelectedOption = document.querySelector(
          '#OptionSelector-size .option.size.selected'
        ) as HTMLDivElement;
        const optionData = currentSelectedOption.dataset as OptionBtnDataset;
        Product.handleBtnTextChange(+optionData.inventory_quantity, productBtn);
        Product.handlePreOrderTextChange(
          optionData.inventory_quantity,
          '',
          optionData.next_coming_date,
          productPreOrderTextEle,
          false
        );
      }, 500);
    });
  });

  productBtn.addEventListener('click', () => {
    const currentSelectedOption = document.querySelector(
      '#OptionSelector-size .option.size.selected'
    ) as HTMLDivElement;

    Product.addCart(currentSelectedOption.dataset as OptionBtnDataset);
  });
}

if (window['Shopify'].cap) {
  document.addEventListener('DOMContentLoaded', () => {
    const capData = productCap.dataset as OptionBtnDataset;
    Product.handleBtnTextChange(+capData.inventory_quantity, productBtn);
    Product.handlePreOrderTextChange(
      capData.inventory_quantity,
      '',
      capData.next_coming_date,
      productPreOrderTextEle,
      false
    );
  });

  productBtn.addEventListener('click', () => {
    Product.addCart(productCap.dataset as OptionBtnDataset);
  });
}
