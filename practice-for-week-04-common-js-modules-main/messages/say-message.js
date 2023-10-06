const helloMessage = require('./hello-message');
module.exports = sayMessage;

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);
