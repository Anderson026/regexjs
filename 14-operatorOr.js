/*
  Se vocĂȘ quiser escolher entre uma correspondĂȘncia ou outra, 
  utilize o operador |.
*/

const whiskeyOrVodka = /whiskey|vodka/.test("whiskey");
const whiskeyOrVodka2 = /whiskey|vodka/.test("vodka");
const whiskeyOrVodka3 = /whiskey|vodka/.test("pinga");

console.log(whiskeyOrVodka);
console.log(whiskeyOrVodka2);
console.log(whiskeyOrVodka3);