const form = document.getElementById('form-agenda');
const nomes = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});
function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if(nomes.includes(inputNomeContato.value)){
        alert(`Este nome: ${inputNomeContato.value} ja foi cadastrado`);
    }else {
        nomes.push(inputNomeContato.value);
        tel.push(inputNumeroTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}