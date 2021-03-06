// Utilizando o método test para verificar se contém a palavra do regex
// dentro da frase do exemplo
const reg1 = /palavra/.test("palavras");
const reg2 = /palavra/.test("Esta frase contém uma palavra");
const reg3 = /palavra/.test("Esta frase não contém");

console.log(reg1);
console.log(reg2);
console.log(reg3);