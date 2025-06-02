# Unifaat :: Devweb :: Aula 13 - Middlewares, Segurança, Form Data e Swagger

## Instalação e Execução

### Siga os passos abaixo para rodar o projeto via Docker:

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-devweb-aula13-middleware-formdata-swagger
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-devweb-aula13-middleware-formdata-swagger
   ```

3. Criar o arquivo `.env` na raiz do projeto copiando o .env.example:

   > No windows:

   ```ini
   copy .env.example .env
   ```

   > No linux

   ```ini
   cp .env.example .env
   ```
4. Abrir o arquivo .env recém criado e preencher os campos abaixo:

```sh
POSTGRES_USER=meu_usuario
POSTGRES_PASSWORD=minha_senha
JWT_SECRET=super_secreta
```

5. Subir a aplicação com Docker Compose:

   ```sh
   docker compose up --build
   ```

   > ou, dependendo da versão do Docker:
   >
   > - Usuários com versões **mais antigas** ou com Docker Compose instalado separadamente usam:

   ```sh
   docker-compose up --build
   ```

   > - Usuários com **Docker moderno** devem usar:

   ```sh
   docker compose up --build
   ```

6. Criar os usuários acessando essa rota:

   [http://localhost:8080/criar-usuarios](http://localhost:8080/criar-usuarios)

O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)

Documentação api: [http://localhost:8080/docs](http://localhost:8080/docs)

Observação: ./Insomnia.yml DEVE utilizado no insomnia