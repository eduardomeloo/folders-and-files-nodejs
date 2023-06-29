/*
    1- Criar um novo arquivo e inserir dados
    2- Ler um arquivo e duplicá-lo
    3- Editar um arquivo existente
    4- Diferença entre método síncrono e assíncrono
    5- Substituição de Palavras (Replace)
    6- Modificar determinada Linha (Split)
*/

const fs = require('fs');
const path = require('path');

//1- Criar um novo arquivo e inserir dados
let dirSaveFiles = path.join(__dirname, 'uploads');
let caminhoNovoArquivo = path.join(dirSaveFiles, 'file1.txt');
let conteudo = 'esse é um novo conteúdo!';
if(fs.existsSync(dirSaveFiles)) {
    fs.access(caminhoNovoArquivo, fs.constants.F_OK, (err) => {
        if(err) {
            console.log('Esse arquivo não existe, então vamos criá-lo.')
            fs.writeFileSync(caminhoNovoArquivo, conteudo, (err) => {
                if(err) throw err;
                console.log('Arquivo criado ou sobrescrito com sucesso');
            });
        } else {
            console.log('Esse arquivo já exise no diretório, vamos sobrescrevê-lo.');
            fs.writeFileSync(caminhoNovoArquivo, conteudo, (err) => {
                if(err) throw err;
                console.log('Arquivo criado ou sobrescrito com sucesso');
            });
        }
    });
} else {
    fs.mkdirSync(dirSaveFiles, { recursive: true });
    if(fs.existsSync(dirSaveFiles)) {
        fs.writeFileSync(caminhoNovoArquivo, conteudo, (err) => {
            if(err) throw err;
            console.log('Arquivo criado ou sobrescrito com sucesso')
        });
    }
}    

//2- Ler um arquivo e duplicá-lo
fs.access(caminhoNovoArquivo, fs.constants.F_OK, (err) => {
    if(err) {
        console.log('O arquivo não foi localizado!')
    } else {
        fs.readFile(caminhoNovoArquivo, 'utf8', (err, data) => {
            if(err) throw err;  
            //console.log(data);
            fs.writeFileSync(dirSaveFiles+'/file1-copy.txt', data, (err) => {
                if(err) throw err;
                console.log('Cópia criada com sucesso!')
            });
        });
    }
});

//3- Editar um arquivo existente
fs.access(caminhoNovoArquivo, fs.constants.F_OK, (err) => {
    if(err) {
        console.log('O arquivo não foi localizado!')
    } else {
        fs.stat(caminhoNovoArquivo, (err, stats) => {
            if (err) {
              console.error('Erro ao obter informações do arquivo:', err);
              return;
            }

            let info = 'Manipulação de dados em arquivos é bem simples'

            if (stats.size === 0) {
                console.log('O arquivo está vazio - inserindo novas informações...');
                fs.appendFile(caminhoNovoArquivo, info, (err) => {
                    if(err) throw err;
                });
            } else {
                console.log('O arquivo não está vazio - adicionando novas informações...');
                fs.appendFile(caminhoNovoArquivo, info, (err) => {
                    if(err) throw err;
                });
            }
          });
    }
});
/*
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