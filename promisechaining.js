async function runsteps(){
    await delaymssg("async",1000);
    await delaymssg("async",1000);
}
runsteps();
function delaymssg(mssg,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(mssg);
            resolve();
        },delay);
    })
}