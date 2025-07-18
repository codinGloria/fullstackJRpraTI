const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItens = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');

let itens = [];

window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras');
    if(dados) {
        itens = JSON.parse(dados);
        renderizarLista();
    }
})

function salvarDados(){
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function renderizarLista(){
    listaItens.innerHTML = '';

    itens.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.addEventListener('click', () => {
            removerItem(index);
        });

        li.appendChild(btnRemover);
        listaItens.appendChild(li);
    });
}

formAdicionar.addEventListener('submit', (event) => {
    event.preventDefault();
    const novoItem = inputItem.value.trim();
    if(novoItem === '') return;
    itens.push(novoItem);

    salvarDados();
    renderizarLista();

    inputItem.value = '';
})

function removerItem(index) {
    itens.splice(index, 1);
    salvarDados();
    renderizarLista();
}

btnLimpar.addEventListener('click', () => {
    if(confirm('Deseja realmente limpar toda a lista?')) {
        itens = [];
        salvarDados();
        renderizarLista();
    }
})

// Funcionalidade a serem adicionadas:
// 1. Marcar como comprado - Salvar esse estado no localStorage
// 2. Contador de itens - Mostrar quantos itens tem na lista, atualizando em tempo real
// 3. Adicione filtros para itens 'comprados' e 'pendentes'
// 4. Permita ordenar alfabeticamente ou por status