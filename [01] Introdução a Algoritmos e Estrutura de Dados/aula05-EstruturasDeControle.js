const prompt = require("prompt-sync")()

// Switch Case
let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let media = (nota1 + nota2) / 2

let opcao = prompt("Qual serviço você deseja acessar? 1: Saber a média ou 2: Saber se está aprovado: ")

switch (opcao) {
    case "1":
        console.log(`A média é: ${media}`)
        break;
    case "2":
        if (media >= 60) {
            console.log("Parabéns, você foi aprovado! :D")
        } else {
            console.log("Infelizmente, você foi reprovado :/")
        }
        break;
    default:
        console.log("Opção inválida")
        break;
}

// While
let contador = 0

while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log("Terminou a contagem!")

// Exemplo 01: Tabuada
let num = parseInt(prompt("Digite um número para ver a tabuada: "))
let i = 1

while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`)
    i++
}

// For

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

