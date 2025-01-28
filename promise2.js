/*Write a function that returns a promise, and the promise should 
be rejected with an error if it takes longer than a specified timeout duration 
(e.g., 3 seconds).*/
function timeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout error'));
            }, duration * 1000);
            });
            };




timeoutPromise(3)
    .then(()=>{
            console.log('Promise resolved');
    })
    .catch((error)=> {
        console.error('Promise rejected:', error);
        })
      


            
