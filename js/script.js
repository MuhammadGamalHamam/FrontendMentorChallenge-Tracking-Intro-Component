const menuBtn = document.querySelector('.header__menu-btn');
const nav = document.querySelector('.nav');
const hiddenNavAtr = 'data-hidden';
const closeIconAtr = 'icon-close';

const menuToggle = () => {
    if (nav.hasAttribute(hiddenNavAtr)) {
        nav.removeAttribute(hiddenNavAtr);
        menuBtn.setAttribute(closeIconAtr, '');
    } else {
        nav.setAttribute(hiddenNavAtr, '')
        menuBtn.removeAttribute(closeIconAtr)
    }
};

const menuHide =  (e) => {
    if (e.target !== menuBtn && !e.target.closest('nav') && !nav.hasAttribute(hiddenNavAtr)) {
        nav.setAttribute(hiddenNavAtr, '')
        menuBtn.removeAttribute(closeIconAtr)
    }
}

menuBtn.addEventListener('click', menuToggle);
window.addEventListener('click', menuHide)
