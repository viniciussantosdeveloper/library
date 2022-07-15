var scrollPos = 0;
var scrollAmount = 320;

const sCont = document.querySelector('.storys-container')
const hScroll = document.querySelector('.horizontal-scroll')

const btnLeft = document.querySelector("#btn-scroll-left")
const btnRight = document.querySelector("#btn-scroll-right")

btnLeft.style.opacity = "0"

var maxScroll = -sCont.offsetWidth + hScroll.offsetWidth

function scrollHorizontally(val){
    scrollPos += (val * scrollAmount)

    if(scrollPos > 0){
        scrollPos = 0
        btnLeft.style.opacity = "0"
    }else{
        btnLeft.style.opacity = "1"
    }

    if(scrollPos < maxScroll){
        scrollPos = maxScroll
        btnRight.style.opacity = "0"
    }else{
        btnRight.style.opacity = "1"
    }

    sCont.style.left = scrollPos + "px";
}