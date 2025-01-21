function object(details){
    const {city,name}=details;
    return{city,name}
}



const details = {name: "Afroz", age: 30, city: "Hyderabad", country: "INDIA"}; 
let p=object(details);
console.log(p)
