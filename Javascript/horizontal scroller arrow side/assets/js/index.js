// // pseudo-código do segundo algoritmo: 
// // se o wrapper dos meus items tiver mais que quatro items 
// // as minhas setas aparecem
// // caso contrário não aparecem
// // wrapper dos meus items é o box ou item-div
// var wrapper = document.getElementById('box');

// var items = document.getElementsByClassName('item').length;
// var arrowRight = document.getElementById('right');
// var arrowLeft = document.getElementById('left');
// if (items > 3){
//     arrowRight.style.display = "block";
// }else{
//     arrowRight.style.display = "none"; 
// }
// // quinto algoritmo
// // var direita = document.getElementById('right');
// // direita.onclick = function () {
// // var container = document.getElementById('box');
// // sideScroll(container, 'right', 25,100,10);
// // arrowLeft.style.display = "block";
// // };
// // var container = document.getElementById('box');
// // if(scroll > 100) {
// //     arrowRight.style.display = "none";
// // }

// // var esquerda = document.getElementById('left');
// // esquerda.onclick = function () {
// // var container = document.getElementById('box');
// // sideScroll(container, 'left', 25,100,10);
// // arrowRight.style.display = "block";
// // };

// // function sideScroll(element,direction,speed,distance,step){
// // scrollAmount = 0;
// // if(scrollAmount > distance) {
// //     arrowRight.style.display = "none";
// // }
// // var slideTimer = setInterval(function () {
// // if (direction == 'left'){
// // element.scrollLeft -= step;
// // } else {
// // element.scrollLeft += step;
// // }
// // scrollAmount += step;
// // if(scrollAmount >= distance) {
// // window.clearInterval(slideTimer);
// // }
// // }, speed);
// // }
// var container = document.getElementById('box');
// function nativeScroll() {
// container.scrollLeft ({
//     left: 100,
//     behavior: "smooth",
// })
// }

// var direita = document.getElementById('right');
// direita.onclick = function () {
//     nativeScroll()
// }