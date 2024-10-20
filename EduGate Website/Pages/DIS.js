let currentSlide = 1;

function plusSlides(n) {
    console.log(n);
    currentSlide += n;
    if (currentSlide > 4)
        currentSlide = 1;
    else if (currentSlide < 1)
        currentSlide = 4;

    adjustVisual();
}

function adjustVisual() {
    let oldCurrent = document.getElementsByClassName("current");
    oldCurrent[0].classList.remove("current");

    let newCurrent = document.getElementsByClassName("DIS-books-ele")[currentSlide-1];
    newCurrent.classList.add("current");
}