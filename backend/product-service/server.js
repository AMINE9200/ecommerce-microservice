const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: 'T‑Shirt', price: 19.99 },
  { id: 2, name: 'Jean', price: 49.99 },
  { id: 3, name: 'Sneakers', price: 79.99 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product service listening on port ${PORT}`);
});