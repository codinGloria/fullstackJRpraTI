// 01. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')()

let cigarrosPorDia = Number(prompt("Quantos cigarros você fuma por dia? "))
let anosFumando = Number(prompt("Há quantos anos você fuma? "))

let totalCigarros = cigarrosPorDia * 365 * anosFumando
let minutosPerdidos = totalCigarros * 10
let diasPerdidos = Math.floor(minutosPerdidos / 1440)

console.log(`\nVocê perdeu aproximadamente ${diasPerdidos} dias de vida por fumar ＞︿＜`)