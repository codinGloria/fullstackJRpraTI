// 06. Memoization: Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

function memoize(fn) {
    const cache = new Map()

    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }

        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}

// Exemplo de uso:
let fibonacci = memoize(function(n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
})

console.log(fibonacci(10))   
console.log(fibonacci(20)) 

// Resultados instantâneos para chamadas repetidas
console.log(fibonacci(10))
console.log(fibonacci(20))