// Preenchedo os dados dos inputs

const formCep = (infoCep) => {
    document.getElementById('address').value = infoCep.logradouro;
    document.getElementById('city').value = infoCep.localidade;
    document.getElementById('uf').value = infoCep.uf;
    document.getElementById('neighborhood').value = infoCep.bairro;
}

// Função para pegar os dados do CEP da api

const searchCep = async() => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    try {
        const dadosCep = await fetch(url);
        const infoCep = await dadosCep.json();
        if (infoCep.erro) {
            alert(
                `O CEP ${cep} é válido, porém não existe localidade! \n Por favor insira um CEP existente. Obrigado.`
            ); 
            console.log(infoCep);
        } else {
            formCep(infoCep);
        }
    } catch (err) { // tratar o erro 400 de cep inválido
        alert(`O CEP ${cep} é inválido! \n Por favor insira um CEP válido e existente. Obrigado.`)
    }
}

// Evento para iniciar a busca do CEP após ser digitado

document.getElementById('cep')
    .addEventListener('focusout', searchCep);

// Máscara para o CEP

const input = document.getElementById("cep");

input.addEventListener("keyup", formatarCep);

function formatarCep(e){

    var v= e.target.value.replace(/^(\d{5})(\d)/,"$1-$2") 

    e.target.value = v;

}