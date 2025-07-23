const display = document.getElementById('display')

function inserir(valor) {
  display.textContent += valor
}

function limparTela() {
  display.textContent = ''
}

function deletar() {
  display.textContent = display.textContent.slice(0, -1)
}

function calcularTotal() {
  try {
    const resultado = eval(display.textContent)
    display.textContent = resultado
  } catch (e) {
    display.textContent = 'Erro'
  }
}
