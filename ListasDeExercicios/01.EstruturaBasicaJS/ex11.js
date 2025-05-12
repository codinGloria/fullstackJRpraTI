const prompt = require("prompt-sync")()

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let soma = 0 
let i = 0

do {
    let numero = Number(prompt("Digite um número: "))
    soma += numero
    i++
} while (i < 5)

console.log(`A soma dos números é: ${soma}`)