const prompt = require("prompt-sync")()

/* ########## Exercicios ########## */
// 01: Ler uma temperatura em graus Celsius e convertê-la para Fahrenheit. 
let celsius = Number(prompt("Digite a temperatura em Celsius: "))
let fahrenheit = (celsius * 9/5) + 32
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`)

// 02: Ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual de cada um desses votos representa em relação ao total de eleitores.
let eleitores = Number(prompt("Digite o número de eleitores: "))
let votosBrancos = Number(prompt("Digite o número de votos brancos: "))
let votosNulos = Number(prompt("Digite o número de votos nulos: "))
let votosValidos = Number(prompt("Digite o número de votos válidos: "))

let percentualBrancos = (votosBrancos / eleitores) * 100
let percentualNulos = (votosNulos / eleitores) * 100
let percentualValidos = (votosValidos / eleitores) * 100

console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`)
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`)
console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`)

// 03: A turma C é composta de 60 alunos, e a turma B de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados da turma C e o percentual de alunos aprovados da turma B. Calcule e escreva:

let alunosTurmaC = 60
let alunosTurmaB = 20
let percentualReprovadosC = Number(prompt("Digite o percentual de alunos reprovados da turma C: "))
let percentualAprovadosB = Number(prompt("Digite o percentual de alunos aprovados da turma B: "))

// a) o número de alunos reprovados da turma C;
let alunosReprovadosC = (percentualReprovadosC / 100) * alunosTurmaC
console.log(`Número de alunos reprovados da turma C: ${alunosReprovadosC}`)

// b) o número de alunos reprovados da turma B;
let alunosReprovadosB = (100 - percentualAprovadosB) / 100 * alunosTurmaB
console.log(`Número de alunos reprovados da turma B: ${alunosReprovadosB}`)

// c) o percentual de alunos reprovados da turma C em relação ao total de alunos das duas turmas;
let totalAlunos = alunosTurmaC + alunosTurmaB
let percentualReprovadosCEmRelacao = (alunosReprovadosC / totalAlunos) * 100

console.log(`Percentual de alunos reprovados da turma C em relação ao total de alunos: ${percentualReprovadosCEmRelacao.toFixed(2)}%`)

// 04: Faça um programa que leio o dia da semana. Esse dia deve ser um texto. Se for sábado ou domingo, escreva "final de semana", senão escreva "dia útil".
let diaSemana = prompt("Digite o dia da semana: ").toLowerCase()

if (diaSemana === "sabado" || diaSemana === "domingo") {
    console.log("Final de semana")
} else if (diaSemana === "segunda" || diaSemana === "terça" || diaSemana === "quarta" || diaSemana === "quinta" || diaSemana === "sexta") {
    console.log("Dia útil")
} else {
    console.log("Dia inválido")
}

// 05: Escreva um algoritmo para repetir a leitura de um numero enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.
let numero

do {
    numero = Number(prompt("Digite um número (0 para sair): "))
    if (numero === 0) {
        break
    } else if (numero < 0) {
        console.log("NEGATIVO")
    } else {
        console.log("POSITIVO")
    }
} while (numero !== 0)

// 06: Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada, escrever "Senha Inválida". Quando a senha for válida, escrever "Acesso Permitido" e o algoritmo deve ser encerrado. A senha correta é o valor 2802.
let senhaCorreta = 2802
let senhaInformada

do {
    senhaInformada = Number(prompt("Digite a senha: "))
    if (senhaInformada !== senhaCorreta) {
        console.log("Senha Inválida")
    } else {
        console.log("Acesso Permitido")
    }
} while (senhaInformada !== 2802)