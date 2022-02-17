let popup = document.querySelector(".window");
let flash = document.querySelector("#open-window");
let close = document.querySelector("#close-window");
flash.onclick = function (){
    popup.style.display = "block";
};
close.onclick = function() {
    popup.style.display = "none";
};
//-----------------------------------------//
let popup1 = document.querySelector(".window1");
let flash1 = document.querySelector("#open-window1");
let close1 = document.querySelector("#close-window1");
flash1.onclick = function (){
    popup1.style.display = "block";
};
close1.onclick = function() {
    popup1.style.display = "none";
};
//------------------------------------------//
let popup2 = document.querySelector(".window2");
let flash2 = document.querySelector("#open-window2");
let close2 = document.querySelector("#close-window2");
flash2.onclick = function (){
    popup2.style.display = "block";
};
close2.onclick = function() {
    popup2.style.display = "none";
};

//------------------------------------//
let button = document.querySelector('.hamburger'); //ищем кнопку
let menu = document.querySelector('.navbar'); //ищем в DOM элемент с классом навигации, которая скрыта за бургером
let body = document.querySelector("body");
button.onclick = () => {                            //накидываем на кнопку обработчик событий по клику.
    menu.classList.toggle('active');// тут добавляешь класс к меню, который будет открывать это меню
    button.classList.toggle('active');// тут добавляешь класс к бургеру, который будет открывать это меню
}
//----------------------------------//
