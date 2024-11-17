# API de Produtos de Chocolates

Bem-vindo ao meu API de Produtos de Chocolates! Esta API permite gerenciar produtos como chocolates meio amargo, amargo, branco e tradicional. Também há suporte para consulta, adição, edição e exclusão de produtos. Ele foi feito como um requisito da matéria de Desenvolvimento de API REST do SENAC do curso de Tecnologia em Sistemas para Internet.

## 📝 Funcionalidades

- **POST /produto**: Adiciona um novo produto.
- **GET /produto?nome=**: Retorna todos os produtos ou filtra por nome.
- **PUT /produto/:id**: Atualiza as informações de um produto específico.
- **DELETE /produto/:id**: Remove um produto pelo ID.

---

## 🚀 Como Rodar a API

### Pré-requisitos
- Node.js instalado (versão 14 ou superior).
- Um gerenciador de pacotes como `npm` ou `yarn`.
- Um cliente para testar a API, como **Postman** ou **Insomnia**.

### Passo a Passo

1. **Clone ou baixe o projeto**
   - Clone o repositório do GitHub:
     ```bash
     git clone https://github.com/Lydson/API_REST_chocolates
     ```

2. **Instale as dependências**
   - Abra o terminal na pasta do projeto e execute:
     ```bash
     npm install
     ```

3. **Inicie o servidor**
   - Ainda no terminal, execute:
     ```bash
     node app.js
     ```
   - O servidor será iniciado em `http://localhost:3000`.

4. **Acesse o endpoint principal**
   - Abra o navegador e visite:
     ```
     http://localhost:3000
     ```
   - Você verá a mensagem: *"Bem-vindo ao API de Produtos de Chocolates do Lydson!"*

5. **Teste os endpoints**
   - Use o **Postman** ou outro cliente para testar as seguintes rotas:
     - **POST /produto**: Enviar um produto no formato JSON.
     - **GET /produto?nome=**: Consultar produtos.
     - **PUT /produto/:id**: Atualizar um produto pelo ID.
     - **DELETE /produto/:id**: Excluir um produto pelo ID.

---

## 🧪 Exemplos de Testes no Postman

### POST /produto
```json
{
  "nome": "Chocolate com Castanhas",
  "descricao": "Chocolate meio amargo com castanhas",
  "preco": 18.5,
  "estoque": 25
}
