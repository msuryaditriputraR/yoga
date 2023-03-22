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
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 58,
            sectionId = section.getAttribute("id"),
            sectionClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeToggle = document.getElementById("theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// get previous theme selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// validate if user selected theme previously
if (selectedTheme) {
    // change the theme according to the previous user's choice
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeToggle.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

// create function to get current theme to save in local storage
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeToggle.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Activate / deactivate the theme with the button
themeToggle.addEventListener("click", () => {
    // ADD or remove dark class
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);

    // save to localstorage what theme user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(".home__data, .list__container, .join__content, .footer__container");
sr.reveal(".home__img", { origin: "bottom" });
sr.reveal(".health__image, .routine__images, .follow__img-3", {
    origin: "left",
});
sr.reveal(".health__data, .routine__data, .follow__img-4", { origin: "right" });
sr.reveal(".follow__data, .follow__content-1 img", { interval: 100 });
