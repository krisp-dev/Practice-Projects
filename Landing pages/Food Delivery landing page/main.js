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

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/
