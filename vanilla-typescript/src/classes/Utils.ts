import { INVENTORY_QUANTITY_KEY, PRE_ORDER_TEXT } from '../types';

class Utils {
  handleBtnTextChange = (quantity: number, ele: HTMLElement) => {
    if (quantity < 1) {
      setTimeout(() => {
        ele.innerText = PRE_ORDER_TEXT[window['LangShop'].currentLanguage].PRE_ORDER;
      }, 50);
    } else {
      ele.innerText = PRE_ORDER_TEXT[window['LangShop'].currentLanguage].ORDER;
    }
  };

  handlePreOrderTextChange = (
    quantity: string,
    title: string,
    date: string,
    preOrderEle: HTMLElement,
    needTitle = true
  ) => {
    if (+quantity < 1) {
      preOrderEle.innerText = this.getPreOrderText(title, date, needTitle);
      preOrderEle.style.display = 'block';
    } else {
      preOrderEle.style.display = 'none';
    }
  };

  getPreOrderText = (title: string, date: string, needTitle: boolean) => {
    const dateString = date
      ? this.formatDate(date)
      : PRE_ORDER_TEXT[window['LangShop'].currentLanguage].NO_DATE;
    return needTitle ? `${title} - ${dateString}` : dateString;
  };

  formatDate = (dateString: string) => {
    console.log(dateString);
    const dateObj = new Date(dateString.replace(/-/g, '/'));
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    if (window['LangShop'].currentLanguage === 'ja') {
      return `${year}${PRE_ORDER_TEXT[window['LangShop'].currentLanguage].YEAR}${
        +month + 1
      }${PRE_ORDER_TEXT[window['LangShop'].currentLanguage].MONTH}${
        PRE_ORDER_TEXT[window['LangShop'].currentLanguage].DELIVERY_DATE
      }`;
    } else {
      return `${year} ${+month + 1} ${
        PRE_ORDER_TEXT[window['LangShop'].currentLanguage].DELIVERY_DATE
      }`;
    }
  };

  getValueFromString = (variantmap: string, option: string) => {
    const variantMapString = variantmap
      .replace(/\s(?=[^,\s]*ml)/g, '')
      .replace(/(\d{3}m(L|l))/g, `"$1"`);
    const stringObj = `{${variantMapString}}`;
    const variantMap = JSON.parse(stringObj);
    const quantity = variantMap[option.replace(/\s/g, '')];
    return quantity;
  };

  getQuery = () => {
    if (location.search === '') return;
    const variables = location.search.split('?')[1].split('&');
    const obj = {};
    variables.forEach(function (v, i) {
      const variable = v.split('=');
      obj[variable[0]] = variable[1];
    });
    return obj;
  };

  useLocalStorage = (obj: QuantityItem) => {
    const quantityString = localStorage.getItem(INVENTORY_QUANTITY_KEY);
    if (quantityString) {
      const quantities = JSON.parse(quantityString);
      localStorage.setItem(
        INVENTORY_QUANTITY_KEY,
        JSON.stringify({
          ...quantities,
          ...obj
        })
      );
    } else {
      localStorage.setItem(
        INVENTORY_QUANTITY_KEY,
        JSON.stringify({
          ...obj
        })
      );
    }
  };
}

interface QuantityItem {
  [x: number]: boolean;
}

export default Utils;
