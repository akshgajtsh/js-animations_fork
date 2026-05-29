const accordions_animation = document.querySelectorAll('.list-item');
accordions_animation.forEach(accordion_animarion => {
    accordion_animarion.addEventListener('click', (event) => {
        const text = accordion_animarion.querySelector('.list-content');
        if (text.classList.contains('open')) {
            text.classList.remove('open');
            text.style.height = '0px';
        } else {
            text.classList.add('open');
            text.style.height = text.scrollHeight + 'px';
        }
    });
});
