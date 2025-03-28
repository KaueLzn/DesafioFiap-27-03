document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('group-form').addEventListener('submit', function(event) { 
        event.preventDefault();

        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        const name3 = document.getElementById('name3').value;
        const name4 = document.getElementById('name4').value;
        const name5 = document.getElementById('name5').value;
        const history = document.getElementById('history').value;

        if (!name1 || !name2 || !name3 || !name4 || !name5 || !history) {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        const data = {
            names: [name1, name2, name3, name4, name5],
            message: history
        };

        fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao enviar os dados');
            }
        })
        .then(data => {
            alert('Formulário enviado com sucesso!');
            
            document.getElementById('group-form').reset();
        })
        .catch(error => {
            alert('Ocorreu um erro ao enviar o formulário: ' + error.message);
        });
    });
});