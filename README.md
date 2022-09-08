# MongoDB Commerce

## Observações

Projeto desenvolvido ao cursar Desenvolvimento Web na [Trybe](https://www.betrybe.com/). <br>
  
Todo desenvolvimento realizado por mim se localiza na pasta /challenges. As outras partes desse projeto foram providas pela **Trybe**<br>


## Contexto   
 MongoDB Commerce é um projeto para colocar em praticas conhecimentos de MongoDB, com operações que manipulam dados, como:  
  - Insert;
  - Update;
  - Delete;
  - Find;
  - Operadores.
<br>
_________________________________

## Técnologias e conhecimentos colado em prática
  - [MongoDB](https://www.mongodb.com/docs/): 
Banco de dados NoSQL popular, de código aberto e escalável que fornece alta taxa de transferência para seus aplicativos orientados a dados.

_________________________________

## Executando aplicação
  É necessário possuir o Git e Docker <br>
  Abrindo o terminal, execute: <br>
  ```
  git clone git@github.com:jonatasqueirozlima/mongodb-commerce.git
  
  cd mongodb-commerce
  
  npm install
  
  docker run -d --name=project-container -v "$PWD:/app" -p 27017:27017 mongo:5.0    
  
  docker exec project-container mongorestore -d commerce -c produtos /app/assets produtos.bson
  ```  
  
  A partir disso, na pasta challenges foram alguns comandos para praticar MongoDB conforme os dados disponíveis da Collection Commerce in /assets.
_________________________________
