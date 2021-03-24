var closeModalBtn=document.querySelector("#close-modal");
var showModalBtn=document.querySelector("#show-modal");
var modal=document.querySelector("#modal")

var asideNavLink=document.querySelector(".aside-nav-links")

var hamBugerBtn=document.querySelector(".ham-burger")

var isHamBugerClicked=false;
var mobileNav=document.querySelector("#mobile-nav");

var avatarLink=document.querySelector("#avatar-link");
var badgesLink=document.querySelector("#badges-link")
var buttonsLink=document.querySelector("#buttons-link")
var cardLink=document.querySelector("#card-link")
var imagesLink=document.querySelector("#images-link")
var inputLink=document.querySelector("#inputs-link")
var navigationLink=document.querySelector("#navigation-link")
var modalLink=document.querySelector("#modal-link")
var ratingsLink=document.querySelector("#rating-link")
var gridLink=document.querySelector("#grid-link")
var textUtilitiesLink=document.querySelector("#text-utilities-link")
var toastLink=document.querySelector("#toast-link")


var container=document.querySelector("#container");

function hamBurgerFunction(){
    if(isHamBugerClicked){
        mobileNav.style.display="flex"
        container.style.display="none"
        isHamBugerClicked=false
    }
    else{
        mobileNav.style.display="none"
        container.style.display="flex"
        isHamBugerClicked=true

    }
}


// var

// asideNavLink.addEventListener("click", ()=>asideNavLink.style.backgroundColor="#fc9e23")
hamBugerBtn.addEventListener("click",hamBurgerFunction)
avatarLink.addEventListener("click",hamBurgerFunction)
badgesLink.addEventListener("click",hamBurgerFunction)
buttonsLink.addEventListener("click",hamBurgerFunction)
cardLink.addEventListener("click",hamBurgerFunction)
imagesLink.addEventListener("click",hamBurgerFunction)
inputLink.addEventListener("click",hamBurgerFunction)
navigationLink.addEventListener("click",hamBurgerFunction)
modalLink.addEventListener("click",hamBurgerFunction)
ratingsLink.addEventListener("click",hamBurgerFunction)
gridLink.addEventListener("click",hamBurgerFunction)
textUtilitiesLink.addEventListener("click",hamBurgerFunction)
toastLink.addEventListener("click",hamBurgerFunction)

showModalBtn.addEventListener("click",()=>modal.style.display="flex")

closeModalBtn.addEventListener("click",()=>{modal.style.display="none"})

