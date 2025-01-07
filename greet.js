function person(name,age){
    this.name=name;
    this.age=age;

    this.greet=function(){
        console.log("hi"+" "+this.name);
    }
    this.adult=function(){
        if(this.age>18){
            console.log(this.name+" "+"is an adult");
        }
        else{
            console.log(this.name+" "+"is not an adult");
    }
}
}
let p=new person("thanmai",20);
p.greet();
p.adult();

