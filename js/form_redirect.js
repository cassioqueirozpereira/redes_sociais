document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm'); // Obtenha o formulário pelo ID

    if (form) { // Verifique se o formulário existe
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const formAction = this.action; // Pega a URL do Formspree do atributo action
            const formData = new FormData(this); // Coleta os dados do formulário

            try {
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json' // Importante para que o Formspree responda com JSON
                    }
                });

                if (response.ok) { // Se a resposta do Formspree for sucesso (código 200)
                    // Redireciona o usuário para sua página de agradecimento
                    window.location.href = 'https://cassioqueirozpereira.github.io/agradecimento_form/';
                } else {
                    // Se houver um erro no envio para o Formspree
                    const data = await response.json();
                    alert('Erro ao enviar o formulário: ' + (data.error || 'Tente novamente.'));
                    console.error('Formspree error:', data);
                }
            } catch (error) {
                // Se houver um erro na requisição (problema de rede, etc.)
                alert('Ocorreu um erro de rede. Verifique sua conexão e tente novamente.');
                console.error('Network error:', error);
            }
        });
    }
});