function step(mssg,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(mssg);
            resolve();
        },delay);
    
        })
}
step("step1",1000).then(()=>step("step2",1000))
.then(()=>step("step3",1000))