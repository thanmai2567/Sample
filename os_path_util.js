const os = require('os');
const path = require('path');
const util = require('util');
const EventEmitter = require('events');

// OS module
console.log("System Info:");
console.log("Platform:", os.platform());
console.log("Free Memory:", os.freemem());

// Path module
const filePath = '/user/docs/file.txt';
console.log("File name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));

// Util module
const debuglog = util.debuglog('nodejs');
debuglog('This is a debug message');

// Events module
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('An event occurred!');
});
myEmitter.emit('event');
