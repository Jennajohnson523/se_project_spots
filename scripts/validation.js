console.log("yes it works");
const settings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__submit",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  }
const showInputError = (formEl, inputEl, errorMessage) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add("modal__input-error_active");
    errorEl.textContent = errorMessage;
    errorEl.classList.add("modal__error");
}
const hideInputError = (formEl, inputEl) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove("modal__input-error_active");
    errorEl.classList.remove("modal__error");
    errorEl.textContent = "";
  };
  
  const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
      showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
      hideInputError(formEl, inputEl);
    }
  };
  

  const hasInvalidInput = (inputList) => {
    return inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  };
  
  const toggleButtonState = (inputList, buttonEl) => {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonEl);
    } else {
        buttonEl.disabled = false
      buttonEl.classList.remove("button_inactive");
    }
  };

const disableButton = (buttonEl) => {
    buttonEl.disabled = true;
    buttonEl.classList.add("button_inactive");
};

const resetValidation = (formEl, inputList) => {
    inputList.forEach((input) => {
        hideInputError(formEl, input);
    });
};

const setEventListeners = (formEl, config) => {
    const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
    const buttonEl = formEl.querySelector(config.submitButtonSelector);
   
    toggleButtonState(inputList, buttonEl);
    
    inputList.forEach((inputEl) => {
      inputEl.addEventListener("input", function () {
        checkInputValidity(formEl, inputEl);
        toggleButtonState(inputList, buttonEl);
      });
    });
};
   
const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach((formEl) => {
        setEventListeners(formEl, config);
    });
};


enableValidation(settings);
    //settings);