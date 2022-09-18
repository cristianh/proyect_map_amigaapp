const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);


const PORT = process.env.PORT || 3000;

// Servimos los archivos que se encuentran en el directorio public
app.use(express.static(path.join(__dirname, './public')));

// Indicamos que serviremos el archivo index.html cuando accedamos a esta ruta
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});