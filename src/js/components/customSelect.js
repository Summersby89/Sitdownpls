const element = document.querySelector('.header__select');
const choices = new Choices(element, {
  searchEnabled: false,
  position: 'bottom',
  itemSelectText: ''

});


const categorySelect = () => {
	const formElement = document.querySelector('.header__form-select');
	const formChoices = new Choices(formElement, {
		searchEnabled: false,
		// placeholder: true,
    itemSelectText: ''
	});

	let ariaLabel = element.getAttribute('aria-label');
	element.closest('.choices').setAttribute('aria-label', ariaLabel);

};
categorySelect();
