const http=require('http')

http.createServer((req,res)=>{
    res.write("FSD lab")
    res.end;
}).listen(1800,()=>{
    console.log("server is running on port 1800")
});


