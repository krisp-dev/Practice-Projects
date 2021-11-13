/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

   // Validate that variables exist
   if (toggle && nav) {
      toggle.addEventListener("click", () => {
         // Add 'show-menu' class to the 'nav__menu' div tag
         nav.classList.toggle("show-menu");
      });
   }
};
showMenu("nav-toggle", "nav-menu");

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = function () {
   const navMenu = document.getElementById("nav-menu");
   // Clicking on each 'nav__link', removes the 'show-menu' class
   navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = function () {
   const scrollY = window.scrollY;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 50,
         sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.add("active-link");
      } else {
         document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.remove("active-link");
      }
   });
};

window.addEventListener("scroll", scrollActive);

/*=============== ADD SHADOW TO HEADER NAV ===============*/
const scrollHeader = function () {
   const header = document.getElementById("header");
   // If scroll >= 80vh, add the scroll-header class
   this.scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const showScrollUp = function () {
   const scrollUp = document.getElementById("scrollUp");
   // If scroll >= 500vh, add the show-scroll class
   this.scrollY >= 500
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", showScrollUp);

/*=============== DARK LIGHT THEME ===============*/
