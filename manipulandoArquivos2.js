const fs = require('fs');

let caminhoArquivo = './teste.txt'
let caminhoNovoArquivo = './teste2.txt'

//ler um arquivo
fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    if(err) throw err;
    let localizar_palavra = 'Primeiro'

    if(data.toUpperCase().includes(localizar_palavra.toUpperCase())) {
        console.log(`Encontrei a palavra "${localizar_palavra}" no arquivo`)
    } else {
        console.log(`Não Encontrei a palavra "${localizar_palavra}" no arquivo`)
    }

    const regex = new RegExp(localizar_palavra, 'gi');
    data = data.replaceAll(regex, 'segundo');
    
    console.log(data);
});

//cria ou sobrescreve um arquivo
let novoConteudo = 'esse é um novo conteúdo!';
fs.writeFile(caminhoNovoArquivo, novoConteudo, (err) => {
    if(err) throw err;
    console.log('Arquivo criado ou sobrescrito com sucesso')
});

//Atualizar um arquivo
let conteudoAdicional = 'esse é um conteúdo adicional!';
fs.appendFile(caminhoNovoArquivo, '\n'+conteudoAdicional, (err) => {
    if(err) throw err;
    console.log('Conteúdo adicionado com sucesso!');
});