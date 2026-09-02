# 📚 Exercícios Faculdade SENAI Antonio Adolpho Lobbe

Este repositório contém exercícios desenvolvidos durante as atividades da faculdade **SENAI Antonio Adolpho Lobbe**, utilizando **React**.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- React
- JavaScript
- HTML
- CSS
- React Router DOM
- Node.js
- npm

---

## 📋 Pré-requisitos

Antes de executar o projeto, é necessário ter algumas ferramentas instaladas em seu computador.

### Node.js

O **Node.js** é necessário para executar o projeto React e utilizar o gerenciador de pacotes `npm`.

Faça o download e a instalação através do site oficial:

https://nodejs.org/

Após a instalação, abra o terminal e execute:

```bash
node -v

Se o Node.js estiver instalado corretamente, será exibida a versão instalada, por exemplo:

v22.14.0

npm
O npm (Node Package Manager) normalmente é instalado junto com o Node.js.

Para verificar se o npm está instalado, execute:

npm -v

Será exibida a versão instalada, por exemplo:

10.9.2

📥 Instalando o projeto
1. Clonar o repositório
Primeiramente, clone este repositório para o seu computador.

No terminal, execute:

git clone URL_DO_REPOSITORIO

Substitua URL_DO_REPOSITORIO pela URL real do repositório.

Por exemplo:

git clone https://github.com/seu-usuario/seu-repositorio.git

2. Entrar na pasta do projeto
Depois de clonar o repositório, entre na pasta criada:

cd NOME_DO_REPOSITORIO

Por exemplo:

cd exercicios-react

⚠️ É importante executar os próximos comandos dentro da pasta do repositório.

Para verificar se você está no diretório correto, você pode utilizar:

Windows
dir

Linux / macOS
ls

Você deverá encontrar arquivos e pastas como:

package.json
src/
public/
README.md

📦 Instalação das dependências
Depois de entrar na pasta do projeto, é necessário instalar todas as dependências utilizadas pela aplicação.

Execute:

npm install

O comando irá analisar o arquivo package.json e instalar automaticamente todas as bibliotecas necessárias para executar o projeto.

Após a instalação, será criada ou atualizada a pasta:

node_modules/

Também poderá ser atualizado o arquivo:

package-lock.json

⚠️ A instalação pode levar alguns minutos, dependendo da velocidade da sua internet e do computador.

▶️ Iniciando o projeto
Depois que as dependências forem instaladas, execute:

npm start

Esse comando inicia o servidor de desenvolvimento do React.

Normalmente, a aplicação ficará disponível no seguinte endereço:

http://localhost:3000

Abra esse endereço no navegador para visualizar o projeto.

🌐 Acessando os exercícios
A página inicial do projeto possui os exercícios disponíveis para acesso.

Atualmente, existem os seguintes exercícios:

⏱️ Relógio
Rota:

/relogio

URL local:

http://localhost:3000/relogio

O exercício pode também ser acessado através do botão Relógio disponível na página inicial.

💬 Limite de Mensagens
Rota:

/msg_limit

URL local:

http://localhost:3000/msg_limit

O exercício pode também ser acessado através do botão Limite de Mensagens disponível na página inicial.

📁 Estrutura do projeto
A estrutura do projeto é organizada da seguinte maneira:

.
├── public/
│
├── src/
│   ├── components/
│   │   ├── relogio.jsx
│   │   └── msg_limit.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

public/
Contém arquivos públicos utilizados pela aplicação.

src/
Contém o código-fonte principal da aplicação React.

src/components/
Contém os componentes dos exercícios.

Exemplo:

src/components/relogio.jsx
src/components/msg_limit.jsx

App.jsx
É o componente principal da aplicação.

Nele são configuradas as páginas, os componentes e as rotas dos exercícios.

App.css
Contém os estilos utilizados na aplicação.

package.json
Contém informações do projeto e as dependências utilizadas.

package-lock.json
Registra as versões específicas das dependências instaladas pelo npm.

README.md
Este arquivo contém as instruções e informações sobre o projeto.

🧭 Navegação entre os exercícios
O projeto utiliza o React Router DOM para permitir a navegação entre as diferentes páginas da aplicação.

As rotas principais são:

Página	Rota
Página inicial	/
Relógio	/relogio
Limite de Mensagens	/msg_limit

Na página inicial, os exercícios podem ser acessados através de botões.

Exemplo:

<Link to="/relogio" className="botao">
  Relógio
</Link>

<Link to="/msg_limit" className="botao">
  Limite de Mensagens
</Link>

🛠️ Adicionando um novo exercício
Para adicionar um novo exercício ao projeto, siga os passos abaixo.

1. Criar o componente
Dentro da pasta:

src/components/

crie um novo arquivo.

Por exemplo:

calculadora.jsx

2. Criar o componente React
Dentro do arquivo calculadora.jsx, crie o componente:

function Calculadora() {
  return (
    <div>
      <h1>Calculadora</h1>
    </div>
  );
}

export default Calculadora;

3. Importar o componente
No arquivo App.jsx, importe o novo componente:

import Calculadora from './components/calculadora';

4. Criar uma nova rota
Dentro de <Routes>, adicione uma nova rota:

<Route
  path="/calculadora"
  element={<Calculadora />}
/>

5. Adicionar um botão na página inicial
Adicione um novo Link:

<Link to="/calculadora" className="botao">
  Calculadora
</Link>

Agora o novo exercício poderá ser acessado através da página inicial.

A URL será:

http://localhost:3000/calculadora

💻 Comandos principais
Os principais comandos utilizados no projeto são:

Instalar dependências
npm install

Instala todas as dependências necessárias para executar o projeto.

Iniciar o projeto
npm start

Inicia o servidor de desenvolvimento.

Executar os testes
npm test

Executa os testes configurados no projeto, caso existam.

Criar uma versão de produção
npm run build

Cria uma versão otimizada da aplicação para produção.

🔄 Fluxo para executar o projeto
Sempre que baixar o projeto em um computador novo, siga esta sequência:

git clone URL_DO_REPOSITORIO

Depois:

cd NOME_DO_REPOSITORIO

Instale as dependências:

npm install

E finalmente inicie o projeto:

npm start

Depois abra no navegador:

http://localhost:3000

⚠️ Problemas comuns
npm não é reconhecido
Se aparecer uma mensagem semelhante a:

'npm' não é reconhecido como um comando interno ou externo

provavelmente o Node.js não está instalado ou não foi adicionado corretamente ao PATH do sistema.

Instale o Node.js e reinicie o terminal.

Erro ao executar npm start
Primeiro, verifique se você está dentro da pasta correta do projeto:

cd NOME_DO_REPOSITORIO

Depois execute:

npm install

E tente novamente:

npm start

Erro relacionado às dependências
Caso existam problemas com as dependências, tente remover a pasta node_modules e instalar novamente.

Windows
rmdir /s /q node_modules

Linux / macOS
rm -rf node_modules

Depois execute:

npm install

E:

npm start

👨‍💻 Desenvolvimento
Durante o desenvolvimento, mantenha o servidor executando através de:

npm start

Após realizar alterações nos arquivos do projeto, o React normalmente atualizará automaticamente a aplicação no navegador.

Caso isso não aconteça, atualize a página manualmente.

📚 Objetivo do projeto
O objetivo deste repositório é reunir os exercícios desenvolvidos durante a formação acadêmica, permitindo praticar conceitos como:

Componentes React
JSX
JavaScript
CSS
Rotas
Navegação entre páginas
Manipulação de eventos
Estados e propriedades
Estruturação de aplicações web
🏫 SENAI Antonio Adolpho Lobbe
Repositório desenvolvido para fins acadêmicos durante as atividades da faculdade SENAI Antonio Adolpho Lobbe.

📄 Licença
Este projeto possui finalidade acadêmica e educacional.
