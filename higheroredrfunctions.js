function greet(name){
    return `hello, ${name}`;
}
function proccess(callback){
    const username="thanmai";
    console.log(callback(username));
}
proccess(greet);

function multiply(factor){
    return function(number){
        return number*factor;
    }
}
const double=multiply(2);
console.log(double(4))

const nums=[1,2,3,4,5];
const squares=nums.map(function(num){
    return num*num;
}
)
console.log(squares);

const even=nums.filter(function(num){
    return num%2==0
    
})

console.log(even);
const totsl=nums.reduce(function(accumulator,num){
    return accumulator+num;
}
,0)
    
console.log(totsl);