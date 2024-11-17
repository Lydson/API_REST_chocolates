// Configuração do Servidor
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Rota principal
app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API de Produtos de Chocolates</title>
      <style>
        body {
          margin: 40;
          padding: 20;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #dda15e;
          color: #283618;
          font-family: 'Courier New', monospace; 
          text-align: center;
        }
        h1 {
          font-size: 3rem;
        }
      </style>
    </head>
    <body>
      <h1>Bem-vindo ao API de Produtos de Chocolates do Lydson!</h1>
    </body>
    </html>
  `;
  res.send(htmlContent);
});

// Produtos base
let produtos = [
  { id: 1, nome: "Chocolate Meio Amargo", descricao: "Chocolate com 50% cacau", preco: 10.0, estoque: 100 },
  { id: 2, nome: "Chocolate Amargo", descricao: "Chocolate com 70% cacau", preco: 12.5, estoque: 50 },
  { id: 3, nome: "Chocolate Branco", descricao: "Chocolate feito com manteiga de cacau", preco: 8.0, estoque: 80 },
  { id: 4, nome: "Chocolate Tradicional", descricao: "Chocolate ao leite", preco: 9.5, estoque: 120 }
];

// Rota POST /produto
app.post('/produto', (req, res) => {
  const { nome, descricao, preco, estoque } = req.body;

  const novoId = produtos.length > 0 ? Math.max(...produtos.map(prod => prod.id)) + 1 : 1;
  const novoProduto = {
    id: novoId,
    nome,
    descricao,
    preco,
    estoque,
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// Rota GET /produto
app.get('/produto', (req, res) => {
  const { nome } = req.query;

  const resultado = nome
    ? produtos.filter(produto => produto.nome.toLowerCase().includes(nome.toLowerCase()))
    : produtos;

  res.json(resultado);
});

// Rota PUT /produto/:id
app.put('/produto/:id', (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco, estoque } = req.body;

  const produtoIndex = produtos.findIndex(prod => prod.id == id);

  if (produtoIndex === -1) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  produtos[produtoIndex] = { id: Number(id), nome, descricao, preco, estoque };
  res.json(produtos[produtoIndex]);
});

// Rota DELETE /produto/:id 
app.delete('/produto/:id', (req, res) => {
  const { id } = req.params;
  const produtoIndex = produtos.findIndex(prod => prod.id == id);

  if (produtoIndex === -1) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  produtos.splice(produtoIndex, 1);
  res.status(204).end();
});
