/*const user={
    name:"thanmi",
    profile:{
        age:20,
        location:"hyderbad"
    }
}
let{name,profile:{age,location}}=user;
console.log(name,age,location);

let{name:user_name,profile:{age:user_age,location:user_location}}=user;
console.log(user_name,user_age,user_location);
// destructing in function*/

const nums=[1,2,3,4,5];
const [a,b,c,d,e]=nums;

console .log(a,b,c,d,e);

const [x,,y,,z]=nums;
console .log(x,y,z);

const[t,o,u,...r]=nums;
console .log(t,o,u);
console.log(r);

const[...num]=nums;
console.log(num);


