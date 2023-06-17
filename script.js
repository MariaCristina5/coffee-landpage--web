'use-strict'
// SLIDER
const slider = function() {
// DOM manipulation
const slides = document.querySelectorAll('.slide');
const logoH1 = document.querySelector('.logo-heading');
const lineContainer = document.querySelector('.lines');

// Global variables
let curSlide = 0;
const maxSlide = slides.length;

// FUNCTIONS
//Create lines for every slide
const createLines = function() {
    slides.forEach(function(_, i) {
        lineContainer.insertAdjacentHTML('beforeend', `<button class="lines-line" data-slide="${i}"></button>`)
    });
};


// Makes current slide line active
const activateLine = function(slide) {
    document.querySelectorAll('.lines-line').forEach(line => line.classList.remove('lines-line-active'));
    document.querySelector(`.lines-line[data-slide="${slide}"]`).classList.add('lines-line-active');
};


//Changes at a certain slide
const goToSlide = function(slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i-slide)}%)`));
};


//Changes slides at every 3.5s
setInterval(goRight, 3500)
function goRight() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0;
    }else {
        curSlide++;
    }
    if(curSlide === 1 || curSlide === 2){
        logoH1.textContent = 'served with love & smiles'.toUpperCase();
    }else {
        logoH1.textContent = 'code with coffee & smiles'.toUpperCase();
    }
    goToSlide(curSlide);
    activateLine(curSlide);
};

const init = function () {
    createLines();
    activateLine(0);
    goToSlide(0);
}
init();

//Makes lines clickable
// lineContainer.addEventListener('click', function(e) {
//     if(e.target.classList.contains('lines-line')){
//         const {slide} = e.target.dataset;
//         goToSlide(slide);
//         activateLine(slide);
//     };
// });
};
slider();