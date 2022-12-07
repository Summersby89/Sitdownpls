const sectionPopular = document.querySelector('.popular');

if (sectionPopular) {
  const popularList = document.querySelector('.popular__list');
  const popularBtnMore = document.querySelector('.popular__more-btn');
  let maxItems;

  if (window.innerWidth > 1025) {
    maxItems = 8;
  } else {
    maxItems = 6;
  }

  const showMorePopular = () => {
    let popularItemsLenght = popularList.children.length;
    if (popularItemsLenght > maxItems) {
      document.querySelectorAll(`.popular__list-item:nth-child(n+${maxItems + 1})`).forEach(el => { el.style.display = 'none'; });
    }

    popularBtnMore.addEventListener('click', () => {
      document.querySelectorAll('.popular__list-item').forEach(el => {
        el.style.display = 'block';
      });
      popularBtnMore.style.display = 'none';
    });
  };

  showMorePopular();
};
