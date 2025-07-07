
document.addEventListener("DOMContentLoaded", function () {
  // === Header Slider Logic ===
  const slider = document.querySelector('.slider .list');
  const items = document.querySelectorAll('.slider .list .item');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const dots = document.querySelectorAll('.slider .dots li');

  if (slider && items.length > 0 && next && prev && dots.length > 0) {
    let lengthItems = items.length - 1;
    let active = 0;

    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';
      document.querySelector('.slider .dots li.active')?.classList.remove('active');
      dots[active].classList.add('active');
      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => next.click(), 3000);
    }

    next.onclick = () => {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
    };

    prev.onclick = () => {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
    };

    let refreshInterval = setInterval(() => next.click(), 3000);

    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
      });
    });

    window.addEventListener('resize', reloadSlider);
  }

  // === Testimonial Swiper Slider Logic ===
  if (document.querySelector('.card-wrapper')) {
    new Swiper('.card-wrapper', {
      loop: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  // === Header Search Toggle ===
  const searchBox = document.querySelector('.search-box');
  const searchIcon = searchBox?.querySelector('i');

  if (searchIcon && searchBox) {
    searchIcon.addEventListener('click', () => {
      searchBox.classList.toggle('active');
    });
  }
});
