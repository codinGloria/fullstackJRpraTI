const btn = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('ativo');
});
