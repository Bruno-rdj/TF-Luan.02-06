# Projeto de Upload de Documentos

Este projeto implementa uma API para upload de documentos PDF com autenticação JWT.

## Configuração do Ambiente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Configurar o arquivo .env**:
   - Copie o arquivo `.env.example` para `.env`
   - Configure o `JWT_SECRET` com um valor seguro
   - Configure o `MAX_FILE_SIZE` para definir o tamanho máximo de upload (em bytes)

3. **Iniciar o ambiente Docker**:
   ```bash
   docker-compose up -d
   ```

## Funcionalidades

- Autenticação JWT
- Upload de documentos PDF
- Validação de tipo e tamanho de arquivo
- Armazenamento seguro de documentos
- API RESTful documentada com Swagger

## Documentação

A documentação da API pode ser acessada em:
```
http://localhost:8080/docs
```

## Segurança

- Validação de tipo de arquivo (apenas PDF)
- Limite de tamanho de arquivo
- Sanitização de nomes de arquivos
- Autenticação JWT para todas as rotas da API
- Configuração CORS para controle de acesso

## Estrutura do Projeto

- `/app` - Controladores, Middlewares e Modelos
- `/bootstrap` - Inicialização da aplicação
- `/config` - Configurações do sistema
- `/docs` - Documentação Swagger
- `/routes` - Definição de rotas
- `/storage` - Armazenamento de arquivos