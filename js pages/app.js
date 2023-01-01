let img = document.querySelector(".fa-magnifying-glass")
let container = document.querySelector(".serach")



img.addEventListener("click",()=>{
container.classList.toggle("input-hide")
});



var hamBergur = document.querySelector(".fa-bars")
var links   = document.querySelector(".nav-links")
var marquee = document.querySelector(".marquee")

hamBergur.addEventListener("click",()=>{
    links.classList.toggle("links-active")
marquee.classList.toggle("marquee")
});
