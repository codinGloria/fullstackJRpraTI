const prompt = require("prompt-sync")()

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

while (true) {
    let num = Number(prompt("Digite um número decimal: "))

    if (num === 0) {
        break
    }

    let soma = 0
    let contador = 0

    while (num !== 0) {
        soma += num
        contador++
        num = Number(prompt("Digite outro número decimal ou 0 para sair: "))
    }

    if (contador > 0) {
        let media = soma / contador
        console.log(`A média aritmética dos números digitados é: ${media}`)
        break
    }
}