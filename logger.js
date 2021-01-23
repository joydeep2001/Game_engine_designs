const EventEmitter = require('events');
const emitter = new EventEmitter();

// console.log(__filename);
// console.log(__dirname)

class Logger extends EventEmitter {
    log(message){
        console.log(message);
        //raise a event
        this.emit('messageLogged', {id: 1, url: 'url'});
    }
    
}

var url = "http://myloger.oi/log";



module.exports = Logger;
