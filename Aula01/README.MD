Primeiro passos da Aula 01.

Configurações básicas:
1- Criar uma pasta que vai guardar os arquivos do projeto(Aula01)
2- Abrir pasta do terminal do vscode
3- Rodas os seguintes scripts/comandos do node
   - npm init(inicializa um novo projeto node em branco)
     - podemos adicionar a flag -y para aceitar todas as sugestões
        -- npm init -y
4 - instalar os pacotes do projeto, na aula01 usamos apenas o express.
  - npm install express --save
5 - Editar o arquivo package.json
  - Na chave "main" devemos utilizar o nome do arquivo principal da aplicação (app.js, index.js, main.js...)
  - Na chave "type" devemos setar o valor da "module", caso não tenha a chave no arquivo package.json devemos criar a pos a chave "main"
  - na chave "scripts" adicionamos a seguinte chave 
    - "start": "node app.js" (comando para inicializar a aplicação/arquivo principal)
6 - Criar o aquivo principal na raiz do projeto (app.js, index.js, main.js...), no nosso caso usamos o arquivo app.js
7 - Editar o arquivo app com os códigos básicos do servidor express
8 - Subir a aplicação executando o comando no terminal
   - npm start
9- 