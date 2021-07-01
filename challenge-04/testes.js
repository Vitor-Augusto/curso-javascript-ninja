let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    placa: 'ABC-1234',
    ano: 2009,
    cor: 'prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
let mudarCor = cor => carro.cor = cor

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
let obterCor = () => carro.cor

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
let obterModelo = () => carro.modelo

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
let obterMarca = () => carro.marca

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
let obterMarcaModelo = () => `Esse carro é um ${obterMarca()} ${obterModelo()}`

let entraNoCarro = qtdPessoas => {
    retorno = '';
    pessoas = 'pessoas';
    
    (carro.quantidadePessoas = carro.quantidadePessoas + qtdPessoas) > 5 ? retorno = 'O carro já está lotado' : retorno = `Já temos ${carro.quantidadePessoas} pessoas no carro!`;

    (carro.assentos - carro.quantidadePessoas) == 1 ? pessoas = 'pessoa': pessoas;

    carro.quantidadePessoas < 5 ? retorno += `Só cabem mais ${carro.assentos - carro.quantidadePessoas} ${pessoas}!`: '';
    
    return retorno
}
console.log(entraNoCarro(2)) 