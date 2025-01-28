function timeoutPromise(duration, delay) {
    return new Promise((resolve, reject) => {
    
      const timeout = setTimeout(() => {
        reject(new Error('Timeout error'));
      }, duration * 1000);
  
    
      setTimeout(() => {
        clearTimeout(timeout);
        resolve('Promise resolved successfully'); 
      }, delay * 1000); 
    });
  }
  
 
  timeoutPromise(3, 4) 
    .then((message) => {
      console.log(message);  
    })
    .catch((error) => {
      console.error('Promise rejected:', error.message);  
    });
  