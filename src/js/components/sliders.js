// slider hero
const heroSlider = new Swiper('.hero__slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function () {
      return `
      <span class="swiper-pagination-bullet" aria-label="следующий слайд">
        <svg class="pagination-progress" viewbox="-2 -2 20 20">
          <circle class="pagination-progress__background" r="7" cx="7" cy="7" fill="none" />
          <circle class="pagination-progress__circle" r="7" cx="7" cy="7" fill="none"/>
         </svg>
      </span>
		`;
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // autoplay: {
  //   delay: 3200,
  //   disableOnInteraction: false,
  // },
  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  }
});

// slider specials

const specialsSlider = new Swiper('.specials__slider', {
  spaceBetween: 32,

  navigation: {
    nextEl: '.specials__slider-btn-next',
    prevEl: '.specials__slider-btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    1320: {
      slidesPerView: 'auto',
      freeMode: false,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    714: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});


// slider useful

const usefulSlider = new Swiper('.useful__slider', {
  slidesPerView: 2,
  spaceBetween: 32,
  navigation: {
    nextEl: '.useful__btn-next',
    prevEl: '.useful__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    1025: {
      slidesPerView: 2,
    },
    880: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

// slider similar products

const similarSlider = new Swiper('.similar-products__slider', {
  slidesPerView: 2,
  spaceBetween: 32,
  navigation: {
    nextEl: '.similar-products__btn-next',
    prevEl: '.similar-products__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    520: {
      spaceBetween: 26,
      slidesPerView: 2,
    },
    320: {
      spaceBetween: 21,
      slidesPerView: 2,
    }
  },
});

// slider card-main

const cardSliderNav = new Swiper('.card-page__slider-nav', {
  freeMode: true,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    890: {
      spaceBetween: 20,
      slidesPerView: 'auto',
    },
    695: {
      slidesPerView: 'auto',
      direction: 'vertical',
      spaceBetween: 20,
    },
    320: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  }
});

const cardSliderMain = new Swiper('.card-page__slider-main', {
  slidesPerView: 1,
  initialSlide: 4,
  spaceBetween: 10,
  mousewheel: true,
  grabCursor: true,
  thumbs: {
    swiper: cardSliderNav,
  },
});
