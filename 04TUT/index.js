const logEvents = require('./logEvents');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {

}
//Initialize Object
const MyEmitter = new MyEmitter();
//Add Listener for log event
MyEmitter.on('log', (message) => logEvents(message));

setTimeout(() => {
    MyEmitter.emit('log', 'Log event emitted!');
}, 2000);
