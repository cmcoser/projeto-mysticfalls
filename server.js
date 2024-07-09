const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();
const port = 3000;

app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/projeto-mysticfalls';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conexão bem-sucedida ao MongoDB!');
});

app.use('/api', productRoutes);

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Projeto Mystic Falls API!');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});