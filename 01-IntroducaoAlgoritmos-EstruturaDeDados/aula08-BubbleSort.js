// Crie um array chamado 'numeros' contendo 10 valores numericos a sua escolha.

// Use metodos de array para calcular:
// 1. A soma de todos os elementos
// 2. A media dos elementos

// Gere um novo array chamado 'pares' que contenha apenas os numeros pares do array 'numeros'

// Imprima no console:
// 1. O array original 'numeros'
// 2. A soma
// 3. A media
// 4. O array 'pares'


// // Calculando sem utilizar metodos: 
// let numeros = Array(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
// let pares = Array()
// let soma = 0
// let media = 0
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i]
//     if (numeros[i] % 2 == 0) {
//         pares.push(numeros[i])
//     }
// }

// Calculando utilizando metodos:
const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
const media = soma / numeros.length
const pares = numeros.filter(num => num % 2 === 0)

console.log("Array 'original': " + numeros)
console.log("Soma: " + soma)
console.log("Media: " + media)
console.log("Array 'pares': " + pares)  

// Exercicio 02
// Ordene o array numeros02 em ordem crescente antes de calcular a soma e a media
let numeros02 = [3, 2, 7, 19, 6, 4, 28, 10]
let n = numeros02.length

// Sem metodos:
// for (let i = 0; i < n; i++) {
//     let temp = numeros02[i]
//     for (let j = 0; j < n - 1; j++) {
//         if (numeros02[j] > numeros02[j + 1]) {
//             const temp = numeros02[j]
//             numeros02[j] = numeros02[j + 1]
//             numeros02[j + 1] = temp
//         }
//     }
// }

// Com metodos:
console.table(numeros02.sort((a, b) => a - b))

// Arrays Multidimensionais
let matriz = [[10], [10]]

for (let i = 0; i < matriz[i].length; i++) {
    for (let j = 0; j < matriz[j].length; j++) {
        console.log(matriz[i][j])
    }
}

// Populando a matriz
let matriz02 = []

for (i = 0; i < 4; i++) {
    matriz02[i] = []

    for (j = 0; j < 4; j++) {
        matriz02[i][j] = i * j
    }
}

console.table(matriz02)

// Calcule a diagonal de uma matriz
let somaDiagonal = 0

for (let i = 0; i < matriz02.length; i++) {
    for (let j = 0; j < matriz02[i].length; j++) {
        if (i === j) {
            somaDiagonal += matriz02[i][j]
        }
    }
}

console.log("Soma da diagonal: " + somaDiagonal)

