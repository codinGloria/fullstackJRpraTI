// 03. Palavras Únicas: Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')()

let frase = prompt("Digite uma frase: ")
let palavras = frase.split(" ")
let palavrasUnicas = []

for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i]
    let palavraJaExiste = false

    for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavrasUnicas[j] === palavraAtual) {
            palavraJaExiste = true
            break
        }
    }

    if (!palavraJaExiste) {
        palavrasUnicas.push(palavraAtual)
    }
}
console.log("Palavras únicas:", palavrasUnicas)

// Observação: Esse exercício me deixou em dúvida pois poderia considerar o palavras unicas como palavras que não se repetem, ou seja, se a frase fosse "olá olá mundo" o resultado seria ["mundo"] e não ["olá", "mundo"]. Mas, por minha conta e risco hahah, considerei como palavras unicas cada palavra que aparece pelo menos uma vez, mesmo que se repita.