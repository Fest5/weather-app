# Weather App Documentacion

Weather App consiste en una SPA hecha con React en el FrontEnd y Node.js con Express en el Backend. Esta aplicación consume la API de OpenWeather desde el servidor y simplifica el envío de datos al cliente con su propia API desarrollada en el Backend.

El buscador te permite buscar cualquier otra ciudad además de las propuestas en los botones.

## Rutas API

- GET /api/v1/search/:city Te devolverá los datos necesarios en formato JSON del tiempo de la ciudad puesta en el parámetro. Hace un GET request a la API de OpenWeather y simplifica los datos.

- GET /api/v1/search/:city/fiveDays Te devolverá la información necesaria del tiempo en los siguientes 5 dias de la ciudad puesta en el parámetro, en formato JSON. Recibe de query "lon" y "lat", necesarios para la busqueda. Hace un GET request a la API de OpenWeather y simplifica los datos.

- GET /api/v1/ip retorna tu dirección IP
- GET /api/v1 retorna API is running...

## Rutas Web

- / La página principal. Te deja seleccionar tu ciudad o 5 ciudades diferentes. También hay un buscador en el Header que te deja buscar cualquier ciudad que desees (Este componente, como el Footer, se mantiene en todas las secciones de la página).

- /search/:city Encontrarás el tiempo de la ciudad la cual hayas seleccionado o buscado.

- /search/:city/fiveDays Encontrarás el tiempo de los siguientes 5 dias de la ciudad que hayas seleccionado o buscado. Se le debe pasar lon y lat como parte del query.

## Librerias utilizadas

- Backend: express, cors, dotenv, axios, helmet, express-async-handler, express-rate-limit (nodemon, morgan, concurrently y colors como dev dependencies)

- Frontend: react, react-bootstrap, react-router-dom, react-dom, react-router-bootstrap, react-scripts, axios

## ¿Cómo correr app?

- En consola desde el root "docker-compose up" **(cambiar el proxy del package.json de la carpeta "client" a http://backend:5000 para que funcione)**. Tarda 1 minuto aprox en devolver el front.
- En consola desde el root "npm run dev" para development mode (con proxy http://localhost:5000)
- En consola desde el root "npm run server" para production mode (se cambia a production automáticamente ejecutando este comando) (con proxy http://localhost:5000)


## Otro

Desde el root se puede correr la aplicación web y la API simultaneamente con el comando "npm run dev". Esto es gracias a la libreria "concurrently".

En el deploy de Heroku, el boton de "Your location" no muestra el tiempo de tu ciudad ya que la API de IP-API usa el protocolo HTTP y la página usa HTTPS. Al intentar hacer la conexión la consola da un error Mixed Content.
Si corres el proyecto en localhost funciona normalmente.

Esta aplicación fue hecha en menos de 3 dias. 
