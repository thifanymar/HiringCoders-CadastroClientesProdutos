const formprod = document.getElementById('formProd')

formprod.addEventListener('submit', (e) => {
    e.preventDefault();
    let sabor = document.getElementById('sabor').value
    let grama = document.getElementById('grama').value
    let fabricacao = document.getElementById('fabricacao').value
    let validade = document.getElementById('validade').value
    let preco = document.getElementById('preco').value
    let data = {
        sabor,
        grama,
        fabricacao,
        validade,
        preco,
    }


    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

})
