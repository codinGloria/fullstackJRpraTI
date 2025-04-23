const prompt = require("prompt-sync")()

// Exercício 03: Calculadora Simples (4 operações fundamentais)
// usando entrada do usuário

let num1 = parseInt(prompt("Digite o primeiro número: "))
let num2 = parseInt(prompt("Digite o segundo número: "))
let operacao = prompt("Digite a operação desejada: [+] Soma, [-] Subtração, [*] Multiplicação e [/] Divisão: ")
let resultado = 0

if (operacao === "+") {
    resultado = num1 + num2
} else if (operacao === "-") {
    resultado = num1 - num2
} else if (operacao === "*") {
    resultado = num1 * num2
} else if (operacao === "/") {
    if (num2 === 0) {
        console.log("Divisão por zero não é permitida.")
        resultado = undefined
    } else {
        resultado = num1 / num2
    }
} else {
    console.log("Operação inválida.")
    resultado = undefined
}

if (resultado !== undefined) {
    console.log(`\nO resultado da operação ${num1} ${operacao} ${num2} é: ${resultado}`)
}

// Aprendendo Switch Case
// Exemplo 01

let opcao = 1

switch (opcao) {
    case 1:
        console.log("Você selecionou a primeira opção.")
        break;
    case 2:
        console.log("Você selecionou a segunda opção.")
        break;
    case 3:
        console.log("Você selecionou a terceira opção.")
        break;
    default:
        console.log("Você não escolheu opções válidas.")
        break;
}

// Exercícios para Casa:
// 04. Calculadora Simples utilizando Switch Case

let num1 = parseInt(prompt("Digite o primeiro número: "))
let num2 = parseInt(prompt("Digite o segundo número: "))
let operacao = prompt("Digite a operação desejada: [+] Soma, [-] Subtração, [*] Multiplicação e [/] Divisão: ")
let resultado = 0

switch (operacao) {
    case "+":
        resultado = num1 + num2
        break;
    case "-":
        resultado = num1 - num2
        break;
    case "*":
        resultado = num1 * num2
        break;
    case "/":
        if (num2 === 0) {
            console.log("Divisão por zero não é permitida.")
            resultado = undefined
        } else {
            resultado = num1 / num2
        }
        break;
    default:
        console.log("Operação inválida.")
        resultado = undefined
        break;
}

if (resultado !== undefined) {
    console.log(`\nO resultado da operação ${num1} ${operacao} ${num2} é: ${resultado}`)
}

// 05. Calcular MDC entre dois números

let mdc = 0
let numb1 = parseInt(prompt("Digite o primeiro número: "))
let numb2 = parseInt(prompt("Digite o segundo número: "))

if (numb1 > numb2) {
    for (let i = 1; i <= numb2; i++) {
        if (numb1 % i === 0 && numb2 % i === 0) {
            mdc = i
        }
    }
} else {
    for (let i = 1; i <= numb1; i++) {
        if (numb1 % i === 0 && numb2 % i === 0) {
            mdc = i
        }
    }
} 

console.log(`O MDC entre ${numb1} e ${numb2} é: ${mdc}`)

// 06. Verificar se um número é primo
let numero = parseInt(prompt("Digite um número: "))
let ehPrimo = true

if (numero < 2) {
    ehPrimo = false
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false
            break
        }
    }
}

if (ehPrimo) {
    console.log(`${numero} é um número primo.`)
} else {
    console.log(`${numero} não é um número primo.`)
}