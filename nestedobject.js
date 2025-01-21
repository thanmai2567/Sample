function nested(details){
    const {street,city}=details.address
    return {street,city}
}



const details = {name: "Alice", address: {street: "123 Main St",  
    city: "Los Angeles", zip: "90001"}, age: 25}; 

    const d=nested(details)
    console.log(d)