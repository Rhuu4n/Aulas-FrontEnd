Exercícios Faculdade SENAI Antonio Adolpho Lobbe

Repositório destinado aos exercícios desenvolvidos durante as atividades da faculdade SENAI Antonio Adolpho Lobbe utilizando React.

Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

Node.js
npm, que normalmente é instalado junto com o Node.js
Git, caso o projeto tenha sido clonado de um repositório

Para verificar se o Node.js e o npm estão instalados:

node -v
npm -v

Como iniciar o projeto
1. Clone o repositório

Caso ainda não tenha o projeto em sua máquina:

git clone URL_DO_REPOSITORIO


Depois, entre na pasta do repositório:

cd NOME_DO_REPOSITORIO

2. Instale as dependências

Dentro da pasta do repositório, execute:

npm install


Esse comando instala todas as dependências necessárias para executar o projeto.

3. Inicie o projeto

Ainda dentro da pasta do repositório, execute:

npm start


Após executar o comando, o projeto será iniciado e estará disponível no navegador, normalmente em:

http://localhost:3000

Estrutura do projeto

Uma estrutura básica do projeto pode ser semelhante a:

.
├── public/
├── src/
│   ├── components/
│   │   ├── relogio.jsx
│   │   └── msg_limit.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── package-lock.json
└── README.md

Exercícios disponíveis

Atualmente, o projeto possui exercícios acessíveis pela página inicial:

Relógio — /relogio
Limite de Mensagens — /msg_limit

Os exercícios são acessados através dos botões disponíveis na página inicial da aplicação.

Tecnologias utilizadas
React
JavaScript
HTML
CSS
React Router DOM
Node.js
npm
Comandos principais
Comando	Descrição
npm install	Instala as dependências do projeto
npm start	Inicia o servidor de desenvolvimento
npm test	Executa os testes, caso existam
npm run build	Gera a versão de produção
Desenvolvimento

Para desenvolver ou adicionar novos exercícios:

Crie o componente dentro da pasta src/components/.
Importe o componente no App.jsx.
Adicione uma nova rota utilizando o react-router-dom.
Adicione um botão na página inicial para acessar o exercício.
Execute npm start para testar a aplicação.

SENAI Antonio Adolpho Lobbe — Exercícios de Faculdade
