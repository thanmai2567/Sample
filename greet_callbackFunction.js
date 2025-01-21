function greet(name, callback) {
    const message = `Hello, ${name}!`;
    return callback(message);
  }
  
  
  function printMessage(message) {
    console.log(message);
  }
  
  
  greet("Thanmai", printMessage);
  