
function delayedMessage(message, delay, callback) {
            setTimeout(() => {
              console.log(message);
              callback();  
            }, delay);
          }
          
         
          function Message() {
            console.log("Message has been printed.");
          }
          
       
          delayedMessage("this message was delayed ", 200, Message);
          