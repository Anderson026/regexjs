// Para validar se uma string começa com um determinado
// padrão, utilize o acento circunflexo ^:

const reg1 = /^oi/.test("oi, tudo certo?");
const reg2 = /^oi/.test("...oi, tudo certo?");

console.log(reg1);
console.log(reg2);