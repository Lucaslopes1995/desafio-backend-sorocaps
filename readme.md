# Desafio Sorocaps - Backend


## Contexto
 
 Esse repositório foi criado para o desafio técnico da sorocaps:
 
## Instalação

1. Clone o repositório

- `git clone git@github.com:Lucaslopes1995/desafio-backend-sorocaps.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd Back-End`

2. Instale as dependências do back

- `npm install`

3. Crie um Banco de dados no SQL com o seguinte nome "heroku_f602c367625846b". Abaixo está a query para criação:
	- CREATE SCHEMA heroku_f602c367625846b;

	Em seguida, utilize o seguinte comando para rodar as migrations para configuração das tabelas:
	- npx sequelize db:migrate
	
	Utilize também o comando abaixo para rodar as seeders e adicionar campos nas tabelas:
	- npx sequelize db:seed:all

	Substitua as configurações das variáveis de ambiente, alterando o arquivo o nome do arquivo ".env_example", localizo na raiz da aplicação, pelo nome ".env".

	Por fim inicie a aplicação com o comando:
	- `npm start`




