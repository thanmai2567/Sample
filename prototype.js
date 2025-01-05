
function Car(make, model) {
    this.make = make;
    this.model = model;
}


Car.prototype.getDetails = function() {
    return `${this.make} ${this.model}`;
};


const myCar = new Car("Toyota", "Camry");

console.log(myCar.getDetails());  


console.log(myCar.__proto__);  


Car.prototype.getMake = function() {
    return this.make;
};

console.log(myCar.getMake()); 


console.log(myCar.__proto__ === Car.prototype);  
console.log(Car.prototype.__proto__); 

