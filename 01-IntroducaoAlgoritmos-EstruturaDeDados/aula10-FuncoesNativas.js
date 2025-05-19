// Metodos Nativos do JS
console.log("=== Metodos Nativos do JS ===");

// 01. length
console.log("Gloria Braz".length)

// 02. charAt
console.log("Gloria Braz".charAt(0))

// 03. indexOf
console.log("Gloria Braz".indexOf("B"))

// 04. replace
console.log("Gloria Braz".replace("Braz", "Felipe"))

// 05. substring
console.log("Gloria Braz".substring(2, 8))

// 06. toUpperCase ou toLowerCase
console.log("Gloria Braz".toUpperCase())
console.log("Gloria Braz".toLowerCase())

// 07. trim
console.log("-" + " Gloria  ".trim() + "-")

// 08. Math
console.log(Math.ceil(9.6)) // Ceil: Arredonda para cima
console.log(Math.floor(9.6)) // Floor: Arredonda para baixo
console.log(Math.round(9.6)) // Round: Arredonda para o inteiro mais próximo
console.log(Math.sqrt(9)) // Raiz quadrada
console.log(Math.pow(2, 3)) // Potência: 2^3
console.log(Math.cbrt(27)) // Raiz cúbica
console.log(Math.abs(81.123123123)) // Valor absoluto
console.log(Math.random()) // Número aleatório entre 0 e 1
console.log(Math.random() * 10 + 10) // Número aleatório entre 10 e 20

// 09. Date
let data = new Date()
console.log(data.getDate()) // Dia do mês
console.log(data.getMonth() + 1) // Mês (1-12)
console.log(data.getFullYear()) // Ano
console.log(data.toString()) // Data em string

let data01 = new Date(2025, 7, 5)
let data02 = new Date(2002, 1, 28)

console.log(data01.toString())
console.log(data02.toString())

console.log(data01.getTime()) // Timestamp
console.log(data02.getTime())

let milissegundosEntreDatas = Math.abs(data01.getTime() - data02.getTime())
let milissegundosPorDia = 1000 * 60 * 60 * 24

console.log(`A diferença entre as datas é de ${milissegundosEntreDatas / milissegundosPorDia} dias`)

// 10. Split, Join e Reverse (Para reverter uma string)
function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("Ola, mundo!"))

// Exercicio 01: Formatem uma data
function formatarData(data) {
    let dia = data.getDate().toString().padStart(2, '0') // PadStart adiciona 0 a esquerda, ex: 1 -> 01
    let mes = (data.getMonth() + 1).toString().padStart(2, '0')
    let ano = data.getFullYear()
    return `${dia}/${mes}/${ano}`
}

let dataFormatada = formatarData(data)
console.log(dataFormatada)

// Exercicio 02: Gerar numero aleatorio entre dois valores
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
    // Explicação: 
    // Math.random() gera um número entre 0 e 1, 
    // multiplicamos pelo intervalo (max - min + 1), utilizando +1 para incluir o max
    // Somamos o min para garantir que o número esteja dentro do intervalo desejado
}

let numero01 = numeroAleatorio(1, 10)
let numero02 = numeroAleatorio(2, 28)
let numero03 = numeroAleatorio(3, 100)
let numero04 = numeroAleatorio(4, 1000)

const numerosAleatorios = [numero01, numero02, numero03, numero04]
console.log(numerosAleatorios)

// Exercicio 03: Contar as vogais em uma string
function contarVogais(str){
    let vogais = str.match(/[aeiou]/gi) // Expressão regular para encontrar vogais
    return vogais ? vogais.length : 0
}

console.log(contarVogais("Gloria Braz"))
console.log(contarVogais("Luan Felipe"))