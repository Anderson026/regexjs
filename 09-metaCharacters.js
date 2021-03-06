/*
                Meta Caracteres

  . = Corresponde à qualquer caractere, exceto quebra
  de linha. Para corresponder especificamente à um
  ponto (.), é necessário escapar este caractere com
  \..

  \d = Corresponde à um caractere numérico. É o mesmo
  que [0-9].

  \D = Corresponde à um caractere não numérico. É o 
  mesmo que [^0-9].

  \w = Corresponde à qualquer caractere alfanumérico
  mais _. Equivalente à [0-9a-zA-Z_].

  \W = Corresponde à qualquer caractere não 
  alfanumérico mais _. Equivalente à [^0-9a-zA-Z_].

  \s = Corresponde à um caractere de espaço, tab e 
  quebra de linha.

  \S = Corresponde à qualquer caractere que não seja
  espaço, tab ou quebra de linha.

  \n = Corresponde à quebra de linha.

  \t = Corresponde à tab.

  \0 = Corresponde à null.

  \p{x} = Corresponde à um caractere unicode cuja 
  propriedade passada em "x" seja verdadeira. 
  Requer que a flag "u" seja utilizada.

  \P{x} = Corresponde ao oposto de \p{x}.

  [^] = Corresponde à qualquer caractere, incluindo 
  quebra de linha (diferente do .).
*/


console.log("O texto contém uma \n quebra de \n linha.");
console.log("Sem Tab");
console.log("\t Com Tab");
