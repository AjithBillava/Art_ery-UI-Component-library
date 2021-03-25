
var isIndexHamBurgerClicked = true;
var indexMobileNav = document.querySelector("#index-mobile-nav")
var indexHamburgerBtn = document.querySelector("#index-ham-burger")
var indexContainer = document.querySelector("#index-container");
function indexHamBurgerFunction() {
    if (isIndexHamBurgerClicked) {
        indexMobileNav.style.display = "flex"
        indexContainer.style.display = "none"

        isIndexHamBurgerClicked = false
    } else {
        indexMobileNav.style.display = "none"

        indexContainer.style.display = "flex"

        isIndexHamBurgerClicked= true

    }
}
indexHamburgerBtn.addEventListener("click",indexHamBurgerFunction)




function windowResizeFunction() {
    if (window.matchMedia("(min-width: 780px)").matches) { 
        indexContainer.style.display = "flex";
        indexMobileNav.style.display = "none"
        isIndexHamBurgerClicked= true

    } 
}

window.addEventListener("resize",windowResizeFunction)