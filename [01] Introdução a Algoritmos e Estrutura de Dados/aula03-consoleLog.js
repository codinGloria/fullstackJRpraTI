// SAÍDA DE DADOS NO CONSOLE
console.log(`O termo "mané" é comum no RJ`)
console.log(typeof('1.5'))
console.log(1000, "Jacques")

// DECLARAÇÃO DE VARIÁVEIS
let name = "Glória"
var idade = 23 // atualmente, não é boa prática usá-lo, assim como funciona mas não é bom utilizar sem a palavra chave, tipo: idade = 23
const lastName = "Braz"

// CONVERTENDO VARIÁVEIS
let convertendo = "1"
console.log(parseInt(convertendo)) // converte string para inteiro
console.log(parseFloat(convertendo)) // converte string para float
// também podemos usar o toString, mas não é necessário aqui, já que é string

// Undefined e Null
let teste
console.log(teste) // aqui, a variavel ainda não foi iniciada, então não é definida

let titulo = null
console.log(titulo) // nesse já temos como null, ou seja, como se fosse um "vazio", mas tenha cuidado: vazio é DIFERENTE de 0

// Boolean
let cursando = true
console.log(cursando)
console.log(typeof(cursando))

// OPERADORES ARITMÉTICOS
let num1 = 6
let num2 = 4

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 + num2)
console.log(num1 ** num2)
console.log(num1 % num2)


// ORDEM DE EXECUÇÃO
// () -> 
// ** -> 
// * / % -> 
// + - 

let num = "4"
console.log(parseInt(num) + 10)

// INCREMENTO E DECREMENTO
let counter = 1
counter *= 5 // pra nao precisar colocar "counter = counter * 5", funciona esse atalho pra qualquer operação: +=, -=, /=, %=...
console.log(counter++)
console.log(counter)

// Incremento de 2 em 2
let step = 2

counter += step // 1 + 2
counter += step // 3 + 2
counter += step // 5 + 2
counter += step // 7 + 2
counter += step // 9 + 2
counter += step // 11 + 2

console.log(counter)

// OPERADORES LÓGICOS
console.log(10 > 5)
console.log(10 < 5)
console.log(10 <= 5)
console.log(10 >= 5)
console.log(10 == 5)
console.log(10 == 10)
console.log(10 === '10')
console.log(10 != '10')
console.log(10 !== '10')

console.log((10 < 5) && (10 > 2))
console.log((10 < 5) || (10 > 2))
console.log((10 < 5) || !(10 > 2))

let usuario = "Gloria"
let senha = "1234"

let autenticacao = usuario === "Gloria" && senha === "1234"
console.log(autenticacao)

// OPERADORES CONDICIONAIS

// 01. If-Else

const nota = 80

if (nota > 90){
    console.log("APROVADO COM CONCEITO MÁXIMO")
} else if (nota > 70){
    console.log("APROVADO COM AS CALÇAS NA MÃO")
} else {
    console.log("REPROVADO")
}

// Exemplo 01: Programa que verifica faixa etária para concurso (permitido entre 18 e 32)
let idade = 23

if ((idade >= 18) && (idade <=32)){
    console.log("Pode se inscrever no concurso!")
} else {
    console.log("Não pode se inscrever :/")
}

// Operador ternário: resumidamente, mas usado APENAS se a lógica for simples. Caso contrario, o melhor é usar o if normal como exemplo acima
let resultado = (idade >= 18 && idade <= 32) ? console.log("Pode se inscrever no concurso!") : "Não pode se inscrever :/"

// ********** EXERCÍCIOS **********

// 01. Verifiquem se um número é par ou ímpar.

let numero = 10

if (numero % 2 == 0) {
    console.log("O número é par")
} else {
    console.log("O número é ímpar")
}

// Com operador ternário:
(numero % 2 == 0) ? console.log("O número é par") : console.log("O número é ímpar")

// 02. Encontre o maior de 3 números
let numero1 = 10
let numero2 = 18
let numero3 = 28

if (numero1 > numero2 && numero1 > numero3) {
    console.log("O maior número é: " + numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O maior número é: " + numero2)
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log("O maior número é: " + numero3)
} else {
    console.log("Os números são iguais")
}