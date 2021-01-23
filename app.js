// // function sayHello(name) {
// //     console.log('hello ' + name);
// // }
// const logger = require('./logger');
// logger.log('message');

//path module

// const path = require('path')
// let pathObj = path.parse(__filename);
// console.log(pathObj);

//os module
// const os = require('os');
// let totalMem = os.totalmem();
// let freeMem = os.freemem();

// console.log(`Total Memory: ${totalMem} \nFree Memory: ${freeMem}`)

//fileSystem Module

// const fs = require('fs');
// //synchronous call to readdir
// const files = fs.readdirSync('./');
// console.log(files);
// //asynchronous call to readdir
// fs.readdir('./$', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

//Emitter handling
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

//regester a listener
logger.on('messageLogged', function(arg){
    console.log('listener called', arg);

});

logger.log('message');
