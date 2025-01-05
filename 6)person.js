
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.describe = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
};


function Student(name, age, graded) {
    Person.call(this, name, age);  
    this.graded = graded;          
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.study = function() {
    return `${this.name} is studying for grade ${this.graded}.`;
};


const person = new Person("John", 30);
console.log(person.describe());  

const student = new Student("John", 30, "A");
console.log(student.describe()); 
console.log(student.study());    
