// Sticky navigation
const section1 = document.querySelector('.hero-section');
const nav = document.querySelector('.navbar');


// const initialCords = section1.getBoundingClientRect();
// console.log(initialCords)
// window.addEventListener('scroll', function () {
// if(window.scrollY > initialCords.top) nav.classList.add('sticky')
// else nav.classList.remove('sticky');
// })

// Sticky navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry)
//     })
// };

// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
    const [entry] = entries;

    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(section1)