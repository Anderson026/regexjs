/*
                      Dicas de Escape
  \ = A barra serve para escapar outros caracteres. Use \\ se quiser
  corresponder à "\".

  / = Começa e termina uma expressão regular.

  [ ] = Define um set ou conjunto.

  { } = Define uma propriedade.

  ( ) = Define um grupo.

  ?+* = Quantificadores.

  | = Operador "OR".

  . = Curinga.

  ^ = Define início de um padrão e também serve para negar um grupo.

  $ = Define o final de um padrão.
*/

// Encontrar uma tag HTML span com seu conteúdo

const tagSpan = /<span>.*<\/span>/.test("<span>Teste</span>");

console.log("===Tag Span====");
console.log(tagSpan);
console.log("====End====");


