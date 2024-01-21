
const scrollElements = document.querySelectorAll('.basic-scroll');
const flagship = document.querySelectorAll('.basic-right');
const basicBelow = document.querySelectorAll('.basic-below');
const left = document.querySelector('.from-left');
const right = document.querySelector('.from-right');
const below = document.querySelector('.from-below');

const options = {
    threshold: 0.7,
    rootMargin: '50px'
};

const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }      
        })
    }, options);

scrollElements.forEach(element => {
    observer.observe(element);
})
observer.observe(below);
observer.observe(left);
observer.observe(right);

const options2 = {
    threshold: 1,
    rootMargin: '50px'
};

const observer2 = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }      
        })
    }, options2);


basicBelow.forEach(element => {
    observer.observe(element);
})



