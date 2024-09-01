let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
var darkBtn = document.getElementById("dark-btn");


let val;


window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList. add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}
/*navigation menu js*/

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}
/*side bar close*/
let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    });
}
/* Drak Theme */
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");    
    }
    else{
        localStorage.setItem("theme", "light");
    }
}
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}


