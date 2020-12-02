# Property-rental
Este projeto consiste no desenvolvimento de um serviço de aluguel de quartos e apartamentos, no formato AirBnb. O servidor deve fornecer serviços para o locador e o locatário. Utilizando a API de Sockets do Node.js para se comunicarem.


## Requisitos
Para a execução desse projeto será necessário as seguintes ferramentas:

- Obrigatórios
  - [Node](https://nodejs.org/en/)
  - [Docker](https://docs.docker.com/)
  - [PostgreSQL](https://www.postgresql.org/)

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Docker](#docker)
- [PostgresSQL](#postgressql)
  - [Iniciar Container](#iniciar-container)
  - [Parar Container](#parar-container)

- [Executando](#executando)
- [Verificar IP](#verificar-ip)

### Docker
  Para a instalação do Docker siga as [instruções](https://docs.docker.com/engine/install/).

  Para instalação do docker-compose siga as [instruções](https://docs.docker.com/compose/install/).

### PostgresSQL
  Para a execução desse projeto será necessário que você possua uma versão do postgres instalado.
  Para usar a configuração default pré configurada pelos desenvolvedores precisa ser utilizado o seguinte script:

  ```$ docker-compose up -d```

#### Iniciar Container
  Para inicar um container precisa ser utilizar o seguinte script:

  ```$ docker-compose start```
#### Parar Container
  Para parar o contianer precisa ser utilizado o seguinte script:
  
  ```$ docker-compose stop```

# Executando
  Para ser realijado a execução corretamento o container já precisa está rodando apois isso você precisará executar os seguintes comandos na ordem que segue.

  ```$ yarn run:migration```

  ```$ yarn seed```

  Pronto você já pode usar o aplicação, obrigado pela paciência.

# Verificando IP

  No seu terminal rode o seguinte comando / caso use linux.

  ```$ hostname -I```

  colete o primeiro endereço IP que foi retornando na linha 20 do arquivo ./src/client/client.js