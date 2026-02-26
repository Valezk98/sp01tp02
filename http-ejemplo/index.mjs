import http from 'http';

// Crear un servidor http basico

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, mundo!');
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor corriendo en http://127.00.1:3000/');
});