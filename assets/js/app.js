"use strict";

// hero section slide
function heroSwiper() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".my-swiper-next",
            prevEl: ".my-swiper-prev"
        }
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
var count = 1;
var countPage = document.getElementById("count");
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

// Change detail image
function detailChange() {
    var detailImg = function detailImg() {
        var imgSrc = $(this).attr("src");
        $(".big-img-hall img").attr("src", imgSrc);
    };
    $("body").on("click", ".small-img img", detailImg);
}

// Change image on hover
function hoverBackground() {
    var hoverBgEnter = function hoverBgEnter() {
        var bgSrc = $(this).find("img").attr("src");
        $(".hoverbg img").toggleClass("hall-animate");
        $(".hoverbg img").attr("src", bgSrc);
    };

    $("body").on("mouseenter", ".hoverbg-items", hoverBgEnter);
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
    var menuBar = document.querySelector(".menu-bar");
    var menuBarOpen = false;

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

// trend tab
// function trendSwitchTab() {
//   var switchTab = function () {
//     $(this).addClass("selected").siblings().removeClass("selected");
//     $(".trend-content > .trend-item").css("display", "flex").hide();
//     $($(this).data("value")).fadeIn();
//   };

//   $("body").on("click", ".trend-list ul li", switchTab);
// }

$(function () {
    productToggle();
    categoryToggle();
    listToggle();
    heroSwiper();
    detailChange();
    // imgColorChange();
    hoverBackground();
    scrollHeaderWhite();
    menuBarToggle();
    // trendSwitchTab();
});

AOS.init({
    duration: 1200
});

var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function parseThumbnailElements(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function onThumbnailsClick(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }

        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function photoswipeParseHash() {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function getThumbBoundsFn(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0],
                    // find thumbnail
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');