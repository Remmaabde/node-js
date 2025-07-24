const logEvents = require('./logEvents');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

// Initialize Object (renamed to avoid conflict)
const myEmitter = new MyEmitter();

// Add Listener for log event
myEmitter.on('log', (message) => logEvents(message));

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);
