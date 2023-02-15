let preloader = document.querySelector("[data-preloader]");
window.addEventListener('load',()=>{
    preloader.classList.add("remove");
});

/* add event on multiple elements */
const addEventsOnElements = function (elements,eventType,callback){
    for(let i=0;i<elements.length;i++){
        elements[i].addEventListener(eventType,callback);
    }
};
/* nav bar toggler for mobile */
const navbar = document.querySelector("[data-navbar]");
const navtogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggleNav = function (){
    navbar.classList.toggle('active');
    //navtogglers.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
}
addEventsOnElements(navtogglers,"click",toggleNav);

/* header while navigating */
const header = document.querySelector("[data-header]");

window.addEventListener('scroll',function(){
    header.classList[window.scrollY > 100 ?"add" : "remove"]("active");
});