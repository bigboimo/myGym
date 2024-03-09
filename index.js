const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(item => {
              if(item.id === 'signup') {
                  // Populate signup data
                  const signupHeader = document.querySelector('#signup-header');
                  const signupDescription = document.querySelector('#signup-description');
                  const signupImage = document.querySelector('#signup-image');

                  if(signupHeader && signupDescription && signupImage) {
                      signupHeader.textContent = item.header;
                      signupDescription.textContent = item.description;
                      signupImage.src = item.image;
                  }
              }

              if(item.id === 'contact') {
                  // Populate contact data
                  const contactHeader = document.querySelector('#contact-header');
                  const contactDescription = document.querySelector('#contact-description');
                  const contactImage = document.querySelector('#contact-image');

                  if(contactHeader && contactDescription && contactImage) {
                      contactHeader.textContent = item.header;
                      contactDescription.textContent = item.description;
                      contactImage.src = item.image;
                  }
              }
          });
      });
});