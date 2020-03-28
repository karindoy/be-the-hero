const express = require('express'); //importa o express
const cors = require('cors');
const routes = require('./routes'); //importa o express

const app = express() // app recebe as funcionalidades do express
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333); // define a porta que será executada