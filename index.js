
const line=document.querySelector(".box");
line.style.backgroundColor="black";
line.style.transition = "transform 5s ease";


pixel=1355;
window.addEventListener("load",()=>{
    line.style.transform = `translateX(-${pixel}px)`; 
    
})


 