const prompt = require("prompt-sync")()

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let opcao = Number(prompt("O que você prefere?\n [1] Café\n [2] Refrigerante\n [3] Água\nDigite a opção desejada: "))

switch (opcao) {
    case 1:
        console.log("Você escolheu café!")
        break
    case 2:
        console.log("Você escolheu refrigerante!")
        break
    case 3:
        console.log("Você escolheu água!")
        break
    default:
        console.log("Opção inválida!")
}