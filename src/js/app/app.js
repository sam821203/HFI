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

// Change detail image
function detailChange() {
  var detailImg = function () {
    const imgSrc = $(this).attr("src");
    $(".big-img-hall img").attr("src", imgSrc);
  };
  $("body").on("click", ".small-img img", detailImg);
}

// Change image on hover
function hoverBackground() {
  var hoverBgEnter = function () {
    const bgSrc = $(this).find("img").attr("src");
    $(".hoverbg img").toggleClass("hall-animate");
    $(".hoverbg img").attr("src", bgSrc);
  };

  $("body").on("mouseenter", ".hoverbg-items", hoverBgEnter);
  $("body").on("mouseleave", ".hoverbg-items", hoverBgEnter);
}

// scroll header
function scrollHeaderWhite() {
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

// Change image color
function imgColorChange() {
  var proColor = function () {
    const bigColor = $(this).next(".product-big-color");
    const imgSrc = bigColor.children().attr("src");
    $(".product-hall img").attr("src", imgSrc);
  };
  $("body").on("click", ".product-color img", proColor);
}

function imgColorBorder() {
  var switchBorder = function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  };

  $("body").on("click", ".product-color", switchBorder);
}

// mouse follow
function mouseFollow() {
  const cursor = document.querySelector(".cursor");
  const speed = 0.25;
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const xSet = gsap.quickSetter(cursor, "x", "px");
  const ySet = gsap.quickSetter(cursor, "y", "px");

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });

  $("[data-cursor]").on("mouseenter", function () {
    $(cursor).removeClass("opacity-0");
    $(cursor).addClass("opacity-100");
  });
  $("[data-cursor]").on("mouseleave", function () {
    $(cursor).removeClass("opacity-100");
    $(cursor).addClass("opacity-0");
  });
}

$(function () {
  productToggle();
  categoryToggle();
  listToggle();
  detailChange();
  hoverBackground();
  scrollHeaderWhite();
  menuBarToggle();
  imgColorChange();
  imgColorBorder();
  mouseFollow();
});

AOS.init({
  duration: 1200,
});
