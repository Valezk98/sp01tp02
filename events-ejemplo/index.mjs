import { EventEmitter } from 'events';

//crear una instancia de EventEmitter

const emisor = new EventEmitter();

//Define un evento personalizado

emisor.on('Saludo', (nombre) =>{
    console.log(`¡Hola, ${nombre}!`);
});

//Emitir el evento Saludo

emisor.emit('Saludo', 'Mundo');