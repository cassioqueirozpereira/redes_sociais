document.addEventListener('DOMContentLoaded', function() {
    // Array de objetos, onde cada objeto define um ID de input e seu placeholder
    const inputsWithDynamicPlaceholders = [
        { id: 'telefone', placeholder: 'xx xxxxx-xxxx' },
        { id: 'email', placeholder: 'seu email@example.com' },
        { id: 'nome', placeholder: 'seu nome'} // Adicionamos o e-mail aqui
        // Adicione outros inputs que você queira com placeholder dinâmico
        // { id: 'outroCampo', placeholder: 'Placeholder para outro campo' }
    ];

    inputsWithDynamicPlaceholders.forEach(item => {
        const inputElement = document.getElementById(item.id);

        if (inputElement) { // Verifica se o elemento existe na página
            // Garante que o placeholder não esteja presente no carregamento inicial da página
            inputElement.removeAttribute('placeholder');

            inputElement.addEventListener('focus', function() {
                // Adiciona o placeholder quando o input recebe foco
                inputElement.setAttribute('placeholder', item.placeholder);
            });

            inputElement.addEventListener('blur', function() {
                // Remove o placeholder se o input estiver vazio quando perder o foco
                if (inputElement.value === '') {
                    inputElement.removeAttribute('placeholder');
                }
            });
        }
    });
});