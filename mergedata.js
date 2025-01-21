const arr1 = { name: 'thanmai', age: 20, city: 'Hyderabad' };
const arr2 = { college: 'CVR', branch: 'CSE' };
const arr3 = { address: 'LBNagar' };


let merge = { ...arr1, ...arr2, ...arr3 };


console.log(JSON.stringify(merge)); 
