document.addEventListener('DOMContentLoaded', function() {
    // Array de objetos, onde cada objeto define um ID de input e seu placeholder
    const inputsWithDynamicPlaceholders = [
        { id: 'telefone', placeholder: 'xx xxxxx-xxxx' },
        { id: 'email', placeholder: 'seu email@example.com' },
        { id: 'nome', placeholder: 'seu nome'}
    ];

    inputsWithDynamicPlaceholders.forEach(item => {
        const inputElement = document.getElementById(item.id);

        if (inputElement) {
            // Remove o placeholder inicial para que ele não apareça
            inputElement.removeAttribute('placeholder');

            // Adiciona a classe 'has-content' se o campo já tiver valor ao carregar a página
            if (inputElement.value.trim() !== '') {
                inputElement.classList.add('has-content');
            }

            // Quando o campo recebe foco
            inputElement.addEventListener('focus', function() {
                // Adiciona o placeholder se o campo estiver vazio
                if (this.value.trim() === '') {
                    this.setAttribute('placeholder', item.placeholder);
                }
            });

            // Quando o campo perde o foco
            inputElement.addEventListener('blur', function() {
                // Remove o placeholder, independentemente do valor
                this.removeAttribute('placeholder');
                // Remove a classe 'has-content' se o campo estiver vazio
                if (this.value.trim() === '') {
                    this.classList.remove('has-content');
                }
            });

            // Quando o usuário digita no campo
            inputElement.addEventListener('input', function() {
                // Remove o placeholder assim que o usuário digita
                this.removeAttribute('placeholder');
                // Adiciona a classe 'has-content' se houver valor
                if (this.value.trim() !== '') {
                    this.classList.add('has-content');
                } else {
                    this.classList.remove('has-content');
                }
            });
        }
    });
});