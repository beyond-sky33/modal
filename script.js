let btn = document.querySelector("button")

let popup = 0;

btn.addEventListener("click",function(){
    if(popup==0){
        document.querySelector("#fs").style.opacity = 1;
        document.querySelector("#model").style.top = "15%";
        popup = 1
    }else{
        document.querySelector("#fs").style.opacity = 0;
        popup=0
    }  
})