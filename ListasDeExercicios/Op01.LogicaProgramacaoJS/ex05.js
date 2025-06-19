// 05. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const prompt = require('prompt-sync')()

let opcoes = ["pedra", "papel", "tesoura"]
const regras = {
    pedra: "tesoura",
    papel: "pedra",
    tesoura: "papel"
}
let jogarNovamente = 's'

console.log("🎮 Bem-vindx ao JoKenPo!")

while (jogarNovamente === 's') {
    console.log("\nOpções: Pedra, papel ou tesoura")

    let escolhaUsuario = prompt("Sua escolha: ").toLowerCase()
    let escolhaPC = opcoes[Math.floor(Math.random() * 3)]

    console.log(`🤖 O computador escolheu: ${escolhaPC}`)

    if (!opcoes.includes(escolhaUsuario)) {
        console.log("🚫 Escolha inválida!")
    } else if (escolhaUsuario === escolhaPC) {
        console.log("😐 Empate!")
    } else if (regras[escolhaUsuario] === escolhaPC) {
        console.log("🎉 Você venceu!")
    } else {
        console.log("💀 Você perdeu!")
    }

    jogarNovamente = prompt("\nQuer jogar novamente? (s/n): ").toLowerCase()
}

console.log("\n👋 Espero que tenha se divertido! Até a próxima!")