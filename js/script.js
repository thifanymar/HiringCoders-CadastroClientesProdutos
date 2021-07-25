const form = document.getElementById('formClient')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let cidade = document.getElementById('cidade').value
    let endereco = document.getElementById('endereco').value
    let data = {
        nome,
        email,
        telefone,
        cidade,
        endereco,
    }


    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

})
