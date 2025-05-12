const prompt = require("prompt-sync")()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if

let numero = Number(prompt("Digite um número inteiro: "))

if (numero % 2 === 0) {
    console.log(`${numero} é par.`)
} else if (numero % 2 !== 0) {
    console.log(`${numero} é ímpar.`)
} else {
    console.log("Valor inválido.")
}