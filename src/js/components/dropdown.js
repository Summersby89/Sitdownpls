const dropdownBtn = document.querySelectorAll('.catalog__mobile-filters-btn');
dropdownBtn.forEach((el, i) => {
  el.addEventListener("click", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    fnCloseAllDropdown(ev.target.nextElementSibling);
    ev.target.nextElementSibling.classList.toggle("catalog__mobile-dropdown-list-visible");
    dropdownBtn[i].classList.toggle("catalog__mobile-filters-btn-active");
  });
});

document.addEventListener("click", (ev) => {
  if (ev.target.closest(".catalog__dropdown-list-visible")) return;
  ev.stopPropagation();
  fnCloseAllDropdown();
});

function fnCloseAllDropdown(obj) {
  document.querySelectorAll(".catalog__mobile-dropdown-list").forEach((el, i) => {
    if (el != obj) {
      el.classList.remove("catalog__dropdown-list-visible");
      dropdownBtn[i].classList.remove("catalog__mobile-filters-btn-active");
    }
  });
}
