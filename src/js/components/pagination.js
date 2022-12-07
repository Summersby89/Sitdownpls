if (document.querySelector('.catalog')) {
  createPagination();
}

function createPagination() {
  let paginationCount = 18;
  let quantityPag = "";

  if (document.documentElement.clientWidth < 1024) {
    quantityPag = 6;
  } else {
    quantityPag = 9;
  }

  let calcPage = Math.ceil(paginationCount / quantityPag);

  let pagination = document.querySelector(".pagination");
  let pageItem = "";
  for (let i = 0; i < calcPage; i++) {
    pageItem += `
      <li class="pagination__item">
        <a data-page="${i * quantityPag}"  id="page${i + 1}" href="#" class="pagination__link pagination__link">${i + 1}</a>
      </li>
    `;
  }
  pagination.innerHTML = pageItem;

  let catalogCard = document.querySelectorAll(".catalog__content-list-item");
  for (let i = 0; i < catalogCard.length; i++) {
    if (i < quantityPag) {
      catalogCard[i].style.display = "block";
    }
  }

  let currentPage = document.getElementById("page1");
  currentPage.classList.add("pagination__link--current");

  pagination.addEventListener('click', function (event) {
    event.preventDefault()
    let e = event || window.event;
    let target = e.target;
    let targetId = target.id;
    let dataPage = +target.dataset.page;
    currentPage.classList.remove("pagination__link--current");
    currentPage = document.getElementById(targetId);
    currentPage.classList.add("pagination__link--current");

    let cardToShow = 0;
    for (let i = 0; i < catalogCard.length; i++) {
      let dataCard = catalogCard[i].dataset.num;
      if (dataCard <= dataPage || dataCard >= dataPage)
        catalogCard[i].style.display = "none";
    }
    for (let i = dataPage; i < catalogCard.length; i++) {
      if (cardToShow >= quantityPag) break;
      catalogCard[i].style.display = "block";
      cardToShow++;
    }
  })
}
