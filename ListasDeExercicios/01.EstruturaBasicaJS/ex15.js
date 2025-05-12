const prompt = require("prompt-sync")()

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let n1 = 0;
let n2 = 1;

console.log("Sequência de Fibonacci:");

for (let i = 0; i < 10; i++) {
  console.log(n1);
  let next = n1 + n2;
  n1 = n2;
  n2 = next;
}