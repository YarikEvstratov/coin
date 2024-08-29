const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const sliders = document.querySelectorAll(".slider__img")
let index = 0;
function chanheClassActive(kivuk) {
    for (const slide of sliders) {
        slide.classList.remove("active")
    }
    sliders[kivuk].classList.add("active")
}
function nextSlide() {
    indsex++;
    if (indsex > sliders.length - 1) {
        indsex = 0;
        chanheClassActive(indsex);
    } else {
        chanheClassActive(indsex);
    }
}



function prevSlide() {
    indsex--;
    if (indsex < 0) {
        indsex = sliders.length - 1;
        chanheClassActive(indsex);
    } else {
        chanheClassActive(indsex);
    }
}
prev.addEventListener("click",prevSlide)
next.addEventListener("click",nextSlide)


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


