const fs = require('fs');
const path = require('path');

console.log(path.dirname);
console.log(__dirname);
let caminhoNovoArquivo = './teste2.txt'

//criar ou sobrescrever um arquivo
let novoConteudo = 'esse é um novo conteúdo!';
fs.writeFileSync(caminhoNovoArquivo, novoConteudo, (err) => {
    if(err) throw err;
    //console.log('Arquivo criado ou sobrescrito com sucesso')
});

//ler um arquivo
fs.readFile(caminhoNovoArquivo, 'utf8', (err, data) => {
    if(err) throw err;  
    //console.log(data);
});

//Atualizar um arquivo
let conteudoAdicional = 'esse é um conteúdo adicional!';
fs.appendFile(caminhoNovoArquivo, '\n'+conteudoAdicional, (err) => {
    if(err) throw err;
   // console.log('Conteúdo adicionado com sucesso!');
});

//Loop inserção
for(let i = 0; i <= 400; i++) {
    fs.appendFile(caminhoNovoArquivo, `\n contei ${i}`, (err) => {
        if(err) throw err;
       // console.log('Conteúdo adicionado com sucesso!');
    });
}