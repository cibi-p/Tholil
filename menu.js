const navToggle= document.querySelector(".nav-toggles");
const links= document.querySelector(".links");
console.log(navToggle);
console.log(links);
navToggle.addEventListener('click',function(){
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add("show-links");
    }
})