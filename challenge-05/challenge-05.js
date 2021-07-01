/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [10,25,50,100,3]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arg){
    return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(myArray)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr,num){
    return arr[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
myArray2 = [100, 'Vitor', null, true, {prop1: 1}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(myArray2,[0])
myFunction(myArray2,[1])
myFunction(myArray2,[2])
myFunction(myArray2,[3])
myFunction(myArray2,[4])

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(param){
    let obj = {
        'Irmaos Karamazov':{
            quantidadePaginas: 900,
            autor: 'Fiodor Dostoievski',
            editora: 'Editora 34'
        },
        'Sidarta':{
            quantidadePaginas: 200,
            autor:'Herman Hesse',
            editora: 'Abril'
        },
        'Mais Esperto que o diabo':{
            quantidadePaginas: 300,
            autor: 'Napoleon Hill',
            editora: 'Primavera'
        }
    };
    if(param){
        return obj[param];
    }
    else {
        return obj

    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('Sidarta')
book('Irmaos Karamazov')
book('Mais Esperto que o diabo')

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
`O livro Sidarta tem ${book('Sidarta').quantidadePaginas} páginas!`

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro Sidarta é ${book('Sidarta').autor}`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro Irmaos Karamazov foi publicado pela editora ${book('Irmaos Karamazov').editora}`
