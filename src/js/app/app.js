// hero section slide
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// hide info
// function hideInfo() {
//   let myButton = document.querySelectorAll("button[type=button]");
//   let myinfo = document.querySelectorAll("div.myinfo");

//   for (let i = 0; i < myinfo.length; i++) {
//     if (myinfo[i].style.display === "none") {
//       myinfo[i].style.display = "block";
//     } else {
//       myinfo[i].style.display = "none";
//     }
//   }
// }

// function hideInfo() {
//   let myButton = document.querySelectorAll("button[type=button]");
//   let myinfo = document.querySelectorAll("div.myinfo");

//   for (let i = 0; i < myinfo.length; i++) {
//     if (myinfo[i].style.display === "none") {
//       myinfo[i].style.display = "block";
//       myinfo[i].classList.add("info-fadein");
//     } else {
//       myinfo[i].style.display = "none";
//       myinfo[i].classList.add("info-fadeout");
//     }
//   }
// }

// const menuBar = document.querySelector(".menu-bar");
// let menuBarOpen = false;

// menuBar.addEventListener("click", function () {
//   if (!menuBarOpen) {
//     menuBar.classList.add("open");
//     menuBarOpen = true;
//   } else {
//     menuBar.classList.remove("open");
//     menuBarOpen = false;
//   }
// });

// const toggleBtn = document.querySelectorAll(".toggle-cat");
// let openInfo = false;
// console.log(toggleBtn);
// toggleBtn.addEventListener("click", function () {
//   console.log("hi");
//   if (!openInfo) {
//     toggleBtn.classList.add("open");
//     openInfo = true;
//   } else {
//     toggleBtn.classList.remove("open");
//     openInfo = false;
//   }
// });

function hideshow() {
  let toggleBtn = document.getElementsByClassName(".toggle-cat");
  let openInfo = false;

  for (let i = 0; i < toggleBtn.length; i++) {
    if (!openInfo) {
      toggleBtn.classList.add("open");
      openInfo = true;
    } else {
      toggleBtn.classList.remove("open");
      openInfo = false;
    }
  }
}

// function hideInfo() {
//   var x = document.querySelectorAll("div.myinfo");
//   console.log(x);
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// pagination
let count = 1;
let countPage = document.getElementById("count");
function plus() {
  console.log("hi");
  count++;
  countPage.value = count;
}
function minus() {
  if (count > 1) {
    console.log("minus");
    count--;
    countPage.value = count;
  }
}
