import { v4 } from 'uuid';
console.log(v4());
console.log(v4());
console.log(v4());
console.log(v4());
console.log(v4());
document.querySelector('div').style.backgroundColor = 'blue';

if (module.hot) {
  module.hot.accept();
}
