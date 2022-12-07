if (document.querySelector('.catalog')) {
  const catalogFilterCaption = document.querySelectorAll('.catalog__values-subheading');
  const catalogFilterItem = document.querySelectorAll('.catalog__filters-item');
  const catalogChoice = document.querySelector('.catalog__choice-list');
  const filtersSubtitle = document.querySelector('.catalog__filters-subheading');
  const filterBtnMore = document.querySelectorAll('.catalog__filters-btn');
  let quantity = 9;

  filterBtnMore.forEach(el => {
    let bntParent = el.closest('.catalog__values');
    let siblingsItem = bntParent.querySelectorAll('.catalog__filters-item');
    let hiddenItemsCount = parseInt(siblingsItem.length - quantity);

    el.textContent = "";
    el.textContent = "+ ещё " + hiddenItemsCount;

    el.addEventListener('click', (e) => {
      el.classList.toggle('catalog__filters-btn--open');

      if (el.classList.contains('catalog__filters-btn--open')) {
        el.textContent = "";
        el.textContent = "Скрыть";

        siblingsItem.forEach(el => {
          el.style.display = 'block';
        })
      } else {
        el.textContent = "";
        el.textContent = "+ ещё " + hiddenItemsCount;
        document.querySelectorAll(`.catalog__filters-item:nth-child(n+${quantity + 1})`).forEach(el => { el.style.display = 'none'; });
      }
    });

  })

  if (document.documentElement.clientWidth < 1025) {
    filtersSubtitle.textContent = "";
    filtersSubtitle.textContent = "Фильтры";

    catalogFilterCaption.forEach(el => {
      el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('catalog__values-subheading--open');
        e.currentTarget.closest('.catalog__values').classList.toggle('catalog__values--open');
      });
    })
  }

  const createChoiceItem = (text, dataColor) => {
    return (
      `
      <button style="background: ${dataColor}" class="btn-reset catalog__choice-item" data-choice-text="${text}">${text}<svg aria-hidden="true">
          <use xlink:href="img/sprite.svg#svg--close-choice"></use>
        </svg>
      </button>
    `
    );
  };

  catalogFilterItem.forEach(el => {
    el.querySelector('input').addEventListener('change', () => {
      let checked = el.querySelector('input').checked;

      if (checked) {
        el.querySelector('.catalog__filters-label').classList.add('custom-checkbox--active');
        let text = el.querySelector('.catalog__custom-checkbox-content').textContent;
        let dataColor = el.querySelector('.catalog__filters-label').getAttribute('data-color')

        document.querySelector('.catalog__choice-list').insertAdjacentHTML('beforeend', createChoiceItem(text, dataColor));
      } else {
        el.querySelector('.catalog__filters-label').classList.remove('custom-checkbox--active');
        let text = el.querySelector('.catalog__filters-label').dataset.text;

        document.querySelector(`[data-choice-text="${text}"]`).remove();
      }
    });
  });

  catalogChoice.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog__choice-item')) {
      e.target.remove();
      let text = e.target.textContent.trimLeft().trimRight();

      if (document.querySelector(`[data-text="${text}"]`)) {
        document.querySelector(`[data-text="${text}"]`).querySelector('input').checked = false;
        document.querySelector(`[data-text="${text}"]`).classList.remove('custom-checkbox--active');
      }
    }
  });
}



