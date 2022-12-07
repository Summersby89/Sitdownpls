let rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [225000]
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];
  const connect = document.querySelector('.noUi-connect');

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  rangeSlider.noUiSlider.on('slide', function () {
    connect.style.background = '#7033ac';
  });

  rangeSlider.noUiSlider.on('end', function () {
    connect.style.background = '#a65cf0';
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });

  function createRangeChoiceItem(item) {
    let text = "До " + item.value;
    let dataColor = item.getAttribute('data-color');
    document.querySelector('.catalog-choice__list').insertAdjacentHTML('beforeend', createChoiceItem(text, dataColor));
  }

  rangeSlider.noUiSlider.on('change', function () {
    createRangeChoiceItem(input1);
  });

  input1.addEventListener('change', function (el) {
    createRangeChoiceItem(input1);
  })
}
