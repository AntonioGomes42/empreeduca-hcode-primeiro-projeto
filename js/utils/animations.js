function addEventListenerToElement(classAnimationName, el){
    document.addEventListener('scroll',()=>{
        let elementOffSetTop = el.offsetTop;
        let divOffSetBottom = elementOffSetTop + el.offsetHeight;
        let scroll = window.scrollY;
        if(((window.innerHeight + scroll) >= (elementOffSetTop)) && (scroll < divOffSetBottom)){
            el.style.opacity = "1";
            el.classList.add(classAnimationName); 
        } else{
            el.style.opacity = "0";
            el.classList.remove(classAnimationName); 
        }
    })  
}

document.querySelectorAll('.fadeRigthAnimation').forEach((element)=>{
    addEventListenerToElement('fadeRigthAnimation', element);
})

document.querySelectorAll('.fadeLeftAnimation').forEach((element)=>{
    addEventListenerToElement('fadeLeftAnimation', element);
})

document.querySelectorAll('.fadeDownAnimation').forEach((element)=>{
    addEventListenerToElement('fadeDownAnimation', element);
})

document.querySelectorAll('.fadeUpAnimation').forEach((element)=>{
    addEventListenerToElement('fadeUpAnimation', element);
})
