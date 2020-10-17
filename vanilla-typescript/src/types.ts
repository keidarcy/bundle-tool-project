export interface BasicDataset extends DOMStringMap {
  inventory_quantity: string;
  next_coming_date: string;
}
export interface DeleteBtnDataset extends DOMStringMap {
  id: string;
}
export interface MinusBtnDataset extends DOMStringMap {
  qty: string;
  id: string;
}
export interface CapDataset extends BasicDataset {
  title: string;
  variantid: string;
}

export interface OptionBtnDataset extends BasicDataset {
  variantid: string;
}

export interface SelectDataset extends BasicDataset {
  productid: string;
  variantid: string;
}

export interface ColorDataset extends DOMStringMap {
  variantmap: string;
  variantdate: string;
  variantid: string;
  productid: string;
  val: string;
}

export interface SizeDataset extends DOMStringMap {
  val: string;
}

export const accessorySelects = document.querySelectorAll(
  "select[id^='ProductSelect']"
) as NodeListOf<HTMLSelectElement>;

export const accessoryCaps = document.querySelectorAll(
  "input[id^='product-cap']"
) as NodeListOf<HTMLInputElement>;

export const accessoryBtnsText = document.querySelectorAll(
  'span[data-add-to-cart-text]._gird'
) as NodeListOf<HTMLSpanElement>;

export const accessoryBtns = document.querySelectorAll(
  'button.product-form__cart-submit'
) as NodeListOf<HTMLButtonElement>;

export const accessoryPreOrders = document.querySelectorAll(
  '.pre-order-text._grid'
) as NodeListOf<HTMLDivElement>;

export const customCaps = document.querySelectorAll(
  '#OptionSelector-sub .cap'
) as NodeListOf<HTMLDivElement>;

export const customSizes = document.querySelectorAll(
  '#OptionSelector-size .option'
) as NodeListOf<HTMLDivElement>;

export const customBtn = document.querySelector(
  'span[data-add-to-cart-text]'
) as HTMLButtonElement;

export const customPreOrderCapEle = document.querySelector(
  '.pre-order-text.cap'
) as HTMLDivElement;

export const customPreOrderBottleEle = document.querySelector(
  '.pre-order-text.bottle'
) as HTMLDivElement;

export const customColors = document.querySelectorAll(
  '#OptionSelector-color .option'
) as NodeListOf<HTMLDivElement>;

export const selectedColorDiv = document.querySelector(
  '#OptionSelector-color .option.selected'
) as HTMLDivElement;

export const selectedSizeDiv = document.querySelector(
  '#OptionSelector-size .option.selected'
) as HTMLDivElement;

export const productBtn = document.querySelector(
  '.product-form__controls-group--submit .product-form__cart-submit'
) as HTMLButtonElement;

export const productCap = document.querySelector(
  '#_product_cap_info'
) as HTMLButtonElement;

export const productOptions = document.querySelectorAll(
  '#OptionSelector-size .option.size'
) as NodeListOf<HTMLDivElement>;

export const productSelectedOption = document.querySelector(
  '#OptionSelector-size .option.size.selected'
) as HTMLDivElement;

export const productPreOrderTextEle = document.querySelector(
  '.pre-order-text._product'
) as HTMLDivElement;

export const INVENTORY_QUANTITY_KEY = 'INVENTORY_QUANTITY_KEY';

export const PRE_ORDER_TEXT = {
  en: {
    ORDER: 'add to cart',
    PRE_ORDER: 'pre order',
    NO_DATE: 'no delivery date',
    CART: "normal product can't buy together with pre-order product",
    DELIVERY_DATE: 'delivery',
    IS_PRE_ORDER: 'pre-order'
  }
};
