
let promise1 = new Promise((resolve, reject) => resolve(1));
let promise2 = new Promise((resolve, reject) => resolve(10));
let promise3 = new Promise((resolve, reject) => resolve(5));


promise1
  .then(value1 => {
    return promise2.then(value2 => {
      return value1 + value2;
    });
  })
  .then(sum => {
    return promise3.then(value3 => {
      return sum + value3;
    });
  })
  .then(totalSum => {
    console.log('Total Sum:', totalSum);
  })
  .catch(error => {
    console.error('Error:', error);
  });
