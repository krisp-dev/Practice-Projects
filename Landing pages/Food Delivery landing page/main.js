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

/*=============== DARK THEME SWITCHER ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previously selected theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Get current theme by validating the dark-theme class
const getCurrentTheme = () =>
   document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
   themeButton.classList.contains(iconTheme)
      ? "bx-toggle-left"
      : "bx-toggle-right";

// Check if theme has been already selected
if (selectedTheme) {
   // Check if theme was activated or de-activated
   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
   );
   themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
      iconTheme
   );
}

// Toggle the theme using toggle button
themeButton.addEventListener("click", () => {
   // Toggle theme & icon
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);
   // Save theme & icon to local storage
   localStorage.setItem("selected-theme", getCurrentTheme());
   localStorage.setItem("selected-icon", getCurrentIcon());
});
