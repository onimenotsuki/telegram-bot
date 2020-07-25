const express = require('express');
const app = express();
const Telegraf = require('telegraf');
const dotenv = require('dotenv');

// Llamamos a la variables de entorno
dotenv.config();

// Inicialización de variables de entorno
const token = process.env.TELEGRAM_TOKEN;
const port = process.env.PORT || 8000;
const webHookUrl = process.env.TELEGRAM_WEBHOOK_URL;

// Iniciamos la instancia de Telegram
const bot = new Telegraf(token);

// Usamos el middleware para que se comunique con express
app.use(bot.webhookCallback('/ruta-bot'));

bot.telegram.setWebhook(webHookUrl);
bot.command('/hello', (ctx) => ctx.reply('Hola mundo, desde Bot'));

app.post('/bot', (_, res) => {
  res.send('Llamada a la ruta del bot');
});

app.get('/', (_, res) => res.send('Hola mundo'));

app.listen(port, () => console.log(`Servidor corriendo en localhost:${port}`));
