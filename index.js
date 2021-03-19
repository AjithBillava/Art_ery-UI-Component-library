


var closeModalBtn=document.querySelector("#close-modal");
var showModalBtn=document.querySelector("#show-modal");
var modal=document.querySelector("#modal")



showModalBtn.addEventListener("click",()=>modal.style.display="block")

closeModalBtn.addEventListener("click",()=>{modal.style.display="none"})