const livros = require('./database');
console.log(livros);


const readLine = require('readline-sync');

const entradaInicial = readLine.question('Deseja buscar um livro? S/N ');

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis: ');
    console.log('Produtividade e estilo de vida', '/História brasileira', '/Américas','/Tecnologia','/Estilo de vida');

    const entradaCategoria = readLine.question('Qual categoria voce escolhe: ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log('Essas são todos os livros disponiveis: ');
    console.table(livrosOrdenados);
}