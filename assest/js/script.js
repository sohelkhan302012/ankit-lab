window.addEventListener('load', function () {
  let loader = document.querySelector('.preloader');

  loader.style.opacity = '0';
  loader.style.transition = '0.5s';

  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
  initFadeAnimations();
  initCounters();
  //   initSearchSuggestions();
  //   updateCartBadge();
  //   updateAuthUI();
  //   renderCartItems();
});

// --------------
// ===== MOBILE MENU =====
function openMobileMenu() {
  document.getElementById('mobileMenu')?.classList.add('open');
  document.getElementById('mobileMenuOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('mobileMenuOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', () => {
  // Overlay close
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document
    .getElementById('mobileMenuOverlay')
    ?.addEventListener('click', closeMobileMenu);

  // Gallery lightbox close on click outside
  document
    .getElementById('galleryLightbox')
    ?.addEventListener('click', function (e) {
      if (e.target === this) closeLightbox();
    });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 2000) {
  let start = 0,
    step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    el.textContent = Math.min(Math.round(start), target).toLocaleString(
      'en-IN',
    );
    if (start >= target) clearInterval(timer);
  }, 16);
}

function initCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !e.target.dataset.counted) {
          e.target.dataset.counted = '1';
          animateCounter(e.target, parseInt(e.target.dataset.target));
        }
      });
    },
    { threshold: 0.5 },
  );
  document
    .querySelectorAll('[data-target]')
    .forEach((el) => observer.observe(el));
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
  }
});

// ===== SCROLL TO TOP =====
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FADE IN ON SCROLL =====
function initFadeAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  );
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}
// function initSearchSuggestions() {
//   document.querySelectorAll('.hero-search-input').forEach(input => {
//     const wrapper = input.closest('.hero-search-wrapper');
//     const suggestions = wrapper?.querySelector('.search-suggestions');
//     if (!suggestions) return;
//     input.addEventListener('input', () => {
//       const q = input.value.trim().toLowerCase();
//       if (q.length < 2) { suggestions.classList.remove('show'); return; }
//       const results = allTests.filter(t => t.name.toLowerCase().includes(q)).slice(0, 6);
//       if (!results.length) { suggestions.classList.remove('show'); return; }
//       suggestions.innerHTML = results.map(t => `
//         <div class="suggestion-item" onclick="addToCart('${t.name}', ${t.price}, '${t.icon}'); this.closest('.search-suggestions').classList.remove('show')">
//           <i class="fas fa-flask"></i>
//           <span>${t.name}</span>
//           <small>${t.cat} • ₹${t.price}</small>
//         </div>`).join('');
//       suggestions.classList.add('show');
//     });
//     document.addEventListener('click', e => { if (!wrapper?.contains(e.target)) suggestions.classList.remove('show'); });
//   });
// }
// function updateCartBadge() {
//   const badges = document.querySelectorAll('.cart-badge');
//   const count = cart.length;
//   badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'flex' : 'none'; });
// }

// ------------ slide ----------
var swiper = new Swiper('.myBanner', {
  loop: true,
    autoplay: {
      delay: 3000,
    },
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.testSwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper2 = new Swiper('.packageSwiper', {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.packageSwiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
});

var swiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

//   <!-- ===== JS ===== -->
// Tab switching
document.querySelectorAll('.body-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.body-tab')
      .forEach((t) => t.classList.remove('active'));
    document
      .querySelectorAll('.test-panel')
      .forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    const part = tab.dataset.part;
    document
      .querySelector(`.test-panel[data-panel="${part}"]`)
      .classList.add('active');
    // Close all accordions when switching tabs
    document
      .querySelectorAll('.accordion-test-item')
      .forEach((i) => i.classList.remove('open'));
  });
});

// Accordion toggle
function toggleAccordion(header) {
  const item = header.closest('.accordion-test-item');
  const isOpen = item.classList.contains('open');
  // Close all in same panel
  const panel = item.closest('.accordion-tests');
  panel
    .querySelectorAll('.accordion-test-item')
    .forEach((i) => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
