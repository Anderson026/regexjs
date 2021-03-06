/*
                          Lookhead
  Literalmente significa "olhe para frente" e serve para
  testar se uma string é seguida de um padrão. É 
  definida por ?=.

  É possível também negar a expressão acima utilizando ?!.
*/

const lookHead = /A(?=B)/.test("AB");
const lookHead2 = /A(?=B)/.test("AZ");
const lookHead3 = /A(?=B)/.test("BA");

console.log("===Look Head===");
console.log(lookHead);
console.log(lookHead2);
console.log(lookHead3);
console.log("===End===");

const negativeLookHead = /A(?!B)/.test("AB");
const negativeLookHead2 = /A(?!B)/.test("BA");
const negativeLookHead3 = /A(?!B)/.test("ABA");

console.log("===Negative Look Head===");
console.log(negativeLookHead);
console.log(negativeLookHead2);
console.log(negativeLookHead3);
console.log("===End===");

