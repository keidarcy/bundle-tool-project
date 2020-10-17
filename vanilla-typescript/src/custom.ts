import { customCaps, customColors, customSizes } from './types';
import Custom from './classes/Custom';

if (window['Shopify'].custom) {
  document.addEventListener('DOMContentLoaded', () => {
    customSizes.forEach((size) => {
      size.addEventListener('click', () => {
        const color = document.querySelector(
          '#OptionSelector-color .option.selected'
        ) as HTMLDivElement;

        const cap = document.querySelector(
          '#OptionSelector-sub .cap.selected'
        ) as HTMLDivElement;

        const { colorData, sizeData, capData } = Custom.getData(color, size, cap);

        Custom.handleBottleSelect(colorData, sizeData.val, capData);
      });
    });

    customColors.forEach((color) => {
      color.addEventListener('click', () => {
        const size = document.querySelector(
          '#OptionSelector-size .option.selected'
        ) as HTMLDivElement;

        const cap = document.querySelector(
          '#OptionSelector-sub .cap.selected'
        ) as HTMLDivElement;

        const { colorData, sizeData, capData } = Custom.getData(color, size, cap);
        Custom.handleBottleSelect(colorData, sizeData.val, capData);
      });
    });

    customCaps.forEach((cap) => {
      cap.addEventListener('click', () => {
        const color = document.querySelector(
          '#OptionSelector-color .option.selected'
        ) as HTMLDivElement;

        const size = document.querySelector(
          '#OptionSelector-size .option.selected'
        ) as HTMLDivElement;

        const { colorData, sizeData, capData } = Custom.getData(color, size, cap);

        Custom.handleCapSelect(colorData, sizeData.val, capData);
      });
    });

    setTimeout(() => {
      const btn = document.querySelector("button.product-form__cart-submit[name='add']");
      btn?.addEventListener('click', () => {
        const cap = document.querySelector(
          '#OptionSelector-sub .cap.selected'
        ) as HTMLDivElement;

        const color = document.querySelector(
          '#OptionSelector-color .option.selected'
        ) as HTMLDivElement;

        const size = document.querySelector(
          '#OptionSelector-size .option.selected'
        ) as HTMLDivElement;

        const { colorData, sizeData, capData } = Custom.getData(color, size, cap);

        Custom.addCart(colorData, sizeData.val, capData);
      });
    }, 1000);

    setTimeout(() => {
      const cap = document.querySelector(
        '#OptionSelector-sub .cap.selected'
      ) as HTMLDivElement;

      let color = document.querySelector(
        '#OptionSelector-color .option.selected'
      ) as HTMLDivElement;

      let size = document.querySelector(
        '#OptionSelector-size .option.selected'
      ) as HTMLDivElement;

      if (!color) {
        color = document.querySelector('#OptionSelector-color .option') as HTMLDivElement;
        color.classList.add('selected');
      }

      if (!size) {
        size = document.querySelector('#OptionSelector-size .option') as HTMLDivElement;
        size.classList.add('selected');
      }

      const { colorData, sizeData, capData } = Custom.getData(color, size, cap);

      Custom.handleCapSelect(colorData, sizeData.val, capData);
      Custom.handleBottleSelect(colorData, sizeData.val, capData);
    }, 1000);
  });
}
