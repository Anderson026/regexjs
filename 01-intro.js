// Forma literal do regex
const reg1 = /teste/;
// Forma moderda do regex em JS
const reg2 = new RegExp("teste");

console.log(reg1.exec("teste"));
console.log(reg2.exec("teste"));