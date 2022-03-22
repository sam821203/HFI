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
    nextEl: ".my-swiper-next",
    prevEl: ".my-swiper-prev",
  },
});

// function hideshow() {
//   let toggleBtn = document.getElementsByClassName(".toggle-cat");
//   let openInfo = false;

//   for (let i = 0; i < toggleBtn.length; i++) {
//     if (!openInfo) {
//       toggleBtn.classList.add("open");
//       openInfo = true;
//     } else {
//       toggleBtn.classList.remove("open");
//       openInfo = false;
//     }
//   }
// }

// more product toggle
$(".more-product").on("click", function () {
  $(this).toggleClass("is-active");
  $(this).siblings(".list-body").slideToggle();
});

// digital library toggle
$(".toggle-cat").on("click", function () {
  $(this).toggleClass("cat-active");
  $(this).siblings(".cat-body").slideToggle();
});

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

// Change image on selection
// var foo = function () {
//   const imgSrc = $(this).attr("src");

//   $(".movie-stills-carousel .carousel-wrap")
//     .find("img")
//     .css("transition", ".4s");

//   $(".movie-stills .hall-screen img").attr("src", imgSrc);
// };

// $("body").on("click", ".movie-stills-carousel .carousel-wrap li img", foo);

var proColor = function () {
  console.log("hi");
  // Get current image source
  const imgSrc = $(this).attr("src");

  // Apply grayscale to thumbnails except selected
  $(".movie-stills-carousel .carousel-wrap")
    .find("img")
    .css("filter", "grayscale(1)")
    .css("transition", ".4s");
  $(this).css("filter", "none");

  // Change image
  $(".product-hall img").attr("src", imgSrc);
};

$("body").on("click", ".product-color img", proColor);

// $(".product-color img").click(function () {
//   console.log("hi");
//   const imgSrc = $(this).attr("src");
//   $(".product-hall img").attr("src", imgSrc);
// });

// scroll header
$(window).on("scroll", function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 0) {
    $(".site-header").addClass("is-active");
  } else {
    $(".site-header").removeClass("is-active");
  }
});

// $(window).on("scroll", function () {
//   var scrollTop = $(this).scrollTop();
//   if (scrollTop > 0) {
//     $(".site-header-mob").addClass("is-active");
//   } else {
//     $(".site-header-mob").removeClass("is-active");
//   }
// });

// menu bar
const menuBar = document.querySelector(".menu-bar");
let menuBarOpen = false;

menuBar.addEventListener("click", function () {
  if (!menuBarOpen) {
    menuBar.classList.add("open");
    menuBarOpen = true;
  } else {
    menuBar.classList.remove("open");
    menuBarOpen = false;
  }
});
