const prompt = require("prompt-sync")()

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

let idade = Number(prompt("Digite a sua idade: "))
let categoria = ""

if (idade >= 0 && idade <= 12) {
    categoria = "criança"
} else if (idade >= 13 && idade <= 17) {
    categoria = "adolescente"
} else if (idade >= 18 && idade <= 59) {
    categoria = "adulto"
} else if (idade >= 60) {
    categoria = "idoso"
} else {
    console.log("Idade inválida")
    categoria = "inválida"
}

console.log(`Sua categoria é: ${categoria}`)