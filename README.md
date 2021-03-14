# Weather App Documentacion

Weather App consiste en una SPA hecha con React en el FrontEnd y Node.js con Express en el Backend. Esta aplicación consume la API de OpenWeather desde el servidor y simplifica el envío de datos al cliente con su propia API desarrollada en el Backend

## Rutas API

- GET /api/v1/search/:city Te devolverá los datos necesarios en formato JSON del tiempo de la ciudad puesta en el parámetro. Hace un GET request a la API de OpenWeather y simplifica los datos.

- GET /api/v1/search/:city/fiveDays Te devolverá la información necesaria del tiempo en los siguientes 5 dias de la ciudad puesta en el parámetro, en formato JSON. Recibe de query "lon" y "lat", necesarios para la busqueda. Hace un GET request a la API de OpenWeather y simplifica los datos.

- GET /api/v1/ip retorna tu dirección IP
- GET /api/v1 retorna API is running...

## Rutas Web

- / La página principal. Te deja seleccionar tu ciudad o 5 ciudades diferentes. También hay un buscador en el Header que te deja buscar cualquier ciudad que desees (Este componente, como el Footer, se mantiene en todas las secciones de la página).

- /search/:city Encontrarás el tiempo de la ciudad la cual hayas seleccionado o buscado.

-/search/:city/fiveDays Encontrarás el tiempo de los siguientes 5 dias de la ciudad que hayas seleccionado o buscado

## Librerias utilizadas

- Backend: express, cors, dotenv, axios, helmet, express-async-handler, express-rate-limit (nodemon, morgan, concurrently y colors como dev dependencies)

- Frontend: react, react-bootstrap, react-router-dom, react-dom, react-router-bootstrap, react-scripts, axios

## Otro

Desde el root se puede correr la aplicación web y la API simultaneamente con el comando "npm run dev". Esto es gracias a la libreria "concurrently".

Esta aplicación fue hecha en menos de 3 dias. 