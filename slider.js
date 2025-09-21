// collecting the variables.
const slides = document.querySelectorAll('.slide');
var counter = 0;

// LOGIC
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index*100}%`;  
})

const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    } 
}

const goNext = () => {
    if (counter <= 1) {
        counter++;
        slideImage();
    } 
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}




