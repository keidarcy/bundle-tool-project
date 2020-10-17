import { OptionBtnDataset, SelectDataset } from 'types';
import Cart from './Cart';
import Utils from './Utils';

export class Accessory extends Utils {
  addCart = (btnDataset: OptionBtnDataset) => {
    const variantId = +btnDataset.variantid;
    const hasQuantity = Number(btnDataset.inventory_quantity) > 0;
    const newQuantities = {
      [variantId]: hasQuantity
    };
    this.useLocalStorage(newQuantities);

    setTimeout(() => {
      Cart.handleCartEvent();
    }, 2000);
  };

  changeBtnAttribute = (
    selectOptionData: SelectDataset,
    btnDataset: OptionBtnDataset
  ) => {
    btnDataset.variantid = selectOptionData.variantid;
    btnDataset.variantid = selectOptionData.inventory_quantity;
  };
}

export default new Accessory();
