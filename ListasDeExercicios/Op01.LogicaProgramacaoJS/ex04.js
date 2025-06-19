// 04. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')()

function lerSegmento(posicao) {
    return Number(prompt(`Digite o comprimento do ${posicao} segmento: `))
}

let seg1 = lerSegmento("primeiro")
let seg2 = lerSegmento("segundo")
let seg3 = lerSegmento("terceiro")

if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2) {
    console.log("✅ É possível formar um triângulo")
} else {
    console.log("❌ Não é possível formar um triângulo")
}