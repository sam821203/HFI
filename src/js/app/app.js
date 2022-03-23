// hero section slide
function heroSwiper() {
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
}

// more product toggle
function productToggle() {
  $(".more-product").on("click", function () {
    $(this).toggleClass("is-active");
    $(this).siblings(".list-body").slideToggle();
  });
}

// digital library toggle
function categoryToggle() {
  $(".toggle-cat").on("click", function () {
    $(this).toggleClass("cat-active");
    $(this).siblings(".cat-body").slideToggle();
  });
}

// inquiry list toggle
function listToggle() {
  $(".toggle-list").on("click", function () {
    $(this).toggleClass("list-active");
    $(this).siblings(".list-body").slideToggle();
  });
}

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

// Change image color
function imgColorChange() {
  var proColor = function () {
    const imgSrc = $(this).attr("src");
    $(".product-hall img").attr("src", imgSrc);
  };
  $("body").on("click", ".product-color img", proColor);
}

// Change image on hover
function hoverBackground() {
  var hoverBg = function () {
    const bgSrc = $(this).attr("src");
    console.log(bgSrc);
    $(".hoverbg img").attr("src", bgSrc);
  };

  $("body").on("mouseover", ".hoverbg-items img", hoverBg);
}

// scroll header
function scrollHeader() {
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $(".site-header").addClass("is-active");
    } else {
      $(".site-header").removeClass("is-active");
    }
  });
}

// menu bar
function menuBarToggle() {
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
}

$(function () {
  productToggle();
  categoryToggle();
  listToggle();
  heroSwiper();
  imgColorChange();
  scrollHeader();
  menuBarToggle();
});

AOS.init({
  duration: 1200,
});
