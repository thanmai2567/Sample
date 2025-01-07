
function  student(name,grade){
    this.name=name;
    this.grade=grade;
    this.study=function(){
        console.log(this.name+" is studying");
    }
    this.getgrade=function(){
        return this.grade;
    }
}
    let student1=new student("ALICE","B")
    let student2=new student("Thanmai","S")
    let student3=new student("XYZ","A+")


student1.study()
console.log(student1.getgrade())
student2.study()
console.log(student2.getgrade())
student3.study()
console.log(student3.getgrade())
