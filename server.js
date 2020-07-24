const express = require('express');
const app = express();
const Telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8000;

app.get('/', (_, res) => res.send('Hola mundo'));

app.listen(port, () => console.log(`Servidor corriendo en localhost:${port}`));
