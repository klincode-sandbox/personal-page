let hamburgerBtn = document.querySelector(".hamburger");
let headerBtn = document.querySelector("header button");
let topBtn = document.querySelector("footer+button");
let headerHeight = document.querySelector("header").offsetHeight;
let nav = document.querySelector("nav");
hamburgerBtn.addEventListener("click", function () {
    nav.classList.toggle("active");


})

headerBtn.addEventListener("click", function () {
    for (let x = 0; x <= headerHeight; x++) {

        window.scroll(0, headerHeight)
    }

})

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > headerHeight) {
        topBtn.classList.add("active");
    } else topBtn.classList.remove("active");

})

topBtn.addEventListener("click", function () {
    window.scroll(0, 0);
})