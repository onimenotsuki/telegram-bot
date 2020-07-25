Desarrollo de Bot de Telegram en ExpressJS
==========================================

## Instalación y configuración ##

Solamente clona este repositorio y sigue las instrucciones para la creación de tu bot en el siguiente
enlace: [https://core.telegram.org/bots](https://core.telegram.org/bots "Documentación para creación de bots en telegram").

Es necesario crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

``` shell
TELEGRAM_TOKEN="Tu token de telegram generado por BotFather"
PORT=8000
TELEGRAM_WEBHOOK_URL="url del webhook de telegram generado con ngrok"
```

Una vez tenemos listas las variables de entorno, vamos a instalar las dependencias.
Entrando a la carpeta en donde se encuentre el repositorio del proyecto.

``` shell
$ npm install
```

Ya que tenemos instaladas las dependencias vamos a escribir el siguiente comando: `$ npm run start:dev`.
