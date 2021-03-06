// Para validar se uma string termina com um determinado
// padrão, utilize o operador cifrão $:

const reg1 = /fim$/.test("aqui termina com fim");
const reg2 = /fim$/.test("aqui não termina com fim...");

console.log(reg1);
console.log(reg2);