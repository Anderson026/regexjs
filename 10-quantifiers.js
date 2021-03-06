/*
                Quantificadores
  ? = Pode ser considerado como um operador para especificar
  algo opcional.
  
  * = Corresponde a zero ou mais.

  + = Corresponde a pelo menos um.

  {n} = Corresponde exatamente a quantidade informada
  dentro das chaves.

  {n, m} = Corresponde a quantidade entre os valores
  informados dentro das chaves.

  {n, } = Corresponde de n até o infinito de vezes.
*/

const reg1 = /A?/.test("");
const reg2 = /A?/.test("A");
const reg3 = /A?/.test("AAA");
const reg4 = /A?/.test("B");

console.log("====Test 1====");
console.log(reg1);
console.log(reg2);
console.log(reg3);
console.log(reg4);
console.log("==============");

const reg5 = /A*/.test("");
const reg6 = /A*/.test("A");
const reg7 = /A*/.test("AAA");
const reg8 = /A*/.test("B");

console.log("====Test 2====");
console.log(reg5);
console.log(reg6);
console.log(reg7);
console.log(reg8);
console.log("==============");

const reg9 = /A+/.test("");
const reg10 = /A+/.test("A");
const reg11 = /A+/.test("AAA");
const reg12 = /A+/.test("B");

console.log("====Test 3====");
console.log(reg9);
console.log(reg10);
console.log(reg11);
console.log(reg12);
console.log("==============");

const reg13 = /A{3}/.test("AA");
const reg14 = /A{3}/.test("AAA");
const reg15 = /A{3}/.test("AAAA");
const reg16 = /A{3}/.test("B");
const reg17 = /A{3}/.test("ABAA");

console.log("====Test 4====");
console.log(reg13);
console.log(reg14);
console.log(reg15);
console.log(reg16);
console.log(reg17);
console.log("==============");

const reg18 = /A{2,3}/.test("A");
const reg19 = /A{2,3}/.test("AA");
const reg20 = /A{2,3}/.test("AAAA");
const reg21 = /A{2,3}/.test("AAAAA");
const reg22 = /A{2,3}/.test("ABA");

console.log("====Test 5====");
console.log(reg18);
console.log(reg19);
console.log(reg20);
console.log(reg21);
console.log(reg22);
console.log("==============");

const reg23 = /A{3,}/.test("A");
const reg24 = /A{3,}/.test("AA");
const reg25 = /A{3,}/.test("AAA");
const reg26 = /A{3,}/.test("AAAAA");

console.log("====Test 6====");
console.log(reg23);
console.log(reg24);
console.log(reg25);
console.log(reg26);
console.log("==============");


