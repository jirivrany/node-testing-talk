//const data = "[\"hello\",\"beer\",\"I like beer\"]";
const i18n = require('./i18n');
var tr = require('../app/i18n').translate;

const data = '["hello","beer","I like beer"]';

let text = JSON.parse( data.toString() );


console.log(i18n);
console.log(tr('hello', 'cs'));

