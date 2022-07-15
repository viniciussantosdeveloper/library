let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

let maxScroll = -sCont.offsetwidth + hScroll.offsetWidth;

function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);

    if(currentScrollPosition > 0){
        currentScrollPosition = 0
    }

    if(currentScrollPosition < maxScroll){
        currentScrollPosition = maxScroll;
    }

    sCont.style.left = currentScrollPosition + "px";
}