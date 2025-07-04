// var splide  = new splide(".portfolio_splide",{
//   type:"loop",
//   perPage:4,
//   autoplay:true,
//   pagination:false,
//   breakpoints:{
//     1000:{
//       perPage:3
//     },
//     768:{
//       perPage:2
//     },
//     500:{
//       perPage:1
//     },
//   },
// });


// splide.mount();



// script.js

document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.portfolio_splide', {
    type: 'loop',
    perPage: 4,
    autoplay: true,
    pagination: false,
    breakpoints: {
      1000: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});



// // script.js

// const scrollContainer = document.getElementById("scrollable");
// const btnLeft = document.querySelector(".scroll_btn.left");
// const btnRight = document.querySelector(".scroll_btn.right");

// // اسکرول با دکمه
// btnLeft.addEventListener("click", () => {
//   scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
// });
// btnRight.addEventListener("click", () => {
//   scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
// });

// // درَگ با ماوس یا تاچ
// let isDown = false;
// let startX;
// let scrollLeft;

// scrollContainer.addEventListener("mousedown", (e) => {
//   isDown = true;
//   scrollContainer.classList.add("active");
//   startX = e.pageX - scrollContainer.offsetLeft;
//   scrollLeft = scrollContainer.scrollLeft;
// });
// scrollContainer.addEventListener("mouseleave", () => {
//   isDown = false;
// });
// scrollContainer.addEventListener("mouseup", () => {
//   isDown = false;
// });
// scrollContainer.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - scrollContainer.offsetLeft;
//   const walk = (x - startX) * 2;
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });

// // تاچ (موبایل)
// scrollContainer.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].pageX;
//   scrollLeft = scrollContainer.scrollLeft;
// });
// scrollContainer.addEventListener("touchmove", (e) => {
//   const x = e.touches[0].pageX;
//   const walk = (x - startX) * 1.5;
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });


document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.team_splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: true,
    pagination: false,
    gap: '2rem',
    breakpoints: {
      1000: { perPage: 3 },
      768: { perPage: 2 },
      500: { perPage: 1 },
    },
  });
  splide.mount();
});



// let client_link1 = document.querySelector(".client_link1");
// let client_link2 = document.querySelector(".client_link2");
// let client_link3 = document.querySelector(".client_link3");



// let client_det1 = document.querySelector(".client_det1");
// let client_det2 = document.querySelector(".client_det2");
// let client_det3 = document.querySelector(".client_det3");


// client_link1.addEventListener("click",()=>{
//   client_det1.style.left = "0%";
//   client_det1.classList.toggle("add_anim_left");
//   client_det1.style.display = "block";
//   client_det2.style.display = "none";
//   client_det3.style.display = "none";
// });




// client_link2.addEventListener("click",()=>{
//   client_det2.style.left = "0%";
//   client_det2.classList.toggle("add_anim_left");
//   client_det2.style.display = "block";
//   client_det1.style.display = "none";
//   client_det3.style.display = "none";
// });




// client_link3.addEventListener("click",()=>{
//   client_det3.style.left = "0%";
//   client_det3.classList.toggle("add_anim_left");
//   client_det3.style.display = "block";
//   client_det2.style.display = "none";
//   client_det1.style.display = "none";
// });






const clientLinks = document.querySelectorAll(".client_link");
const clientDetails = document.querySelectorAll(".client_det");

clientLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("data-target");

    clientDetails.forEach(detail => {
      if (detail.getAttribute("data-id") === targetId) {
        detail.classList.add("active");
      } else {
        detail.classList.remove("active");
      }
    });
  });
});


// const number = document.querySelectorAll(".count");

// let interval = 5000;
// number.forEach((valueDisplay)=>{
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-count"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function(){
//     startValue += 1;
//     valueDisplay.textContent = startValue
//     if(startValue == endValue){
//       clearInterval(counter);
//     }
//   }, duration)
// });














// const numbers = document.querySelectorAll(".count");
// const duration = 2000; // کل زمان انیمیشن (2 ثانیه)

// numbers.forEach((el) => {
//   let endValue = parseInt(el.getAttribute("data-count"));
//   let startTime = null;

//   const updateCounter = (timestamp) => {
//     if (!startTime) startTime = timestamp;
//     const progress = timestamp - startTime;
//     const current = Math.min(Math.floor((progress / duration) * endValue), endValue);
//     el.textContent = current;

//     if (current < endValue) {
//       requestAnimationFrame(updateCounter);
//     }
//   };

//   requestAnimationFrame(updateCounter);
// });




const counters  = document.querySelectorAll(".count");
const duration = 2000;
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;



function animateCounter(el,start,end){
  let startTime  = null;


  const update = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const current = Math.min(Math.floor((progress/duration)*(end - start))+ start ,end);
    el.textContent = current;


    if(current<end) {
      requestAnimationFrame(update);
    }
  };


  requestAnimationFrame(update);
}
function getStoredData(){
  const data = localStorage.getItem("counterData");
  return data ? JSON.parse(data):null;
}


function saveData(data){
  localStorage.setItem("counterData",JSON.stringify(data))
}


function initCounters(){
  const saved = getStoredData();
  const now  = Date.now();
  let updatedData = {
    lastUpdate:now,
    values : []
  };


  counters.forEach((el,i)=>{
    const baseValue = parseInt(el.getAttribute("data-count"));
    let currentValue = baseValue;

    if(saved){
      const lastValue = saved.values[i] || baseValue;
      const lastUpdate = saved.lastUpdate;


      if (now-lastUpdate > ONE_MONTH_MS){
        const increased = Math.floor(lastValue*1.02);
        currentValue = increased;
      }else{
        currentValue = lastValue;
      }
    }


    animateCounter(el,0,currentValue);

    updatedData.values.push(currentValue);
  });

  saveData(updatedData);
}


initCounters();


// const nav_open = document.querySelector(".ri-menu-5-fill");
// const menu = document.querySelector('.ul');
// const nav_close = document.querySelector('#close_menu');


// nav_open.addEventListener("click",()=>{
//   menu.classList.add("show_menu");
// });

// nav_close.addEventListener("click",()=>{
//   menu.classList.remove("show_menu");
// });



// nav_open.addEventListener("click", () => {
//   menu.classList.add("show_menu");
// });

// nav_close.addEventListener("click", () => {
//   menu.classList.remove("show_menu");
// });


const nav_open = document.getElementById("open_menu");
const nav_close = document.getElementById("close_menu");
const menu = document.querySelector("nav ul");

nav_open.addEventListener("click", () => {
  menu.classList.add("show_menu");
});

nav_close.addEventListener("click", () => {
  menu.classList.remove("show_menu");
});
