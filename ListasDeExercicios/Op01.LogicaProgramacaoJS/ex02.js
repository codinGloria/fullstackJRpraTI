// 02. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()

let velocidade = Number(prompt("Qual a velocidade do carro? (km/h) "))
console.log()

if (velocidade > 80) {
    let kmAcima = velocidade - 80
    let multa = kmAcima * 5
    console.log(`🚨 Você foi multado! Ultrapassou o limite por ${kmAcima} km/h.`)
    console.log(`💸 Valor da multa: R$ ${multa.toFixed(2)}`)
} else {
    console.log("Você está dentro do limite de velocidade, pode seguir :]")
}
