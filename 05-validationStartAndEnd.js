// Combinando as validações de início e fim:

const reg1 = /^oi$/.test("oi");
const reg2 = /^oi$/.test("oi, tudo certo?");
const reg3 = /^oi$/.test("oi, tudo certo? oi");

console.log(reg1);
console.log(reg2);
console.log(reg3);