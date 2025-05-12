const prompt = require("prompt-sync")()

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let numero = Number(prompt("Digite um número para ver a tabuada: "))
let tabuada = 0

console.log(`Tabuada do ${numero}`)
for (let i = 1; i <= 10; i++) {
    tabuada = numero * i
    console.log(`${numero} x ${i} = ${tabuada}`)
}