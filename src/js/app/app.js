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
function hideInfo() {
  let myButton = document.querySelectorAll("button[type=button]");
  let myinfo = document.querySelectorAll("div.myinfo");

  for (let i = 0; i < myinfo.length; i++) {
    if (myinfo[i].style.display === "none") {
      myinfo[i].style.display = "block";
    } else {
      myinfo[i].style.display = "none";
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

// function checkBorder() {
//   let checkBorder = document.querySelectorAll("input[name=checkborder]");
//   let borderBox = document.querySelectorAll("div[name=imgborder]");

//   for (let i = 0; i < checkBorder.length; i++) {
//     if (checkBorder[i].checked) {
//       borderBox[i].style.borderColor = "#E55400";
//     } else {
//       borderBox[i].style.borderColor = "transparent";
//     }
//   }
// }

// pagination

let count = 1;
let countPage = document.getElementById("count");
function plus() {
  count++;
  countPage.value = count;
}
function minus() {
  if (count > 1) {
    count--;
    countPage.value = count;
  }
}
