# SQLUMAN CLI v1
Bem-vindo ao sql-gemini, um projeto Node.js projetado baseado em CLI para facilitar a interação com bancos de dados PostgreSQL utilizando linguagem natural.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Este projeto foi desenvolvido utilizando a versão 20.

## Instalação

Clone o repositório para sua máquina local:

```
git clone https://github.com/thmachado7/sql-gemini.git
cd sql-gemini
```

Instale as dependências do projeto:

```
npm install
```

## Configuração

Antes de iniciar o projeto, é necessário configurar o ambiente. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```
GEMINI_API_KEY=
POSTGRES_HOST=
POSTGRES_PORT=
POSTGRES_DB_NAME=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

Para configurar as variáveis de ambiente via CLI, execute:

```
npm run config
```

## Uso

Para iniciar o projeto, utilize o comando:

```
npm start
```

Se precisar limpar os arquivos salvos, execute:

```
npm run clean
```

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir um pull request ou uma issue.

---

Desenvolvido por Thiago Machado.
