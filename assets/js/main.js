/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};

navLinks.forEach((link) => link.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    document
        .getElementById("header")
        .classList[this.scrollY >= 50 ? "add" : "remove"]("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const showScroll = () => {
    document
        .getElementById("scroll-up")
        .classList[this.scrollY >= 350 ? "add" : "remove"]("show-scroll");
};

window.addEventListener("scroll", showScroll);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
