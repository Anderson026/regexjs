/*
                        Lookbehind
  Lookbehind significa "olhe para trás". Funciona da mesma forma 
  que o lookahead, só que ao inverso. Utilize ?<=.

  Para negar o lookbehind, utilize ?<!.
*/

const lookBehind = /(?<=A)B/.test("ABC");
const lookBehind2 = /(?<=A)B/.test("BA");

console.log("===Look Behind===");
console.log(lookBehind);
console.log(lookBehind2);
console.log("===End===");


const negativeLookBehind = /(?<!A)B/.test("ABC");
const negativeLookBehind2 = /(?<!A)B/.test("BA");

console.log("===Negative Look Behind===");
console.log(negativeLookBehind);
console.log(negativeLookBehind2);
console.log("===End===");