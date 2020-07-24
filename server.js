const express = require('express');
const app = express();
const Telegraf = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.TELEGRAM_TOKEN;
const port = process.env.PORT || 8000;

const bot = new Telegraf(token);

app.use(bot.webhookCallback('/ruta-bot'));

bot.telegram.setWebhook('https://85f0dad635a5.ngrok.io/ruta-bot');
bot.command('/test', (ctx) => ctx.reply('Hola mundo, Bot'));

app.post('/ruta-bot', (req, res) => {
  res.send('Llamada a la ruta del bot');
});

app.get('/', (_, res) => res.send('Hola mundo'));

app.listen(port, () => console.log(`Servidor corriendo en localhost:${port}`));
