import {
  ColorDataset,
  customPreOrderCapEle,
  customPreOrderBottleEle,
  customBtn,
  CapDataset,
  SizeDataset
} from '../types';
import Cart from './Cart';
import Utils from './Utils';

class Custom extends Utils {
  handleBottleSelect = (
    colorDataset: ColorDataset,
    size: string,
    capDataset: CapDataset
  ) => {
    const quantity = this.getColorQuantity(colorDataset, size);
    const dateString = colorDataset.variantdate.replace(/\\'/g, '"');
    const targetDateString = this.getValueFromString(dateString, size);

    this.handlePreOrderTextChange(
      quantity,
      colorDataset.val,
      targetDateString,
      customPreOrderBottleEle
    );
    const result = this.anyNotStock(
      Number(capDataset.inventory_quantity),
      Number(quantity)
    );
    this.handleBtnTextChange(result, customBtn);
  };

  anyNotStock = (colorQuantity: number, capQuantity: number): number =>
    colorQuantity < 1 || capQuantity < 1 ? 0 : 1;

  handleCapSelect = (
    colorDataset: ColorDataset,
    size: string,
    capDataset: CapDataset
  ): void => {
    const quantity = capDataset.inventory_quantity;
    const dateString = capDataset.next_coming_date;
    const title = capDataset.title;

    this.handlePreOrderTextChange(quantity, title, dateString, customPreOrderCapEle);
    const colorQuantity = this.getColorQuantity(colorDataset, size);
    const result = this.anyNotStock(Number(quantity), Number(colorQuantity));
    this.handleBtnTextChange(result, customBtn);
  };

  getColorQuantity = (colorDataset: ColorDataset, size: string): string =>
    this.getValueFromString(colorDataset.variantmap, size);

  getData = (color: HTMLDivElement, size: HTMLDivElement, cap: HTMLDivElement) => {
    const sizeData = size.dataset as SizeDataset;
    const colorData = color.dataset as ColorDataset;
    const capData = cap.dataset as CapDataset;
    return { sizeData, colorData, capData };
  };

  addCart = (colorDataset: ColorDataset, size: string, capDataset: CapDataset) => {
    const bottleQuantity = Number(this.getColorQuantity(colorDataset, size)) > 0;
    const bottleVariantId = +this.getValueFromString(colorDataset.variantid, size);

    const capQuantity = Number(capDataset.inventory_quantity) > 0;
    const capVariantId = +capDataset.variantid;

    const newQuantities = {
      [capVariantId]: capQuantity,
      [bottleVariantId]: bottleQuantity
    };

    this.useLocalStorage(newQuantities);

    setTimeout(() => {
      Cart.handleCartEvent();
    }, 2000);
  };
}

export default new Custom();
