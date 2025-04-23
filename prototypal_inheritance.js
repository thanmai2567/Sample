/*function Animal(name){
    this.name=name;

}
Animal.prototype.speak=function(){
    console.log(this.name+ "makes sound")
}
function dog(name,breed){
    Animal.call(this,name);
    this.breed=breed
}
dog.prototype=Object.create(Animal.prototype);
dog.prototype.constructor=dog;
dog.prototype.bark=function(){
    console.log(this.name+ "barks "+this.breed)
}
var dog1=new dog("thanmai","poodel");
dog1.speak();
dog1.bark();*/

class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(this.name+"makes sound")
    }
}
class dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed
    }
    bark(){
        console.log(this.name+"barks "+this.breed)
    }
}
var dog1=new dog("tommy","poodel");
dog1.speak();
dog1.bark();