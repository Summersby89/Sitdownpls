const formCheckLabel = document.querySelector('.form-checkbox');
const formCheckbox = document.querySelector('.form-field');
const formBtnSubmit = document.querySelector('.form-btn');


if (formCheckLabel) {
  formCheckLabel.addEventListener('click', (e) => {
    if (e.target.classList.contains('form-field')) {
      if (formCheckbox.checked) {
        formBtnSubmit.classList.remove('btn-disabled');
      } else {
        formBtnSubmit.classList.add('btn-disabled');
      }
    }
  });
}
