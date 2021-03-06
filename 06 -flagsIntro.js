/*
                        FLAGS
    g = Determina que a busca deve retornar todos os
    padrões encontrados. Caso não seja usado, restorna
    apenas o primeiro padrão encontrado.

    i = Determina que a busca não deve diferenciar
    letras maiúsculas de letras minúsculas. Caso não
    seja usado, a busca vai retornar verdadeiro apenas
    se a string for exata.

    m = Afeta apenas o comportamento dos operadores ^ e $.
    Caso não seja usado, vai retornar verdadeiro caso a
    string inteira corresponda ao padrão, mas se for usado,
    vai retornar verdadeiro caso uma linha corresponda
    ao padrão.

    s = Permite com que o caractere . corresponda também 
    à quebra da linha.

    u = Permite o suporte à caracteres unicode. É possível
    fazer buscas por emojis, por exemplo. ?
*/

const reg1 = /teste/i.test("Teste");

const reg2 = new RegExp("teste", "i").test("Teste");

console.log(reg1);
console.log(reg2);
