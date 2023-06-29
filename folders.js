/*
    1- Criar uma pasta/diretório -> Recursivamente com validação
    2- Remover um diretório vazio
    4- Criar Arquivo
    5- Validar se o arquivo já existe antes de criar
    6- Remover um arquivo do diretório
    7- Remover um diretório e todos os seus arquivos filho (subpastas e arquivos)
 */

const fs = require('fs');
const path = require('path');

//1- Criar uma pasta/diretório -> Recursivamente com validação
let novaPasta = 'novaPasta';
let novasPastas = 'novaPasta1/novaPasta2/novaPasta3';
let diretorioCompleto = path.join(__dirname, novaPasta)

if(!fs.existsSync(diretorioCompleto)) {
    fs.mkdir(diretorioCompleto, (err) => {
        if(err) throw err;
        console.log('Primeira pasta criada com sucesso!');
    });
}

let fullDir = path.join(__dirname, novasPastas)
if(!fs.existsSync(fullDir)) {
    try {
        fs.mkdirSync(fullDir, { recursive: true });
        console.log('Diretório criado com sucesso!');
    } catch (error) {
        console.error(error);
    }
    
}

//2- Remover um diretório vazio