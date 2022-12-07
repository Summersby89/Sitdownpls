
const modal = new Modal({
  isOpen: (modal) => {
    if (modal.modalContainer.classList.contains('modal-form')) {
      let popup = document.querySelector('.thanks-popup');
      let modalContent = document.querySelector('.modal-form__form');

      modalContent.style.display = 'block';
      popup.style.display = 'none';
    }

    if (modal.modalContainer.classList.contains('modal-gallery')) {
      const sliderThumbs = new Swiper('.modal__thumbs-slider', {
        slideClass: 'modal__thumbs-slide',
        spaceBetween: 10,
        direction: 'horizontal',
        navigation: {
          nextEl: '.modal__thumbs-btn-next',
          prevEl: '.modal__thumbs-btn-prev',
        },
        freeMode: true,
        breakpoints: {
          1440: {
            slidesPerView: 4,
          },
          1320: {
            slidesPerView: 4,
            spaceBetween: 78
          },
          595: {
            slidesPerView: 2,
            spaceBetween: 78
          },
          320: {
            slidesPerView: 1,
          }
        }
      });

      const sliderImages = new Swiper('.modal__slider', {
        slideClass: 'modal__slider-item',
        slidesPerView: 1,
        initialSlide: 4,
        spaceBetween: 10,
        mousewheel: true,
        navigation: {
          nextEl: '.modal__thumbs-btn-next',
          prevEl: '.modal__thumbs-btn-prev',
        },
        grabCursor: true,
        thumbs: {
          swiper: sliderThumbs
        },
      });
    }
  },
  isClose: () => { }
});
