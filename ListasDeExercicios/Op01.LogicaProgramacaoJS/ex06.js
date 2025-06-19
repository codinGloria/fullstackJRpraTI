// 06. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')()

console.log("🎲 Bem-vindx ao jogo de Adivinhação!")
console.log("Tente adivinhar o número que estou pensando (entre 1 e 5).")

let jogarNovamente = 's';

while (jogarNovamente === 's') {
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;
    const palpite = Number(prompt("\nSeu palpite: "));

    if (palpite === numeroSorteado) {
        console.log("🎉 Parabéns! Você acertou!");
    } else if (palpite >= 1 && palpite <= 5) {
        console.log(`❌ Errou! Eu pensei no número ${numeroSorteado}.`);
    } else {
        console.log("🚫 Número inválido. Digite um número de 1 a 5!");
    }

    jogarNovamente = prompt("\nQuer tentar novamente? (s/n): ").toLowerCase();
}

console.log("\n👋 Fim do jogo! Obrigada por jogar!");