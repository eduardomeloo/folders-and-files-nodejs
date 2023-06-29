/*
    1- Criar um novo arquivo e inserir dados
    2- Ler um arquivo
    3- Editar um arquivo existente
    4- Diferença entre método síncrono e assíncrono
    5- Substituição de Palavras (Replace)
    6- Modificar determinada Linha (Split)
*/

const fs = require('fs');
const path = require('path');


fs.write
//1- Criar um novo arquivo e inserir dados
let caminhoNovoArquivo = path.join(__dirname, 'uploads/file1.txt');
let conteudo = 'esse é um novo conteúdo!';
fs.writeFileSync(caminhoNovoArquivo, conteudo, (err) => {
    if(err) throw err;
    console.log('Arquivo criado ou sobrescrito com sucesso')
});

/*
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
*/