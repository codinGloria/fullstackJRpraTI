const prompt = require("prompt-sync")()

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let macasCompradas = Number(prompt("Quantas maçãs você comprou? "))
let valorTotal = 0

if (macasCompradas > 0 && macasCompradas < 12) {
    valorTotal = macasCompradas * 0.30
} else if (macasCompradas >= 12) {
    valorTotal = macasCompradas * 0.25
} else {
    console.log("Número de maçãs inválido.")
}

console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`)