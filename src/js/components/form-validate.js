const formCheckLabel = document.querySelector(".form-field");
const formCheckbox = document.querySelector(".form-field");
const formBtnSubmit = document.querySelector(".form__btn");

const modalFormValidate = document.querySelector(".modal-form__form");
const mainFormValidate = document.querySelector(".main-form");

if (formCheckbox) {
  formBtnSubmit.classList.add("btn-disabled");
  formCheckLabel.addEventListener("click", (e) => {
    if (e.target.classList.contains("form-field")) {
      if (formCheckbox.checked) {
        formBtnSubmit.classList.remove("btn-disabled");
      } else {
        formBtnSubmit.classList.add("btn-disabled");
      }
    }
  });
}

if (document.body.contains(document.querySelector('input[type="tel"]'))) {
  let styles = getComputedStyle(document.documentElement);

  let selector = document.querySelector('input[type="tel"]');
  let im = new Inputmask("+7 (999) 999-9999");
  im.mask(selector);

  let validateForms = function (selector, rules, messages, successModal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: messages,
      colorWrong: "#ff6972",

      submitHandler: function (form, values, ajax) {
        let formData = new FormData(form);

        fetch("mail.php", {
          method: "POST",
          body: formData,
        }).then(function (data) {
          thanksPopup();

          form.reset();
        });
      },
    });
  };
  if (modalFormValidate) {
    validateForms(
      ".modal-form__form",
      {
        name: { required: true, minLenght: 2 },
        phone: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          },
        },
        email: { required: true, email: true },
      },
      {
        name: {
          required: "Вы должны ввести имя",
          minLenght: "Ваше имя должно содержать больше 2 символов",
        },
        phone: {
          required: "Вы должны ввести телефон",
          function: "Вы ввели не весь номер телефона",
        },
        email: {
          required: "Вы должны ввести email",
          email: "Вы должны ввести корректный email",
        },
      },
      ".thanks-popup"
    );
  }

  if (mainFormValidate) {
    validateForms(
      ".main-form",
      {
        name: { required: true, minLenght: 2 },
        phone: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          },
        },
        email: { required: true, email: true },
      },
      {
        name: {
          required: "Вы должны ввести имя",
          minLenght: "Ваше имя должно содержать больше 2 символов",
        },
        phone: {
          required: "Вы должны ввести телефон",
          function: "Вы ввели не весь номер телефона",
        },
        email: {
          required: "Вы должны ввести email",
          email: "Вы должны ввести корректный email",
        },
      },
      ".main-popup"
    );
  }
}

let flag = false;

const fadeIn = (el, timeout, display) => {
 el.style.opacity = 0;
 el.style.display = display || 'block';
 el.style.transition = `opacity ${timeout}ms`;

 setTimeout(() => {
   el.style.opacity = 1;
 }, 10)
}

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout)
 }

function thanksPopup() {
  if (modalFormValidate) {
    let popup = document.querySelector('.thanks-popup');
    let modalContent = document.querySelector('.modal-form__form');

    fadeIn(popup, 2000, 'flex');
    modalContent.style.display = 'none';
  }
  if (mainFormValidate) {
    let popup = document.querySelector('.main-popup');
    fadeIn(popup, 2000, 'flex');

    setTimeout(() => {
      fadeOut(popup, 2000)
    }, 2000);
  }
}
