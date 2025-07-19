const formAdicionar = document.getElementById('form-adicionar');
const inputItem = document.getElementById('input-item');
const listaItens = document.getElementById('lista-itens');
const btnLimpar = document.getElementById('btn-limpar');
const filtroStatus = document.getElementById('filtro-status');
const ordenar = document.getElementById('ordenar');
const contadorTotal = document.getElementById('contador-total');
const contadorComprados = document.getElementById('contador-comprados');
const contadorPendentes = document.getElementById('contador-pendentes');

let itens = [];

window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras');
    if(dados) {
        itens = JSON.parse(dados);
    }
    renderizarLista();
})

function salvarDados(){
    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function renderizarLista(){
    let exibicao = [...itens];
    const status = filtroStatus.value;

    if(status === 'pendentes') exibicao = exibicao.filter(item => !item.comprado);
    
    if(status === 'comprados') exibicao = exibicao.filter(item => item.comprado);

    if(ordenar.value === 'alfabetica') {
        exibicao.sort((a, b) => a.text.localeCompare(b.text));
    } else if (ordenar.value === 'status') {
        exibicao.sort((a, b) => a.comprado - b.comprado);
    }

    listaItens.innerHTML = '';

    exibicao.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const btnToggle = document.createElement('button');
        btnToggle.textContent = item.comprado ? 'Marcar Pendente' : 'Marcar Comprado';
        btnToggle.addEventListener('click', () => {
            item.comprado = !item.comprado;
            salvarDados();
            renderizarLista();
        });

        li.appendChild(btnToggle);

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.addEventListener('click', () => {
            removerItem(index);
        });

        li.appendChild(btnRemover);
        listaItens.appendChild(li);
    });

    contadorTotal.textContent = `Total: ${itens.length}`;
    contadorPendentes.textContent = `Pendentes: ${itens.filter(item => !item.comprado).length}`;
    contadorComprados.textContent = `Comprados: ${itens.filter(item => item.comprado).length}`;
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