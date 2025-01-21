function add(num1,callback){
    const res= num1 + 10;
    return callback(res);
}
function subtract(num1,callback){
    const res=num1-3;
    return callback(res)
   
    
}
function multiplication(num1,callback){
    const res=num1*2
    return callback(res);
}


  
 
  function executeOperations(num1) {
    add(num1, (result1) => {
        subtract(result1, (result2) => {
            multiplication(result2, (result3) => {
          console.log("Final result:", result3);
        });
      });
    });
  }

  executeOperations(10);  
  