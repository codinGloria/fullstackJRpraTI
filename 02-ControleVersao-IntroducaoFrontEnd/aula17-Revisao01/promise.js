const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true; 
        if (sucesso) {
            resolve('Dados carregados com sucesso!');
        } else {
            reject(new Error('Erro ao carregar dados.'));
        }
    }, 3000);

    console.log('teste')
});

minhaPromise.then(resultado => {
    console
}).catch(error => {
    console.error("Erro: ", error);
}).finally(() => {
    console.log("Operação concluída.");
})