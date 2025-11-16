


/////////////////////////// منو همبرگری در موبایل/////////////////////

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-[550px]');
    menuBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
  } else {
    mobileMenu.classList.add('max-h-0');
    mobileMenu.classList.remove('max-h-[550px]');
    menuBtn.innerHTML = '<i class="bi bi-list"></i>';
  }
});

////////////////////////////////// ورود صفحه اول هنگام لود سایت/////////////////////////////////// 

window.addEventListener('load', () => {

  const promoBar = document.getElementById('promo-bar');
  promoBar.style.animation = "slideBounceRight 1.2s ease-out forwards";
  promoBar.style.opacity = "1";

  setTimeout(() => {
    const heroImg = document.getElementById('hero-img');
    heroImg.style.animation = "slideSmoothLeft 1.2s ease-out forwards";
    heroImg.style.opacity = "1";
  }, 350);
});


///////////////////////////////////////جابجایی متن داخل سکشن ها/////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".scroll-container");

  containers.forEach(div => {
    div.dataset.offset = 0;
    div.dataset.lastScroll = window.scrollY;
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    containers.forEach(div => {
      const scrollDelta = scrollY - parseFloat(div.dataset.lastScroll);
      const currentY = parseFloat(div.dataset.offset || 0);

      const newY = currentY - scrollDelta * 0.05;

      div.style.transform = `translateY(${newY}px)`;
      div.dataset.offset = newY;
      div.dataset.lastScroll = scrollY;
    });
  });
});



////////////////////////////////////////////کارت ها/////////////////////////////////

const cards = document.querySelectorAll('.sec2 .w-full.md\\:w-1\\/3');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200);
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => {
  card.classList.add('card-anim');
  observer.observe(card);
});

/////////////////////////////////////ورود کارت ها در sec3///////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll('.sec3 .card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 250);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));

});

