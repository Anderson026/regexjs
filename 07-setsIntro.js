/*
                  Conjuntos
  Os conjuntos são utilizados dentro de colchetes []
  e podem conter números de "0" a "9" ou letras de "a"
  a "z", exemplo [0-9] ou [a-z] ou [A-Z].
*/

const reg1 = /[0-9]+/.exec("Idade? 22")[0];
console.log(reg1);

//Combinar os conjuntos:
const reg2 = /[0-9a-zA-Z]/.test("1");
const reg3 = /[0-9a-z-A-Z]/.test("A");
const reg4 = /[0-9a-z-A-Z#]/.test("#");
const reg5 = /[0-9a-zA-Z]/.test("#");
const reg6 = /[0-9a-zA-Z]/.test("Á");

console.log(reg2);
console.log(reg3);
console.log(reg4);
console.log(reg5);
console.log(reg6);