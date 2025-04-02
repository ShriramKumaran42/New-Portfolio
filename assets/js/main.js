/* =====================================================
   Resume section tabs and tab contents
===================================================== */

const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function (resumeTabClick) {
   resumeTabContents.forEach((resumeTabContent) => {
   resumeTabContent.style.display = "none";
   resumeTabContent.classList.remove("active");   
   });

   resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
      resumePortfolioTabBtn.classList.remove("active");
   });

   resumeTabContents[resumeTabClick].style.display = "flex";

   setTimeout(() => {
      resumeTabContents[resumeTabClick].classList.add("active");
   }, 100);

   resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
   resumePortfolioTabBtn.addEventListener("click", () => {
      resumeTabNav(i);
   });
});

/* =====================================================
   Skills section tabs and tab contents
===================================================== */

const skillsTabs = document.querySelector(".skills-tabs");
const skillsPortfolioTabBtns = skillsTabs.querySelectorAll(".tabs-btns");
const skillsTabContents = document.querySelectorAll(".skills-tab-content");

var skillsTabNav = function (skillsTabClick) {
   skillsTabContents.forEach((skillsTabContent) => {
   skillsTabContent.style.display = "none";
   skillsTabContent.classList.remove("active");   
   });

   skillsPortfolioTabBtns.forEach((skillsPortfolioTabBtn) => {
      skillsPortfolioTabBtn.classList.remove("active");
   });

   skillsTabContents[skillsTabClick].style.display = "flex";

   setTimeout(() => {
      skillsTabContents[skillsTabClick].classList.add("active");
   }, 100);

   skillsPortfolioTabBtns[skillsTabClick].classList.add("active");
}

skillsPortfolioTabBtns.forEach((skillsPortfolioTabBtn, i) => {
   skillsPortfolioTabBtn.addEventListener("click", () => {
      skillsTabNav(i);
   });
});

/* =====================================================
   Service modal open/close function
===================================================== */

const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
   const serviceCard = serviceCardWithModal.querySelector(".service-card");
   const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
   const serviceModal = serviceCardWithModal.querySelector(".service-modal");
   const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

   serviceCard.addEventListener("click", () => {
      serviceBackDrop.style.display = "flex";

      setTimeout(() => {
         serviceBackDrop.classList.add("active");
      }, 100);

      setTimeout(() => {
         serviceModal.classList.add("active");
      }, 300);

   })

   modalCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         serviceBackDrop.classList.remove("active");
         serviceModal.classList.remove("active");
      }, 100);
   });
});

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");
   const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
   const cardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

   portfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardWithModals.forEach((cardWithModal) => {
            if (filter === "all" || cardWithModal.classList.contains(filter)) {
               cardWithModal.classList.remove("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
            else {
               cardWithModal.classList.add("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
         });
         // Add active class to the clicked tab btn.
         portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
         tabBtn.classList.add("active")
      });
   });
});


// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardsWithModal) => {
   const portfolioCard = portfolioCardsWithModal.querySelector(".portfolio-card");
   const portfolioBackdrop = portfolioCardsWithModal.querySelector(".portfolio-modal-backdrop");
   const modalCloseBtn = portfolioCardsWithModal.querySelector(".modal-close-btn");
   const portfolioModal = portfolioCardsWithModal.querySelector(".portfolio-modal");

   portfolioCard.addEventListener("click", () => {
      portfolioBackdrop.style.display = "flex";

      setTimeout(() => {
         portfolioBackdrop.classList.add("active");
      }, 300)

      setTimeout(() => {
         portfolioModal.classList.add("active");
      }, 300)
   })

   modalCloseBtn.addEventListener("click", () => {
      
      setTimeout(() => {
         portfolioBackdrop.style.display = "none";
      }, 500);
      
      setTimeout(() => {
         portfolioBackdrop.classList.remove("active");
         portfolioModal.classList.remove("active");
      }, 100);
   });
});




/* =====================================================
   Testimonial Swiper
===================================================== */

