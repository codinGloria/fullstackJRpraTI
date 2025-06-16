// 05. Debounce: Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timeoutId

  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// Exemplo de uso:
let debounceLog = debounce(() => console.log('Executado!'), 1000);
debounceLog() // Não executa imediatamente
debounceLog() // Não executa imediatamente
debounceLog() // Executa após 1 segundo, se não houver novas chamadas