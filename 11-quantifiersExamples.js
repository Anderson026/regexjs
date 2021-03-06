// Validar um endereço de Ip v4 
const ipValidator1 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("127.0.0.1");
const ipValidator2 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("127.0.0");
const ipValidator3 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("127.0.0.1000");
const ipValidator4 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test("localhost");

console.log("====IP Validator====");
console.log(ipValidator1);
console.log(ipValidator2);
console.log(ipValidator3);
console.log(ipValidator4);
console.log("====End====");

// Verificar se um número de telefone contém o 9 na frente ou não:

const phoneNumber1 = /^9+[0-9]{8}$/.test("999998888");
const phoneNumber2 = /^9+[0-9]{8}$/.test("899998888");
const phoneNumber3 = /^9+[0-9]{8}$/.test("99998888");

console.log("====Phone Number====");
console.log(phoneNumber1);
console.log(phoneNumber2);
console.log(phoneNumber3);
console.log("====End====");