var swiper = new Swiper(".shri-client-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
   

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

(function() {
   // https://dashboard.emailjs.com/admin/account
   emailjs.init({
      publicKey: "Y9_E5_0ysN3EEAIjw",
   });
})();

shriContactForm = document.getElementById("shri-contact-form");
shriContactFormAlert = document.querySelector(".contact-form-alert");

shriContactForm.addEventListener('submit', function(event) {
   event.preventDefault();
   // these IDs from the previous steps
   emailjs.sendForm('service_nvqtlmo', 'template_zpa2au2', '#shri-contact-form')
      .then(() => {
         // console.log('SUCCESS!');
         shriContactFormAlert.innerHTML = "<span>Your Message sent successfully</span> <i class='ri-thumb-up-fill'></i>";
         shriContactForm.reset();

         setTimeout(() => {
            shriContactFormAlert.innerHTML = "";
         }, 5000)
      }, (error) => {
         // console.log('FAILED...', error);
         shriContactFormAlert.innerHTML = "<span>Message not sent</span> <i class='ri-thumb-down-fill'></i>";
         shriContactFormAlert.title = error;
      });
});



/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
   const subHeader = document.querySelector(".shri-header");

   subHeader.classList.toggle("shrink", window.scrollY > 0);
})

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;

   navMenuSections.forEach((navMenuSection) => {
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop = navMenuSection.offsetTop - 50;
      let id = navMenuSection.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
      } else {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
      }
   })
})

// Javascript to show bottom navigation menu on home(page load).

window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom-nav");

   bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");
   menuShowBtn.classList.remove("active");

   if (window.scrollY < 10) {
      menuHideBtn.classList.remove("active");

      function scrollStopped() {
         bottomNav.classList.add("active");
      }
      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }

   if (window.scrollY > 10) {
      menuHideBtn.classList.add("active");

      function scrollStopped() {
         bottomNav.classList.remove("active");
         menuShowBtn.classList.add("active");
      }
      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }
})


// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.toggle("active");
   menuShowBtn.classList.toggle("active");
})

// Show bottom navigation menu on click menu-show-btn.

menuShowBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.add("active");
   menuShowBtn.classList.toggle("active");
})



/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */
window.addEventListener("scroll", () => {
   const toTopBtn = document.querySelector(".to-top-btn");

   toTopBtn.classList.toggle("active", window.scrollY > 0);

   //Scroll bar
   const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

   const paperScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   const scrollValue = (paperScroll / height) * 100;

   scrollIndicatorBar.style.height = scrollValue + "%";
});


/* =====================================================
   Customized cursor on mousemove
===================================================== */

const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;


   cursorDot.style.top = y + "px";
   cursorDot.style.left = x + "px";
   cursorCircle.style.top = y + "px";
   cursorCircle.style.left = x + "px";
})

// Cursor effects on hover website elements.
const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, .shri-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn");


cursorHoverlinks.forEach((cursorHoverlink) => {
   cursorHoverlink.addEventListener("mouseover", () => {
      cursorDot.classList.add("large");
      cursorCircle.style.display = "none";
   })
})

cursorHoverlinks.forEach((cursorHoverlink) => {
   cursorHoverlink.addEventListener("mouseout", () => {
      cursorDot.classList.remove("large");
      cursorCircle.style.display = "block";
   })
})


/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

   themeBtn.classList.toggle("active-bulb-icon");
   document.body.classList.toggle("light-theme");

   const getCurrentIcon = () => themeBtn.classList.contains("active-bulb-icon") ? "on" : "off";
   const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark"

   localStorage.setItem("shri-saved-icon", getCurrentIcon());
   localStorage.setItem("shri-saved-theme", getCurrentTheme());
})

// Get saved theme icon and theme on document loaded.
const savedIcon = localStorage.getItem("shri-saved-icon");
const savedTheme = localStorage.getItem("shri-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "on" ? "add" : "remove"]("active-bulb-icon");
   document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
})



/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.
ScrollReveal({
   // reset: true,
   distance: '60px',
   duration: 2500,
   delay: 400
});

// Target elements and specify options to create reveal animations.
ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn, .copy-right', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.about-info, .shri-footer .shri-logo', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.pro-card, .about-button, .shri-main-btn, .resume-tabs, .tab-btn', { delay: 500, origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.portfolio-tabs .tab-btn', { delay: 300, origin: 'left', interval: 300 });
ScrollReveal().reveal('.resume-tabs, .tab-btn', { delay: 500, origin: 'left', interval: 700 });
ScrollReveal().reveal('#resume .section-content', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.skills-tabs, .tabs-btns', { delay: 300, origin: 'left', interval: 500 });
ScrollReveal().reveal('#skills .section-content', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.service-card, .portfolio-card, .contact-item, .contact-social-links li, .footer-menu .menu-item', { delay: 300, origin: 'bottom', interval: 300 });
ScrollReveal().reveal('shri-client-swiper, .contact-form-body', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.contact-info h3', { delay: 100, origin: 'bottom', interval: 300});

