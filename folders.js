/*
    1- Criar uma pasta/diretório -> Recursivamente com validação
    2- Remover um diretório vazio
    3- Validar se arquivo existe no diretório e criar, caso não exista
    4- Remover um arquivo do diretório
    5- Remover um diretório e todos os seus arquivos filho (subpastas e arquivos)
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

// 2- Remover um diretório vazio ou com subdiretórios
if(fs.lstatSync(fullDir).isDirectory()) {
    fs.readdir(fullDir, (err, files) => {
        if(err) throw err;
    
        if (files.length > 0) {
            console.log(`O diretório ${fullDir} possui arquivos e não será excluído.`)
        } else {
            console.log(`O diretório ${fullDir} não possui arquivos e será excluído.`)
            fs.rmdirSync(fullDir)
        }
    })
}

//3- Validar se arquivo existe no diretório e criar caso não exista
let meuPrimeiroArquivo = path.join(__dirname, 'primeiroArquivo.txt')
fs.access(meuPrimeiroArquivo, fs.constants.F_OK, (err) => {
    if(err) {
        console.log('O arquivo não existe e será criado!')
        fs.writeFileSync(meuPrimeiroArquivo, '', (err) => {
            if(err) throw err;
        });
    } else {
        console.log('O arquivo já existe e não será criado!')
    }
})

//5- Remover um diretório e todos os seus arquivos filho (subpastas e arquivos)
fs.rm(fullDir, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Pasta removida com sucesso.');
});