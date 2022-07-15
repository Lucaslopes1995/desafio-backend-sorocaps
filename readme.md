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

3. Crie um Banco de dados no SQL com algum nome a sua escolha, como por exemplo "sorocaps". Abaixo está a query para criação:
	- CREATE SCHEMA sorocaps;

	Em seguida, utilize o seguinte comando para rodar as migrations para configuração das tabelas:
	- npx sequelize db:migrate
	
	Utilize também o comando abaixo para rodar as seeders e adicionar campos nas tabelas:
	- npx sequelize db:seed:all

	Substitua as configurações das variáveis de ambiente, colocando os dados, como no arquivo ".env_example", localizado na raiz da aplicação, pelo nome em um arquivo .env.

	Por fim inicie a aplicação com o comando:
	- `npm start`




