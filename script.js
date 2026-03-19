//                   Performance Optimization
//  1. ------------ Debouncing ----------


// let inp=document.querySelector("input");
 
// function debounce(fnc,delay){
// let timer;
// return function(...args){
//     clearTimeout(timer);
//     timer=setTimeout(()=>{
//         fnc(...args);
//     },delay);
// }

// }

// inp.addEventListener("input",debounce(function(){
//     console.log("hui hui");
    
// }, 1000));

 



//    -------------- Throttle -----------

// let inp=document.querySelector("input");

// function throttle(fnc,delay){
// let timer=0;
// return function(...args){
//     let now=Date.now();
//     if(now-timer>=delay){
//         timer=now
//         fnc(...args);
//     }
// }

// }

// inp.addEventListener("input",throttle(function(){
//     console.log("hui hui");
    
// }, 1000));


//  --------- Intersection Observer --------


// img-card aur empty-card dono select karo
// let cards = document.querySelectorAll(".img-card, .empty-card");

// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(function(entry) {
//         if (entry.isIntersecting) {

//             // "visible" class — CARD pe lagao, img pe nahi!
//             entry.target.classList.add("visible");

//             // Agar card ke andar img hai — lazy load karo
//             const img = entry.target.querySelector("img");
//             if (img && img.dataset.src) {
//                 img.src = img.dataset.src;
//             }

//             observer.unobserve(entry.target);
//         }
//     });
// }, {
//     root: null,
//     threshold: 0.1  // 0.8 bahut zyada tha — 0.1 rakhna better hai
// });

// cards.forEach(function(card) {
//     observer.observe(card);
// });


//  --------  Code Splitting ---------
// let btn=document.querySelector("#btn");
// btn.addEventListener("click",async function(){
//     let heavy = await import ("./heavy.js");
//     heavy.veryheavy()
// })


// Advanse Topics & Architecture Thinking

// Seperation of Cencernus

let btn=document.querySelector("button");
let ul=document.querySelector("ul");

function add(n1,n2){
return n1+n2;
}

btn.addEventListener("click",function(){
let num1=Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10);

let Addition=add(num1,num2);

let li=document.createElement("li");
li.textContent=Addition;
ul.appendChild(li);
});