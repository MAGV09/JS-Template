import 'modern-normalize/modern-normalize.css';
import './styles/reset.css';
import './styles/style.css';
import {superHeroes} from './test.js'

const obj =JSON.parse('{"name":"John", "age":30, "city":"New York"}')
console.log(superHeroes.homeTown);
console.log(obj.name);
const str = JSON.stringify(obj)
console.log(str);
