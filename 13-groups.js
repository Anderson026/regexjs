/* 
                            Grupos
  Usando parênteses (), você pode criar grupos de padrões.


*/

// Validar uma string que contenha caracteres especiais n⁰:

const numberValidator1 = /^(Nº\s)?[0-9]{4}$/.test("Nº 1234");
const numberValidator2 = /^(Nº\s)?[0-9]{4}$/.test("1234");
const numberValidator3 = /^(Nº\s)?[0-9]{4}$/.test("No 1234");

console.log("===Number Validator===");
console.log(numberValidator1);
console.log(numberValidator2);
console.log(numberValidator3);
console.log("===End===");

// Simplificando padrões repetidos:
const laughter = /(ha){2,}/.test("hahaha");

console.log("===Laughter===");
console.log(laughter);
console.log("===End===");

// Separa a cidade e estado em duas correspondências:
const stateSeparator = /(.+) - ([\w{2}])/.exec("São Paulo - SP");
console.log("===State Separator===");
console.log(stateSeparator);
console.log("===End===");

// Capturar uma string e retornar em um valor monetário:

const money = "O valor é de 1000".replace(/(\d+)/, "R$ $1");
console.log("===Money===");
console.log(money);
console.log("===End===");

// Ao definirmos um grupo, ele é automaticamente considerado e 
//pode ser referenciado com $1, $2, etc. Mas se você quiser 
//ignorar um grupo, é possível usando a sintaxe ?: dentro do 
//inicio do grupo (?: ... ), por exemplo:

//Sem ignorar
const https = /(https?):\/\/(.*)/.exec("https://metring.com.br");
// Ignorando o protocolo
const https2 = /(?:https?):\/\/(.*)/.exec("https://metring.com.br");
console.log("===Ignore Groups===");
console.log(https);
console.log("==================");
console.log(https2);
console.log("===End===");

// Saber o dia, mês e ano de uma data

const date = /(?<dia>\d{2})\/(?<mes>\d{2})\/(?<ano>\d{4})/.exec("27/02/2021");
console.log("===Date===");
console.log(date.groups.dia);
console.log(date.groups.mes);
console.log(date.groups.ano);
console.log("===End===");