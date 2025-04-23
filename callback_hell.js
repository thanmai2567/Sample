function first(callback){
    setTimeout(()=>{
        console.log("step1");
        callback();
    },1000);
    }
    function second(callback){
        setTimeout(()=>{
            console.log("step2");
            callback();
        },1000);
        }
        function third(callback){
            setTimeout(()=>{
                console.log("step3");
                callback();
            },1000);
            }
            first(()=>{
                second(()=>{
                    third();
                })
            })