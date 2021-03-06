/*
  O operador ^, como explicado anteriormente, define
  o início de um padrão. Porém, quando utilizado
  dentro de conjuntos, tem a função de negar aquele
  conjunto.
*/

//Testa se a string contém algo que não seja um número.
const reg1 = /[^0-9]/.test("Teste");
const reg2 = /[^0-9]/.test("012345teste");
const reg3 = /[^0-9]/.test("01235");
console.log("====Teste 1====");
console.log(reg1);
console.log(reg2);
console.log(reg3);
console.log("===============");

//Teste se a string contém algo que não seja um 
//número e também não seja de a-z.
const reg4 = /[^0-9a-z]/.test("012345teste!");
const reg5 = /[^0-9a-z]/.test("012345teste");

console.log("====Teste 2====");
console.log(reg4);
console.log(reg5);
console.log("===============");

