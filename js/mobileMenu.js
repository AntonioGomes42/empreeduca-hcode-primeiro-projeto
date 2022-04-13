const buttonOpenMenu = document.querySelector("#open-menu");
const buttonCloseMenu = document.querySelector(".remove");
const mobileMenu = document.querySelector(".mobile-menu")
const overlay = document.querySelector(".overlay");

function removeMobileMenu(){
    mobileMenu.classList.remove("open-menu");
    overlay.classList.remove("open-menu");
}

buttonOpenMenu.addEventListener("click", ()=>{
    mobileMenu.classList.add("open-menu");
    overlay.classList.add("open-menu");
})

buttonCloseMenu.addEventListener("click", ()=>{
    removeMobileMenu();
})

overlay.addEventListener("click", ()=>{
    removeMobileMenu();
})

