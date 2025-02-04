const fs=require('fs')
fs.writeFileSync("./sample.txt","Hello")
const c=fs.readFileSync("./sample.txt")
console.log(c)
const f=fs.readFileSync("./sample.txt","utf-8")
console.log(f)


const j=fs.writeFileSync("./test.txt","welcome to FSD Lab",(err)=>{
    if(err)
        console.log("error in the file test.txt")
    else
    console.log("file test.txt created successfully")  
}) 
console.log("file test.txt created successfully") 

