# Desafio Sorocaps - Backend


## Contexto
 
 Esse repositório foi criado para o desafio técnico da sorocaps:
 
## Instalação

1. Clone o repositório

- `git clone git@github.com:Lucaslopes1995/desafio-backend-sorocaps.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd desafio-backend-sorocaps`

2. Instale as dependências do back

- `npm install`

3. Crie um Banco de dados no SQL com algum nome a sua escolha, como por exemplo "sorocaps". Abaixo está a query para criação:
	- CREATE SCHEMA sorocaps;
	
	Substitua as configurações das variáveis de ambiente, colocando os dados no arquivo ".env_example", localizado na raiz da aplicação, e em seguida altere o nome desse arquivo para ".env" (é necessário primeiro excluir o arquivo .env já exitente na aplicação).

	Em seguida, utilize o seguinte comando para rodar as migrations para configuração das tabelas:
	- npx sequelize db:migrate
	
	Utilize também o comando abaixo para rodar as seeders e adicionar campos nas tabelas:
	- npx sequelize db:seed:all

	Por fim inicie a aplicação com o comando:
	- `npm start`
	
Obs: Como a aplicação está hospedada no heroku, foi necessário colocar o arquivo .env visível, porem, em aplicações locais é precisamo alterar os dados desse arquivo, alterando como o arquivo .env_Example, mudando o campo MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, HOSTNAME, e mantendo a variável SECRET sem alteração.




