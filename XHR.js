const xhr=new XMLHttpRequest();
xhr.open("Get","https://github.com/thanmai2567",true);
xhr.onload=function(){
    if(xhr.status===200){
        const data=JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();