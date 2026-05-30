const boxes = document.querySelectorAll('.box');
const callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('displayed');
        } else {
            entry.target.classList.remove("displayed");
        }
    });
};

const io = new IntersectionObserver(callback);
boxes.forEach(box => {
    io.observe(box);
});

