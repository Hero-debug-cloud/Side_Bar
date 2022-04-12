
var open=document.querySelector(".open");
open.addEventListener('click',function(){
    // console.log("clicked");
    document.getElementById("a").classList.remove("hiding");
    document.getElementById("a").classList.add("side_bar");  
});
var cancel=document.querySelector(".cancel");
cancel.addEventListener('click',function(){
    document.getElementById("a").classList.add("hiding");
    document.getElementById("a").classList.remove("side_bar");
})