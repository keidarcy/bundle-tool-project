import isEmail from 'validator/lib/isEmail';
import { tripleMe } from './function';

console.log(isEmail('john@gmail.com'));

console.log(tripleMe(91));

if (module.hot) {
  module.hot.accept();
}
